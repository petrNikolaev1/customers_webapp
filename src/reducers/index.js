import {combineReducers} from 'redux'

import * as StringReducer from './stringReducer';
import * as ViewReducer from './viewReducer';
import * as ServerReducer from './serverReducer'

export default combineReducers(Object.assign(
    StringReducer,
    ViewReducer,
    ServerReducer,
));
