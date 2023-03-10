import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartState: false,
};

const CartSlice = createSlice({
  initialState,
  name: "cart",
  reducers: {
    setOpenCart: (state, action) => {
        state.cartState = action.payload.cartState
    },
    setCloseCart: (state, action) => {
        
    },
  },
});

export const { setCloseCart, setOpenCart } = CartSlice.actions;
export default CartSlice.reducer;
