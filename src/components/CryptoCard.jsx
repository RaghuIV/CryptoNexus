'use client';
import { useEffect, useState } from 'react';

export default function CryptoCard({ coinId }) {
  const [coinData, setCoinData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCoinData = async () => {
      try {
        const res = await fetch(
          `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${coinId}`
        );
        if (!res.ok) throw new Error('Error fetching coin data');
        const data = await res.json();
        setCoinData(data[0]);
      } catch (err) {
        setError('Failed to fetch coin data.');
      } finally {
        setLoading(false);
      }
    };
    fetchCoinData();
  }, [coinId]);

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
      <h4 className="font-bold text-lg mb-2">{coinData.name}</h4>
      <p className="text-sm">
        <span className="font-medium">Price:</span> $
        {coinData.current_price.toLocaleString()}
      </p>
      <p className="text-sm">
        <span className="font-medium">24h Change:</span>{' '}
        {coinData.price_change_percentage_24h.toFixed(2)}%
      </p>
      <p className="text-sm">
        <span className="font-medium">Market Cap:</span> $
        {coinData.market_cap.toLocaleString()}
      </p>
    </div>
  );
}
