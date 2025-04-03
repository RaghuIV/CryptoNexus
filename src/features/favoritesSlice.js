import { createSlice } from '@reduxjs/toolkit';

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: [],
  reducers: {
    toggleFavorite: (state, action) => {
      const exists = state.some(item => item.id === action.payload.id);
      return exists
        ? state.filter(item => item.id !== action.payload.id)
        : [...state, action.payload];
    },
  },
});

export const { toggleFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;
