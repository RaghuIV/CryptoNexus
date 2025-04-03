import WeatherCard from '@/components/WeatherCard';
import CryptoCard from '@/components/CryptoCard';
import WebSocketManager from '@/components/WebSocketManager';
import NewsList from '@/components/NewsList';

export default function Dashboard() {
  const cities = ['New York', 'London', 'Tokyo'];
  const cryptos = ['bitcoin', 'ethereum', 'solana'];

  return (
    <div>
      <WebSocketManager />

      <h2 className="text-3xl font-bold mb-8">Dashboard</h2>

      <div className="grid gap-6 md:grid-cols-2">
        <section>
          <h3 className="text-xl font-semibold mb-4">Weather</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {cities.map((city) => (
              <WeatherCard key={city} city={city} />
            ))}
          </div>
        </section>

        <section>
          <h3 className="text-xl font-semibold mb-4">Cryptocurrency</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {cryptos.map((coin) => (
              <CryptoCard key={coin} coinId={coin} />
            ))}
          </div>
        </section>
      </div>

      <NewsList />
    </div>
  );
}
