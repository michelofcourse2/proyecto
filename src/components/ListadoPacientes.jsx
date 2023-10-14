import React from 'react';
import Pacientes from './Pacientes'; // Importa el componente Pacientes

// ... Otras partes de tu código ...

export const ListadoPacientes = ({ listaDePacientes, setPacientesList,setListaDePacientes }) => {
  return (
    <div className='md:w-1/2 lg:w-2/5 text-center md:ml-5 lg:ml-20'>
      {listaDePacientes && listaDePacientes.length ? (
        <>
          <h1 className='mt-10 text-4xl font-bold mb-5'>Seguimiento de pacientes</h1>
          <p className='mb-5 text-center'>Añade pacientes y <span className='font-bold text-purple-800'>adminístralos</span></p>
          {listaDePacientes.map((paciente) => (
  <Pacientes
    key={paciente.id}
    paciente={paciente}
    setPacientesList={setPacientesList}
    setListaDePacientes={setListaDePacientes}
    listaDePacientes={listaDePacientes}
  /> 
))}
        </>
      ) : (
        <>
          <h1 className='mt-10 text-4xl font-bold mb-5'>No hay pacientes</h1>
          <p className='mb-5 text-center'>Añade pacientes para <span className='font-bold text-purple-800'>adminístralos</span></p>
        </>
      )}
    </div>
  );
};
