import { Outlet } from 'react-router-dom'


const AuthLayout = () => {
  return (
    <>
        <main className="container mx-auto md:grid md:grid-cols-2 mt-12 gap-5 p-5 md:px-20 items-center">
            <Outlet />
        </main>
        
    </>
  )
}

export default AuthLayout