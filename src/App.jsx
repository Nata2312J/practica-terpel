import { useState } from 'react'
import Registro from './Registro'


function App() {
       const [ clickInicio,setClickInicio]=useState(false); 
      console.log(setClickInicio)
  return (

    <>
    <header className='headerViveTerpel'>
      <img src="src\logoViveTerpel.png" alt="LogoVIveTerpel" className='logoViveTerpel' />
    <div>
      <a href="">Inicio</a>
      <a href="">¿Cómo funciona?</a>
      <a href="">Mapas</a>
      <a href="">Aliados</a>
      <a href="">Centro de ayuda</a>
      <button>Iniciar sesion</button>
      <button >Registrarse</button>
      </div>
    </header> 
     
     <section className='principalRegistro'>
     <main className='mainViveTerpel'>
      <button className='conocenos'>Conocenos</button>
      <h1>¿Qué es ViveTerpel?</h1>
      <p>Descubre nuestro nuevo programa de beneficios en el que acomulas puntos facil y rapido y los vives de verdad, disfrutrando como quieres.</p>
      <button className='edsParticipantesBoton'>Conoce EDS participantes</button>
     </main>

   
     <article className='articleViveTerpel'>
     <div>
      <section>
        <img src="src\registrate.png" alt="" />
        <h3>Registrate y gana puntos</h3>
        <p>Por ser parte de VIve Terpel recibe puntos de bienvenida por tu primera compra.</p>
      </section> 
      <section>
      <img src="src\puntosCompra.png" alt="" />
        <h3>Puntos por tus compras</h3>
        <p>Recuerda dar tu cedula al comprar en una EDS participante o cualquier tienda Altoque para acumular puntos.</p>
      </section>
      </div>
      <div>
      <section>
      <img src="src\estacionesCercanas.png" alt="" />
        <h3>Estaciones más cercanas</h3>
        <p>Te mostramos nuestra red de Estaciones de Servicio para que verifiques los puntos más cerca a ti</p>
      </section>
      <section>
      <img src="src\Beneficios.png" alt="" />
        <h3>Beneficios exclusivos para ti</h3>
        <p>Por ser parte de ViveTerpel disfrutas de promociones únicas, descuentos increíbles y beneficios exclusivos.</p>
      </section>
      </div>
     </article> 
     </section>
     
    
        <Registro/>
        
    </>
  ); 
}
export default App
