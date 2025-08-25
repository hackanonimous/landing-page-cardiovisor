import { Element } from "react-scroll"

export const Contact=()=>{
  return(
    <Element name="contacto">
      <section className="mt-45 px-10 sm:px-10 md:px-15 lg:px-30 xl:px-36 mb-30">
        <div className="flex flex-col justify-center gap-6">
          <div className="text-center gap-6 flex flex-col mb-10">
            <h1 className="text-3xl font-bold">¿Tu institución está lista para probar <span className="text-(--primary)">CardioVisor</span>?</h1>
            <p>Estamos seleccionando socios para la fase de prueba del MVP. Si trabajas en salud rural, brigadas médicas o innovación social, queremos colaborar contigo.</p>
          </div>
          <div className="">
            <form action="" className="space-y-4 text-left">
              <input type="text" placeholder="Nombres y Apellidos" className="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-indigo-200"/>
              <input type="text" placeholder="Nombre de su Institución" className="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-indigo-200"/>
              <input type="text" placeholder="Cargo" className="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-indigo-200"/>
              <input type="email" placeholder="Email" className="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-indigo-200"/>
              <input type="tel" placeholder="Telefono (opcional)" className="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-indigo-200"/>
              <div className="flex flex-col gap-5">
                <label>¿En qué tipo de entorno trabajas?</label>
                <select className="bg-gray-200 rounded py-3 px-12">
                  <option value="posta">Posta médica rural</option>
                  <option value="ong">Brigada médica / ONG</option>
                  <option value="sis">SiS</option>
                  <option value="essalud">EsSalud</option>
                  <option value="edu">Universidad / Tecnologico</option>
                  <option value="otro">Otro</option>
                </select>
              </div>
              <div className="flex justify-center mt-10">
                <button className="bg-(--primary) text-(--bg) py-2 px-12 rounded-(--radius) hover:-translate-0.5 duration-300"><i class="bi bi-hand-index-thumb text-lg"></i> Quiero probar CardioVisor</button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </Element>
  )
}