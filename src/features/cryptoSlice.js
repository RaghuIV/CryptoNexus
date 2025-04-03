import { createSlice } from '@reduxjs/toolkit';

const cryptoSlice = createSlice({
  name: 'crypto',
  initialState: {
    prices: { bitcoin: null, ethereum: null, solana: null },
  },
  reducers: {
    updatePrice: (state, action) => {
      state.prices = { ...state.prices, ...action.payload };
    },
  },
});

export const { updatePrice } = cryptoSlice.actions;
export default cryptoSlice.reducer;
