import constants from '@/constants'
import {getRoute, getCurrent, getStart, getEnd, findIndexInPath} from "@/util/googleMaps";

export const getTrackingRoute = (payload) => {
    const {orderId, origin, destination} = payload;
    return async (dispatch, getState) => {
        const {trackingOrderShown} = getState().viewReducer;
        const {route_id} = trackingOrderShown;
        const start = getStart(trackingOrderShown);
        const end = getEnd(trackingOrderShown);
        const current = getCurrent(trackingOrderShown);

        dispatch({
            type: constants.GET_TRACKING_ROUTE_REQUEST,
            orderId,
        });
        getRoute({origin, destination, provideRouteAlternatives: true})
            .then(res => {
                const trackingRoutesAll = res.routes;
                const trackingRoutesSelected = (!!route_id && trackingRoutesAll[route_id]) || trackingRoutesAll[0];

                const {distance, duration} = trackingRoutesSelected.legs[0];

                const path = trackingRoutesSelected.legs[0].steps.reduce((res, current) => res.concat(current.path), [start]);
                path.push(end);

                const curStepNum = findIndexInPath(path, current);
                if (curStepNum !== undefined) {
                    var progress = (curStepNum + 1) / path.length;
                    if (curStepNum !== path.length - 1) {
                        var nextStepNum = curStepNum + 1
                    }
                }

                dispatch({
                    type: constants.GET_TRACKING_ROUTE_SUCCESS,
                    res: {
                        path,
                        curStepNum,
                        nextStepNum,
                        progress,
                        start,
                        end,
                        current,
                        distanceTotal: distance.value,
                        durationTotal: duration.value
                    },
                    orderId,
                });
            })
            .catch(error => {
                dispatch({
                    type: constants.GET_TRACKING_ROUTE_ERROR,
                    error,
                    orderId,
                });
            })
    }
};

export const resetTrackingRoute = payload => dispatch => {
    const {orderId} = payload;
    dispatch({
        type: constants.RESET_TRACKING_ROUTE,
        orderId
    })
};
