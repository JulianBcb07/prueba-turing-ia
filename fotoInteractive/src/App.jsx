import { BrowserRouter, Routes, Route } from 'react-router'; // Corregir la importación
import { AuthProvider } from './context/authContext';
import Register from './pages/RegisterPage';
import Login from './pages/LoginPage';
import HomePage from './pages/HomePage';
import AdminPage from './pages/AdminPage';
import CreatePaquete from './pages/paquetes/CreatePaquete';
import UpdatePaquete from './pages/paquetes/UpdatePaquete';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          {/* Rutas públicas */}
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/nuevo-paquete" element={<CreatePaquete />} />
          <Route path="/paquete/:id" element={<UpdatePaquete />} />
          <Route path="/profile" element={<h1>Perfil</h1>} />
        </Routes>
      </BrowserRouter>
    </AuthProvider >
  );
}

export default App;