'use client'
import '../styles/globals.css'

// import Card from '../components/card'
import React, {useState, useEffect} from 'react'
import { useHasMounted } from '../hooks/useHasMounted'
import PagosForms from '@/components/PagosForms'

const Home =()=>{

    const backgroundImageUrl = 'https://thefoodtech.com/wp-content/uploads/2020/10/pagos-pandemia.jpg';

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
} 
export default Home; 