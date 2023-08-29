'use client'//Esto quiero decir que la actividad esta pasando del lado del cliente esto debido a que se esta utilizando los hooks para cambiar los estados.

import { useState, useEffect } from 'react'//Funciona para leer y modificat el estado de un componente. Asi como la orientaciòn a objetos del getters y setters.
import Cards from 'react-credit-cards-2';//Es el componente esportado desde la libreria de componentes de react-credit-cards-2 
import 'react-credit-cards-2/dist/es/styles-compiled.css';//Son los estilos predeterminados de la libreria de react-credit-cards-2 para el estilo de su tarjeta.

const PaymentForm = ({ backgroundImageUrl }) => {//El componente se llama asi debido al ejemplo de la documentacion de la libreria de react-credit-cards-2 
//El enlace de la documentación de la libreria https://www.npmjs.com/package/react-credit-cards-2
     

    const [state, setState] = useState({
        number: '',//Numero de la tarjeta de credito
        name: '',//Nombre del titular de la tarjeta de credito
        expiry: '',//Fecha de expiracion de la tarjeta de credito
        cvc: '',//Codigo de seguridad de la tarjeta de credito
        focus: '',//Es el foco de la tarjeta de credito para gestionar el enfoque de los campor de la tarjeta de credito.
    });

    const handleInputChange = (e) => {//Es la funcion que se encarga de cambiar el estado de la tarjeta de credito
        setState({//Es el estado de la tarjeta de credito
            ...state,//Los Hooks siempre que se hace un setState siempre borra el estado anterior por eso se le dice que se mantenga los valores que ya se tenian
            [e.target.name]: e.target.value//Es el valor que se le asigna al estado de la tarjeta de credito
        });
    }

    const handleFocusChange = (e) => {//Es la funcion que se encarga de cambiar el estado del foco de la tarjeta de credito
        setState({//Es el estado de la tarjeta de credito
            ...state,//Los Hooks siempre que se hace un setState siempre borra el estado anterior por eso se le dice que se mantenga los valores que ya se tenian
            focus: e.target.name//Es el valor que se le asigna al estado del foco de la tarjeta de credito
        })
    }

    const pagos = () => {//Es la funcion que se encarga de mostrar los datos de la tarjeta de credito por medio de consola y comprobar que si se captura y se mandar a consola.
        console.log("number => ",state.number)
        console.log("name => ",state.name)
        console.log("expiry => ",state.expiry)
        console.log("cvc => ",state.cvc)
        //Imprime en consola en formato JSON el estado de la tarjeta de credito.
        console.log(JSON.stringify(state))
    }


    return (
        <div
            className='flex justify-center items-center h-screen bg-cover bg-center'//Es el estilo del contenedor de la tarjeta de credito
            style={{
                backgroundImage: `url('${backgroundImageUrl}')`,//Es la imagen de fondo de la tarjeta de credito
            }}
        >
            <div className='w-96 p-4 bg-white bg-opacity-75 rounded-lg shadow-md'>
                <div className='mb-4'>
                    <Cards //Es el componente de la tarjeta de credito que se trae desde la libreria
                    /*Son los parametros que se le pasan a la tarjeta los cuales estan siendo modificados por el estado de la tarjeta de credito. 
                      Esto por medio de hooks los cuales capturan y modifican los estados de la tarjeta.  */
                        number={state.number}
                        name={state.name}
                        expiry={state.expiry}
                        cvc={state.cvc}
                        focused={state.focus}
                    />
                </div>
                {/*Se procede a crear el formulario para ingresar los datos en los campos de la tarjeta de credito.*/}
                <form className='flex flex-col'>
                <label htmlFor='name' className='py-2'>Nombre</label>
                    <input className='input-style'
                        type='text'//El input es de tipo texto para que se puedan ingresar letras en el campo de nombre de la tarjeta de credito.
                        name='name'//Es el nombre del campo de nombre de la tarjeta de credito.
                        id='name'//Es el id del campo de nombre de la tarjeta de credito. el cual debe coincidir con el nombre del campo del hook.
                        placeholder='Nombre'
                        onChange={handleInputChange}//Es la funcion que se encarga de cambiar el estado de la tarjeta de credito.
                        onFocus={handleFocusChange}//Es la funcion que se encarga de cambiar el estado del foco de la tarjeta de credito
                        onInput={(e) => {//Es la funcion que se encarga de limitar el numero de caracteres que se pueden ingresar en el campo de nombre de la tarjeta de credito.
                            if (e.target.value.length > 30) {//Es la condicion que se encarga de limitar el numero de caracteres que se pueden ingresar en el campo de nombre de la tarjeta de credito.
                                e.target.value = e.target.value.slice(0, 30);//Es la funcion que se encarga de limitar el numero de caracteres que se pueden ingresar en el campo de nombre de la tarjeta de credito.
                            }
                        }}
                    />

            <label htmlFor='number' className='py-2'>Numero de Tarjeta  </label>
            <input className='w-full h-10 px-2 mb-4  text-sm text-gray-700 placeholder-gray-500 border rounded-lg focus:shadow-outline'
                type='number'//El input es de tipo numero para que no se puedan ingresar letras en el campo de numero de la tarjeta de credito.
                name='number'//Es el nombre del campo de numero de la tarjeta de credito.
                id='number'//Es el id del campo de numero de la tarjeta de credito. el cual debe coincidir con el nombre del campo del hook.
                placeholder='Numero de tarjeta'
                onChange={handleInputChange}//Es la funcion que se encarga de cambiar el estado de la tarjeta de credito.
                onFocus={handleFocusChange}//Es la funcion que se encarga de cambiar el estado del foco de la tarjeta de credito
                onInput={(e) => {//Es la funcion que se encarga de limitar el numero de caracteres que se pueden ingresar en el campo de numero de la tarjeta de credito.
                    if (e.target.value.length > 16) {
                        e.target.value = e.target.value.slice(0, 16);
                    }
                }}

            />
            <div className='grid grid-cols-2 gap-4'>
                <div>
            <label htmlFor='expiry' className='py-2'>Expiracion</label>
            <input className='w-full h-10 px-2 mb-4 text-sm text-gray-700 placeholder-gray-500 border rounded-lg focus:shadow-outline'
                type='number'//El input es de tipo numero para que no se puedan ingresar letras en el campo de fecha de expiracion de la tarjeta de credito.
                name='expiry'//Es el nombre del campo de fecha de expiracion de la tarjeta de credito.
                id='expiry'//Es el id del campo de fecha de expiracion de la tarjeta de credito. el cual debe coincidir con el nombre del campo del hook.
                placeholder='Fecha de expiracion'
                onChange={handleInputChange}//Es la funcion que se encarga de cambiar el estado de la tarjeta de credito.
                onFocus={handleFocusChange}//Es la funcion que se encarga de cambiar el estado del foco de la tarjeta de credito
                onInput={(e) => {//Es la funcion que se encarga de limitar el numero de caracteres que se pueden ingresar en el campo de fecha de expiracion de la tarjeta de credito.
                    if (e.target.value.length > 4) {
                        e.target.value = e.target.value.slice(0, 4);
                    }
                }}
            />  
                </div>
            <div className=''>
            <label htmlFor='cvc' className='py-2'>CVC</label>
            <input className='w-full h-10 px-2 mb-4 text-sm text-gray-700 placeholder-gray-500 border rounded-lg focus:shadow-outline'
                type='number'//El input es de tipo numero para que no se puedan ingresar letras en el campo de cvc de la tarjeta de credito.
                name='cvc'//Es el nombre del campo de cvc de la tarjeta de credito.
                id='cvc'//Es el id del campo de cvc de la tarjeta de credito.
                placeholder='cvc'
                onChange={handleInputChange}//Es la funcion que se encarga de cambiar el estado de la tarjeta de credito.
                onFocus={handleFocusChange}//Es la funcion que se encarga de cambiar el estado del foco de la tarjeta de credito
                onInput={(e) => {//Es la funcion que se encarga de limitar el numero de caracteres que se pueden ingresar en el campo de cvc de la tarjeta de credito.
                    if (e.target.value.length > 4) {
                        e.target.value = e.target.value.slice(0, 4);
                    }
                }}
            />
            </div>
            </div>
            
            {/*Se crea el boton de pagar el cual se encarga de mandar a llamar la funcion de pagos la cual se encarga de mostrar los datos de la tarjeta de credito por medio de consola y comprobar que si se captura y se mandar a consola.*/}
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