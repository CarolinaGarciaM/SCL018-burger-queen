import './App.css';
import Home from './Components/Home';
import ItemBreakfast from './Components/Customer/ItemBreakfast';
import ItemCustomer from './Components/Customer/ItemCustomer';
import ItemMenu from './Components/Customer/ItemMenu';
import ItemKitchen from './Components/Kitchen/ItemKitchen';
import Header from './Components/Commons/Header';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";


function App() {
  return (

    <div>
      <Router>
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="Home" element={<Home />} />
          <Route path="ItemBreakfast" element={<ItemBreakfast />} />
          <Route path="ItemCustomer" element={<ItemCustomer />} />
          <Route path="ItemMenu" element={<ItemMenu />} />
          <Route path="ItemKitchen" element={<ItemKitchen />} />
{/*           <Route path="Header" element={<Header />} /> */}
        </Routes>
      </Router>
    </div>



  )
}

export default App;
