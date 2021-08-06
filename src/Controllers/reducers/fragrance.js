import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";

export const fetchFragrances = createAsyncThunk(
  'fragrance/fetchFragrances',
  async () => {
    const { data } = await axios.get('http://localhost:8000/api/fragrances')
    return data
  }
)

export const createFragranceThunk = createAsyncThunk(
  'fragrance/createFragranceThunk',
  async (formdata) => {
    const {title, description} = formdata
    const response = await axios.post(`http://localhost:8000/api/fragrance`, {title, description})
    return response.data.status
  }
)

export const deleteFragrance = createAsyncThunk(
  'fragrance/deleteFragrance',
  async (uuid) => {
    const response = await axios.delete(`http://localhost:8000/api/fragrance/${uuid}`)
    return response.data.status.id
  }
)


export const fragranceSlice = createSlice({
  name: 'fragrances',
  initialState: {fragrances: [], status: 'idle', error:null},
  reducers: {

  },
  extraReducers: {
    [fetchFragrances.pending]: (state, action) => {
      state.status = 'loading'
    },
    [fetchFragrances.fulfilled]: (state, action) => {
      state.status = 'succeeded'
      state.fragrances = state.fragrances.concat(action.payload)
    },
    [createFragranceThunk.fulfilled]: (state, action) => {
      state.fragrances.push(action.payload)
    },
    [deleteFragrance.fulfilled]: (state, action) => {
      state.fragrances.filter(({uuid}) => uuid.id !== action.payload)
      window.location.reload()
    }
  }
})

export const selectAllFragrances = (state) => state.fragrances.fragrances
export default fragranceSlice.reducer
