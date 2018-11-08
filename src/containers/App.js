import React, {Component, Fragment} from 'react'
import {Switch, Route, withRouter} from 'react-router-dom'
import connect from "react-redux/es/connect/connect";

import MainMenu from '@/containers/MainMenu'
import Login from "@/components/Auth/Login";
import Loading from "@/common/Loading";
import PrivateRoute from '@/common/PrivateRoute'
import Success from "@/common/Success";
import Error from "@/common/Error";
import {initGoogleMaps} from "@/util/googleMapsRequests";

@withRouter
@connect(
    store => ({
        loadingShow: store.viewReducer.loadingShow,
        success: store.viewReducer.success,
        error: store.viewReducer.error,
        orderApprove: store.orderApproveReducer,
        language: store.stringReducer.language,
    }), {}
)

export default class App extends Component {

    componentDidMount() {
        const {language} = this.props;
        initGoogleMaps(language);
    }

    render() {
        const {loadingShow, success, error} = this.props;

        return (
            <Fragment>
                <Switch>
                    <PrivateRoute exact path='/' component={MainMenu}/>
                    <Route path='/login/' component={Login}/>
                </Switch>
                {loadingShow && <Loading/>}
                {!!success && <Success/>}
                {!!error && <Error/>}
            </Fragment>
        )
    }
}
