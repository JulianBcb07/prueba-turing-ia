// src/pages/AdminPage.jsx
import React, { useEffect, useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import { Link } from "react-router";
import Navbar from '../components/Navbar';
import { deletePaquete, getPaquetes } from "../api/service";

function AdminPage() {
    const [paquetes, setPaquetes] = useState([]);

    // Obtener los paquetes al cargar la página
    useEffect(() => {
        const fetchPaquetes = async () => {
            try {
                const data = await getPaquetes();
                setPaquetes(data);
            } catch (error) {
                console.error("Error al obtener los paquetes:", error);
            }
        };
        fetchPaquetes();
    }, []);

    // Función para eliminar un paquete
    const handleDelete = async (id) => {
        try {
            await deletePaquete(id);
            setPaquetes(paquetes.filter((paquete) => paquete._id !== id)); // Actualiza la lista de paquetes
            alert("Paquete eliminado exitosamente");
        } catch (error) {
            console.error("Error al eliminar el paquete:", error);
        }
    };

    return (
        <>
            <Navbar />
            <section className="mt-30 max-w-screen-xl mx-auto pt-6">
                <div className="max-w-screen-xl w-full px-4">
                    <div className="flex items-center justify-between">
                        <h1 className="text-3xl font-bold text-left mb-6">Lista de paquetes</h1>
                        <Link
                            to="/nuevo-paquete"
                            className="focus:outline-none text-white bg-palete-1 hover:bg-palete-3 focus:ring-4 focus:ring-blue-600 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-palete-1 dark:hover:bg-palete-3 dark:focus:ring-blue-800"
                        >
                            Agregar nuevo paquete
                        </Link>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full border-collapse bg-white shadow-sm rounded-lg overflow-hidden">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th className="px-6 py-8 text-left text-xs font-medium text-gray-800 uppercase tracking-wider">Nombre</th>
                                    <th className="px-6 py-8 text-left text-xs font-medium text-gray-800 uppercase tracking-wider">Descripción</th>
                                    <th className="px-6 py-8 text-left text-xs font-medium text-gray-800 uppercase tracking-wider">Precio</th>
                                    <th className="px-6 py-8 text-left text-xs font-medium text-gray-800 uppercase tracking-wider">Imagen Subida</th>
                                    <th className="px-6 py-8 text-left text-xs font-medium text-gray-800 uppercase tracking-wider">Acciones</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {paquetes.map((paquete) => (
                                    <tr key={paquete._id}>
                                        <td className="px-6 py-4 whitespace-nowrap">{paquete.name}</td>
                                        <td className="px-6 py-4">{paquete.description}</td>
                                        <td className="px-6 py-4 whitespace-nowrap">${paquete.price}</td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <img src={paquete.img} alt={paquete.name} width={50} height={50} className="rounded-full" />
                                        </td>
                                        <td>
                                            <div className="flex items-center gap-4 justify-center">
                                                <Link
                                                    to={`/paquete/${paquete._id}`}
                                                    className="flex items-center gap-2 text-blue-600 hover:text-blue-800"
                                                >
                                                    <FaEdit /> Editar
                                                </Link>
                                                <button
                                                    onClick={() => handleDelete(paquete._id)}
                                                    className="flex items-center gap-2 text-red-600 hover:text-red-800"
                                                >
                                                    <FaTrash /> Eliminar
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
        </>
    );
}

export default AdminPage;