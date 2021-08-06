import axios from 'axios'
import * as types from '../types/fragrance'

export const getFragrances = () => async (dispatch) => {
  try {
    dispatch({ type: types.GET_FRAGRANCES_REQUEST })

    const { data } = await axios.get('http://127.0.0.1:8000/api/fragrances')
    // const { data } = await axios.get('https://qcandlesapi.herokuapp.com/api/categories')
    dispatch({
      type: types.GET_FRAGRANCES_SUCCESS,
      payload: data
    })
  }
  catch (error) {
    dispatch({
      type: types.GET_FRAGRANCES_FAIL,
      payload: error.response && error.response.data.message
        ? error.response.data.message
        : error.message
    })
  }
}

export const createFragrance = (title, description) => async (dispatch) => {
  try {
    dispatch({type: types.CREATE_FRAGRANCE_REQUEST})

    const { data } = await axios.post('http://127.0.0.1:8000/api/fragrance', {title, description})
    // const { data } = await axios.post('https://qcandlesapi.herokuapp.com/api/category', {category_name})
    dispatch({
      type: types.CREATE_FRAGRANCE_SUCCESS,
      payload: data
    })
    return Promise.resolve(data)
  }catch (error) {
    dispatch({
      type: types.CREATE_FRAGRANCE_FAIL,
      payload: error.response && error.response.data.message
        ? error.response.data.message
        : error.message
    })
    return Promise.reject(error)
  }
}

export const deleteFragrance = (uuid) => async (dispatch) => {
  try {
    const {data} = await axios.delete(`http://127.0.0.1:8000/api/fragrance/${uuid}`)
    // const {data} = await axios.delete(`https://qcandlesapi.herokuapp.com/api/category/${uuid}`)
    console.log(data)
    dispatch({
      type: types.DELETE_FRAGRANCE,
      payload: data.status.uuid
    })
    return Promise.resolve(data)
  }
  catch (error) {
    console.log(error)
    return Promise.reject(error)
  }
}