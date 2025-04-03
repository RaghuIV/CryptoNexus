'use client';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { removeNotification } from '@/features/notificationSlice';

export default function Toast({ notification }) {
  const dispatch = useDispatch();

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(removeNotification(notification.id));
    }, 5000);
    return () => clearTimeout(timer);
  }, [dispatch, notification.id]);

  return (
    <div className="bg-secondary text-white p-3 rounded shadow-lg mb-4 w-full max-w-sm mx-auto">
      <p className="text-sm">{notification.message}</p>
    </div>
  );
}
