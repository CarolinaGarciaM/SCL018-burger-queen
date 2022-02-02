import { Link } from "react-router-dom";
import Header from "../Commons/Header";
import DataJson from "./data.json";
import "../../App.css";
import Footer from "../Commons/Footer";
import { useState } from "react";

const ItemBreakfastMenu = () => {
    const data = DataJson.products;
    const View = data.filter((elem) => elem.type === "Desayuno");
    const [product, cambiarProductos] = useState(View);

    const productsType = (option) => {
        // eslint-disable-next-line default-case
        switch (option) {
            case "Desayuno":
                const breakfast = data.filter((elem) => elem.type === option);
                cambiarProductos(breakfast);
                break;
            case "Menú":
                const main = data.filter((elem) => elem.type === option);
                cambiarProductos(main);
                break;
        }
    };


    return (
        <>
            <Header />
            <div className="general-container">
            <div className="general-button">
            <li className="breakfast-button"onClick={() => productsType("Desayuno")}>DESAYUNO</li>
            <li className="main-button" onClick={() => productsType("Menú")}>MENÚ</li>
                </div>
                {/* Agregar input de nombre cliente y número de mesa */}
{/*                 <div className="card-table">
                </div> */}
                <div className="general-card">
                    {product.map((product) => (                      
                        <div className="card">
                            <div className="card-name">{product.name}</div>
                            <div className="card-price">${product.price}</div>
                            </div>
                    )
                    )}
                </div>
                <Footer />
            </div>
        </>
    );
}

export default ItemBreakfastMenu; 