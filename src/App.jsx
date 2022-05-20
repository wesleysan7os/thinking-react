import { useState } from 'react';

import { SearchBar }  from './components/SearchBar/SearchBar';
import { ProductTable } from './components/ProductTable/ProductTable';
import { ProductCategoryRow } from './components/ProductCategoryRow/ProductCategoryRow';
import { ProductRow } from './components/ProductRow/ProductRow';
import './App.css';

export default function App() {
  const [products, setProducts] = useState([
    {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
    {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
    {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
    {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
    {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
    {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
  ]);
  const [filteredProducts, setFilteredProducts] = useState(products);

  const handleSearchProduct = (e) => {
    setFilteredProducts(products => {
      if (e.target.value) {
        return products.filter((product) =>
          product.name.toUpperCase().includes(e.target.value.toUpperCase())
        );
      }
      return [...products];
    });
  };

  const handleFilterByStock = (e) => {

  }

  return (
    <div className='App'>
      <SearchBar searchProduct={handleSearchProduct}/>
      { console.log(filteredProducts) }
      {/* <ProductTable>
        <ProductCategoryRow>
          <ProductRow></ProductRow>
        </ProductCategoryRow>
      </ProductTable> */}
    </div>
  );
}
