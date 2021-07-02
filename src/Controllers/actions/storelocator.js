import * as types from '../types/storelocator'
import axios from "axios";

export const getStores = () => async (dispatch) => {
    try {
        dispatch({type: types.GET_STORES_REQUEST})

        const { data } = await axios.get('https://qcandlesapi.herokuapp.com/api/stores');
        dispatch({
            type: types.GET_STORES_SUCCESS,
            payload: data
        })
    }
    catch (error) {
        dispatch({
            type: types.GET_STORES_FAIL,
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.message
        })
    }
}

export const getStore = (uuid) => async (dispatch) => {
    try {
        dispatch({type: types.GET_STORE_REQUEST})

        const {data} = await axios.get(`https://qcandlesapi.herokuapp.com/api/store/${uuid}`);
        dispatch({
            type: types.GET_STORE_SUCCESS,
            payload: data
        })
    }
    catch (error) {
        dispatch({
            type: types.GET_STORE_FAIL,
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.message
        })
    }
}

export const createStore = (formData) => async (dispatch) => {
    try {
        dispatch({type: types.CREATE_STORE_REQUEST})

        const {data} = await axios.post('https://qcandlesapi.herokuapp.com/api/store', formData);
        dispatch({
            type: types.CREATE_STORE_SUCCESS,
            payload: data
        })
        return Promise.resolve(data)
    }
    catch (error) {
        dispatch({
            type: types.CREATE_STORE_FAIL,
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.message
        })
        return Promise.reject(error)
    }
}

export const updateStore = (formData, uuid) => async (dispatch) => {
    try {
        dispatch({type: types.UPDATE_STORE_REQUEST})

        const {data} = await axios.put(`https://qcandlesapi.herokuapp.com/api/store/${uuid}`, formData);
        dispatch({
            type: types.UPDATE_STORE_SUCCESS,
            payload: {uuid, data}
        })
        return Promise.resolve(data)
    }
    catch (error) {
        dispatch({
            type: types.UPDATE_STORE_FAIL,
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.message
        })
        return Promise.reject(error)
    }
}

export const deleteStore = (uuid) => async (dispatch) => {
    try {
        const {data} = await axios.delete(`https://qcandlesapi.herokuapp.com/api/store/${uuid}`)
        console.log(data)
        dispatch({
            type: types.DELETE_STORE,
            payload: data.status.uuid
        })
        return Promise.resolve(data)
    }
    catch (error) {
        console.log(error)
        return Promise.reject(error)
    }
}