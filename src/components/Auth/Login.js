import React, {Component, Fragment} from "react";
import {Redirect} from 'react-router-dom'
import cookies from 'js-cookie'

import '@/assets/styles/Login.scss'
import translate from '@/hocs/Translate'
import logo from '@/assets/img/logo2white.svg'
import connect from "react-redux/es/connect/connect";
import {apiReq} from '@/actions/serverActions'
import CustomerRegistration from "@/components/Auth/CustomerRegistration";
import {showCustomerRegistration} from '@/actions/viewActions'

@connect(
    store => ({
        fail: store.viewReducer.fail,
        login: store.loginReducer,
        customerRegistrationShown: store.viewReducer.customerRegistrationShown
    }), {apiReq, showCustomerRegistration}
)
@translate('Login')
export default class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: "",
            notify: '',
            login: '',
        };
    }

    static getDerivedStateFromProps(props, state) {
        const {login: loginOld} = state;
        const {strings, login: loginNew} = props;
        if (!loginOld.loaded && loginNew.loaded && !!loginNew.error) {
            return {
                login: loginNew,
                notify: strings.INVALID
            }
        }
        return {
            login: loginNew
        }
    }

    preValidate = () => {
        const {email, password} = this.state;
        return !!email && !!password
    };

    postValidate = () => {

    };

    onChange = event => {
        this.setState({
            [event.target.name]: event.target.value,
            notify: ''
        });
    };

    onSubmit = (event) => {
        const {strings, apiReq} = this.props;
        event.preventDefault();
        if (!this.preValidate()) return this.setState({notify: strings.NOT_ALL_FIELDS});
        const {email, password} = this.state;

        apiReq('login', {email, password}, {...this.props,});
    };

    render() {
        const {strings, customerRegistrationShown, showCustomerRegistration} = this.props;
        const {from} = this.props.location.state || {from: {pathname: "/"}};
        const {notify} = this.state;


        if (!!cookies.get('token')) {
            return <Redirect to={from}/>
        }

        return (
            <Fragment>
                <div className='login-container'>
                    <div className='login-container-icon'><img src={logo} alt="logo"/></div>
                    <form className='login-container-form' onSubmit={this.onSubmit}>
                        <div className='login-container-form-notify'>{notify}</div>
                        <div className='login-container-form-item'>
                            <label className='login-container-form-item-label'>
                                {strings.LOGIN}
                            </label>
                            <input className='login-container-form-item-input'
                                   name='email'
                                   autoFocus
                                   placeholder={strings.LOGIN}
                                   value={this.state.email}
                                   onChange={this.onChange}
                            />
                        </div>
                        <div className='login-container-form-item'>
                            <label className='login-container-form-item-label'>
                                {strings.PASSWORD}
                            </label>
                            <input className='login-container-form-item-input'
                                   name='password'
                                   value={this.state.password}
                                   onChange={this.onChange}
                                   placeholder={strings.PASSWORD}
                                   type="password"
                            />
                        </div>
                        <button type="submit" className='login-container-form-enter'>
                            {strings.ENTER}
                        </button>
                        <div className='login-container-form-register'>
                            <span className='login-container-form-register-label'>{strings.NOT_REGISTERED}</span>
                            <span className='login-container-form-register-btn' onClick={showCustomerRegistration}>
                                {strings.SIGN_UP}
                            </span>
                        </div>
                    </form>
                </div>
                {customerRegistrationShown && <CustomerRegistration/>}
            </Fragment>
        );
    }
}
