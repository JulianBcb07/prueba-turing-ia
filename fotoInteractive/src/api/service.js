// src/services/paquete.service.js
import axios from "axios";

const API_URL = "http://localhost:4000/api/paquetes"; // Asegúrate de que la URL sea correcta

// Obtener todos los paquetes del usuario autenticado
export const getPaquetes = async () => {
    const response = await axios.get(API_URL, {
        headers: {
            "x-access-token": localStorage.getItem("token"), // Envía el token en los headers
        },
    });
    return response.data;
};

// Crear un nuevo paquete
export const createPaquete = async (paquete) => {
    const response = await axios.post(API_URL, paquete, {
        headers: {
            "x-access-token": localStorage.getItem("token"),
        },
    });
    return response.data;
};

// Obtener un paquete por su ID
export const getPaquete = async (id) => {
    const response = await axios.get(`${API_URL}/${id}`, {
        headers: {
            "x-access-token": localStorage.getItem("token"),
        },
    });
    return response.data;
};

// Actualizar un paquete por su ID
export const updatePaquete = async (id, paquete) => {
    const response = await axios.put(`${API_URL}/${id}`, paquete, {
        headers: {
            "x-access-token": localStorage.getItem("token"),
        },
    });
    return response.data;
};

// Eliminar un paquete por su ID
export const deletePaquete = async (id) => {
    const response = await axios.delete(`${API_URL}/${id}`, {
        headers: {
            "x-access-token": localStorage.getItem("token"),
        },
    });
    return response.data;
};