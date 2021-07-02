import axios from 'axios'
import * as types from '../types/discount'

export const getDiscounts = () => async (dispatch) => {
    try {
        dispatch({ type: types.GET_DISCOUNTS_REQUEST })

        const { data } = await axios.get('https://qcandlesapi.herokuapp.com/api/discounts')
        dispatch({
            type: types.GET_DISCOUNTS_SUCCESS,
            payload: data
        })
    }
    catch (error) {
        dispatch({
            type: types.GET_DISCOUNTS_FAIL,
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.message
        })
    }
}

export const createDiscount = (formData) => async (dispatch) => {
    try {
        dispatch({type: types.CREATE_DISCOUNT_REQUEST})

        const { data } = await axios.post('https://qcandlesapi.herokuapp.com/api/discount', formData)
        dispatch({
            type: types.CREATE_DISCOUNT_SUCCESS,
            payload: data
        })
        return Promise.resolve(data)
    }catch (error) {
        dispatch({
            type: types.CREATE_DISCOUNT_FAIL,
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.message
        })
        return Promise.reject(error)
    }
}

export const deleteDiscount = (uuid) => async (dispatch) => {
    try {
        const {data} = await axios.delete(`https://qcandlesapi.herokuapp.com/api/discount/${uuid}`)
        console.log(data)
        dispatch({
            type: types.DELETE_DISCOUNT,
            payload: data.status.uuid
        })
        return Promise.resolve(data)
    }
    catch (error) {
        console.log(error)
        return Promise.reject(error)
    }
}