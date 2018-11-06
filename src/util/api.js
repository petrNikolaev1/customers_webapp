import constants from '@/constants'
import cookies from "js-cookie";

export default (command, params) => ({...commandsData[command], params})

export const commandsData = {

    [constants.login]: {
        command: constants.login,
        method: 'POST',
        paramsType: constants.BODY,
        events: {
            onRequest: constants.LOGIN_REQUEST,
            onError: constants.LOGIN_ERROR,
            onSuccess: constants.LOGIN_SUCCESS,
        },
        customSuccessHandler: (res, actions) => {
            cookies.set('token', res.auth_token);
        },
    },

    [constants.order]: {
        command: constants.order,
        method: 'POST',
        paramsType: constants.BODY,
        events: {
            onRequest: constants.CREATE_ORDER_REQUEST,
            onError: constants.CREATE_ORDER_ERROR,
            onSuccess: constants.CREATE_ORDER_SUCCESS,
        },
        defaultSuccessHandler: {text: 'CREATE_ORDER_SUCCESS'},
        defaultErrorHandler: {text: 'CREATE_ORDER_ERROR'}
    },

    [constants.register]: {
        command: constants.register,
        method: 'POST',
        paramsType: constants.BODY,
        events: {
            onRequest: constants.REGISTER_CUSTOMER_REQUEST,
            onError: constants.REGISTER_CUSTOMER_ERROR,
            onSuccess: constants.REGISTER_CUSTOMER_SUCCESS,
        },
        defaultSuccessHandler: {text: 'REGISTER_CUSTOMER_SUCCESS'},
        defaultErrorHandler: {text: 'REGISTER_CUSTOMER_ERROR'},
        customSuccessHandler: (res, actions) => {
            cookies.set('token', res.auth_token);
        },
    },

};
