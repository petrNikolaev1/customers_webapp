import omit from 'object.omit'
import cookies from 'js-cookie'

import constants from '@/constants'

const initLoginState = {};

export function loginReducer(state = initLoginState, action) {
    switch (action.type) {
        case constants.LOGIN_REQUEST:
            return {...state, loaded: false};

        case constants.LOGIN_SUCCESS:
            return {...omit(state, 'error'), loaded: true, res: action.result};

        case constants.LOGIN_ERROR:
            cookies.remove('token');
            return {...omit(state, 'res'), loaded: true, error: action.error};

        case constants.LOGOUT:
            cookies.remove('token');
            return {};

        default:
            return state;
    }
}


const initCreateOrderrState = {};

export function createOrderReducer(state = initCreateOrderrState, action) {
    switch (action.type) {
        case constants.CREATE_ORDER_REQUEST:
            return {...state, loaded: false};
        case constants.CREATE_ORDER_SUCCESS:
            return {...omit(state, 'error'), loaded: true, res: action.result};
        case constants.CREATE_ORDER_ERROR:
            return {...omit(state, 'res'), loaded: true, error: action.error};
        default:
            return state;
    }
}


const initRegisterCustomerState = {};

export function registerCustomerReducer(state = initRegisterCustomerState, action) {
    switch (action.type) {
        case constants.REGISTER_CUSTOMER_REQUEST:
            return {...state, loaded: false};
        case constants.REGISTER_CUSTOMER_SUCCESS:
            return {...omit(state, 'error'), loaded: true, res: action.result};
        case constants.REGISTER_CUSTOMER_ERROR:
            return {...omit(state, 'res'), loaded: true, error: action.error};
        default:
            return state;
    }
}
