import { useContext } from 'react';
import { ContextGlobal } from '../../App.js';

export const Cart = () => {
    const context = useContext(ContextGlobal);
    const cartItem = context.state.cart;
    return (
        <div className="general-card">
            {cartItem.map((item) => (
                <div key={item.id}>
                    <p>{item.name}</p>
                    <p>{item.price}</p>
                </div>
            ))}
        </div>
    )
};
