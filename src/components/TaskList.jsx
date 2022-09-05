import { useEffect } from "react"
import { MyTareas } from "../myComponents/MyTareas"


export const TaskList = ({ tareas, setTarea, eliminarTarea }) => {

  
  
  // useEffect(() => {
         
  // }, [])
  

  return (
    <>
      <div className="md:w-1/2 lg:w-2/5 mx-5 mb-10 md:h-screen overflow-scroll">

        {tareas && tareas.length ? (

          <>
            <h2 className="text-2xl font-extrabold text-center mb-10 text-white uppercase">LISTA DE TAREAS PENDIENTES 😁</h2>

            {tareas.map((tarea, index) => {
              return (
                <MyTareas
                  setTarea={setTarea}
                  key={tarea.id}
                  tarea={tarea}
                  eliminarTarea={eliminarTarea}
                />
              )
            })}
          </>
        ) : <h2 className="text-2xl font-extrabold text-center mb-10 text-white uppercase">NO TENGO TAREAS PENDIENTES 😴</h2>}
      </div>
    </>
  )
}
