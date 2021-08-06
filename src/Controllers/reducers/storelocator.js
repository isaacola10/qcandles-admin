import * as types from '../types/storelocator'
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";

export const fetchStores = createAsyncThunk(
  'stores/fetchStores',
  async () => {
      const { data } = await axios.get('http://localhost:8000/api/stores');
      return data;
  }
)

export const createStore = createAsyncThunk(
  'stores/createStores',
  async (formData) => {
      const response = await axios.post('http://localhost:8000/api/store', formData);
      return response.data.status
  }
)

export const storeSlice = createSlice({
    name: 'stores',
    initialState: {stores:[], status:'idle', error: {}},
    reducers:{},
    extraReducers: {
        [fetchStores.pending]: (state, action) => {
            state.status = 'loading'
        },
        [fetchStores.fulfilled]: (state, action) => {
            state.status = 'succeeded'
            state.stores = state.stores.concat(action.payload)
        },
        [fetchStores.rejected]: (state, action) => {
          state.status = 'error'
        },
        [createStore.fulfilled]: (state, action) => {
            state.stores.push(action.payload)
        }
    }
})

export const selectAllStores = (state) => state.stores.stores
export default storeSlice.reducer


// export const getStoreReducer = (state = { store:{} },action) => {
//     const {type, payload} = action
//
//     switch (type) {
//         case types.GET_STORE_REQUEST:
//             return {
//                 loading: true,
//                 store: {}
//             }
//         case types.GET_STORE_SUCCESS:
//             return {
//                 loading: false,
//                 store: payload
//             }
//         case types.GET_STORE_FAIL:
//             return {
//                 loading: false,
//                 error: payload
//             }
//         default:
//             return state
//     }
// }
//
// export const updateStoreReducer = (state = { stores:[] }, action) => {
//     const {type, payload} = action
//
//     switch (type) {
//         case types.UPDATE_STORE_REQUEST:
//             return {
//                 loading: true,
//                 stores: []
//             }
//         case types.UPDATE_STORE_SUCCESS:
//             const {uuid, data} = payload
//             return {
//                 ...state,
//                 loading: false,
//                 stores: state.stores.map(store => {
//                     if(store.uuid === uuid) {
//                         store = data.status
//                     }
//                 })
//             }
//         case types.UPDATE_STORE_FAIL:
//             return {
//                 loading: false,
//                 error: payload
//             }
//         default:
//             return state
//     }
// }
//
export const deleteStoreReducer = (state = { stores: [] }, action) => {
    const {type, payload} = action

    switch (type) {
        case types.DELETE_STORE:
            return state.stores.filter(({uuid}) => uuid !== payload.uuid)
        default:
            return state
    }
}