import {
    NURSERIES_FETCHED,
    NURSERIES_SET_CURRENT, PARAMS_FETCHED,
    SAMPLES_FETCHED
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