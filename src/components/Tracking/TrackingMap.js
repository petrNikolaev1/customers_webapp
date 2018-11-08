import React, {Component, Fragment} from 'react';
import {GoogleMap, Marker, Polyline} from "react-google-maps";
import connect from "react-redux/es/connect/connect";

import GoogleMapHoc from "@/hocs/GoogleMapHoc";
import '@/assets/styles/TrackingOrder.scss'
import translate from '@/hocs/Translate'
import CustomMarker from "@/common/CustomMarker";
import {selectedColor} from '@/util/rainbow'
import {rotationAngle} from "@/util/icons";

@connect(
    store => ({
        trackingRoutes: store.trackingRouteReducer.trackingRoutes
    }), {}
)
@translate('OrderItem')
@GoogleMapHoc('tracking-order-container-map')
export default class TrackingOrder extends Component {

    state = {
        markers: {
            origin: {
                infoWindowShown: false
            },
            destination: {
                infoWindowShown: false
            },
        }
    };

    onMarkerInfoWindowCloseClick = key => () => {
        this.setState({
            markers: {
                ...this.state.markers,
                [key]: {
                    ...this.state.markers[key],
                    infoWindowShown: false
                }
            }
        })
    };

    onMarkerClick = key => () => {
        const {markers} = this.state;
        const markersNew = Object.keys(markers).reduce((res, cur) => (cur === key ?
            res[cur] = {
                ...markers[cur],
                infoWindowShown: !markers[cur].infoWindowShown
            } :
            res[cur] = {
                ...markers[cur],
                infoWindowShown: false
            }, res), {});
        this.setState({
            markers: markersNew
        })
    };

    trackingRouteValid = (trackingRoutes) => {
        const proposedRoute = this.getTrackingRoute(trackingRoutes);
        return !!proposedRoute && proposedRoute.loaded && !!proposedRoute.res
    };

    getTrackingRoute = (trackingRoutes) => {
        return trackingRoutes[this.props.id]
    };

    render() {
        const {origin, destination, trackingRoutes,} = this.props;
        const {markers} = this.state;

        const {origin_full_address} = origin;
        const {destination_full_address} = destination;

        const trackingRouteValid = this.trackingRouteValid(trackingRoutes);

        if (trackingRouteValid) {
            var {path, curStepNum, nextStepNum, current, start, end} = this.getTrackingRoute(trackingRoutes).res;
        }

        return (
            <GoogleMap
                zoom={!!current ? 15 : 4}
                center={current || {lat: 0, lng: 0}}>

                {trackingRouteValid &&
                <Fragment>
                    <Polyline
                        path={path}
                        options={{
                            strokeColor: selectedColor,
                            strokeWeight: 6,
                        }}
                    />

                    <Marker
                        position={current}
                        options={{
                            icon: {
                                path: window.google.maps.SymbolPath.FORWARD_CLOSED_ARROW,
                                scale: 4,
                                fillColor: '#0b8592',
                                fillOpacity: 0.8,
                                strokeWeight: 2,
                                rotation: (curStepNum !== undefined && !!path[curStepNum] && nextStepNum !== undefined && !!path[nextStepNum]) ?
                                    rotationAngle(path[curStepNum], path[nextStepNum]) : 0
                            },
                        }}
                    />

                    <CustomMarker
                        {...markers.origin}
                        position={start}
                        label={'A'}
                        info={origin_full_address}
                        onMarkerClick={this.onMarkerClick('origin')}
                        onMarkerInfoWindowCloseClick={this.onMarkerInfoWindowCloseClick('origin')}
                    />

                    <CustomMarker
                        {...markers.destination}
                        position={end}
                        label={'B'}
                        info={destination_full_address}
                        onMarkerClick={this.onMarkerClick('destination')}
                        onMarkerInfoWindowCloseClick={this.onMarkerInfoWindowCloseClick('destination')}
                    />
                </Fragment>}

            </GoogleMap>
        )
    }
}





