import { Link } from "react-router-dom";
import Header from "../Commons/Header";
import "../../App.css";
import Footer from "../Commons/Footer";
import { useContext, useState } from "react";
import { ContextGlobal } from "../../App.js";
import { Cart } from "./Cart";
import InputData from "../Commons/InputData";

const ItemBreakfastMenu = ({ data }) => {
    const context = useContext(ContextGlobal);
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
            <Header/>
            <div className="general-container">
                <div className="general-one">
                <div className="general-main">
                    <li className="breakfast-button" onClick={() => productsType("Desayuno")}>DESAYUNO</li>
                    <li className="main-button" onClick={() => productsType("Menú")}>MENÚ</li>
                </div>
                <div className="general-card">
                    {product.map((item) => (
                        <div key={item.id} className="card">
                            <div className="card-name">{item.name}</div>
                            <div className="card-price">${item.price}</div>
                            <a className="button-add" onClick={() => context.addProduct(item)}>+</a>
                        </div>
                    ))}                  
                </div>
                </div>
                <div className="general-two">
                <Cart/>
                </div>
            </div>
        </>
    );
}
export default ItemBreakfastMenu; 