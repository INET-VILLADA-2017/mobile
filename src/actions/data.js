import {
    NURSERIES_FETCHED,
    NURSERIES_SET_CURRENT, PARAMS_FETCHED,
    SAMPLES_FETCHED,
    GET_CONFIG, SET_CONFIG
} from '../constants/actionTypes'
import { SERVER_URL } from '../utils/config'
import axios from 'axios'

const fetchedNurseries = (n) => ({
    type: NURSERIES_FETCHED,
    payload: {
        nurseries: n
    }
})

export const getNurseries = () => (
    async (dispatch) =>  {
        const {data} = await axios.get(`${SERVER_URL}nursery/`)
        dispatch(fetchedNurseries(data))
        if (data.length > 0) {
            dispatch(setCurrent(data[0].id))
        }
    }
)

const currentSet = (id) => ({
    type: NURSERIES_SET_CURRENT,
    payload: {
        id: id
    }
})

export const setCurrent = (id) => (
    (dispatch) =>  {
        dispatch(currentSet(id))
        dispatch(getSamples())
    }
)


const fetchedSamples = (s) => ({
    type: SAMPLES_FETCHED,
    payload: {
        samples: s
    }
})

export const getSamples = () => (
    async (dispatch, getState) =>  {
        const { current } = getState().data
        const {data} = await axios.get(`${SERVER_URL}sample/?nursery=${current}`)
        console.log(data)
        dispatch(fetchedSamples(data))
    }
)

const fetchedParameters = (p) => ({
    type: PARAMS_FETCHED,
    payload: {
        parameters: p
    }
})

export const getParams = () => (
    async (dispatch) =>  {
        const {data} = await axios.get(`${SERVER_URL}param/`)
        dispatch(fetchedParameters(data))
    }
)

const getConfig = (config) => ({
    type: GET_CONFIG,
    payload: {
        config: config
    }
})

export const configGet = () => (
    async (dispatch) => {
        const {data} = await axios.get(`${SERVER_URL}config/`)
        console.log(data)
        dispatch(getConfig(data[0]))
    }
)

const configSet = (config) => ({
    type: SET_CONFIG,
    payload: {
        config: config
    }
})

export const setConfig = (config) => (
    async (dispatch, getState) => {
        const { config } = getState().data
        await axios.put(`${SERVER_URL}config/${config.id}/`, {
            "watering_period_1": config.watering_period_1,
            "degree_of_shadow": config.watering_period_2,
            "spray_volume": config.spray,
            "watering_period_2": config.shadow
        })
        dispatch(configSet({
            "watering_period_1": config.watering_period_1,
            "degree_of_shadow": config.watering_period_2,
            "spray_volume": config.spray,
            "watering_period_2": config.shadow,
            "id" : config.id
        }))
    }
)