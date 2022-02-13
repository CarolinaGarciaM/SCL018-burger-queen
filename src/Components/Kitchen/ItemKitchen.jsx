import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../Commons/Header";
import { collection, query, onSnapshot } from "firebase/firestore";
import { db } from "../../firebase";
import UpdateKitchen from "./UpdateKitchen";

const ItemKitchen = () => {
    const [receive, changeReceive] = useState([]);
    useEffect(() => {
        const q = query(collection(db, "commands"),);
        onSnapshot(q, (snapshot) => {
            //console.log('se ejecuto snapshot')
            // console.log(snapshot.docs[0].data());
            const array = snapshot.docs.map((documento) => {
                return { ...documento.data(), id: documento.id }
            })
            changeReceive(array);
        },
            (error) => {
                console.log(error);
            }
        );
    }, []);


    // useEffect conectará con la base de datos.
    // Al agregar el []vacío lo que hacemos es que useEffect 
    // se ejecute sólo al primer renderizado, esto significa que nos 
    // conectamos a la base datos cuando la página se cargue por primera vez.

    const clon = [...receive]
    const inProcess = clon.filter((element) => {
        return element.state === "in process"
    })
    const ready = clon.filter((element) => {
        return element.state !== "in process"
    })

    return (
        <>
            <Header />
            <div className="general-container">
                <div className="general-three">
                    <h2>PENDIENTE</h2>
                    <div className="general-pending">
                        {inProcess.map((item, index) => (
                            <UpdateKitchen
                                key={index}
                                id={item.id}
                                count={item.count}
                                order={item.order}
                                state={item.state}
                            />
                        ))}
                    </div>
                </div>
                <div className="general-four">
                    <h3>LISTO</h3>
                    <div className="general-ready">
                        {ready.map((item, index) => (
                            <div className="ready">
                            <div key={index}>
                                {item.order.map((item, index) =>
                                    <div key={index}>
                                        <a className="ready-name">{item.name}</a>
                                        <a className="ready-count">{item.count}</a>
                                    </div>
                                )}
                            </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}
export default ItemKitchen;