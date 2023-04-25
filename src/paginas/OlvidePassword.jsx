import { useState } from "react"
import { Link } from "react-router-dom"
import Alerta from "../components/Alerta"
import clienteAxios from "../config/axios"
import useAuth from "../hooks/useAuth"

const OlvidePassword = () => {
  const [email, setEmail] = useState('')
  const [ alerta, setAlerta] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (email === '' && email.length < 7){
      setAlerta({msg: "El email es obligatorio", error: true})
      return
    }

    try {
      const { data } = await clienteAxios.post('/veterinarios/olvide-password', { email })

      setAlerta({ msg: data.msg})
    } catch (error) {
      setAlerta({
        msg: error.response.data.msg,
        error: true
      })
    }
  }

  const { msg } = alerta


  return (
    <>
        <div>
          <h1 className="text-indigo-600 font-black text-6xl">
            Recupera tu Acceso y no Pierdas 
            <span className="text-black"> tus Pacientes</span>
          </h1>
        </div>
        <div className='mt-20 md:mt-5 shadow-lg px-5 py-5 rounded-xl bg-white'>
          { msg && <Alerta
          alerta={alerta}
        />}
          <form onSubmit={handleSubmit}>
            <div className="my-5">
              <label 
                htmlFor=""
                className="uppercase text-gray-600 block text-xl font-bold"
              >Email: </label>
              <input 
                type="email" 
                value={email}
                onChange={ e => setEmail(e.target.value)}
                className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"
                placeholder="Tu email"
              />
            </div>
            <input 
              type="submit" 
              value="Recuperar Password" 
              className="bg-indigo-700 w-full py-3 px-10 rounded-xl text-white uppercase font-bold mt-5 hover:cursor-pointer hover:bg-indigo-800 md:w-auto"
            />
          </form>
          <nav className='mt-10 lg:flex lg:justify-between'>
            <Link 
              className='block text-center my-5 text-gray-500'
              to="/registrar">¿No tienes una cuenta? Registrate
            </Link>
            <Link 
              className='block text-center my-5 text-gray-500'
              to="/">Inicia Sesion
            </Link>
          </nav>
        </div>
    </>
  )
}

export default OlvidePassword