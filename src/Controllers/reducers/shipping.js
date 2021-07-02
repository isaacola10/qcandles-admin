import * as types from '../types/shipping'

export const getShippingsReducer = (state = { shippings:[] }, action) => {
    const {type, payload} = action

    switch (type){
        case types.GET_SHIPPINGS_REQUEST:
            return{
                loading: true,
                shippings: []
            }
        case types.GET_SHIPPINGS_SUCCESS:
            return {
                loading: false,
                shippings: payload
            }
        case types.GET_SHIPPINGS_FAIL:
            return {
                loading: false,
                error: payload
            }
        default:
            return state
    }
}

export const createShippingReducer = (state = { shipping: {} }, action) => {
    const {type, payload} = action

    switch (type) {
        case types.CREATE_SHIPPING_REQUEST:
            return{
                loading: true,
            }
        case types.CREATE_SHIPPING_SUCCESS:
            return {
                loading: false,
                ...state,
                shipping: payload
            }
        case types.CREATE_SHIPPING_FAIL:
            return {
                loading: false,
                error: payload
            }
        default:
            return state
    }
}

export const deleteShippingReducer = (state = { shippings: [] }, action) => {
    const {type, payload} = action

    switch (type) {
        case types.DELETE_SHIPPING:
            return state.shippings.filter(({uuid}) => uuid !== payload.uuid)
        default:
            return state
    }
}