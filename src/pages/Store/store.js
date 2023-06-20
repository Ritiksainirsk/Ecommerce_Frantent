import { configureStore } from '@reduxjs/toolkit'
import productsSlice, { productDetailSlice } from './productSlice' 

 const store = configureStore({
  reducer: {
    products: productsSlice,
    product : productDetailSlice.reducer
  },
})

export default store;