import './SearchBar.css';

export function SearchBar() {
  return (
    <form>
      <input type="text" placeholder="Search..." />
      <div>
        <input type="checkbox" id="stock" />
        <lable for="stock" className="checkboxLabel">
          Only show products in stock
        </lable>
      </div>
    </form>
  );
}