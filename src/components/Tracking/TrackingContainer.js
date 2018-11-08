import React, {Component} from 'react';
import connect from "react-redux/es/connect/connect";
import classNames from 'classnames'

import {hideTrackingOrder} from "@/actions/viewActions";
import {getTrackingRoute} from '@/actions/googleMapsActions'
import '@/assets/styles/TrackingOrder.scss'
import showBeforeHOC from "@/hocs/showBeforeHOC";
import translate from '@/hocs/Translate'
import Header from "@/common/Header";
import TrackingMap from "./TrackingMap";
import TrackingProgress from "./TrackingProgress";


@translate('OrderItem')
@connect(
    store => ({
        trackingRoutes: store.trackingRouteReducer.trackingRoutes
    }), {hideTrackingOrder, getTrackingRoute}
)
@showBeforeHOC('add-device-menu')
export default class TrackingOrder extends Component {

    onClose = () => {
        const {hideTrackingOrder} = this.props;
        hideTrackingOrder()
    };


    componentDidMount() {
        const {origin, destination, getTrackingRoute, id} = this.props;
        const {origin_latitude, origin_longitude} = origin;
        const {destination_latitude, destination_longitude} = destination;
        getTrackingRoute(
            {
                origin: {lat: origin_latitude, lng: origin_longitude},
                destination: {lat: destination_latitude, lng: destination_longitude},
                orderId: id
            });
    }

    render() {
        const {showBeforeClass,} = this.props;

        return (
            <div className={classNames("tracking-order-container", showBeforeClass)}>
                <Header label={'Отслеживание заказа'} onClose={this.onClose}/>
                <TrackingProgress {...this.props}/>
                <TrackingMap {...this.props}/>
            </div>
        )
    }
}





