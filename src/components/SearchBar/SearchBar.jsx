import './SearchBar.css';

export function SearchBar({ searchProduct, filterByStock }) {
  return (
    <form>
      <input
        type="text"
        placeholder="Search..."
        onChange={searchProduct}
      />
      <div>
        <input type="checkbox" id="stock" onClick={filterByStock} />
        <label htmlFor="stock">Only show products in stock</label>
      </div>
    </form>
  );
}