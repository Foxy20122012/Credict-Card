'use client'//Esto quiero decir que la actividad esta pasando del lado del cliente esto debido a que se esta utilizando los hooks para cambiar los estados. 
import '../styles/globals.css'

// import Card from '../components/card'
import React, {useState, useEffect} from 'react'//Funciona para leer y modificat el estado de un componente. Asi como la orientaciòn a objetos del getters y setters.
import { useHasMounted } from '../hooks/useHasMounted'//Funciona para el renderizado para que no se muestre el componente hasta que se haya cargado la pagina
import PagosForms from '@/components/PagosForms'//importacion del componente PagosForms 

const Home =()=>{

     /*Se Guardo el enlace de la imagen en una variable para asi mantener mejor el orden
     esta variable se pasará como props al componente PagosForms para mostrar una imagen de fondo en el componente. */
    const backgroundImageUrl = 'https://thefoodtech.com/wp-content/uploads/2020/10/pagos-pandemia.jpg';

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
            //Componente con las props de la imagen de fondo
            <PagosForms backgroundImageUrl={backgroundImageUrl}/>
        </div>
    )
} 
export default Home; 