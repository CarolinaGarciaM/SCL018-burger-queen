import { Link } from "react-router-dom";
import logoTwo from "../../Resources/logoTwo.png";
import "../../App.css";

const Header = () => {
    return (
        <>
            <div className="general-header">
                <div className="logo-header">
                    <img src={logoTwo} alt="logo de Milhaveg" />
                </div>
                <div className="link-header">
                <Link to="/Home">INICIO</Link>
                <Link to="/ItemCustomer">PEDIDOS</Link>
                <Link to="/Home">SALIR</Link>
                </div>
            </div>
        </>
    );
}

export default Header; 