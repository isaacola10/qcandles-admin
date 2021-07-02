import * as types from '../types/product'


export const  getProductReducer = (state = { products: [] }, action) => {
    const { type, payload } = action

    switch (type) {
        case types.GET_PRODUCTS_REQUEST:
            return {
               loading:true,
               products: [],
            };
        case types.GET_PRODUCTS_SUCCESS:
            return {
                loading: false,
                products: payload,
            };
        case types.GET_PRODUCTS_FAIL:
            return {
                loading: false,
                error: payload
            };
        default:
            return state;
    }
}

export const getProductDetailsReducer = (state = {product: {}}, action) => {
    const {type, payload} = action

    switch (type){
        case types.GET_PRODUCT_REQUEST:
            return {
                loading: true,
            }
        case types.GET_PRODUCT_SUCCESS:
            return {
                loading: false,
                product: payload
            }
        case types.GET_PRODUCT_FAIL:
            return {
                loading: false,
                error: payload
            }
        default:
            return state
    }
}

export const createProductReducer = (state = { product: [] }, action) => {
    const {type, payload} = action

    switch (type) {
        case types.CREATE_PRODUCT_REQUEST:
            return {
                loading: true,
                product: []
            }
        case types.CREATE_PRODUCT_SUCCESS:
            return {
                loading: false,
                ...state,
                product: payload
            }
        case types.CREATE_PRODUCT_FAIL:
            return {
                loading: false,
                error: payload
            }
        default:
            return state
    }
}



export const updateProductReducer = (state = { product: [] }, action) => {
    const {type, payload} = action

    switch (type){
        case types.UPDATE_PRODUCT_REQUEST:
            return {
                loading: true,
                products: [],
            }
        case types.UPDATE_PRODUCT_SUCCESS:
            const {uuid, data} = payload
            return{
                ...state,
                loading: false,
                products: state.products.map(product => {
                    if(product.uuid === uuid){
                        product = data.status;
                        return product
                    }
                })
            }
        case types.UPDATE_PRODUCT_FAIL:
            return {
                loading: false,
                error: payload
            }
        default:
            return state
    }
}

export const deleteProductReducer = (state = { products: [] }, action) => {
    const {type, payload} = action

    switch (type) {
        case types.DELETE_PRODUCT:
            return state.products.filter(({uuid}) => uuid !== payload.uuid)
        default:
            return state
    }
}