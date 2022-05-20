import './SearchBar.css';

export function SearchBar({ searchProduct }) {
  return (
    <form>
      <input onChange={searchProduct} type="text" placeholder="Search..." />
      <div>
        <input type="checkbox" id="stock" />
        <label htmlFor="stock">
          Only show products in stock
        </label>
      </div>
    </form>
  );
}