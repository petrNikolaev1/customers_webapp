import React, {Component} from 'react'
import {Progress} from 'react-sweet-progress';
import connect from "react-redux/es/connect/connect";
import "react-sweet-progress/lib/style.css";

import '@/assets/styles/TrackingProgress.scss'
import {secondsToHours, metersToKm} from "@/util/units";

@connect(
    store => ({
        trackingRoutes: store.trackingRouteReducer.trackingRoutes
    }), {}
)
export default class DriverProgress extends Component {
    trackingRouteValid = (trackingRoutes) => {
        const proposedRoute = this.getTrackingRoute(trackingRoutes);
        return !!proposedRoute && proposedRoute.loaded && !!proposedRoute.res
    };

    getTrackingRoute = (trackingRoutes) => {
        return trackingRoutes[this.props.id]
    };

    render() {
        const {trackingRoutes} = this.props;
        const trackingRouteValid = this.trackingRouteValid(trackingRoutes);

        if (!trackingRouteValid) {
            return null;
        }

        const {progress, distanceTotal, durationTotal} = this.getTrackingRoute(trackingRoutes).res;

        const fractionPassed = progress;
        const fractionLeft = 1 - fractionPassed;

        const durationPassed = Math.round(fractionPassed * durationTotal);
        const durationPassedConverted = secondsToHours(durationPassed);
        const distancePassed = fractionPassed * distanceTotal;
        const distancePassedConverted = metersToKm(Math.round(fractionPassed * distanceTotal));

        const durationLeftConverted = secondsToHours(durationTotal - durationPassed);
        const distanceLeftConverted = metersToKm(distanceTotal - distancePassed);

        const percent = Math.floor(progress);

        return (
            <div className='driver-progress'>
                <div className='driver-progress-table'>
                    <div className='driver-progress-table-row'>
                        <div className='driver-progress-table-row-item'>
                            <div className='driver-progress-table-row-item-label'>
                                Estimated time left:
                            </div>
                            <div className='driver-progress-table-row-item-value'>
                                {durationLeftConverted[0]} hours {durationLeftConverted[1]} mins
                            </div>
                        </div>
                        <div className='driver-progress-table-row-item'>
                            <div className='driver-progress-table-row-item-label'>
                                Time taken:
                            </div>
                            <div className='driver-progress-table-row-item-value'>
                                {durationPassedConverted[0]} hours {durationPassedConverted[1]} mins
                            </div>
                        </div>
                    </div>
                    <div className='driver-progress-table-row'>
                        <div className='driver-progress-table-row-item'>
                            <div className='driver-progress-table-row-item-label'>
                                Distance left:
                            </div>
                            <div className='driver-progress-table-row-item-value'>
                                {distanceLeftConverted} km
                            </div>
                        </div>
                        <div className='driver-progress-table-row-item'>
                            <div className='driver-progress-table-row-item-label'>
                                Distance passed
                            </div>
                            <div className='driver-progress-table-row-item-value'>
                                {distancePassedConverted} km
                            </div>
                        </div>
                    </div>
                </div>
                <div className='driver-progress-right'>
                    <Progress
                        className='driver-progress-bar'
                        percent={percent}
                        theme={
                            {
                                active: {
                                    symbol: percent + '%',
                                    trailColor: '#DFEDEE',
                                    color: '#01BABF',
                                },
                            }
                        }
                    />
                </div>
            </div>
        )
    }

}
