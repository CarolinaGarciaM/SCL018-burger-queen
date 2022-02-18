import { Link } from "react-router-dom";
import logo from "../Resources/logo.png";
import "../App.css";
import Footer from "../Components/Commons/Footer";


const Home = () => {
    return (
        <>
            <div className="general-container">
                <div className="logo-home">
                    <img src={logo} alt="logo de Milhaveg" />
                </div>
                <div>
                    <div className="general-button">
                    <Link className="customer-button" to="/ItemBreakfastMenu">PEDIDO</Link>
                    <Link className="kitchen-button" to="/ItemKitchen">COCINA</Link>
                    </div>
                </div>
                <Footer/>
            </div>
        </>
    )
};
export default Home;
