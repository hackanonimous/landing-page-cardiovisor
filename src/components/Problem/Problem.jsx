import Posta from '../../assets/posta.jpg'
import { Element } from 'react-scroll'
export const Problem = () => {
  return (
    <Element name='problema'>
      <section className="mt-36 px-10 sm:px-10 md:px-15 lg:px-30 xl:px-36 mb-30">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className='flex flex-col justify-center gap-6 mb-8'>
            <h1 className='text-3xl font-bold'>¿Cómo diagnosticar enfermedades en zonas sin acceso a equipos especializados o internet?</h1>
            <p>En zonas remotas, el diagnóstico temprano es un lujo. Falta de equipos, conectividad y personal especializado retrasa tratamientos. Hoy, el transporte de pacientes y equipos es costoso, lento y muchas veces imposible.</p>
            <p>Millones de personas viven a horas de un centro médico. <span className='text-(--primary)'>Pero no pueden esperar.</span></p>
          </div>
          <div className='flex items-center'>
            <img src={Posta} alt="foto de posta medica de dificil acceso" className='rounded-(--radius)'/>
          </div>
        </div>
      </section>
    </Element>
  )
}