import axios from 'axios';
import React from 'react';

export default async function CityDetail({ params }) {
  try {
    const res = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}`
    );
    const forecast = res.data;
    
    const dailyForecast = forecast.list.filter((_, index) => index % 8 === 0);

    return (
      <div className="p-8">
        <h1 className="text-3xl font-bold mb-4">{params.name} - 5 Day Forecast</h1>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {dailyForecast.map((day, idx) => (
            <div key={idx} className="bg-white p-4 rounded-lg shadow">
              <p>{new Date(day.dt * 1000).toLocaleDateString()}</p>
              <p>Temp: {day.main.temp.toFixed(1)}°C</p>
              <p>Humidity: {day.main.humidity}%</p>
              <p>{day.weather[0].description}</p>
            </div>
          ))}
        </div>
      </div>
    );
  } catch (error) {
    return <div className="p-8 text-red-500">Error loading forecast data.</div>;
  }
}
