'use client'

import PagosForms from "../../components/PagosForms";
import React, {useState, useEffect} from 'react'
import { useHasMounted } from '../../hooks/useHasMounted'

const card2 = () => {

    const backgroundImageUrl = 'https://d500.epimg.net/cincodias/imagenes/2023/04/25/pyme/1682444042_108927_1683027948_noticia_normal.jpg';


    const hasMounted = useHasMounted();
    if(!hasMounted) {
        return  <div className="loader">
        <div className=""></div>
      </div>;

      }
    
    return(
        <div>
            
            <PagosForms backgroundImageUrl={backgroundImageUrl}/>
        </div>
    )
    };  

export default card2;