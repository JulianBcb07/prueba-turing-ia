import { BrowserRouter, Routes, Route } from 'react-router'
import Register from './pages/RegisterPage'
import Login from './pages/LoginPage'
import HomePage from './pages/HomePage'
import AdminPage from './pages/AdminPage'
import CreatePaquete from './pages/CreatePaquete'
import UpdatePaquete from './pages/UpdatePaquete'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='/admin' element={<AdminPage />}></Route>
        <Route path='/nuevo-paquete' element={<CreatePaquete />}></Route>
        <Route path='/paquete/:id' element={<UpdatePaquete />}></Route>
        <Route path='/profile' element={<h1>Perfil</h1>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
