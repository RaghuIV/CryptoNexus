import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchWeather = createAsyncThunk('weather/fetchWeather', async (city) => {
  const res = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}&units=metric`
  );
  return { city, data: res.data };
});

const weatherSlice = createSlice({
  name: 'weather',
  initialState: { cities: {}, loading: false },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchWeather.fulfilled, (state, action) => {
      state.cities[action.payload.city] = action.payload.data;
    });
  },
});

export default weatherSlice.reducer;
