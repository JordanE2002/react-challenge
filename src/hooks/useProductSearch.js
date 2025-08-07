import { useState, useEffect } from 'react';

export default function useProductSearch(filteredProducts) {
  const [searchTerm, setSearchTerm] = useState('');
  const [debouncedTerm, setDebouncedTerm] = useState('');

  // Debounce the search input
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedTerm(searchTerm);
    }, 300); // 300ms debounce

    return () => clearTimeout(handler); // cleanup on new keystroke
  }, [searchTerm]);

  // Filter based on debounced input
  const searchedProducts = debouncedTerm
    ? filteredProducts.filter((p) =>
        p.name.toLowerCase().includes(debouncedTerm.toLowerCase())
      )
    : filteredProducts;

  return {
    searchTerm,
    setSearchTerm,
    searchedProducts,
  };
}
