import { createContext, useState, useEffect } from "react";
import clienteAxios from "../config/axios";

const PacientesContext = createContext()

// eslint-disable-next-line react/prop-types
const PacientesProvider = ({children}) => {

        const [pacientes, setPacientes] = useState([])
        const [paciente, setPaciente] = useState({})

        useEffect(() => {
            const obtenerPaciente = async () => {
                try {
                    const token = localStorage.getItem('token')
                    if (!token) return
                    const config = {
                        headers: {
                            "Content-Type": "application/json",
                            Authorization: `Bearer ${token}`
                        }
                    }

                    const { data } = await clienteAxios('/pacientes', config)
                    setPacientes(data)

                } catch (error) {
                    console.log(error)
                }
            }
            obtenerPaciente()
        }, [])

        const guardarPaciente = async (paciente) => {

            const token = localStorage.getItem('token')
                    const config = {
                        headers: {
                            "Content-Type": "application/json",
                            Authorization: `Bearer ${token}`
                        }
                    }

            if(paciente.id){
                try {
                    const {data} = await clienteAxios.put(`/pacientes/${paciente.id}`, paciente, config)
                    const pacienteActualizado = pacientes.map( pacienteState => pacienteState._id === data._id ? data : pacienteState)
                    setPacientes(pacienteActualizado)
                } catch (error) {
                    console.log(error.response.data.msg)
                }
            } else {
                try {
                    const { data } = await clienteAxios.post(
                        '/pacientes', paciente, config)
                    // eslint-disable-next-line no-unused-vars
                    const { createdAt, updatedAt, __v, ...pacienteAlmacenado  } = data
    
                    setPacientes([pacienteAlmacenado, ... pacientes])
                } catch (error) {
                    console.log(error.response.data.msg)
                }
            }

            
        }

        const setEdicion = (paciente) => {
            setPaciente(paciente)
        }

        return(
            <PacientesContext.Provider
                value={{
                    pacientes,
                    guardarPaciente,
                    setEdicion,
                    paciente
                }}
            >
                {children}
            </PacientesContext.Provider>
        )
}

export {
    PacientesProvider
}

export default PacientesContext;