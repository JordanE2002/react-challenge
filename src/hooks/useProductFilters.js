import { useState } from 'react';

// Custom hook to manage filtering logic
export default function useProductFilters(products) {
  const [selectedCategory, setSelectedCategory] = useState(''); // empty = all
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [inStockOnly, setInStockOnly] = useState(false);

  const filteredProducts = products.filter((product) => {
    const categoryMatch = selectedCategory === '' || product.category === selectedCategory;
    const priceMatch =
      (minPrice === '' || product.price >= parseFloat(minPrice)) &&
      (maxPrice === '' || product.price <= parseFloat(maxPrice));
    const stockMatch = !inStockOnly || product.inStock;
    return categoryMatch && priceMatch && stockMatch;
  });

  const categories = [...new Set(products.map((p) => p.category))];

  return {
    filteredProducts,
    categories,
    selectedCategory,
    setSelectedCategory,
    minPrice,
    setMinPrice,
    maxPrice,
    setMaxPrice,
    inStockOnly,
    setInStockOnly
  };
}
