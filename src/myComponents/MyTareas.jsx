export const MyTareas = ({ tarea, setTarea, eliminarTarea }) => {

    const { id, titulo, responsable, email, descripcion, fecha } = tarea
    console.log(tarea);

    const handleEliminar = () => {
        const respuesta = confirm("¿Estás seguro(a) de eliminar esta tarea? 😨")

        if(respuesta){
            eliminarTarea(id)
        }
    }

    return (
        <div className="bg-slate-400 py-10 px-5 rounded-lg shadow-md mt-5 hover:bg-slate-500">
            <p className="text-gray-700 font-bold uppercase mb-3">
                ID: <span className="text-white font-bold normal-case">
                    {id}</span>
            </p>
            <p className="text-gray-700 font-bold uppercase mb-3">
                TITULO: <span className="text-white font-bold normal-case">
                    {titulo}</span>
            </p>
            <p className="text-gray-700 font-bold uppercase mb-3">
                RESPONSABLE: <span className="text-white font-bold normal-case">
                    {responsable}</span>
            </p>
            <p className="text-gray-700 font-bold uppercase mb-3">
                EMAIL: <span className="text-white font-bold normal-case">
                    {email}</span>
            </p>
            <p className="text-gray-700 font-bold uppercase mb-3">
                DESCRIPCIÓN: <span className="text-white font-bold normal-case">
                    {descripcion}</span>
            </p>
            <p className="text-gray-700 font-bold uppercase mb-3">
                FECHA LÍMITE: <span className="text-white font-bold normal-case">
                    {fecha}</span>
            </p>

            <div className="flex justify-between">
                <button
                    className="bg-green-600 shadow-md uppercase rounded-md p-2 text-white font-bold hover:bg-green-800 transition-colors py-2 px-10 mt-4"
                    onClick={() => setTarea(tarea)}
                > ACTUALIZAR
                </button>
                <button
                    className="bg-red-600 shadow-md uppercase rounded-md p-2 text-white font-bold hover:bg-red-800 transition-colors py-2 px-10 mt-4"
                    onClick={handleEliminar}
                >ELIMINAR
                </button>
            </div>
        </div>
    )
}
