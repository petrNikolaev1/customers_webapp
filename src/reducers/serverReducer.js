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

const initOrdersState = {};

export function ordersReducer(state = initOrdersState, action) {
    switch (action.type) {
        case constants.GET_ORDERS_REQUEST:
            return {...state, loaded: false};
        case constants.GET_ORDERS_SUCCESS:
            return {...omit(state, 'error'), loaded: true, res: action.result};
        case constants.GET_ORDERS_ERROR:
            return {...omit(state, 'res'), loaded: true, error: action.error};
        case constants.HANDLE_STATUS_FILTERS:
            return {...state, filters: {...state.filters, statusFilters: action.statusFilters}};
        default:
            return state;
    }
}

