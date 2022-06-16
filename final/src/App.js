import './App.css';
import Products from './components/Products';
import Details from './components/Details';
import Checkout from './components/Checkout';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Link to="/checkout">checkout</Link>
        <Routes>
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/details" element={<Details />} />
          <Route path="/" element={<Products />} />
        </Routes>
      </BrowserRouter>
      <Products />
    </div>
  );
}

export default App;
