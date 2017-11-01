import {
    USER_LOGEDIN,
    PERMISSIONS_FETCHED,
    USER_LOGEDOUT
} from '../constants/actionTypes'

const initialState = {
    isAuthenticated: false,
    token: null,
    id: null,
    admin: false,
    supervisor: false
}

export default function auth(state = initialState, action = {}) {
    const { type, payload } = action
    switch (type) {
        case USER_LOGEDIN:
            return {
                ...state,
                isAuthenticated: true,
                token: payload.token,
                id: payload.id
            }
        case USER_LOGEDOUT:
            return {
                ...initialState
            }
        case PERMISSIONS_FETCHED:
            return {
                ...state,
                admin: payload.permissions.is_superuser,
                supervisor: payload.permissions.is_staff
            }
    }
    return state
}
