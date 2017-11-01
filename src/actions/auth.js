import {
    USER_LOGEDIN,
    USER_LOGEDOUT,
    PERMISSIONS_FETCHED
} from '../constants/actionTypes'
import { MAIN_SCREEN } from '../constants/screenNames'
import { SERVER_URL, LOGIN_URL } from '../utils/config'
import axios from 'axios'
import {changeAppRoot} from './nav'

const userLogedIn = (token, id) => ({
    type: USER_LOGEDIN,
    payload: {
        token : token,
        id : id,
    }
})

export const login = (username, password) => (
    async (dispatch) => {
        try {
            const {data} = await axios.post(`${LOGIN_URL}login/`, {
                username: username,
                password: password
            })
            dispatch(userLogedIn(data.key, data.user))
            dispatch(getPermissions(data.user))
            dispatch(changeAppRoot(MAIN_SCREEN))
        }
        catch (e) {
            console.log(e)
        }
    }
)

const permissionsFetched = (permissions) => ({
    type: PERMISSIONS_FETCHED,
    payload: {
        permissions: permissions
    }
})

const getPermissions = (id) => (
    async (dispatch) => {
        const {data} = await axios.get(`${SERVER_URL}user/${id}`)
        dispatch(permissionsFetched(data))
    }
)

const userLogedout = () => ({
    type: USER_LOGEDOUT,
})

export const logout = () => (
    (dispatch) => {
        dispatch(userLogedout())
    }
)