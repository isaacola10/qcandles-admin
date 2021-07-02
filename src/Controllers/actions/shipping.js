import axios from 'axios'
import * as types from '../types/shipping'

export const getShippings = () => async (dispatch) => {
    try {
        dispatch({ type: types.GET_SHIPPINGS_REQUEST })

        const { data } = await axios.get('https://qcandlesapi.herokuapp.com/api/shippings')
        dispatch({
            type: types.GET_SHIPPINGS_SUCCESS,
            payload: data
        })
    }
    catch (error) {
        dispatch({
            type: types.GET_SHIPPINGS_FAIL,
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.message
        })
    }
}

export const createShipping = (formData) => async (dispatch) => {
    try {
        dispatch({type: types.CREATE_SHIPPING_REQUEST})

        const { data } = await axios.post('https://qcandlesapi.herokuapp.com/api/shipping', formData)
        dispatch({
            type: types.CREATE_SHIPPING_SUCCESS,
            payload: data
        })
        return Promise.resolve(data)
    }catch (error) {
        dispatch({
            type: types.CREATE_SHIPPING_FAIL,
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.message
        })
        return Promise.reject(error)
    }
}

export const deleteShipping = (uuid) => async (dispatch) => {
    try {
        const {data} = await axios.delete(`https://qcandlesapi.herokuapp.com/api/shipping/${uuid}`)
        console.log(data)
        dispatch({
            type: types.DELETE_SHIPPING,
            payload: data.status.uuid
        })
        return Promise.resolve(data)
    }
    catch (error) {
        console.log(error)
        return Promise.reject(error)
    }
}