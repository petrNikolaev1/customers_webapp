import keyMirror from 'key-mirror'

export const MAX_TIMEOUT = 2 * 60 * 1000;

export const DRIVER_REFRESH_RATE = 30; // Refresh rate in ms

export const GOOGLE_API_KEY = 'AIzaSyAbChC4mhcoyeibPK_o8rNHjjgVffObCdw';

export const SERVER_URL = 'https://innodelivery.online:443/v1/customer/';

export default keyMirror({
    CHANGE_LANG: null,
    SHOW_ORDER_MODAL: null,
    HIDE_ORDER_MODAL: null,
    SHOW_LOADING: null,
    HIDE_LOADING: null,
    SHOW_LOGIN: null,
    HIDE_LOGIN: null,
    SELECT_ROUTE: null,
    RESET_ROUTE: null,
    FAIL: null,
    SHOW_CONFIRM: null,
    HIDE_CONFIRM: null,
    SHOW_SELECT_ROUTE: null,
    HIDE_SELECT_ROUTE: null,
    SHOW_SELECT_DRIVER: null,
    HIDE_SELECT_DRIVER: null,
    HIDE_CREATE_ORDER: null,
    SHOW_CREATE_ORDER: null,
    SHOW_CUSTOMER_REGISTRATION: null,
    HIDE_CUSTOMER_REGISTRATION: null,
    SHOW_TRACKING_ORDER: null,
    HIDE_TRACKING_ORDER: null,

    FILTER: null,

    GET_PROPOSED_ROUTE_REQUEST: null,
    GET_PROPOSED_ROUTE_ERROR: null,
    GET_PROPOSED_ROUTE_SUCCESS: null,

    login: null,
    GET_DRIVERS_ROUTES_REQUEST: null,
    GET_DRIVERS_ROUTES_SUCCESS: null,
    GET_DRIVERS_ROUTES_ERROR: null,

    orders: null,
    GET_ORDERS_REQUEST: null,
    GET_ORDERS_SUCCESS: null,
    GET_ORDERS_ERROR: null,

    getOptimalDrivers: null,
    GET_OPTIMAL_DRIVERS_REQUEST: null,
    GET_OPTIMAL_DRIVERS_SUCCESS: null,
    GET_OPTIMAL_DRIVERS_ERROR: null,
    SELECT_OPTIMAL_DRIVER: null,
    RESET_OPTIMAL_DRIVER: null,

    approveOrder: null,
    APPROVE_ORDER_REQUEST: null,
    APPROVE_ORDER_SUCCESS: null,
    APPROVE_ORDER_ERROR: null,

    ASSIGN_TIMER_TO_DRIVER: null,
    HOME_SELECT_DRIVER: null,

    SHOW_SUCCESS: null,
    HIDE_SUCCESS: null,
    SHOW_ERROR: null,
    HIDE_ERROR: null,

    LOGIN_REQUEST: null,
    LOGIN_ERROR: null,
    LOGIN_SUCCESS: null,
    LOGOUT: null,

    BODY: null,
    QUERY: null,

    PENDING_CONFIRMATION: null,
    IN_PROGRESS: null,
    DELIVERED: null,
    REJECTED: null,

    rejectOrder: null,
    REJECT_ORDER_REQUEST: null,
    REJECT_ORDER_SUCCESS: null,
    REJECT_ORDER_ERROR: null,

    ID_CHAT_CHOSEN: null,
    CHAT: null,
    SELECT_CHAT: null,
    CHAT_CONTROL_TYPING: null,
    UPDATE_CHAT_TEXT: null,
    CHAT_CONTROL_UPDATE: null,
    NEW_CHAT_MESSAGE: null,
    messages: null,

    GET_MESSAGES_REQUEST: null,
    GET_MESSAGES_SUCCESS: null,
    GET_MESSAGES_ERROR: null,

    RESET_CHAT_HISTORY: null,
    RESET_CHAT_SCROLL: null,

    operator: null,
    GET_OPERATOR_PROFILE_REQUEST: null,
    GET_OPERATOR_PROFILE_SUCCESS: null,
    GET_OPERATOR_PROFILE_ERROR: null,

    HANDLE_STATUS_FILTERS: null,

    // Form types
    TRANSPARENT_FORM: null,
    SELECT_LOCATION: null,
    STRING_INPUT: null,
    EMAIL_INPUT: null,
    PASSWORD_INPUT: null,
    AMOUNT_INPUT: null,
    WEIGHT_INPUT: null,
    DATETIME: null,

    order: null,
    CREATE_ORDER_REQUEST: null,
    CREATE_ORDER_ERROR: null,
    CREATE_ORDER_SUCCESS: null,

    register: null,
    REGISTER_CUSTOMER_REQUEST: null,
    REGISTER_CUSTOMER_ERROR: null,
    REGISTER_CUSTOMER_SUCCESS: null,

    GET_TRACKING_ROUTE_REQUEST: null,
    GET_TRACKING_ROUTE_ERROR: null,
    GET_TRACKING_ROUTE_SUCCESS: null,
    RESET_TRACKING_ROUTE: null,
})
