import constants from '@/constants'
import cookies from "js-cookie";

export const statuses = [
    constants.PENDING_CONFIRMATION,
    constants.IN_PROGRESS,
    constants.DELIVERED,
    constants.REJECTED,
];

export const isInProgress = status => status === constants.DELIVERED;

export const mapStatusToNum = status => statuses.indexOf(status);

export const optimalDriversToOptions = (vehicles) => {
    return vehicles.map(vehicle => ({
        timeToOrder: vehicle.time_till_order,
        value: vehicle.vehicle_json.id,
        type: vehicle.vehicle_json.type,
        vehicleId: vehicle.vehicle_json.id,
        driversIds: vehicle.vehicle_json.drivers.reduce((res, cur) => res.concat(cur.id), []),
        label: vehicle.vehicle_json.drivers.reduce((res, cur) => res.length > 0 ? res + ', ' + cur.name : res + cur.name, ''),
    }));
};

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
        command: constants.orders,
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

    [constants.orders]: {
        command: constants.orders,
        method: 'GET',
        paramsType: constants.QUERY,
        events: {
            onRequest: constants.GET_ORDERS_REQUEST,
            onError: constants.GET_ORDERS_ERROR,
            onSuccess: constants.GET_ORDERS_SUCCESS
        }
    },

};
