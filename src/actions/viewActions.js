import constants from '@/constants'

export const showOrderModal = orderId => dispatch => {
    dispatch({
        type: constants.SHOW_ORDER_MODAL,
        orderId
    });
};

export const hideOrderModal = () => dispatch => {
    dispatch({
        type: constants.HIDE_ORDER_MODAL,
    });
};

export const showSelectRoute = orderId => dispatch => {
    dispatch({
        type: constants.SHOW_SELECT_ROUTE,
        orderId
    });
};

export const hideSelectRoute = () => dispatch => {
    dispatch({
        type: constants.HIDE_SELECT_ROUTE,
    });
};

export const showSelectDrivers = orderId => dispatch => {
    dispatch({
        type: constants.SHOW_SELECT_DRIVER,
        orderId
    });
};

export const hideSelectDrivers = () => dispatch => {
    dispatch({
        type: constants.HIDE_SELECT_DRIVER,
    });
};

export const showLoading = (id) => dispatch => {
    dispatch({
        type: constants.SHOW_LOADING
    });
};

export const hideLoading = () => dispatch => {
    dispatch({
        type: constants.HIDE_LOADING
    });
};


export const showSuccess = (payload) => dispatch => {
    dispatch({
        type: constants.SHOW_SUCCESS,
        payload
    });
};

export const hideSuccess = () => dispatch => {
    dispatch({
        type: constants.HIDE_SUCCESS
    });
};

export const showError = (payload) => dispatch => {
    dispatch({
        type: constants.SHOW_ERROR,
        payload
    });
};

export const hideError = () => dispatch => {
    dispatch({
        type: constants.HIDE_ERROR
    });
};

export const showCreateOrder = (payload) => dispatch => {
    dispatch({
        type: constants.SHOW_CREATE_ORDER,
        payload
    });
};

export const hideCreateOrder = () => dispatch => {
    dispatch({
        type: constants.HIDE_CREATE_ORDER
    });
};

export const showCustomerRegistration = (payload) => dispatch => {
    dispatch({
        type: constants.SHOW_CUSTOMER_REGISTRATION,
        payload
    });
};

export const hideCustomerRegistration = () => dispatch => {
    dispatch({
        type: constants.HIDE_CUSTOMER_REGISTRATION
    });
};

export const showTrackingOrder = payload => dispatch => {
    dispatch({
        type: constants.SHOW_TRACKING_ORDER,
        payload
    });
};

export const hideTrackingOrder = () => dispatch => {
    dispatch({
        type: constants.HIDE_TRACKING_ORDER
    });
};
