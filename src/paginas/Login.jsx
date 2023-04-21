import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <>  
        <div>
            <h1 className="text-indigo-600 font-black text-6xl">
                Inicia Sesión y Administra tus 
                <span className="text-black"> Pacientes</span>
            </h1>
        </div>
        <div>
            <form action="">
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
                        placeholder="Email de registro"
                    />
                </div>
                <div>
                    <label 
                        htmlFor=""
                        className="uppercase text-gray-600 block text-xl font-bold"
                    >Password: </label>
                    <input 
                        type="password" 
                        name="" 
                        id=""
                        className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"
                        placeholder="Tu Password"
                    />
                </div>
                <input 
                    type="submit" 
                    value="Iniciar Sesión" 
                    className="bg-indigo-700 w-full py-3 px-10 rounded-xl text-white uppercase font-bold mt-8 hover:cursor-pointer hover:bg-indigo-800 md:w-auto"
                />
            </form>
            <nav className='mt-10 lg:flex lg:justify-between'>
                <Link 
                    className='block text-center my-5 text-gray-500'
                    to="/registrar">¿No tienes una cuenta? Registrate
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

export default Login