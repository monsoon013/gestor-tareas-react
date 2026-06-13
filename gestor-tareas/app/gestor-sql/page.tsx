import { obtenerTareas } from "../lib/tareas"
import { TareaForm } from "./TareaForm"

export default async function Page() {
  const tareas = await obtenerTareas()

  return (
    <main className='grid grid-cols-1 bg-[#f2e9e4] h-dvh py-30 gap-50 md:grid-cols-2 p-4 '>
        <div className='mb-4 w-full'>
            <h1 className='text-2xl font-bold mb-4 text-center text-[#333a2a]'>Gestor de tareas</h1>
            <div className="mb-4">
                <TareaForm />
            </div>
        </div>
      <section className='mb-4 w-full'>
        <h2 className='text-2xl font-bold mb-4 text-center text-[#333a2a]'>Tareas guardadas</h2>

        {tareas.length === 0 ? (
          <p>Todavía no hay tareas.</p>
        ) : (
          <ul>
            {tareas.map((tarea) => (
              <li key={tarea.id} className='bg-[#edecea] border text-[#333a2a] p-2 rounded mb-2'>
                <strong>{tarea.titulo}</strong>
                <p>{tarea.descripcion}</p>
              </li>
            ))}
          </ul>
        )}
      </section>
    </main>
  )
}