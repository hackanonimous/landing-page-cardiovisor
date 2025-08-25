import { Element } from "react-scroll"
import { soluciones } from "./soluciones"
export const Solution=()=>{
  return(
    <Element name="solucion">
      <section className="mt-36 px-10 sm:px-10 md:px-15 lg:px-30 xl:px-36 mb-30">
        <div className="flex flex-col justify-center gap-6">
          <div className="text-center gap-6 flex flex-col mb-10">
            <h1 className="text-3xl font-bold"><span className="text-(--primary)">La solución:</span> todo en un celular</h1>
            <p><span className="text-(--primary)">CardioVisor</span> es un sistema todo en uno que permite diagnóstico biomédico sin necesidad de internet ni equipos pesados. </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {soluciones.map(el=>(
              <div className="rounded shadow-(--shadow-radius-lg) hover:-translate-1 duration-300" key={el.id}>
                <img className="w-full" src={el.src} alt={el.alt}/>
                <div className="px-6 py-6">
                  <div className="font-bold text-xl mb-2">{el.titulo}</div>
                  <p className="text-gray-700 text-base">
                    {el.descripcion}
                  </p>
                </div>
            </div>
            ))}
          </div>
        </div>
      </section>
    </Element>
  )
}