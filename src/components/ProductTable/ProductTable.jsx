import { useEffect, useState } from 'react';

import { ProductCategoryRow } from '../ProductCategoryRow/ProductCategoryRow';
import './ProductTable.css';

export function ProductTable({ title, products }) {
  const [name, price] = title;
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    setCategories(() => 
      Array.from(new Set(products.map(({ category }) => category)))
    );
  }, [products]);

  function filterProductByCategory(category) {
    return products.filter((product) => product.category === category);
  }

  return (
    <div className="product-table">
      <div className="title">
        <span>{name}</span>
        <span>{price}</span>
      </div>

      {categories &&
        categories.map((category) => (
          <ProductCategoryRow
            category={category}
            products={filterProductByCategory(category)}
          />
        ))}
    </div>
  );
}