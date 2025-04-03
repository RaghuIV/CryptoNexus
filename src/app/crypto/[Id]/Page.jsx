import axios from 'axios';
import React from 'react';

export default async function CryptoDetail({ params }) {
  try {
    const res = await axios.get(
      `https://api.coingecko.com/api/v3/coins/${params.id}?localization=false&tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=false`
    );
    const crypto = res.data;
    return (
      <div className="p-8">
        <h1 className="text-3xl font-bold mb-4">{crypto.name} Details</h1>
        <div className="bg-white p-4 rounded-lg shadow">
          <p>Current Price: ${crypto.market_data.current_price.usd.toLocaleString()}</p>
          <p>24h Change: {crypto.market_data.price_change_percentage_24h.toFixed(2)}%</p>
          <p>Market Cap: ${crypto.market_data.market_cap.usd.toLocaleString()}</p>
        </div>
      </div>
    );
  } catch (error) {
    return <div className="p-8 text-red-500">Error loading cryptocurrency data.</div>;
  }
}
