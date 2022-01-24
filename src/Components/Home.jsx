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
                    <button className="customer-button"><Link to="/ItemBreakfast">CLIENTE</Link></button>
                    <button className="kitchen-button"><Link to="/ItemKitchen">COCINA</Link></button>
                </div>
                <Footer />
            </div>

        </>
    )
};
export default Home;
