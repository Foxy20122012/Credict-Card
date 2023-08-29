import '../styles/globals.css'

//Importación de componentes de navegación barra principal de navegación.
import Navigation from '@/components/shared/Navigation'

//Descripción y titulo de la página, se puede cambiar en cualquier momento y se verá reflejado en el head de la página, sin necesidad de cambiarlo en cada componente que se necesite.
export const metadata = {
  title: 'Primera Asignación',
  description: 'Componente de ingreso de datos de tarjeta de credito',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body  className='py-16'>
        {children}
      <Navigation/>//Componente de Navegación de las rutas.
     
      </body>
    </html>
  )
}
