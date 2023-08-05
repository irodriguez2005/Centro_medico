import { useState } from 'react';

export const Formulario = () => {
    
    const [nombreMascota, setNombreMascota] = useState('');
    const [nombrePropietario, setNombrePropietario] = useState('');
    const [direccion, setDireccion] = useState('');
    const [Fecha, setFecha] = useState('');
    const [sintomas, setSintomas] = useState('');
    const [raza, setRaza] = useState('');
    

    const handleSubmit = (e) => {
        e.preventDefault();
           
    /*const nuevoPaciente = {
        nombreMascota,
        nombrePropietario,
        email,
        Fecha,
        sintomas
    };*/
        console.log(nombreMascota);
        console.log(nombrePropietario);
        console.log(direccion);
        console.log(Fecha);
        console.log(sintomas);
        console.log(raza);
    } 
 
    return (
        <div className="md:w-1/2 lg:w-2/5 mx-5">
            {/* Titulo de la seccion del formulario*/}
            <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>
            {/* descripcion de la seccion formulario*/}
            <p className="text-lg mt-5 text-center mb-10">
                Añade Pacientes y {''}
                <span className="text-indigo-600 font-bold ">Administralos</span>
            </p>
            {/* formulario */}
            <form
                onSubmit={handleSubmit} 
                className="bg-white shadow-md rounded-lg py-10 px-5 mb-10"
            >
                <div className="mb-5">
                    <label htmlFor="mascota" className="block text-gray-700 uppercase font-bold">
                        Nombre Mascota
                    </label>
                    <input
                        id="mascota"
                        type="text"
                        placeholder="Nombre de la Mascota"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        value={nombreMascota}
                        onChange={ (e) => setNombreMascota(e.target.value) }
                    />  
                    <label htmlFor="mascota" className="block text-gray-700 uppercase font-bold">
                        Nombre Propietario
                    </label>
                    <input
                        id="Propietario"
                        type="text"
                        placeholder="Nombre Propietario"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        value={nombrePropietario}
                        onChange={ (e) => setNombrePropietario(e.target.value) }
                    />  
                    <label htmlFor="mascota" className="block text-gray-700 uppercase font-bold">
                        Direccion
                    </label>
                    <input
                        id="Direccion"
                        type="text"
                        placeholder="Direccion"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        value={direccion}
                        onChange={ (e) => setDireccion(e.target.value) }
                    />  
                    <label htmlFor="mascota" className="block text-gray-700 uppercase font-bold">
                        Raza
                    </label>
                    <input
                        id="Raza"
                        type="text"
                        placeholder="Raza"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        value={raza}
                        onChange={ (e) => setRaza(e.target.value) }
                    />  
                    <label htmlFor="mascota" className="block text-gray-700 uppercase font-bold">
                        Fecha
                    </label>
                    <input
                        id="Fecha"
                        type="date"
                        placeholder="Fecha"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        value={Fecha}
                        onChange={ (e) => setFecha(e.target.value) }
                    />  
                    <label htmlFor="mascota" className="block text-gray-700 uppercase font-bold">
                        Sintomas
                    </label>
                    <textarea
                        id="Sintomas"
                        type="text"
                        placeholder="Sintomas"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        value={sintomas}
                        onChange={ (e) => setSintomas(e.target.value) }
                    />  
                    
                    
                </div>
                <input
                    type="submit"
                    className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-colors"
                    value={  'Agregar Paciente' }
                />
            </form>
            {/*<form onSubmit={handleSubmit} className="bg-gray-100 ">
    <div>
        <h3 className="text-gray-700 ">Pacientes Agregados</h3>
        <ul>
            {pacientes.map((paciente, index) => (
                <li key={index} className="bg-white ">
                    <p className="text-black">Nombre Mascota: {paciente.nombreMascota}</p>
                    <p className="text-black">Nombre Propietario: {paciente.nombrePropietario}</p>
                    <p className="text-black">Email: {paciente.email}</p>
                    <p className="text-black">Fecha: {paciente.fecha}</p>
                    <p className="text-black">Síntomas: {paciente.sintomas}</p>
                </li>
            ))}
        </ul>
    </div>
</form>*/}
        </div>
    );
  };