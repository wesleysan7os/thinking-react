import { v4 as uuidv4 } from "uuid";

import "./ProductRow.css";

export function ProductRow({ products }) {
  return (
    <>
      {products &&
        products.map((product) => (
          <div key={uuidv4()} className="product-row">
            <span>{product.name}</span>
            <span>{product.price}</span>
          </div>
        ))}
    </>
  );
}
