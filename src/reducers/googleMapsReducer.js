import omit from 'object.omit'

import constants from '@/constants'

const initTrackingRouteState = {
    trackingRoutes: {}
};

export function trackingRouteReducer(state = initTrackingRouteState, action) {
    switch (action.type) {
        case constants.GET_TRACKING_ROUTE_REQUEST:
            return {
                ...state,
                trackingRoutes: {
                    ...state.trackingRoutes,
                    [action.orderId]: {
                        loaded: false
                    }
                }
            };
        case constants.GET_TRACKING_ROUTE_SUCCESS:
            return {
                ...state,
                trackingRoutes: {
                    ...state.trackingRoutes,
                    [action.orderId]: {
                        ...omit(state.trackingRoutes[action.orderId], 'error'),
                        res: action.res,
                        loaded: true
                    }
                }
            };
        case constants.GET_TRACKING_ROUTE_ERROR:
            return {
                ...state,
                trackingRoutes: {
                    ...state.trackingRoutes,
                    [action.orderId]: {
                        ...omit(state.trackingRoutes[action.orderId], 'res'),
                        error: action.error,
                        loaded: true
                    }
                }
            };
        case constants.RESET_TRACKING_ROUTE:
            return {
                ...state,
                trackingRoutes: {...omit(state.trackingRoutes, `${action.orderId}`)}
            };
        default:
            return state;
    }
}
