import constants from '@/constants'

const initialState = {
    orderModalShown: -1,
    trackingOrderShown: -1,
    loadingShow: false,
    success: null,
    error: null,
};

export function viewReducer(state = initialState, action) {
    switch (action.type) {
        case constants.SHOW_ORDER_MODAL:
            return {
                ...state,
                orderModalShown: action.orderId
            };
        case constants.HIDE_ORDER_MODAL:
            return {
                ...state,
                orderModalShown: -1
            };

        case constants.SHOW_LOADING:
            return {
                ...state,
                loadingShow: true
            };
        case constants.HIDE_LOADING:
            return {
                ...state,
                loadingShow: false
            };
        case constants.SHOW_SUCCESS:
            return {
                ...state,
                success: action.payload
            };
        case constants.HIDE_SUCCESS:
            return {
                ...state,
                success: null
            };
        case constants.SHOW_ERROR:
            return {
                ...state,
                error: action.payload
            };
        case constants.HIDE_ERROR:
            return {
                ...state,
                error: null
            };
        case constants.SHOW_CREATE_ORDER:
            return {
                ...state,
                createOrderShown: true
            };
        case constants.HIDE_CREATE_ORDER:
            return {
                ...state,
                createOrderShown: false
            };
        case constants.SHOW_CUSTOMER_REGISTRATION:
            return {
                ...state,
                customerRegistrationShown: true
            };
        case constants.HIDE_CUSTOMER_REGISTRATION:
            return {
                ...state,
                customerRegistrationShown: false
            };
        case constants.SHOW_TRACKING_ORDER:
            return {
                ...state,
                trackingOrderShown: action.payload
            };
        case constants.HIDE_TRACKING_ORDER:
            return {
                ...state,
                trackingOrderShown: {orderId: -1}
            };
        default:
            return state;
    }
}
