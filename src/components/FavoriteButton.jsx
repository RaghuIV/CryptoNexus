'use client';
import { useDispatch, useSelector } from 'react-redux';
import { toggleFavorite } from '@/features/favoritesSlice';

export default function FavoriteButton({ type, id }) {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites);
  const isFavorite = favorites.some((item) => item.id === `${type}-${id}`);

  return (
    <button
      onClick={() => dispatch(toggleFavorite({ id: `${type}-${id}`, type }))}
      className={`text-2xl transition-colors focus:outline-none ${
        isFavorite
          ? 'text-yellow-500'
          : 'text-gray-400 hover:text-yellow-400'
      }`}
    >
      {isFavorite ? '★' : '☆'}
    </button>
  );
}
