import { createStore, applyMiddleware } from 'redux'
import AppReducer from '../reducers'
import thunk from 'redux-thunk'
import logger from 'redux-logger'

let middleware = [thunk, logger]

export default function configureStore(initialState = {}) {
	return createStore(
		AppReducer,
		initialState,
		applyMiddleware(...middleware)
	);
}
