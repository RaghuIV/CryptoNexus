'use client';
import { useState, useEffect } from 'react';

export default function WeatherCard({ city }) {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [lat, setLat] = useState(null);
  const [lon, setLon] = useState(null);

  // Get user's location
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLat(position.coords.latitude);
          setLon(position.coords.longitude);
        },
        (err) => {
          setError('Unable to retrieve your location.');
          setLoading(false);
        }
      );
    } else {
      setError('Geolocation is not supported by this browser.');
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    const fetchWeather = async () => {
      if (lat === null || lon === null) return;
      try {
        const res = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}&units=metric`
        );
        if (!res.ok) throw new Error('Error fetching weather');
        const data = await res.json();
        setWeather(data);
      } catch (err) {
        setError('Failed to load weather data.');
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, [lat, lon]);

  if (loading) {
    return (
      <div className="bg-white p-6 rounded-lg shadow text-center">
        Loading...
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-white p-6 rounded-lg shadow text-center text-red-500">
        {error}
      </div>
    );
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow">
      <h4 className="font-bold text-lg mb-2">{city || 'Your Location'}</h4>
      {weather && weather.main ? (
        <div className="space-y-1">
          <p className="text-sm">
            <span className="font-medium">Temp:</span> {weather.main.temp.toFixed(1)}°C
          </p>
          <p className="text-sm">
            <span className="font-medium">Humidity:</span> {weather.main.humidity}%
          </p>
          <p className="text-sm capitalize">
            <span className="font-medium">Condition:</span> {weather.weather[0].description}
          </p>
        </div>
      ) : (
        <p className="text-gray-500">No weather data available.</p>
      )}
    </div>
  );
}
