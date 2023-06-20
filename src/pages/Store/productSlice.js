import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export const getProductsData = createAsyncThunk("products",async()=>{
  const res = await fetch("http://localhost:4000/api/v1/products")
  const result = await res.json()
  return result;
})


const productsSlice = createSlice({
  name: 'products',
  initialState:{
    product:[],
    loading:false,
    error:null
  },
  reducers:{},
  extraReducers:{
    [getProductsData.pending]:(state)=>{
      state.loading = true
    },
    [getProductsData.fulfilled]:(state,action)=>{
      state.loading = false
      state.product = action.payload
    },
    [getProductsData.rejected]:(state,action)=>{
      state.loading = false
      state.error = action.payload
    }
  }
})


export default productsSlice.reducer




// yah product details ka hai
export const getProductDetailData = createAsyncThunk("product", async(id)=>{
  const res = await fetch(`http://localhost:4000/api/v1/product/${id}`)
  const result = res.json()
  return result
})


export const productDetailSlice = createSlice({
  name: 'product',
  initialState: {
    productDetail:[],
    loading:false,
    error:null
  },
  reducers:{},
  extraReducers:{
    [getProductDetailData.pending]:(state,action)=>{
      state.loading = true
    },
    [getProductDetailData.fulfilled]:(state,action)=>{
      state.loading = false
      state.productDetail = action.payload
    },
    [getProductDetailData.rejected]:(state,action)=>{
      state.loading = false
      state.error = action.payload
    }
  }
})

