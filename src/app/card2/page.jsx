'use client'

import PagosForms from "../../components/PagosForms";
import React, {useState, useEffect} from 'react'
import { useHasMounted } from '../../hooks/useHasMounted'

const card3 = () => {
    const backgroundImageUrl = 'https://i0.wp.com/www.mipuntodevista.com.mx/wp-content/uploads/2020/11/pagos-electronicos.jpg?fit=1920%2C1080&ssl=1';

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

export default card3;