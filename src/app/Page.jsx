'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    // Automatically redirect to dashboard
    router.push('/dashboard');
  }, [router]);

  return (
    <div className="text-center">
      <h2 className="text-3xl font-bold mb-4">Welcome to CryptoWeather Nexus</h2>
      <p>Redirecting to dashboard...</p>
    </div>
  );
}
