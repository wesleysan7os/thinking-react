import { useState } from 'react';

import { SearchBar }  from './components/SearchBar/SearchBar';
import { ProductTable } from './components/ProductTable/ProductTable';

import './App.css';

export default function App() {
  const [products, setProducts] = useState([
    {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
    {category: "Sporting Goods", price: "$19.99", stocked: true, name: "Baseball"},
    {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
    {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
    {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
    {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
  ]);
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [isFilteredByStock, setisFilteredByStock] = useState(false);
  const [tableTitle, setTableTitle] = useState(["Name", "Price"]);

  function handleSearchProduct(e) {
    let updateFilteredProducts = products;
    if (e.target.value) {
        updateFilteredProducts = products.filter((product) =>
          product.name.toUpperCase().includes(e.target.value.toUpperCase())
        );
    }
    setFilteredProducts(updateFilteredProducts);
  };

  function handleFilterByStock(isCheckBoxSelected) {
    setisFilteredByStock(isCheckBoxSelected);
    let updateFilteredProducts = products;

    if (isCheckBoxSelected) {
      updateFilteredProducts = products.filter((product) => product.stocked);
    }
    setFilteredProducts(updateFilteredProducts);
  }

  return (
    <div className="App">
      <SearchBar 
        searchProduct={handleSearchProduct} 
        filterByStock={() => handleFilterByStock(!isFilteredByStock)} 
      />
      <ProductTable title={tableTitle} products={filteredProducts}/>
    </div>
  );
}
