export const Formulario = () => {
  return (
    <div className='w-1/2 lg:w-3/5'>
      <h2 className='font-black text-3xl text-center'>Seguimiento Pacientes</h2>

      <p className='text-lg mt-5 text-center mb-10'>
        Añade Pacientes y{' '}
        <span className='text-indigo-600 font-bold'>Administralos</span>
      </p>

      <form className='bg-white shadow-md rounded py-10 px-5 mb-10'>
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
          />
        </div>
        <div className=' mb-5'>
          <label
            htmlFor='alta'
            className=' block text-gray-700 uppercase font-bold'
          >
            Síntomas
          </label>
          <textarea id='sintomas' placeholder='Describe los síntomas' className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md' />
        </div>

        <input type='submit' value='Agregar Paciente' className='w-full p-3 rounded bg-indigo-600 text-white uppercase-md cursor-pointer font-bold hover:bg-indigo-700 transition-colors' />
      </form>
    </div>
  )
}
