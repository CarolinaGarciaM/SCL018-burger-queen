import './App.css';
import Home from './Components/Home';
import ItemBreakfastMenu from './Components/Customer/ItemBreakfastMenu';
import ItemCustomer from './Components/Customer/ItemCustomer';
import ItemKitchen from './Components/Kitchen/ItemKitchen';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import DataJson from "./data.json";
import { createContext, useState } from 'react';

export const ContextGlobal = createContext();

function App() {
  const data = DataJson.products;
  const [state, setState] = useState({
    // Estado que contiene dos objetos
    menuList: data,
    cart: []
  });


  function addProduct(product) {
    return setState({
      ...state,
      cart: state.cart.find((cartItem) => cartItem.id === product.id)
        ? state.cart.map((cartItem) =>
          cartItem.id === product.id
            ? { ...cartItem, count: cartItem.count + 1 }
            : cartItem
        )
        : [...state.cart, { ...product, count: 1 }]
    });
  }
  const global = { addProduct, state: state }

  return (
    <ContextGlobal.Provider value={global}>

      <div>
        <Router>
          <Routes>
            <Route path="" element={<Home />} />
            <Route path="Home" element={<Home />} />
            <Route path="ItemBreakfastMenu" element={<ItemBreakfastMenu data={data} />} />
            <Route path="ItemCustomer" element={<ItemCustomer />} />
            <Route path="ItemKitchen" element={<ItemKitchen />} />
          </Routes>
        </Router>
      </div>
    </ContextGlobal.Provider>
  )
}

export default App;
