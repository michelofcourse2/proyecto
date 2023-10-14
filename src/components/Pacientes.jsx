import React, { useState } from 'react';


function Pacientes({ paciente, listaDePacientes, setPacientesList, setListaDePacientes }) {
  const [mostrarDiv, setMostrarDiv] = useState(true);
  const [mostrarConfirmacion, setMostrarConfirmacion] = useState(false);

  const eliminarDiv = () => {
    const filteredList = listaDePacientes.filter((item) => item.id !== paciente.id);
    setPacientesList(filteredList);
    setMostrarConfirmacion(true);
  };

  const confirmarEliminar = () => {
    const ListaDePacientes = listaDePacientes.filter(p => p.id !== paciente.id);
    setListaDePacientes(ListaDePacientes);

    setMostrarDiv(false);
    setMostrarConfirmacion(false);
  };

  const cancelarEliminar = () => {
    setMostrarConfirmacion(false);
  };

  const editarPaciente = () => {
    setPacientesList(paciente);
  };

  return (
    <div>
      {mostrarDiv && (
        <div className='shadow-lg m-3 bg-slate-200 px-5 py-10 rounded-xl w-full max-w-xl flex-grow'>
          {mostrarConfirmacion && (
            <div className='modal fixed top-0 left-0 w-full h-full flex items-center justify-center z-50'>
              <div className='modal-content bg-white shadow-lg rounded-md p-3 border-2 border-red-500'>
                <p className='text-zinc-950 font-bold'>
                  ¿Estás seguro de que deseas eliminar este elemento?
                </p>
                <button className='text-black font-bold p-2 hover:text-red-500' onClick={confirmarEliminar}>
                  Sí
                </button>
                <button className='text-zinc-950 font-bold p-2 hover:text-red-500' onClick={cancelarEliminar}>
                  No
                </button>
              </div>
            </div>
          )}

          <p className='font-bold text-left mb-3'>
            NOMBRE:{' '}
            <span className='font-normal normal-camelCase'>{paciente.nombreMascota}</span>
          </p>

          <p className='font-bold text-left mb-3'>
            NOMBRE PROPIETARIO:{' '}
            <span className='font-normal normal-camelCase'>{paciente.nombrePropietario}</span>
          </p>

          <p className='font-bold text-left mb-3'>
            EMAIL:{' '}
            <span className='font-normal normal-camelCase'>{paciente.email}</span>
          </p>

          <p className='font-bold text-left mb-3'>
            FECHA DE ALTA:{' '}
            <span className='font-normal normal-camelCase'>{paciente.alta}</span>
          </p>

          <p className='font-bold text-left mb-3'>
            SÍNTOMAS:{' '}
            <span className='font-normal normal-camelCase'>{paciente.sintomas}</span>
          </p>

          <div className='bottom-2 border-black mt-10 flex justify-between'>
            <div className='bg-blue-600 rounded-lg w-2/5 shadow-lg hover:bg-opacity-80 hover:cursor-pointer' onClick={editarPaciente}>
              <button className='text-white text-sm font-bold hover:text-black hover:text-sm'>
                EDITAR
              </button>
            </div>
            <div className='bg-red-600 rounded-lg w-2/5 shadow-lg hover:bg-opacity-80 hover:cursor-pointer' htmlFor='f' onClick={eliminarDiv}>
              <button className='text-white text-sm font-bold hover:text-black hover:text-sm' id='f'>
                ELIMINAR
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Pacientes;
