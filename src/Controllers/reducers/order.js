import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from "axios";

export const fetchOrders = createAsyncThunk(
  'orders/fetchOrders',
  async () => {
    const {data} = await axios.get('http://localhost:8000/api/orders');
    return data
  }
)

export const orderSlice = createSlice({
  name: 'orders',
  initialState: {orders:[], errors: {errors: null}, status: 'idle'},
  reducers:{},
  extraReducers: {
    [fetchOrders.pending]: (state) => {
      state.status = 'loading'
    },
    [fetchOrders.fulfilled]: (state, action) => {
      state.status='succeeded'
      state.orders = state.orders.concat(action.payload)
    },
    [fetchOrders.rejected]: (state, action) => {
      state.status = 'error'
      state.errors = {errors: action.payload}
    }
  }
})

export const selectAllOrders = (state) => state.orders.orders
export default orderSlice.reducer