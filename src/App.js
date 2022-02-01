import './App.css';
import Home from './Components/Home';
import ItemBreakfastMenu from './Components/Customer/ItemBreakfastMenu';
import ItemCustomer from './Components/Customer/ItemCustomer';
import ItemKitchen from './Components/Kitchen/ItemKitchen';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";


function App() {
  return (

    <div>
      <Router>
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="Home" element={<Home />} />
          <Route path="ItemBreakfastMenu" element={<ItemBreakfastMenu />} />
          <Route path="ItemCustomer" element={<ItemCustomer />} />
          <Route path="ItemKitchen" element={<ItemKitchen />} />
        </Routes>
      </Router>
    </div>



  )
}

export default App;
