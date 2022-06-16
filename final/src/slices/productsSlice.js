import { createSlice, createAsyncThunk, nanoid } from "@reduxjs/toolkit";

export const getProducts = createAsyncThunk("product/getProducts", 
  async () => {
    return await fetch("https://fakestoreapi.com/products?limit=10")
    .then((res) => res.json());
})

export const productsSlice = createSlice( {
  name: "products",
  initialState: { data: [], inCart: {products: [], price: 0}, loading: false, error: null },
  reducers: {
    addToCart: (state, action) => {
      state.inCart.products.unshift({product: action.payload, quantity: 0});
      state.inCart.price += action.payload.price;
    },
    increase: (state, action) => {
      let res = state.inCart.products.find(i => i.product.id === action.payload);
      res.quantity += 1
      console.log(action.payload)
    }
  },

  extraReducers: {
    [getProducts.pending]: (state, action) => {
      state.loading = true
    },
    [getProducts.fulfilled]: (state, action) => {
      state.loading = false;
      state.data = [action.payload];
    },
    [getProducts.rejected]: (state, action) => {
      state.loading = "failed";
      state.error = action.error.message
    }
  }
})

export const { addToCart, increase } = productsSlice.actions;
export default productsSlice.reducer;