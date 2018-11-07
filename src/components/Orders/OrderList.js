import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import constants from '@/constants'
import {Autorenew} from '@material-ui/icons';

import translate from '@/hocs/Translate'
import '@/assets/styles/OrderList.scss'
import OrderItem from './OrderItem'
import OrderModal from './OrderModal'
import Pagination from './Pagination';
import {apiReq} from "@/actions/serverActions";
import OrdersFilter from './OrdersFilter'
import {filterOrders} from '@/util/filters'
import Button from "@/common/Button";
import {showCreateOrder} from '@/actions/viewActions'

@connect(
    store => ({
        orders: store.ordersReducer,
        orderModalShown: store.viewReducer.orderModalShown,
        orderDriversShown: store.viewReducer.orderDriversShown,
        selectRouteShown: store.viewReducer.selectRouteShown,
        filters: store.ordersReducer.filters
    }), {apiReq, showCreateOrder}
)
@translate(['OrderList', 'CreateOrder'])
export default class OrderList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            pageOfItems: [],
        };

        this.onChangePage = this.onChangePage.bind(this);
    }

    componentDidMount() {
        this.refreshList()
    }

    refreshList = () => {
        this.props.apiReq(constants.orders, {limit: 1000, offset: 0})
    };

    getOrders = () => {
        const {orders} = this.props;
        if (!orders.error && !!orders.res) {
            return orders.res
        }
        return []
    };

    onChangePage(pageOfItems) {
        this.setState({pageOfItems: pageOfItems});
    };

    renderHeader = () => {
        const {strings} = this.props;
        return (
            <div className="orders-list-row orders-list-header">
                <div className="orders-list-row-item">{strings.ID}</div>
                <div className="orders-list-row-item">{strings.FROM}</div>
                <div className="orders-list-row-item">{strings.TO}</div>
                <div className="orders-list-row-item">{strings.BIRTH_DATE}</div>
                <div className="orders-list-row-item">{strings.STATUS}</div>
            </div>
        )
    };

    rendeOrders = () => {
        const {orderModalShown, orderDriversShown, selectRouteShown, showCreateOrder, strings} = this.props;
        const {pageOfItems} = this.state;

        return (
            <div>
                {pageOfItems.map(item => {
                        return (
                            <div key={item.id}>
                                <OrderItem
                                    {...item}
                                />
                                {item.id === orderModalShown &&
                                <OrderModal{...item}/>}
                            </div>)
                    }
                )}
            </div>
        )
    };

    renderEmpty = () => {
        const {strings} = this.props;
        return (
            <div className='orders-list-row orders-list-empty'>
                {strings.EMPTY}
            </div>
        )
    };

    renderError = () => {
        const {strings} = this.props;
        return (
            <div className='orders-list-row orders-list-empty'>
                {strings.ERROR}
            </div>
        )
    };

    render() {
        const {orders, strings, filters, showCreateOrder} = this.props;

        const ordersFiltered = filterOrders(this.getOrders(), filters);
        const error = orders.error;
        const empty = !error && ordersFiltered.length === 0;


        return (
            <Fragment>
                <OrdersFilter/>
                <div className="orders-list">
                    {error ? this.renderError() : empty ? this.renderEmpty() :
                        <Fragment>
                            {this.renderHeader()}
                            {this.rendeOrders()}
                        </Fragment>}
                </div>
                <div className="orders-list-footer">
                    <Pagination items={ordersFiltered} onChangePage={this.onChangePage} pageSize={5}/>
                    <div className="orders-list-footer-btns">
                        <Button onClick={this.refreshList} label={strings.REFRESH} type='update'
                                buttonClass={'orders-list-footer-btns-refresh'}/>
                        <Button onClick={showCreateOrder} label={strings.CREATE_ORDER} type='add'/>
                    </div>
                </div>
            </Fragment>
        )
    }
}
