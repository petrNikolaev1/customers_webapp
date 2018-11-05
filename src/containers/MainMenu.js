import React, {Component} from "react"

import '@/assets/styles/MainMenu.scss'
import InfoPanel from "@/components/InfoPanel";
import Button from "@/common/Button";
import connect from "react-redux/es/connect/connect";
import CreateOrder from '@/components/CreateOrder'
import {showCreateOrder} from '@/actions/viewActions'
import translate from "@/hocs/Translate";

@connect(
    store => ({
        createOrderShown: store.viewReducer.createOrderShown,
    }), {showCreateOrder}
)
@translate('CreateOrder')

export default class MainMenu extends Component {

    render() {
        const {createOrderShown, showCreateOrder, strings} = this.props;
        return (
            <div className='main-menu-container'>
                <InfoPanel/>
                <Button onClick={showCreateOrder} label={strings.CREATE_ORDER}/>
                {createOrderShown && <CreateOrder/>}
            </div>
        )
    }
}
