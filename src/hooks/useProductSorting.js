import { useState, useMemo } from 'react';

export default function useProductSorting(products) {
  const [sortOption, setSortOption] = useState('');

  const sortedProducts = useMemo(() => {
    return [...products].sort((a, b) => {
      switch (sortOption) {
        case 'price-asc':
          return a.price - b.price;
        case 'price-desc':
          return b.price - a.price;
        case 'rating-asc':
          return a.rating - b.rating;
        case 'rating-desc':
          return b.rating - a.rating;
        default:
          return 0;
      }
    });
  }, [products, sortOption]);

  return { sortedProducts, sortOption, setSortOption };
}
