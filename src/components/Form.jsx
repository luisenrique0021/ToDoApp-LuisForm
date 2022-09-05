import { MyInput } from "../myComponents/MyInput"
import PropTypes from 'prop-types'
import { useState } from "react"
import { MyAlertError } from "../myComponents/MyAlertError";
import { useEffect } from "react";


export const Form = ({ tareas, setTareas, inputStyles, labelStyles, tarea, setTarea }) => {

  const [titulo, setTitulo] = useState("");
  const [responsable, setResponsable] = useState("");
  const [email, setEmail] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [fecha, setFecha] = useState("");

  const [error, setError] = useState(false);



  useEffect(() => {
    if (Object.keys(tarea).length > 0) {
      setTitulo(tarea.titulo)
      setResponsable(tarea.responsable)
      setEmail(tarea.email)
      setDescripcion(tarea.descripcion)
      setFecha(tarea.fecha)
    } else {
      console.log("No tenemos tareas 😴");
    }
  }, [tarea])

  const generarId = () => {
    const id = Math.random().toString(20).substr(2);
    return id;
  }

  /* handleSubmit controla lo que va a suceder inmediatamente oprimimos el boton enviar a través
   de la propiedad onSubmit del Form */

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Enviando mi tarea del Form Luis... 😁");

    if ([titulo, responsable, email, fecha, descripcion].includes("")) {
      setError(true)
      return;
    }
    setError(false)

    const objetoTareas = {
      titulo,
      responsable,
      email,
      descripcion,
      fecha,
    }

    if (tarea.id) {
      //Editando tarea
      console.log("Editando tarea")

      objetoTareas.id = tarea.id

      const tareasActualizadas = tareas.map(tareaState => tareaState.id === tarea.id ? (objetoTareas) : (tareaState));
      setTareas(tareasActualizadas);
      setTarea({})
    } else {
      //Nueva tarea
      console.log("Nueva tarea");
      objetoTareas.id = generarId()
      setTareas([...tareas, objetoTareas])

    }



    setTitulo("")
    setResponsable("")
    setEmail("")
    setDescripcion("")
    setFecha("")

    alertSent();
  }

const alertSent = () => {
  Swal.fire({
    title: 'Excelente!',
    text: 'Has enviado el formulario! 😍',
    icon: 'success',
    confirmButtonText: 'Aceptar'
  })
}


  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5 mb-10">
      <h2 className="text-2xl font-extrabold text-center mb-5 mt-5 text-white uppercase">
        Creación de Tareas
      </h2>
      <form onSubmit={handleSubmit} className="bg-green-200 py-5 px-5 shadow-lg rounded-md">

        {error && <MyAlertError mensaje="Parece que hay campos que no has diligenciado, por favor, revisa! 😢" />}

        {/* //INPUT DE TITULO DE LA TAREA */}

        <div className="mb-5">
          <label
            className={labelStyles}
            htmlFor="title">
            👷‍♂️Título:{" "}
          </label>
          <input
            id="title"
            type="text"
            placeholder="Inserta aquí el título de la tarea"
            className={inputStyles}
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
          />
        </div>

        {/* INPUT DE NOMBRE DEL RESPONSABLE DE LA TAREA */}

        <div className="mb-5">
          <label
            className={labelStyles}
            htmlFor="responsable">
            👩👨Responsable:{" "}
          </label>
          <input
            id="responsable"
            type="text"
            placeholder="Nombre del responsable de la tarea"
            className={inputStyles}
            value={responsable}
            onChange={(e) => setResponsable(e.target.value)}
          />
        </div>

        {/* //INPUT DE EMAIL DEL RESPONSABLE */}

        <div className="mb-5">
          <label
            className={labelStyles}
            htmlFor="email">
            📧E-MAIL:{" "}
          </label>
          <input
            id="email"
            type="email"
            placeholder="Inserta aquí tu correo personal"
            className={inputStyles}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        {/* //TEXTAREA DE LA DESCRIPCIÓN */}

        <div className="mb-5">
          <label
            className={labelStyles}
            htmlFor="email">
            🎙DESCRIPCIÓN:{" "}
          </label>
          <textarea
            id="descripcion"
            type="text"
            placeholder="Inserta aquí la descripción"
            className={inputStyles}
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
          />
        </div>

        {/* //INPUT DE FECHA DE ENTREGA DE LA TAREA */}

        <div className="mb-5">
          <label
            className={labelStyles}
            htmlFor="date">
            🗓Fecha limite:{" "}
          </label>
          <input
            id="date"
            type="date"
            className={inputStyles}
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
          />
        </div>
        {tarea.id ? (
          <button
            type="input"
            className="bg-green-600 w-full p-3 shadow-md text-center text-white font-extrabold my-5 hover:bg-green-700 cursor-pointer transition-colors rounded-md"
          >ACTUALIZAR MI FORMULARIO 😛</button>
        ) : (
          <button
            type="input"
            className="bg-gray-500 w-full p-3 shadow-md text-center text-white font-extrabold my-5 hover:bg-green-600 cursor-pointer transition-colors rounded-md"
          >ENVIAR MI FORMULARIO 😬</button>
        )}
      </form>
    </div>
  )
}

Form.propTypes = {
  inputStyles: PropTypes.string.isRequired,
  labelStyles: PropTypes.string.isRequired
}

Form.defaultProps = {
  inputStyles: "placeholder-red-500 mb-3 px-1 w-full",
  labelStyles: "text-blue-800 font-bold uppercase"
}
