import { useState } from "react"
import Alerta from "../components/Alerta"
import AdminNav from "../components/AdminNav"
import useAuth from '../hooks/useAuth'

const CambiarPassword = () => {

    const { auth,  guardarPassword } = useAuth()


    const [password, setPassword] = useState({
        passwordAntigua: '',
        passwordNuevo: '',
        passwordNueva2: ''
    })


    const [alerta, setAlerta] = useState({})


    const handleSubmit = async e => {
        e.preventDefault()
        if(Object.values(password).every(campo => campo==="")){
            setAlerta({
                msg: "Todos los campos son obligatorios",
                error: true
            })
            return
        }
 
        if(password.passwordNuevo !==password.passwordNueva2){
            setAlerta({
                msg: "Las password deben ser iguales",
                error: true
            })
            return
        }
        if(password.passwordNuevo.length < 8){
            setAlerta({
                msg: "La password debe tener minimo 9 caracteres",
                error: true
            })
            return
        }
        const respuesta = await guardarPassword(password)
        setAlerta(respuesta)
        
    }
    const { msg } = alerta

  return (
    <>
        <AdminNav />

        <h2 className="font-black text-3xl text-center mt-10">Cambiar Password</h2>
        <p className="text-xl mt-5 mb-10 text-center">Modifica tu {''} 
            <span className="text-indigo-600 font-bold"> Password aqui</span>
        </p>
        <div className="flex justify-center">
          <div className="w-full md:w-1/2 bg-white shadow rounded-lg p-5">
            {msg && <Alerta 
                alerta={alerta}
            />}
            <form onSubmit={handleSubmit}>
              <div className="my-3">
                <label htmlFor="" className="uppercase font-bold text-gray-600">Password antigua</label>
                <input 
                  type="password"  
                  className="border bg-gray-50 w-full p-2 my-2 rounded-lg"
                  name="passwordAntigua"
                  onChange={ e => setPassword({
                    ... password,
                    [e.target.name] : e.target.value
                  })}
                />
              </div>
              <div className="my-3">
                <label htmlFor="" className="uppercase font-bold text-gray-600">Password Nueva</label>
                <input 
                  type="password"  
                  className="border bg-gray-50 w-full p-2 my-2 rounded-lg"
                  name="passwordNuevo"
                  onChange={ e => setPassword({
                    ... password,
                    [e.target.name] : e.target.value
                  })}
                  
                />
              </div>
              <div className="my-3">
                <label htmlFor="" className="uppercase font-bold text-gray-600">Repetir Password nueva</label>
                <input 
                  type="password"  
                  className="border bg-gray-50 w-full p-2 my-2 rounded-lg"
                  name="passwordNueva2"
                  onChange={ e => setPassword({
                    ... password,
                    [e.target.name] : e.target.value
                  })}
                  
                />
              </div>
              
              <input 
                type="submit" 
                value="Guardar Cambios"
                className="bg-indigo-700 px-10 py-3 font-bold text-white rounded-lg uppercase w-full mt-5"
              />
            </form>
          </div>
        </div>
    </>
  )
}

export default CambiarPassword