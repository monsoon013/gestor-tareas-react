'use client'
import { useState } from 'react'


/*const statusStyles: Record<Status, string> = { //Record ->define objetos con claves y valores epecíficos
  'pendiente': 'bg-gray-100 text-orange-600 border-orange-600',
  'en curso': 'bg-blue-100 text-blue-600 border-blue-600',
  'completada': 'bg-green-100 text-green-600 border-green-600'
}*/

interface Task {
  id: string,
  title: string,
  desc: string
}


export default function Home() {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [tasks, setTasks] = useState<Task[]>([]); //tiene que empezar vacío 

  const handleAddTask = () => {
    if(title.trim() === '') {return;}
    const nTask: Task = {
      id: crypto.randomUUID(), //encriptamos el id y generamos uno aleatorio
      title: title,
      desc: desc
    }
    setTasks([...tasks, nTask]); //creamos uno nuevo con el spread operator (...) en el que añadimos la tarea

    setTitle(''); //limpieza del form
    setDesc(''); 
  }


  
  return (
    <main className='max-w-lg mx-auto p-4'>
      <h1 className='text-2xl font-bold mb-4'>Gestor de tareas</h1>
      <div className='mb-4'>
        <input type='text' placeholder='Título' value={title} onChange={(e) => setTitle(e.target.value)} className='w-full p-2 border rounded mb-2'/>
        <textarea value={desc} onChange={(e) => setDesc(e.target.value)} placeholder='Descripción' className='w-full p-2 border rounded mb-2'/>
        <button onClick={handleAddTask} className='w-full bg-blue-500 text-white p-2 rounded'>Agregar tarea</button>
      </div>
      <div className='mb-4'>
        {tasks.map((task) => (
          <div key={task.id} className='border p-2 rounded mb-2'>
            <h2 className='text-lg font-bold'>{task.title}</h2>
            <p>{task.desc}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
