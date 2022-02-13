import { useState } from 'react'
import { doc, updateDoc } from "firebase/firestore";
import { db } from '../../firebase';

export default function UpdateKitchen({id, count, state, order}) {
    const [status, updateStatus] = useState({
        state: "in process"
    });
    const update = () => {
        updateStatus({
            ...status,
            //... es la sintáxis de react
            state: "ready",
        })
    }
    const updateData = async (e) => {
        //async espera una respuesta, buscar
        e.preventDefault();
        // este evento permite que nuestra interfaz no parpadee
        try {
            await updateDoc(doc(db, 'commands', id), {
                state: status,
            });
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <form onSubmit={updateData}>
            {/* con el onSubmit enviaremos la info actualizada a la base de datos*/}
        <div className="pending">
        {order.map((item, index) =>
            <div key={index}>
                <a className="pending-name">{item.name}</a>
                <a className="pending-count">{item.count}</a>
            </div>
        )}
        <button className="button-ok" onClick={update}>OK</button>
    </div>
    </form>
    )
}
