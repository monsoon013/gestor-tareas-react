
import { crearTarea } from "./actions"

export function TareaForm() {
  return (
    <form action={crearTarea}>
      <label>
        Título
        <input name="titulo" className='w-full p-2 border text-[#333a2a] rounded mb-2'/>
      </label>

      <label>
        Descripción
        <textarea name="descripcion" className='w-full p-2 border text-[#333a2a] rounded mb-2'/>
      </label>

      <button type="submit" className='w-full bg-[#333a2a] text-[#f2e9e4] p-2 rounded'>
        Guardar tarea
      </button>
    </form>
  )
}