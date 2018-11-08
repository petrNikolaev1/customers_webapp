/*
Component representing the menu of a device adding.
 */

import React, {PureComponent} from 'react';
import classNames from 'classnames'
import moment from "moment";

import '@/assets/styles/OrderModal.scss'
import showBeforeHOC from "@/hocs/showBeforeHOC";
import connect from "react-redux/es/connect/connect";
import {hideOrderModal, showTrackingOrder} from "@/actions/viewActions";
import {resetTrackingRoute} from '@/actions/googleMapsActions'
import translate from '@/hocs/Translate'
import Header from "@/common/Header";
import Button from "@/common/Button";
import {isInProgress} from "@/util/api";

@connect(
    store => ({
        show: store.viewReducer.orderModalShown
    }), {hideOrderModal, showTrackingOrder, resetTrackingRoute}
)
@translate('OrderItem')
@showBeforeHOC('add-device-menu')
export default class OrderModal extends PureComponent {

    onClose = () => {
        const {hideOrderModal, id, resetTrackingRoute} = this.props;
        hideOrderModal();
        resetTrackingRoute({orderId: id});
    };

    render() {
        const {
            strings, id, origin, destination, worth, weight, creation_date, due_date, status, description,
            showBeforeClass, showTrackingOrder, locationJson
        } = this.props;
        const {destination_full_address} = destination;
        const {origin_full_address} = origin;

        return (
            <div className={classNames("add-container", showBeforeClass)}>
                <Header label={strings.ORDER_MODAL_TITLE} onClose={this.onClose}/>
                <div className="add-container-table">
                    <div className='order-props-item'>
                        <div className='order-props-item-label'>{strings.ID}</div>
                        <div className='order-props-item-value'>{id}</div>
                    </div>
                    <div className='order-props-item'>
                        <div className='order-props-item-label'>{strings.FROM}</div>
                        <div className='order-props-item-value'>{origin_full_address}</div>
                    </div>
                    <div className='order-props-item'>
                        <div className='order-props-item-label'>{strings.TO}</div>
                        <div className='order-props-item-value'>{destination_full_address}</div>
                    </div>
                    <div className='order-props-item'>
                        <div className='order-props-item-label'>{strings.WEIGHT}</div>
                        <div className='order-props-item-value'>{weight}</div>
                    </div>
                    <div className='order-props-item'>
                        <div className='order-props-item-label'>{strings.WORTH}</div>
                        <div className='order-props-item-value'>{worth}</div>
                    </div>
                    <div className='order-props-item'>
                        <div className='order-props-item-label'>{strings.BIRTH_DATE}</div>
                        <div className='order-props-item-value'>{moment(creation_date).format('DD.MM.YYYY')}</div>
                    </div>
                    <div className='order-props-item'>
                        <div className='order-props-item-label'>{strings.DUE_DATE}</div>
                        <div className='order-props-item-value'>{moment(due_date).format('DD.MM.YYYY')}</div>
                    </div>
                    <div className='order-props-item'>
                        <div className='order-props-item-label'>{strings.STATUS}</div>
                        <div className='order-props-item-value'>{strings[status]}</div>
                    </div>
                    <div className='order-props-item'>
                        <div className='order-props-item-label'>{strings.DESCRIPTION}</div>
                        <div className='order-props-item-value'>{description}</div>
                    </div>

                    <div className='add-container-btns'>
                        {isInProgress(status) &&
                        <Button
                            label={strings.TRACK_ORDER}
                            buttonClass={'add-container-btns-item'}
                            type='location'
                            onClick={() => showTrackingOrder(
                                {
                                    orderId: id,
                                    routeId: this.props.routeId,
                                    origin,
                                    destination,
                                    locationJson
                                })}
                        />}
                    </div>
                </div>
            </div>
        )
    }
}
