import axios from 'axios'
import * as types from '../types/category'

export const getCategories = () => async (dispatch) => {
    try {
        dispatch({ type: types.GET_CATEGORIES_REQUEST })

        const { data } = await axios.get('https://qcandlesapi.herokuapp.com/api/categories')
        dispatch({
            type: types.GET_CATEGORIES_SUCCESS,
            payload: data
        })
    }
    catch (error) {
        dispatch({
            type: types.GET_CATEGORIES_FAIL,
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.message
        })
    }
}

export const createCategory = (category_name) => async (dispatch) => {
    try {
        dispatch({type: types.CREATE_CATEGORY_REQUEST})

        const { data } = await axios.post('https://qcandlesapi.herokuapp.com/api/category', {category_name})
        dispatch({
            type: types.CREATE_CATEGORY_SUCCESS,
            payload: data
        })
        return Promise.resolve(data)
    }catch (error) {
        dispatch({
            type: types.CREATE_CATEGORY_FAIL,
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.message
        })
        return Promise.reject(error)
    }
}

export const deleteCategory = (uuid) => async (dispatch) => {
    try {
        const {data} = await axios.delete(`https://qcandlesapi.herokuapp.com/api/category/${uuid}`)
        console.log(data)
        dispatch({
            type: types.DELETE_CATEGORY,
            payload: data.status.uuid
        })
        return Promise.resolve(data)
    }
    catch (error) {
        console.log(error)
        return Promise.reject(error)
    }
}