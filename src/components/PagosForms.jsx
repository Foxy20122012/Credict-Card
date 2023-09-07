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
    
    const [errors, setErrors] = useState({
        number: '',
        name: '',
        expiry: '',
        cvc: '',
      });

    // const handleInputChange = (e) => {//Es la funcion que se encarga de cambiar el estado de la tarjeta de credito
    //     setState({//Es el estado de la tarjeta de credito
    //         ...state,//Los Hooks siempre que se hace un setState siempre borra el estado anterior por eso se le dice que se mantenga los valores que ya se tenian
    //         [e.target.name]: e.target.value//Es el valor que se le asigna al estado de la tarjeta de credito
    //     });
    // }

    const handleInputChange = (e) => {
        const { name, value } = e.target;
    
        setState({
          ...state,
          [name]: value,
        });
    
        // Validar campos y establecer mensajes de error
        if (name === 'number') {
          if (value.length !== 16) {
            setErrors({
              ...errors,
              [name]: 'El número debe tener 16 dígitos',
            });
          } else {
            setErrors({
              ...errors,
              [name]: '',
            });
          }
        } else if (name === 'name') {
          if (value.trim() === '') {
            setErrors({
              ...errors,
              [name]: 'Campo obligatorio',
            });
          } else {
            setErrors({
              ...errors,
              [name]: '',
            });
          }
        } else if (name === 'expiry') {
          if (value.length !== 4) {
            setErrors({
              ...errors,
              [name]: 'Formato válido: MM/YY',
            });
          } else {
            setErrors({
              ...errors,
              [name]: '',
            });
          }
        } else if (name === 'cvc') {
          if (value.length !== 3) {
            setErrors({
              ...errors,
              [name]: 'El CVC debe tener 3 dígitos',
            });
          } else {
            setErrors({
              ...errors,
              [name]: '',
            });
          }
        }
      }
    
      const handleBlur = (e) => {
        const { name, value } = e.target;
    
        // Verificar si el campo está vacío
        if (value.trim() === '') {
          setErrors({
            ...errors,
            [name]: 'Campo Requerido',
          });
        }
      }
    
    const handleFocusChange = (e) => {//Es la funcion que se encarga de cambiar el estado del foco de la tarjeta de credito
        setState({//Es el estado de la tarjeta de credito
            ...state,//Los Hooks siempre que se hace un setState siempre borra el estado anterior por eso se le dice que se mantenga los valores que ya se tenian
            focus: e.target.name//Es el valor que se le asigna al estado del foco de la tarjeta de credito
        })
    }

    const handleExpiryChange = (e) => {
      const { name, value } = e.target;
  
      // Verificar si el campo que se está cambiando es "expiry"
      if (name === 'expiry') {
          // Eliminar cualquier carácter no numérico del valor ingresado
          const numericValue = value.replace(/\D/g, '');
  
          // Formatear el valor eliminando caracteres no numéricos, agregando una barra después de los primeros dos dígitos
          // y limitando la longitud a 5 caracteres (formato MM/YY)
          let formattedExpiry = numericValue
              .replace(/^(\d{2})(\d{0,2})$/, '$1/$2')
              .slice(0, 5);
  
          // Validar el formato de fecha de expiración
          if (!/^(0[1-9]|1[0-2])\/\d{2}$/.test(formattedExpiry)) {
              // Si el formato no es válido, establecer un mensaje de error
              setErrors({
                  ...errors,
                  [name]: 'Formato válido: MM/YY',
              });
          } else {
              // Si el formato es válido, borrar cualquier mensaje de error existente
              setErrors({
                  ...errors,
                  [name]: '',
              });
  
              // Desglosar el valor formateado para validar mes y día individualmente
              const [month, day] = formattedExpiry.split('/');
              const numericMonth = parseInt(month, 10);
              const numericDay = parseInt(day, 10);
              // Validar que los primeros dos dígitos (mes) no sean mayores a 12 y los últimos dos (día) no sean mayores a 31
              if (numericMonth > 12 || numericDay > 31) {
                  // Si la fecha es inválida, establecer un mensaje de error
                  setErrors({
                      ...errors,
                      [name]: 'Fecha inválida',
                  });
              } else {
                  // Si la fecha es válida, borrar cualquier mensaje de error existente
                  setErrors({
                      ...errors,
                      [name]: '',
                  });
              }
          }
          // Actualizar el estado con el valor formateado
          setState({
              ...state,
              [name]: formattedExpiry,
          });
      }
  };
  
  const pagos = () => {
    // Verificar si hay errores en los campos
    const hasErrors = Object.values(errors).some((error) => error !== '');

    if (hasErrors) {
      alert('Por favor, corrija los errores antes de continuar.');
    } else {
      // Realizar el pago
      
      alert(JSON.stringify(state));
    }
  }

  const camposLlenos = Object.values(state).every(value => value !== '');       
    
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
                        onBlur={handleBlur}
                        onChange={handleInputChange}//Es la funcion que se encarga de cambiar el estado de la tarjeta de credito.
                        onFocus={handleFocusChange}//Es la funcion que se encarga de cambiar el estado del foco de la tarjeta de credito
                        onInput={(e) => {//Es la funcion que se encarga de limitar el numero de caracteres que se pueden ingresar en el campo de nombre de la tarjeta de credito.
                            if (e.target.value.length > 30) {//Es la condicion que se encarga de limitar el numero de caracteres que se pueden ingresar en el campo de nombre de la tarjeta de credito.
                                e.target.value = e.target.value.slice(0, 30);//Es la funcion que se encarga de limitar el numero de caracteres que se pueden ingresar en el campo de nombre de la tarjeta de credito.
                            }
                        }}
                    />
                    
                    <p className='text-red-500 text-sm'>{errors.name}</p>

            <label htmlFor='number' className='py-2'>Numero de Tarjeta  </label>
            <input className='w-full h-10 px-2 mb-4  text-sm text-gray-700 placeholder-gray-500 border rounded-lg focus:shadow-outline'
                type='number'//El input es de tipo numero para que no se puedan ingresar letras en el campo de numero de la tarjeta de credito.
                name='number'//Es el nombre del campo de numero de la tarjeta de credito.
                id='number'//Es el id del campo de numero de la tarjeta de credito. el cual debe coincidir con el nombre del campo del hook.
                placeholder='Numero de tarjeta'
                onBlur={handleBlur}
                onChange={handleInputChange}//Es la funcion que se encarga de cambiar el estado de la tarjeta de credito.
                onFocus={handleFocusChange}//Es la funcion que se encarga de cambiar el estado del foco de la tarjeta de credito
                onInput={(e) => {//Es la funcion que se encarga de limitar el numero de caracteres que se pueden ingresar en el campo de numero de la tarjeta de credito.
                    if (e.target.value.length > 16) {
                        e.target.value = e.target.value.slice(0, 16);
                    }
                }}

            />
            <p className='text-red-500 text-sm'>{errors.number}</p>
            
            <div className='grid grid-cols-2 gap-4'>
                <div>
            <label htmlFor='expiry' className='py-2'>Expiracion</label>
            <input className='w-full h-10 px-2 mb-4 text-sm text-gray-700 placeholder-gray-500 border rounded-lg focus:shadow-outline'
                type='text'//El input es de tipo numero para que no se puedan ingresar letras en el campo de fecha de expiracion de la tarjeta de credito.
                name='expiry'//Es el nombre del campo de fecha de expiracion de la tarjeta de credito.
                id='expiry'//Es el id del campo de fecha de expiracion de la tarjeta de credito. el cual debe coincidir con el nombre del campo del hook.
                placeholder='Fecha de expiracion'
                onBlur={handleBlur}
                // onChange={handleInputChange}//Es la funcion que se encarga de cambiar el estado de la tarjeta de credito.
                onChange={handleExpiryChange} // Cambia la función de cambio
                
                value={state.expiry} // Usa el valor formateado
                onFocus={handleFocusChange}//Es la funcion que se encarga de cambiar el estado del foco de la tarjeta de credito
                onInput={(e) => {//Es la funcion que se encarga de limitar el numero de caracteres que se pueden ingresar en el campo de fecha de expiracion de la tarjeta de credito.
                    if (e.target.value.length > 5) {
                        e.target.value = e.target.value.slice(0, 5);
                    }
                }}
            />  
            
            <p className='text-red-500 text-sm'>{errors.expiry}</p>
                </div>
            <div className=''>
            <label htmlFor='cvc' className='py-2'>CVC</label>
            <input className='w-full h-10 px-2 mb-4 text-sm text-gray-700 placeholder-gray-500 border rounded-lg focus:shadow-outline'
                type='number'//El input es de tipo numero para que no se puedan ingresar letras en el campo de cvc de la tarjeta de credito.
                name='cvc'//Es el nombre del campo de cvc de la tarjeta de credito.
                id='cvc'//Es el id del campo de cvc de la tarjeta de credito.
                placeholder='cvc'
                onBlur={handleBlur}

                onChange={handleInputChange}//Es la funcion que se encarga de cambiar el estado de la tarjeta de credito.
                onFocus={handleFocusChange}//Es la funcion que se encarga de cambiar el estado del foco de la tarjeta de credito
                onInput={(e) => {//Es la funcion que se encarga de limitar el numero de caracteres que se pueden ingresar en el campo de cvc de la tarjeta de credito.
                    if (e.target.value.length > 3) {
                        e.target.value = e.target.value.slice(0, 3);
                    }
                }}
            />
            <p className='text-red-500 text-sm'>{errors.cvc}</p>
            </div>
            </div>
            
            {/*Se crea el boton de pagar el cual se encarga de mandar a llamar la funcion de pagos la cual se encarga de mostrar los datos de la tarjeta de credito por medio de consola y comprobar que si se captura y se mandar a consola.*/}
                    <button className='rounded-xl border border-black py-2 font-bold '
                        onClick={pagos}
                        disabled={!camposLlenos}  
                        type='submit'>
                        Pagar 
                    </button>
                </form>
            </div>
        </div>
    );
}

export default PaymentForm;