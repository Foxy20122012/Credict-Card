'use client'



import { useState, useEffect } from 'react'
import Cards from 'react-credit-cards-2';
import 'react-credit-cards-2/dist/es/styles-compiled.css';

const PaymentForm = ({ backgroundImageUrl }) => {

     

    const [state, setState] = useState({
        number: '',
        name: '',
        expiry: '',
        cvc: '',
        focus: '',
    });

    const handleInputChange = (e) => {
        setState({
            ...state,//Los Hooks siempre que se hace un setState siempre borra el estado anterior por eso se le dice que se mantenga los valores que ya se tenian
            [e.target.name]: e.target.value
        });
    }

    const handleFocusChange = (e) => {
        setState({
            ...state,
            focus: e.target.name
        })
    }

    const pagos = () => {
        console.log("number => ",state.number)
        console.log("name => ",state.name)
        console.log("expiry => ",state.expiry)
        console.log("cvc => ",state.cvc)
        console.log(JSON.stringify(state))
    }


    return (
        <div
            className='flex justify-center items-center h-screen bg-cover bg-center'
            style={{
                backgroundImage: `url('${backgroundImageUrl}')`,
            }}
        >
            <div className='w-96 p-4 bg-white bg-opacity-75 rounded-lg shadow-md'>
                <div className='mb-4'>
                    <Cards
                        number={state.number}
                        name={state.name}
                        expiry={state.expiry}
                        cvc={state.cvc}
                        focused={state.focus}
                    />
                </div>
                <form className='flex flex-col'>
                <label htmlFor='name' className='py-2'>Nombre</label>
                    <input className='input-style'
                        type='text'
                        name='name'
                        id='name'
                        placeholder='Nombre'
                        onChange={handleInputChange}
                        onFocus={handleFocusChange}
                        onInput={(e) => {
                            if (e.target.value.length > 30) {
                                e.target.value = e.target.value.slice(0, 30);
                            }
                        }}
                    />

            <label htmlFor='number' className='py-2'>Numero de Tarjeta  </label>
            <input className='w-full h-10 px-2 mb-4  text-sm text-gray-700 placeholder-gray-500 border rounded-lg focus:shadow-outline'
                type='number'
                name='number'
                id='number'
                // maxLength={16}
                // minLength={14}
                placeholder='Numero de tarjeta'
                onChange={handleInputChange}
                onFocus={handleFocusChange}
                onInput={(e) => {
                    if (e.target.value.length > 16) {
                        e.target.value = e.target.value.slice(0, 16);
                    }
                }}

            />
            <div className='grid grid-cols-2 gap-4'>
                <div>
            <label htmlFor='expiry' className='py-2'>Expiracion</label>
            <input className='w-full h-10 px-2 mb-4 text-sm text-gray-700 placeholder-gray-500 border rounded-lg focus:shadow-outline'
                type='number'
                name='expiry'
                id='expiry'
                placeholder='Fecha de expiracion'
                onChange={handleInputChange}
                onFocus={handleFocusChange}
                onInput={(e) => {
                    if (e.target.value.length > 4) {
                        e.target.value = e.target.value.slice(0, 4);
                    }
                }}
            />  
                </div>
            <div className=''>
            <label htmlFor='cvc' className='py-2'>CVC</label>
            <input className='w-full h-10 px-2 mb-4 text-sm text-gray-700 placeholder-gray-500 border rounded-lg focus:shadow-outline'
                type='number'
                name='cvc'
                id='cvc'
                placeholder='cvc'
                onChange={handleInputChange}
                onFocus={handleFocusChange}
                onInput={(e) => {
                    if (e.target.value.length > 4) {
                        e.target.value = e.target.value.slice(0, 4);
                    }
                }}
            />
            </div>
            </div>
            
            {/* <button className='w-full h-10 px-2 mb-4 text-sm text-gray-700 placeholder-gray-500 border rounded-lg focus:shadow-outline'
                type='submit'
            >
                
            </button> */}
                    <button className='rounded-xl border border-black py-2 font-bold '
                        onClick={pagos}
                        type='submit'>
                        Pagar 
                    </button>
                </form>
            </div>
        </div>
    );
}

export default PaymentForm;