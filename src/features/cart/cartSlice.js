import { createSlice } from '@reduxjs/toolkit';
import cartItems from '../../cartItems';


const initialState = {
  cartItems: cartItems,
  name: '',
  area: '',
  category: '',
  isOpen: true,
  isLoading: true,
};


const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    clearCart: (state) => {
      state.cartItems = [];
    },
    removeItem: (state, action) => {
      const itemId = action.payload;
      state.cartItems = state.cartItems.filter((item) => item.id !== itemId);
    },
    increase: (state, { payload }) => {
      const cartItem = state.cartItems.find((item) => item.id === payload.id);
      cartItem.amount = cartItem.amount + 1;
    },
    decrease: (state, { payload }) => {
      const cartItem = state.cartItems.find((item) => item.id === payload.id);
      cartItem.amount = cartItem.amount - 1;
    },
    updateArray : (state , action) => {
      const temp = action.payload;
      state.cartItems = state.cartItems.concat(temp);
      console.log(cartItems);
    },
    calculateTotals: (state) => {
      let amount = 0;
      let total = 0;
      state.cartItems.forEach((item) => {
        amount += item.amount;
        total += item.amount * item.price;
      });
      state.amount = amount;
      state.total = total;
    },
  },
});

// console.log(cartSlice);
export const { clearCart, removeItem, increase, decrease, calculateTotals,updateArray } =
  cartSlice.actions;

export default cartSlice.reducer;
