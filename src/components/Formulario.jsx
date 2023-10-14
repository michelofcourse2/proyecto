import React, { useEffect, useState } from "react";
import Error from './Error';

export const Formulario = ({ listaDePacientes, setListaDePacientes, PacientesList,setPacientesList}) => {
  const [nombreMascota, setNombreMascota] = useState('');
  const [nombrePropietario, setNombrePropietario] = useState('');
  const [email, setEmail] = useState('');
  const [alta, setAlta] = useState('');
  const [sintomas, setSintomas] = useState('');
  const [Errores, setErrores] = useState(false);
  const [botonTexto, setBotonTexto] = useState('AGREGAR PACIENTE');

  useEffect(() => {
    if (Object.keys(PacientesList).length > 0) {
      setNombreMascota(PacientesList.nombreMascota);
      setAlta(PacientesList.alta);
      setEmail(PacientesList.email);
      setNombrePropietario(PacientesList.nombrePropietario);
      setSintomas(PacientesList.sintomas);
      setBotonTexto('CONFIRMAR CAMBIOS');
    } else {
      setBotonTexto('AGREGAR PACIENTE');
    }
  }, [PacientesList]);





  const handleSumbit = (e) => {
    e.preventDefault();

    if ([nombreMascota, nombrePropietario, email, alta, sintomas].includes('')) {
      setErrores(true);
      return;
    } else {
      setErrores(false);

      const idGenerado = Math.random().toString(36).substring(2) + Date.now().toString(36);
      const objetoPaciente = {
        id: idGenerado,
        nombreMascota,
        nombrePropietario,
        email,
        alta,
        sintomas
      };

      if (botonTexto === 'CONFIRMAR CAMBIOS') {
        const cambios = listaDePacientes.map((e) => (e.id === PacientesList.id ? objetoPaciente : e));
        setListaDePacientes(cambios);
           setPacientesList({});
      } else {
        setListaDePacientes([...listaDePacientes, objetoPaciente]);
      }

      setNombreMascota('');
      setNombrePropietario('');
      setAlta('');
      setEmail('');
      setSintomas('');
      setBotonTexto('AGREGAR PACIENTE');
    }
  };



  return (
    <div className='md:w-1/2 lg:w-2/5'>
       <div className=''>
    <h2 className='mt-10 text-3xl text-center block font-bold text-20em'>Formulario de pacientes</h2>
    <br />
    <p className='block text-center mb-5'>
      Añade pacientes y <span className='font-bold text-purple-800 text-center'>adminístralos</span>
    </p>
  </div>

    <form className="shadow-lg ml-10 shadow-black" onSubmit={handleSumbit}>

 {Errores && <Error>Todos los campos deben estar completos</Error>}

  <div className=" py-2 px-2">
    <label className="block mb-3 font-bold text-left text-black" htmlFor="nombreMascota">
      NOMBRE MASCOTA:
    </label>
    <input
      className="rounded-md border border-solid border-gray-400 px-2 py-1 w-full mb-3 text-black"
      type="text"
      id="nombreMascota"
      name="nombreMascota"
      placeholder="Ingrese el nombre de la mascota"
      value={nombreMascota}
      onChange={(e) => setNombreMascota(e.target.value)}
    />
  </div>

  <div className=" py-2 px-2">
    <label className="block mb-3 font-bold text-left text-black" htmlFor="nombrePropietario">
      NOMBRE PROPIETARIO:
    </label>
    <input
      className="rounded-md border border-solid border-gray-400 px-2 py-1 w-full mb-3 text-black"
      type="text"
      id="nombrePropietario"
      name="nombrePropietario"
      placeholder="Ingrese el nombre del propietario"
      value={nombrePropietario}
      onChange={(e) => setNombrePropietario(e.target.value)}
    />
  </div>

  <div className=" py-2 px-2">
    <label className="block mb-3 font-bold text-left text-black" htmlFor="email">
      EMAIL:
    </label>
    <input
      className="rounded-md border border-solid border-gray-400 px-2 py-1 w-full mb-3 text-black"
      type="text"
      id="email"
      name="email"
      value={email}
      placeholder="Ingrese su dirección de correo electrónico"
      onChange={(e) => setEmail(e.target.value)}
    />
  </div>

  <div className=" py-2 px-2">
    <label className="block mb-3  font-bold text-left text-black" htmlFor="alta">
      FECHA DE ALTA:
    </label>
    <input
      className="rounded-md border border-solid border-gray-400 px-2 py-1 w-full mb-3 text-black"
      type="date"
      id="alta"
      name="alta"
      placeholder="Seleccione la fecha de alta"
      value={alta}
      onChange={(e) => setAlta(e.target.value)}
    />
  </div>

  <div className="mb-5 py-2 px-2 ">
    <label className="block mb-3  font-bold text-left text-black" htmlFor="sintomas">
      SÍNTOMAS:
    </label>
    <textarea
      id='sintomas' name='sintomas'
      className="rounded-md border border-solid border-gray-400 px-2 py-1 w-full mb-3 text-black"
      placeholder="Describa los síntomas aquí"
      value={sintomas}
      onChange={(e) => setSintomas(e.target.value)}
    ></textarea>
  </div>


  <input 
      className=" bg-purple-800 rounded-md border border-solid border-gray-400 px-2 py-1 w-100 mb-8 text-white text-center font-bold  shadow-lg hover:cursor-pointer"
      type="submit"
      id="enviar"
      name="enviar"
      value={botonTexto}
    />

</form>

    
    
    </div>
  )
}

