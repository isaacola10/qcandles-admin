import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";

export const fetchLocations = createAsyncThunk(
  'locations/fetchLocations',
  async () => {
     const {data} = await axios.get('http://localhost:8000/api/shippings')
    return data
  }
)

export const createLocation = createAsyncThunk(
  'locations/createLocation',
  async (formData) => {
    const response = await axios.post('http://localhost:8000/api/shipping', formData);
    return response.data.status
  }
)

export const locationSlice = createSlice({
  name: 'locations',
  initialState: {locations:[], status:'idle', error:{}},
  reducers:{},
  extraReducers:{
    [fetchLocations.pending]: (state) => {
      state.status = 'loading'
    },
    [fetchLocations.fulfilled]: (state, action) => {
      state.status = 'succeeded'
      state.locations = state.locations.concat(action.payload)
    },
    [fetchLocations.rejected]: (state, action) => {
      state.status = 'error'
      state.error = action.payload
    },
    [createLocation.fulfilled]: (state, action) => {
      state.locations.push(action.payload)
    }
  }
})

export const selectAllLocation = (state) => state.locations.locations
export default locationSlice.reducer