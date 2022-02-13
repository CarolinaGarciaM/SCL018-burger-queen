import './App.css';
import Home from './Components/Home';
import ItemBreakfastMenu from './Components/Customer/ItemBreakfastMenu';
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

  const remove = (id)=>{
    setState({
      ...state, 
      //... clonar el array para poder modificarlo
      cart: state.cart.filter((product)=>product.id !== id)
      // método filter crea una nueva array que cumple con las condiciones que le daremos
      // !== extrictamente diferente 
    })
  }

  const plus = (id)=>{
    setState({
      cart: state.cart.map((cartItem) =>
      cartItem.id === id
        ? { ...cartItem, count: cartItem.count + 1 }
        : cartItem
    )
    });
  };

  const less = (id)=>{
    setState({
      cart: state.cart.map((cartItem) =>
      cartItem.id === id
        ? { ...cartItem, count: cartItem.count > 1 ? cartItem.count - 1 : 1 }
        // Si cartItem.count es mayor que 1 entonces que me disminuya 1 y si no se cumple esta
        // condición, me devuelva sólo 1
        // : significa sino
        : cartItem
    )
    });
  };

  const clearCart = () => {
    setState({
      ...state,
      cart: []
    })
  }

  const global = { addProduct, state: state, remove, plus, less, clearCart }
  // Aquí guardaremos todo lo que queremos proveer a otros componentes en otros archivos

  return (
    <ContextGlobal.Provider value={global}>

      <div>
        <Router>
          <Routes>
            <Route path="" element={<Home />} />
            <Route path="Home" element={<Home />} />
            <Route path="ItemBreakfastMenu" element={<ItemBreakfastMenu data={data} />} />
            <Route path="ItemKitchen" element={<ItemKitchen />} />
          </Routes>
        </Router>
      </div>
    </ContextGlobal.Provider>
  )
}

export default App;
