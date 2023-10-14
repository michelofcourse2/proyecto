import React, { useEffect, useState } from 'react';
import './App.css';
import { Formulario } from './components/Formulario';
import Header from './components/Header';
import { ListadoPacientes } from './components/ListadoPacientes';

function App() {
  const [listaDePacientes, setListaDePacientes] = useState([]);
  const [PacientesList, setPacientesList] = useState({});

  useEffect(() => {
    const obtenerLs = () => {
      const pacientesLS = JSON.parse(localStorage.getItem('pacientes')) || [];
      if (pacientesLS.length > 0) {
        setListaDePacientes(pacientesLS);
      }
    };
    obtenerLs();
  }, []);

  useEffect(() => {
    localStorage.setItem('pacientes', JSON.stringify(listaDePacientes));
  }, [listaDePacientes]);

  // Resto de tu código

  return (
    <div className='container mx-auto mt-20 text-center'>
      <Header />
      <div className='md:flex mt-12 '>
        <Formulario
          listaDePacientes={listaDePacientes}
          setListaDePacientes={setListaDePacientes}
          PacientesList={PacientesList}
          setPacientesList={setPacientesList}
        />
        <ListadoPacientes
          listaDePacientes={listaDePacientes}
          setListaDePacientes={setListaDePacientes}
          setPacientesList={setPacientesList}
        />
      </div>
    </div>
  );
}

export default App;
