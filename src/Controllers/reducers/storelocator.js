import * as types from '../types/storelocator'

export const getStoresReducer = (state = { stores:[] }, action) => {
    const {type, payload} = action

    switch (type) {
        case types.GET_STORES_REQUEST:
            return {
                loading: true,
                payload: []
            }
        case types.GET_STORES_SUCCESS:
            return {
                loading: false,
                stores: payload
            }
        case types.CREATE_STORE_FAIL:
            return {
                loading: false,
                error: payload
            }
        default:
            return state
    }
}

export const createStoreReducer = (state = { store:{} }, action) => {
    const {type, payload} = action

    switch (type) {
        case types.CREATE_STORE_REQUEST:
            return {
                loading: true,
            }
        case types.CREATE_STORE_SUCCESS:
            return {
                loading: false,
                ...state,
                product: payload
            }
        case types.CREATE_STORE_FAIL:
            return {
                loading: false,
                error: payload
            }
        default:
            return state
    }
}

export const getStoreReducer = (state = { store:{} },action) => {
    const {type, payload} = action

    switch (type) {
        case types.GET_STORE_REQUEST:
            return {
                loading: true,
                store: {}
            }
        case types.GET_STORE_SUCCESS:
            return {
                loading: false,
                store: payload
            }
        case types.GET_STORE_FAIL:
            return {
                loading: false,
                error: payload
            }
        default:
            return state
    }
}

export const updateStoreReducer = (state = { stores:[] }, action) => {
    const {type, payload} = action

    switch (type) {
        case types.UPDATE_STORE_REQUEST:
            return {
                loading: true,
                stores: []
            }
        case types.UPDATE_STORE_SUCCESS:
            const {uuid, data} = payload
            return {
                ...state,
                loading: false,
                stores: state.stores.map(store => {
                    if(store.uuid === uuid) {
                        store = data.status
                    }
                })
            }
        case types.UPDATE_STORE_FAIL:
            return {
                loading: false,
                error: payload
            }
        default:
            return state
    }
}

export const deleteStoreReducer = (state = { stores: [] }, action) => {
    const {type, payload} = action

    switch (type) {
        case types.DELETE_STORE:
            return state.stores.filter(({uuid}) => uuid !== payload.uuid)
        default:
            return state
    }
}