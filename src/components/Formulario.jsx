import { useState } from 'react'

export const Formulario = () => {
  const [nombre, setNombre] = useState('')
  const [propietario, setPropietario] = useState('')
  const [email, setEmail] = useState('')
  const [fecha, setFecha] = useState('')
  const [sintomas, setSintomas] = useState('')

  const [error, setError] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()

    // validación del formulario
    if ([nombre, propietario, email, fecha, sintomas].includes('')) {
      console.log('Hay un campo vacio')

      setError(true)
      return
    }

    setError(false)
  }

  return (
    <div className='w-1/2 lg:w-3/5 mx-5'>
      <h2 className='font-black text-3xl text-center'>Seguimiento Pacientes</h2>

      <p className='text-lg mt-5 text-center mb-10'>
        Añade Pacientes y{' '}
        <span className='text-indigo-600 font-bold'>Administralos</span>
      </p>
      <form className='bg-white shadow-md rounded py-10 px-5 mb-10' onSubmit={handleSubmit}>

        {error && (
          <div className=' bg-red-500 text-white text-center p-3 font-bold mb-3 rounded-md'>
            <p>
              Todos los campos son obligaroios
            </p>
          </div>
        )}

        <div className=' mb-5'>
          <label
            htmlFor='mascota'
            className=' block text-gray-700 uppercase font-bold'
          >
            Nombre Mascota
          </label>
          <input
            type='text'
            id='mascota'
            placeholder='Nombre de la mascota'
            className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>
        <div className=' mb-5'>
          <label
            htmlFor='propietario'
            className=' block text-gray-700 uppercase font-bold'
          >
            Nombre Propietario
          </label>
          <input
            type='text'
            id='propietario'
            placeholder='Nombre del propietario'
            className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
            value={propietario}
            onChange={(e) => setPropietario(e.target.value)}
          />
        </div>

        <div className=' mb-5'>
          <label
            htmlFor='email'
            className=' block text-gray-700 uppercase font-bold'
          >
            Email
          </label>
          <input
            type='email'
            id='email'
            placeholder='Email Contacto Propietario'
            className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className=' mb-5'>
          <label
            htmlFor='alta'
            className=' block text-gray-700 uppercase font-bold'
          >
            Alta
          </label>
          <input
            type='date'
            id='alta'
            className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
          />
        </div>
        <div className=' mb-5'>
          <label
            htmlFor='alta'
            className=' block text-gray-700 uppercase font-bold'
          >
            Síntomas
          </label>
          <textarea
            id='sintomas' placeholder='Describe los síntomas' className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
            value={sintomas}
            onChange={(e) => setSintomas(e.target.value)}
          />
        </div>

        <input type='submit' value='Agregar Paciente' className='w-full p-3 rounded bg-indigo-600 text-white uppercase-md cursor-pointer font-bold hover:bg-indigo-700 transition-colors' />
      </form>
    </div>
  )
}
