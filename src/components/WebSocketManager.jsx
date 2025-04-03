'use client';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { updatePrice } from '@/features/cryptoSlice';
import { addNotification } from '@/features/notificationSlice';

export default function WebSocketManager() {
  const dispatch = useDispatch();

  useEffect(() => {
    // Connect to CoinCap WebSocket for live price updates
    const ws = new WebSocket(
      'wss://ws.coincap.io/prices?assets=bitcoin,ethereum,solana'
    );

    ws.onmessage = (event) => {
      const data = JSON.parse(event.data);
      dispatch(updatePrice(data));
      // Optional: dispatch notifications for significant changes
      // dispatch(addNotification({ id: Date.now(), type: 'price_alert', message: 'Significant price change detected.' }));
    };

    // Simulate weather alerts every 30 seconds
    const weatherAlertInterval = setInterval(() => {
      dispatch(
        addNotification({
          id: Date.now(),
          type: 'weather_alert',
          message: 'Severe weather alert in your area!'
        })
      );
    }, 30000);

    return () => {
      ws.close();
      clearInterval(weatherAlertInterval);
    };
  }, [dispatch]);

  return null;
}
