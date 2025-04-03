// components/NotificationContainer.jsx
'use client';
import { useSelector } from 'react-redux';
import Toast from './Toast';

export default function NotificationContainer() {
  const notifications = useSelector((state) => state.notifications);
  
  return (
    <div className="fixed top-4 right-4 z-50 space-y-2">
      {notifications.map((notification) => (
        <Toast key={notification.id} notification={notification} />
      ))}
    </div>
  );
}
