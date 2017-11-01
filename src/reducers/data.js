import {
    NURSERIES_FETCHED,
    NURSERIES_SET_CURRENT,
    SAMPLES_FETCHED,
    PARAMS_FETCHED,
    SET_CONFIG,
    GET_CONFIG
} from '../constants/actionTypes'

const initialState = {
    fetching: false,
    samples: [],
    nurseries: [],
    parameters: [],
    current: null,
    config: null
}

export default function data(state = initialState, action = {}) {
    const { type, payload } = action
    switch (type) {
        case NURSERIES_FETCHED:
            return {
                ...state,
                nurseries: payload.nurseries,
            }
        case NURSERIES_SET_CURRENT:
            return {
                ...state,
                current: payload.id,
            }
        case SAMPLES_FETCHED:
            return {
                ...state,
                samples : payload.samples
            }
        case PARAMS_FETCHED:
            return {
                ...state,
                parameters: payload.parameters
            }
        case GET_CONFIG:
            return {
                ...state,
                config: payload.config
            }
        case SET_CONFIG:
            return {
                ...state,
                config: payload.config
            }
    }
    return state
}
