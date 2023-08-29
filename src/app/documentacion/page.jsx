'use client'

import React, {useState, useEffect} from 'react'//Funciona para leer y modificat el estado de un componente. Asi como la orientaciòn a objetos del getters y setters.
import { useHasMounted } from '../../hooks/useHasMounted'//Funciona para el renderizado para que no se muestre el componente hasta que se haya cargado la pagina



import PagosForms from '../../components/PagosForms';
const Documentación = () => {

    const hasMounted = useHasMounted();

        /*Se pone la condicion que si no se ha terminado de cargar el contenido de la pagina se mostrará 
        algun contenido definido mientras se carga la pagina cuando se cargue se mostrará su contenido */
    if(!hasMounted) {
        
        /*Se muestra una animación de carga la cual fue ella a Css puro en el apartado 
        de styles en el archivo globals.css para que se muestre mientra de carga la pagina.*/
        return  <div className="loader">
        <div className="spinner"></div>
      </div>;

      }
    return(
        <div>
            //Diseño usando Tailwindcss e información basica sobre el proyecto
            <div className='  bg-gray-100 py-14'>
                <h1 className='text-3xl font-bold text-gray-900 flex flex-col items-center'>Librerias usadas para el proyecto</h1>
                <h2 className='text-xl text-gray-600 flex flex-col items-center'>Librerias de componentes y estilos reutilizables.</h2>
                <div className="py-8">
                    <p className='text-gray-500 font-bold justify-center flex '>Para este proyecto se usaron librerias reutilizables para poder acortar el tiempo de desarrollo
                    y la construcción de componentes mediante estas librerias las cuales ya traen estilos y eventos con dichos componentes.
                    Las cual es:  
                    react-credit-cards-2 esta libreria permite crear una tarjeta de credito pasandole valores a dicha componente de tarjeta
                    y esta se encarga de crearla y darle estilos. 
                    Esta libreria ya tiene el componente de tarjeta juntamente con los estilos y los eventos de los estilos. los cuales solo se importan
                    para que estos surgan efecto en dicho componente el componente ya trae props las cuales solo se deben llamar y validar y a base de hooks como los
                    cuales useEffect y useState se le pasan los valores a dichas props y estas se encargan de crear la tarjeta de credito. Tambien se uso Tailwindcss para el dar diseño 
                    </p>

                    <p className='text-gray-500 font-bold justify-center flex py-2 '>para poder apreciar mas información de la libreria se deja el enlace al npm 
                    react-credit-cards-2 https://www.npmjs.com/package/react-credit-cards-2
                    al haber terminado la creacion con sus valores el resultado funcionando añadiendo hooks y eventos al formulario ya que esta libreria solo genera la tarjeta se tiene que ver mas o menos al siguiente ejemplo .                    
                    </p>

                    
                
                

                </div>
                {/* //Componente de la Tarjeta de Credito */}
                <PagosForms/>
                
                </div>
        
        </div>
    );
    };

export default Documentación;