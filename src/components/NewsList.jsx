'use client';
import { useState, useEffect } from 'react';

export default function NewsList() {
  const [news, setNews] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        res = await axios.get('https://sandbox-api.coinmarketcap.com/v1/cryptocurrency/listings/latest', {
          headers: {
            'X-CMC_PRO_API_KEY': `${process.env.NEXT_PUBLIC_NEWS_API_KEY}`,
          },
        });
        if (!res.ok) throw new Error('Error fetching news');
        const data = await res.json();
        console.log(data)
        if (data.articles && Array.isArray(data.articles)) {
          setNews(data.articles.slice(0, 5));
        } else {
          setError('No news articles found.');
        }
      } catch (error) {
        setError('Failed to load news.');
      } finally {
        setLoading(false);
      }
    };
    fetchNews();
  }, []);

  if (loading) {
    return <div className="p-4 text-center">Loading news...</div>;
  }

  if (error) {
    return <div className="p-4 text-center text-red-500">{error}</div>;
  }

  return (
    <section className="mt-8">
      <h3 className="text-xl font-semibold mb-4">Latest Crypto News</h3>
      <ul className="space-y-4">
        {news.map((article, index) => (
          <li key={index} className="border-b pb-3">
            <a
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-base hover:text-blue-600 transition-colors"
            >
              {article.title}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
