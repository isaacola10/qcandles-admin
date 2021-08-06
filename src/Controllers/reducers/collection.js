import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCollections = createAsyncThunk(
  'collection/fetchCollections',
  async () => {
    const { data } = await axios.get('http://localhost:8000/api/collections');
    return data
  }
)

export const createCollection = createAsyncThunk(
  'collection/createCollection',
  async (formData) => {
    const {title, description} = formData
    const response = await axios.post('http://localhost:8000/api/collection', {title, description});
    return response.data.status
  }
)

export const collectionSlice = createSlice({
  name: 'collections',
  initialState: {collections: [], status: 'idle', errors: null},
  reducers:{},
  extraReducers: {
    [fetchCollections.pending]: (state) => {
      state.status = 'loading'
    },
    [fetchCollections.fulfilled]: (state, action) => {
      state.status = 'succeeded'
      state.collections = state.collections.concat(action.payload)
    },
    [fetchCollections.rejected]: (state, action) => {
      state.status='error'
      state.error = action.payload
    },
    [createCollection.fulfilled]: (state, action) => {
      state.collections.push(action.payload)
    },
  }
})

export const selectAllCollection = (state) => state.collections.collections
export default collectionSlice.reducer