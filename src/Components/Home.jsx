import { Link } from "react-router-dom";
import logo from "../Resources/logo.png";
import "../App.css";

const Home = () => {
    return (
        <div>
        <div className="general-container">
        <div className="logo-home">
            <img src={logo} alt="logo de Milhaveg"/>
        </div>
        <button className="customer-button"><Link to="/ItemBreakfast">CLIENTE</Link></button>
        <button className="kitchen-button"><Link to="/ItemKitchen">COCINA</Link></button>
        </div>
        </div>    
    )
};
export default Home;
