import '../styles/globals.css'

import Navigation from '@/components/shared/Navigation'

export const metadata = {
  title: 'Primera Asignación',
  description: 'Componente de ingreso de datos de tarjeta de credito',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body  className='py-16'>
        {children}
      <Navigation/>
     
      </body>
    </html>
  )
}
