// Importamos los hooks necesarios de React
import { useState, useEffect } from 'react'

// Definimos la función personalizada useHasMounted
export function useHasMounted() {
  // Creamos una variable de estado hasMounted que se inicializa en falso
  const [hasMounted, setHasMounted] = useState(false)

  // Utilizamos useEffect para ejecutar un efecto después del montaje inicial del componente
  useEffect(() => {
    // Dentro del efecto, actualizamos hasMounted a true
    setHasMounted(true)
  }, []); // El array de dependencias vacío asegura que el efecto se ejecute solo una vez

  // Devolvemos el valor actual de hasMounted
  return hasMounted
}
