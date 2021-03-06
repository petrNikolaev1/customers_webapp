import constants from "@/constants";

export default {

    OrderList: {
        ID: '№',
        FROM: 'Departure address',
        TO: 'Delivery address',
        STATUS: 'Status',
        BIRTH_DATE: 'Creation date',
        REFRESH: 'Refresh',
        EMPTY: 'No such orders',
        ERROR: 'An error occurred while getting the list of orders'
    },

    OrderItem: {
        ID: 'id',
        FROM: 'Departure address',
        TO: 'Delivery address',
        STATUS: 'Status',
        FUll_FROM: 'Full departure address',
        FUll_TO: 'Full delivery address',
        WEIGHT: 'Weight',
        WORTH: 'Worth',
        DESCRIPTION: 'Description',
        PHONE_NUM: 'Phone number',
        DUE_DATE: 'Delivery date',
        BIRTH_DATE: 'Birth date',
        APPROVE: 'Approve',
        REJECT: 'Reject',
        ORDER_MODAL_TITLE: 'Information about order',
        [constants.PENDING_CONFIRMATION]: 'Pending',
        [constants.IN_PROGRESS]: 'Delivering',
        [constants.DELIVERED]: 'Delivered',
        [constants.REJECTED]: 'Rejected',
        TRACK_ORDER: 'Track order'
    },

    Login: {
        LOGIN: 'Login',
        PASSWORD: 'Password',
        ENTER: 'Enter',
        INVALID: 'Invalid login/password',
        NOT_ALL_FIELDS: 'Please, fill all fields',
        SIGN_UP: 'Sign up',
        NOT_REGISTERED: 'New to IDC?'
    },

    InfoPanel:{
        SELECT_NO_LANG: 'No such language',
        SELECT_LANG_PLACEHOLDER: 'Choose interface language'
    },

    SelectDriver: {
        id: 'id',
        fullFrom: 'Departure address',
        fullTo: 'Destination address',
        status: 'Status',
        weight: 'Weight of the parcel',
        worth: 'Cost of the parcel',
        description: 'Description',
        birthDate: 'Creation date',
        title: 'Title',
        approve: 'Approve',
        reject: 'Reject',
        choose_placeholder: 'Choose drivers',
        SELECT_NO_DRIVERS: 'Driver do not exist'
    },

    Pagination: {
        first: 'First',
        previous: 'Previous',
        next: 'Next',
        last: 'Last'
    },

    SelectRoute: {
        distance: 'Distance',
        time: 'Time',
        approve: 'Approve',
        cancel: 'Cancel'
    },

    Success: {
        CREATE_ORDER_SUCCESS: 'Order successfully issued!',
        REGISTER_CUSTOMER_SUCCESS: 'CustomerRegistration completed successfully'
    },

    Error: {
        CREATE_ORDER_ERROR: 'Failed to place an order. There may be network issues.',
        REGISTER_CUSTOMER_ERROR: 'An error has occurred during registration. There may be network issues.'
    },

    Settings: {
        SETTINGS: 'Settings',
        BACK: 'Back to main menu',
        ADMIN_PANEL: 'Administration panel',
        SELECT_NUMBER: 'Select number of drivers',
        PERSONAL_INFO: 'Personal information',
        FULL_NAME: 'Full name',
        LICENSE_NUMBER: 'License number',
        POSITION: 'Position',
        ACCESS_LEVEL: 'Access level',
        LOGOUT: 'Logout'
    },

    OrdersFilters: {
        [constants.PENDING_CONFIRMATION]: 'Pending',
        [constants.IN_PROGRESS]: 'Delivering',
        [constants.DELIVERED]: 'Delivered',
        [constants.REJECTED]: 'Rejected'
    },

    CreateOrder: {
        CREATE_ORDER: 'Create order',
        DESCRIPTION: 'Description',
        VALUE: 'Value (USD)',
        WEIGHT: 'Weight (kg)',
        FROM: 'Departure address',
        TO: 'Destination address',
        DATE: 'Delivery date',
        WRONG_DESCRIPTION: 'Invalid description',
        WRONG_VALUE: 'Invalid value',
        WRONG_WEIGHT: 'Invalid weight',
        WRONG_FROM: 'Please select an exact address',
        WRONG_TO: 'Please select an exact address',
        WRONG_DATE: 'Please enter a valid date\nMinimum delivery time - 4 hours',
        TIME: 'Delivery time',
        INFO: 'Main information',
        FORM_ORDER: 'Place an order',
        FORMING: 'Processing order'
    },

    CustomerRegistration:{
        REGISTRATION: 'CustomerRegistration',
        NAME: 'Name',
        NAME_NOTIFICATION: 'Please, enter your name',
        EMAIL: 'E-mail',
        EMAIL_NOTIFICATION: 'Invalid email format',
        PASSWORD: 'Password',
        PASSWORD_NOTIFICATION: 'The minimum password length -\n 6 symbols',
        REGISTER: 'Create an account'
    }
};
