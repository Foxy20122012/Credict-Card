// import { PiFastForwardCircleThin } from 'react-icons/pi';

// PiFastForwardCircleThin
import PagosForms from '../../components/PagosForms';
const Documentación = () => {
    return(
        <div>
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
                <PagosForms/>
                
                </div>
        
        </div>
    );
    };

export default Documentación;