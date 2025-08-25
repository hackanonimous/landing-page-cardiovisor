import { Element } from "react-scroll"
const filas=[
  {
    id:1,
    caracteristica:'Análisis de pulso',
    cardiovisor:'✅',
    otros:'❌',
    tradicional:'✅'
  },
  {
    id:2,
    caracteristica:'Análisis de imagen',
    cardiovisor:'✅',
    otros:'✅ (limitado)',
    tradicional:'✅'
  },
  {
    id:3,
    caracteristica:'Offline',
    cardiovisor:'✅',
    otros:'❌',
    tradicional:'❌'
  },
  {
    id:4,
    caracteristica:'Portátil',
    cardiovisor:'✅',
    otros:'✅',
    tradicional:'❌'
  },
]
export const Technologie=()=>{
  return(
    <Element name='tecnologia'>
      <section className="mt-50 px-10 sm:px-10 md:px-15 lg:px-30 xl:px-36 mb-40">
        <div className="flex flex-col justify-center gap-6">
          <div className="text-center gap-6 flex flex-col mb-10">
            <h1 className="text-3xl font-bold">La <span className="text-(--primary)">primera</span> plataforma que combina ambas tecnologías</h1>
            <p>Mientras otras soluciones se enfocan en un solo tipo de señal, <span className="text-(--primary)">CardioVisor</span> las integra.</p>
          </div>
          <div>
            <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200">
              <thead>
                <tr className="bg-gray-100">
                  <th className="px-4 py-3 border-b">Característica</th>
                  <th className="px-4 py-3 border-b">CardioVisor</th>
                  <th className="px-4 py-3 border-b">Otras apps</th>
                  <th className="px-4 py-3 border-b">Equipos tradicionales</th>
                </tr>
              </thead>
              <tbody>
                {filas.map(el=>(
                  <tr className="hover:bg-gray-50" key={el.id}>
                    <td className="px-4 py-4 border-b">{el.caracteristica}</td>
                    <td className="px-4 py-4 border-b">{el.cardiovisor}</td>
                    <td className="px-4 py-4 border-b">{el.otros}</td>
                    <td className="px-4 py-4 border-b">{el.tradicional}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          </div>
        </div>
      </section>
    </Element>
  )
}