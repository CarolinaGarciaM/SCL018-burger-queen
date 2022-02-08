import { useState } from 'react';

export default function InputData({name, price}) {
    const [client, setClient] = useState('');
    const [number, setNumber] = useState('');
    return (
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
    );
}
