import * as types from '../types/discount'

export const getDiscountsReducer = (state = { discounts:[] }, action) => {
    const {type, payload} = action

    switch (type){
        case types.GET_DISCOUNTS_REQUEST:
            return{
                loading: true,
                discounts: []
            }
        case types.GET_DISCOUNTS_SUCCESS:
            return {
                loading: false,
                discounts: payload
            }
        case types.GET_DISCOUNTS_FAIL:
            return {
                loading: false,
                error: payload
            }
        default:
            return state
    }
}

export const createDiscountReducer = (state = { discount: {} }, action) => {
    const {type, payload} = action

    switch (type) {
        case types.CREATE_DISCOUNT_REQUEST:
            return{
                loading: true,
            }
        case types.CREATE_DISCOUNT_SUCCESS:
            return {
                loading: false,
                ...state,
                discount: payload
            }
        case types.CREATE_DISCOUNT_FAIL:
            return {
                loading: false,
                error: payload
            }
        default:
            return state
    }
}

export const deleteDiscountReducer = (state = { discounts: [] }, action) => {
    const {type, payload} = action

    switch (type) {
        case types.DELETE_DISCOUNT:
            return state.discounts.filter(({uuid}) => uuid !== payload.uuid)
        default:
            return state
    }
}