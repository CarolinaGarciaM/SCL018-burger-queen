import { useContext } from 'react';
import { ContextGlobal } from '../../App.js';
import InputData from '../Commons/InputData.jsx';

export const Cart = () => {
    const context = useContext(ContextGlobal);
    const cartItem = context.state.cart;
    return (
        <div className='general-two'>
        <form>
        <InputData/>
        <div className="general-cart">
            {cartItem.map((item) => (
                <div key={item.id} className="card">
                <div className="card-name">{item.name}</div>
                <div className="card-price">${item.price}</div>
                </div>               
            ))}
        </div>
        <button className="button-ask" type='submit'>PEDIR</button>
        </form>
        </div>
    )
};
