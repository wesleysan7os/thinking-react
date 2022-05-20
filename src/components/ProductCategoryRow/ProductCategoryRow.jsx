import { ProductRow } from '../ProductRow/ProductRow';
import './ProductCategoryRow.css';

export function ProductCategoryRow({ category, products }) {  
  return (
    <div className="product-category-row">
      <span>{category}</span>
      <ProductRow products={products} />
    </div>
  );
}