import { useState } from "react"
import { Link } from "react-router-dom"

const Registrar = () => {
  const [ nombre, setNombre] = useState('');
  const [ email, setEmail] = useState('');
  const [ password, setPassword] = useState('');
  const [ repetirPassword, setRepetirPassword] = useState('');


  return (
    <>
      <div>
          <h1 className="text-indigo-600 font-black text-6xl">
              Crea tu cuenta y Administra 
              <span className="text-black"> tus Pacientes</span>
          </h1>
      </div>
      <div className='mt-20 md:mt-5 shadow-lg px-5 py-8 rounded-xl bg-white'>
        <form action="">
          <div className="my-5">
            <label 
              htmlFor=""
              className="uppercase text-gray-600 block text-xl font-bold"
            >Nombre: </label>
            <input 
              type="text" 
              name="" 
              id=""
              className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"
              placeholder="Tu nombre"
              value={nombre}
              onChange={ e => setNombre(e.target.value)}
            />
          </div>
          <div className="my-5">
            <label 
              htmlFor=""
              className="uppercase text-gray-600 block text-xl font-bold"
            >Email: </label>
            <input 
              type="email" 
              name="" 
              id=""
              className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"
              placeholder="Tu email"
              value={email}
              onChange={ e => setEmail(e.target.value)}
            />
          </div>
          <div className="my-5">
            <label 
              htmlFor=""
              className="uppercase text-gray-600 block text-xl font-bold"
            >Password: </label>
            <input 
              type="password" 
              name="" 
              id=""
              className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"
              placeholder="Tu password"
              value={password}
              onChange={ e => setPassword(e.target.value)}
            />
          </div>
          <div className="my-5">
            <label 
              htmlFor=""
              className="uppercase text-gray-600 block text-xl font-bold"
            >Repetir Password: </label>
            <input 
              type="password" 
              name="" 
              id=""
              className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"
              placeholder="Repite tu password"
              value={repetirPassword}
              onChange={ e => setRepetirPassword(e.target.value)}
            />
          </div>
          <input 
            type="submit" 
            value="Crear Cuenta" 
            className="bg-indigo-700 w-full py-3 px-10 rounded-xl text-white uppercase font-bold mt-5 hover:cursor-pointer hover:bg-indigo-800 md:w-auto"
          />
        </form>
        <nav className='mt-5 lg:flex lg:justify-between'>
          <Link 
            className='block text-center my-5 text-gray-500'
            to="/">Inicia Sesion
          </Link>
          <Link 
            className='block text-center my-5 text-gray-500'
            to="/olvide-password">Olvide mi Password
          </Link>
        </nav>
      </div>
    </>
  )
}
  
  export default Registrar