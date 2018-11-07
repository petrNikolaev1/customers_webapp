import React, {Component} from "react"

import '@/assets/styles/MainMenu.scss'
import InfoPanel from "@/components/InfoPanel";
import connect from "react-redux/es/connect/connect";
import CreateOrder from '@/components/Orders/CreateOrder'
import translate from "@/hocs/Translate";
import OrderList from "@/components/Orders/OrderList";

@connect(
    store => ({
        createOrderShown: store.viewReducer.createOrderShown,
    }), {}
)
@translate('CreateOrder')

export default class MainMenu extends Component {

    render() {
        const {createOrderShown, } = this.props;
        return (
            <div className='main-menu-container'>
                <InfoPanel/>
                <OrderList/>
                {createOrderShown && <CreateOrder/>}
            </div>
        )
    }
}
