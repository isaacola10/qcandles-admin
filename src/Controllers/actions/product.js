import * as types from '../types/product'
import axios from "axios";

export const getProducts = () => async (dispatch) => {
    try {
        dispatch({ type: types.GET_PRODUCTS_REQUEST })

        const { data } = await axios.get('https://qcandlesapi.herokuapp.com/api/products');

        dispatch({
            type: types.GET_PRODUCTS_SUCCESS,
            payload:data
        })
    }
    catch (error) {
        dispatch({
            type: types.GET_PRODUCTS_FAIL,
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.message
        })
    }
}

export const getProductDetails = (uuid) => async (dispatch) => {
    try {
        dispatch({ type: types.GET_PRODUCT_REQUEST })

        const { data } = await axios.get(`https://qcandlesapi.herokuapp.com/api/product/${uuid}`)

        dispatch({
            type: types.GET_PRODUCT_SUCCESS,
            payload: data
        })
    }
    catch (error)
    {
        dispatch({
            type: types.GET_PRODUCT_FAIL,
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.message
        })
    }
}

export const createProduct = (formData) => async (dispatch) => {
    try{
        dispatch({ type: types.CREATE_PRODUCT_REQUEST })

        const { data } = await axios.post('https://qcandlesapi.herokuapp.com/api/product', formData)

        dispatch({
            type: types.CREATE_PRODUCT_SUCCESS,
            payload: data
        })
        return Promise.resolve(data)
    }
    catch (e) {
        return Promise.reject(e)
    }
}

export const updateProduct = (uuid, formData) => async (dispatch) => {
    try {
        dispatch({ type: types.UPDATE_PRODUCT_REQUEST})

        const { data } = await axios.put(`https://qcandlesapi.herokuapp.com/api/product/${uuid}`, formData);
        dispatch({
            type: types.UPDATE_PRODUCT_SUCCESS,
            payload: {uuid, data}
        })
        return Promise.resolve(data);
    }
    catch (error) {
        return Promise.reject(error)
    }
}

export const deleteProduct = (uuid) => async (dispatch) => {
    try {
        const {data} = await axios.delete(`https://qcandlesapi.herokuapp.com/api/product/${uuid}`)
        console.log(data)
        dispatch({
            type: types.DELETE_PRODUCT,
            payload: data.status.uuid
        })
        return Promise.resolve(data)
    }
    catch (error) {
        console.log(error)
        return Promise.reject(error)
    }
}