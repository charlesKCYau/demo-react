import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import Checkout from './Checkout';
import ProductDetail from './ProductDetail';
import ProductList from './ProductList';
import {CartContext} from './CartContext'
import { useState } from 'react';

function App() {

  const [cartItems, setCartItems] = useState([])

  return (
    <BrowserRouter>
      <CartContext.Provider value={{cartItems,setCartItems}}>
          <Link to="/">index page</Link>
          <Link to="/checkout">shopping cart</Link>
          
          <Routes>
          <Route path="/" element={<ProductList/>}/>
          <Route path="/checkout" element={<Checkout/>}/>
          <Route path="/product" element={<ProductDetail/>}>
              <Route path=":id" element={<ProductDetail/>}/>
          </Route>
          <Route/>
          <Route path="*" element={<p>404 - not found</p>}/>
          </Routes>
      </CartContext.Provider>
    </BrowserRouter>
      
  );
}

export default App;
