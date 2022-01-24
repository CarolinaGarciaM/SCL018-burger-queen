import './App.css';
import Home from './Components/Home';
import ItemBreakfast from './Components/Customer/ItemBreakfast';
import ItemKitchen from './Components/Kitchen/ItemKitchen';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";


function App() {
  return (

    <div>
      <Router>
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="Home" element={<Home />} />
          <Route path="ItemBreakfast" element={<ItemBreakfast />} />
          <Route path="ItemKitchen" element={<ItemKitchen />} />
        </Routes>
      </Router>

    </div>



  )
}

export default App;
