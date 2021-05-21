import './App.css';
import PRODUCTS from './product'
import FilterableProductTable from './component/FilterableProductTable';
function App() {
  return (
    <FilterableProductTable products={PRODUCTS}/>
  );
}

export default App;
