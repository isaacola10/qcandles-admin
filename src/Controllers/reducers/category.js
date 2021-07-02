import * as types from '../types/category'

export const getCategoriesReducer = (state = { categories:[] }, action) => {
    const {type, payload} = action

    switch (type){
        case types.GET_CATEGORIES_REQUEST:
            return{
                loading: true,
                categories: []
            }
        case types.GET_CATEGORIES_SUCCESS:
            return {
                loading: false,
                categories: payload
            }
        case types.GET_CATEGORIES_FAIL:
            return {
                loading: false,
                error: payload
            }
        default:
            return state
    }
}

export const createCategoryReducer = (state = { category: {} }, action) => {
    const {type, payload} = action

    switch (type) {
        case types.CREATE_CATEGORY_REQUEST:
            return{
                loading: true,
                category: {}
            }
        case types.CREATE_CATEGORY_SUCCESS:
            return {
                loading: false,
                ...state,
                category: payload
            }
        case types.CREATE_CATEGORY_FAIL:
            return {
                loading: false,
                error: payload
            }
    }
}

export const deleteCategoryReducer = (state = { categories: [] }, action) => {
    const {type, payload} = action

    switch (type) {
        case types.DELETE_CATEGORY:
            return state.categories.filter(({uuid}) => uuid !== payload.uuid)
        default:
            return state
    }
}