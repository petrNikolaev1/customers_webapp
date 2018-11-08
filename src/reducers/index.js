import {combineReducers} from 'redux'

import * as StringReducer from './stringReducer';
import * as ViewReducer from './viewReducer';
import * as ServerReducer from './serverReducer'
import * as GoogleMapsReducer from './googleMapsReducer'

export default combineReducers(Object.assign(
    StringReducer,
    ViewReducer,
    ServerReducer,
    GoogleMapsReducer
));
