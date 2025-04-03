import { configureStore } from '@reduxjs/toolkit';
import cryptoReducer from '../features/cryptoSlice';
import favoritesReducer from '../features/favoritesSlice';
import weatherReducer from '../features/weatherSlice';
import notificationReducer from '../features/notificationSlice';

export const store = configureStore({
  reducer: {
    weather: weatherReducer,
    crypto: cryptoReducer,
    favorites: favoritesReducer,
    notifications: notificationReducer,
  },
});
