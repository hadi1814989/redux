import { createSlice } from '@reduxjs/toolkit'

export const productSlice1 = createSlice({
  name: 'product1',
  initialState: {
    value: 0
  },
  reducers: {
    increment1: state => {
      state.value += 1
    },
    decrement1: state => {
    if(state.value){
        state.value -= 1
    }
    },
  
  }
})

// Action creators are generated for each case reducer function
export const { increment1, decrement1} = productSlice1.actions

export default productSlice1.reducer