import './App.css';

import {
  // BrowserRouter as Router,
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom'; //Navigate

import Login from './pages/login/';
import Product from './pages/product';
import SingleProduct from './pages/singleProduct';
import Cart from './pages/cart';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route
          exact path="/product" element={<Product />}
        />
        <Route
          exact path="/products/:id" element={<SingleProduct />}
        />
        <Route
          exact path="/carts/user/:id" element={<Cart />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
