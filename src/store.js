import { configureStore } from '@reduxjs/toolkit'
import productSlice from './component/slice/productSlice'
import productSlice1 from './component/slice/productSlice1'
import productSlice2 from './component/slice/productSlice2'

export default configureStore({
  reducer: {
    product:productSlice,
    product1:productSlice1,
    product2: productSlice2
  }
})