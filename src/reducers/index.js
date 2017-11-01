import { combineReducers } from 'redux'
import authReducer from './auth'
import navReducer from './nav'
import dataReducer from './data'

const AppReducer = combineReducers({
    auth: authReducer,
    nav: navReducer,
    data: dataReducer
});

export default AppReducer;
