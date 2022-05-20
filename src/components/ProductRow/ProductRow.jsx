import './ProductRow.css';

export function ProductRow({ products }) {
  return (
    <>
      {products &&
        products.map((product) => (
          <div className="product-row">
            <span>{product.name}</span>
            <span>{product.price}</span>
          </div>
        ))}
    </>
  );
}