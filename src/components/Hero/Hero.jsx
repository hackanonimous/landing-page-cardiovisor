import Fondo from '../../assets/fondo.png'
import { Link,Element } from 'react-scroll'
export const Hero=()=>{
  return(
    <Element name='inicio'>
      <section className="mt-36 px-10 sm:px-10 md:px-15 lg:px-30 xl:px-36">
        <div className='grid grid-cols-1 md:grid-cols-2'>
          <div className='flex flex-col justify-center gap-6'>
            <h1 className='text-3xl font-bold'><span className='text-(--primary)'>CardioVisor:</span> Diagnóstico Médico No Invasivo con Solo un Celular</h1>
            <p>Plataforma integrada que combina análisis de pulso y visión biomédica para detección temprana de enfermedades, incluso sin internet. </p>
            <div className='flex justify-center pb-2'>
              <Link to='contacto' smooth={true} duration={500} offset={-100} className='bg-(--primary) text-(--bg) py-2 px-12 rounded-(--radius) hover:-translate-0.5 duration-300 cursor-pointer'><i class="bi bi-hand-index-thumb text-xl ml-2"></i> Solicita una demo</Link>
              {/* <a href='#' className='bg-(--primary) text-(--bg) py-2 px-12 rounded-(--radius) hover:-translate-0.5 duration-300'>
                <i class="bi bi-hand-index-thumb text-xl ml-2"></i> Solicita una demo
              </a> */}
            </div>
          </div>
          <div>
            <img src={Fondo} alt="fondo de ejemplo de app cardio visor" className='w-auto'/>
          </div>
        </div>
      </section>
    </Element>
  )
}