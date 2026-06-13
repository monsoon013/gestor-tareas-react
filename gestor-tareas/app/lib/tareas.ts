import { abrirConexion } from "./db"

export type Tarea = {
  id: number
  titulo: string
  descripcion: string
}

export async function obtenerTareas() {
  const conexion = await abrirConexion()

  try {
    const [filas] = await conexion.execute(
      "SELECT id, titulo, descripcion FROM tareas ORDER BY id DESC",
    )

    return filas as Tarea[]
  } finally {
    await conexion.end()
  }
}

export async function insertarTarea(titulo: string, descripcion: string) {
  const conexion = await abrirConexion()

  try {
    await conexion.execute(
      "INSERT INTO tareas (titulo, descripcion) VALUES (?, ?)",
      [titulo, descripcion],
    )
  } finally {
    await conexion.end()
  }
}