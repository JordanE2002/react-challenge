import './App.css';
import products from './products';

import ProductFilters from './components/ProductFilters';
import ProductSorting from './components/ProductSorting';
import ProductSearch from './components/ProductSearch';

import useProductFilters from './hooks/useProductFilters';
import useProductSorting from './hooks/useProductSorting';
import useProductSearch from './hooks/useProductSearch';

function App() {
  const {
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
  } = useProductFilters(products);

  const {
    searchTerm,
    setSearchTerm,
    searchedProducts
  } = useProductSearch(filteredProducts);

  const {
    sortedProducts,
    sortOption,
    setSortOption
  } = useProductSorting(searchedProducts);

  return (
    <div className="App">
      <h1 className="heading">Product List</h1>

      <div className="filter-container">
        <div className="filters-group">
          <ProductFilters
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            minPrice={minPrice}
            setMinPrice={setMinPrice}
            maxPrice={maxPrice}
            setMaxPrice={setMaxPrice}
            inStockOnly={inStockOnly}
            setInStockOnly={setInStockOnly}
            categories={categories}
          />
          <ProductSearch
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
          />
        </div>

        <ProductSorting sortOption={sortOption} setSortOption={setSortOption} />
      </div>

      <div className="table-wrapper">
        {sortedProducts.length === 0 ? (
          <div className="no-results">No products match your criteria.</div>
        ) : (
          <table className="product-table">
            <thead>
              <tr>
                <th>Image</th>
                <th>Name</th>
                <th>Category</th>
                <th>Price</th>
                <th>Rating</th>
                <th>Stock</th>
              </tr>
            </thead>
            <tbody>
              {sortedProducts.map(({ id, name, category, price, rating, inStock, imageUrl }) => (
                <tr key={id}>
                  <td className="cell-image">
                    <img src={imageUrl} alt={name} className="small-img" />
                  </td>
                  <td>{name}</td>
                  <td>{category}</td>
                  <td>${price.toFixed(2)}</td>
                  <td>
                    {rating}{' '}
                    <i className="fa-solid fa-star" aria-label="star" style={{ color: '#ffc107' }}></i>
                  </td>
                  <td>
                    {inStock ? (
                      <span className="in-stock">In Stock</span>
                    ) : (
                      <span className="out-of-stock">Out of Stock</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

export default App;
