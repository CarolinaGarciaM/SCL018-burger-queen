import { useContext, useState } from 'react';
import { ContextGlobal } from '../../App.js';
import InputData from '../Commons/InputData.jsx';
import { collection, addDoc } from "firebase/firestore";
import { db } from '../../firebase';

export const Cart = () => {
    const context = useContext(ContextGlobal);
    const cartItem = context.state.cart;
    const cartTotal = cartItem.reduce((accumulator, item) => (accumulator = accumulator + item.price * item.count), 0);
    // Acumulador toma el valor de 0 la primera vez, item es el elemento que iteramos. 
    // item.count es la cantidad de cosas
    const [client, setClient] = useState('');
    const [number, setNumber] = useState('');

    const createData = async(e) => {
        e.preventDefault();
        // e.preventDefault para que no pestañee la página
        try {
            const docRef = await addDoc(collection(db, "commands"), {
                client: client,
                number: number,
                order: cartItem,
                total: cartTotal,
                state: 'in process', 
            });
            console.log("Document written with ID: ", docRef.id);
        } catch (e) {
            console.error("Error adding document: ", e);
        }
        setClient("");
        setNumber("");
        context.clearCart();
    }
    return (
        <div className='general-two'>
            <form onSubmit={(e)=>createData(e)}>
            <div>
            <div className='general-two'>
            <div className='general-input'>
                <label>CLIENTE:</label>
                <input className="input-client" type='text'
                    name='client'
                    value={client}
                    onChange={(e) => setClient(e.target.value)} />
                <label>N° DE MESA:</label>
                <input className="input-number" type='number'
                    name='number' min='1' max='7' placeholder='1-7'
                    value={number}
                    onChange={(e) => setNumber(e.target.value)} />
            </div>
            </div>
        </div>
                <div className="general-cart">
                    {cartItem.map((item) => (
                        <div key={item.id} className="cart">
                                <a className="cart-name">{item.name}</a>
                                <a className="cart-count">{item.count}</a>
                                <a className="cart-price"> ${(item.price * item.count)}</a>
                            <a className="button-less" onClick={() => context.less(item.id)}>-</a>
                            <a className="button-plus" onClick={() => context.plus(item.id)}>+</a>
                            <a className="button-remove" onClick={() => context.remove(item.id)}>x</a>
                            </div>
        
                    ))}
                </div>
                <h1>TOTAL:${cartTotal}</h1>
                <button className="button-ask"type='submit'>PEDIR</button>

            </form>
        </div>
    )
};
