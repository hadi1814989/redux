import { createSlice } from '@reduxjs/toolkit'

export const productSlice2 = createSlice({
  name: 'product2',
  initialState: {
    value: 0
  },
  reducers: {
    increment2: state => {
      state.value += 1
    },
    decrement2: state => {
    if(state.value){
        state.value -= 1
    }
    },
  
  }
})

// Action creators are generated for each case reducer function
export const { increment2, decrement2} = productSlice2.actions

export default productSlice2.reducer