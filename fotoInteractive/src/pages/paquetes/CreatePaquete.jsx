// src/pages/CreatePaquete.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router";
import { FaPlus } from "react-icons/fa";
import Navbar from "../../components/Navbar";
import { createPaquete } from "../../api/service";

function CreatePaquete() {
    const navigate = useNavigate();

    // Estado para manejar los valores del formulario
    const [formData, setFormData] = useState({
        name: "",
        description: "",
        price: "",
        img: null, // Para manejar la imagen
    });

    // Manejar cambios en los campos del formulario
    const handleChange = (e) => {
        const { name, value, files } = e.target;
        if (name === "img") {
            setFormData({ ...formData, [name]: files[0] }); // Guardar el archivo de imagen
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    // Manejar el envío del formulario
    const handleSubmit = async (e) => {
        e.preventDefault();

        // Crear un objeto FormData para enviar la imagen
        const data = new FormData();
        data.append("name", formData.name);
        data.append("description", formData.description);
        data.append("price", formData.price);
        if (formData.img) {
            data.append("img", formData.img); // Agregar la imagen al FormData
        }

        try {
            await createPaquete(data); // Enviar los datos al backend
            alert("Paquete creado exitosamente");
            navigate("/admin"); // Redirigir a la página de administración
        } catch (error) {
            console.error("Error al crear el paquete:", error);
            alert("Hubo un error al crear el paquete");
        }
    };

    return (
        <>
            <Navbar />
            <section className="max-w-screen-md mx-auto mt-30">
                <h1 className="text-2xl font-bold text-left mb-3">Agregar un nuevo paquete de fotografía</h1>
                <div className="bg-white shadow rounded-lg p-8 mb-10">
                    <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                        <div className="max-w-screen-md mx-auto">
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Nombre del paquete</label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-500 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Paquete..."
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="max-w-screen-md mx-auto">
                            <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Descripción del paquete</label>
                            <textarea
                                id="description"
                                name="description"
                                rows="4"
                                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-white dark:border-gray-600 dark:placeholder-gray-500 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Añadir una descripción..."
                                value={formData.description}
                                onChange={handleChange}
                                required
                            ></textarea>
                        </div>
                        <div className="max-w-screen-md mx-auto">
                            <label htmlFor="price" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Precio del paquete</label>
                            <input
                                type="number"
                                id="price"
                                name="price"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-500 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="1499.99"
                                value={formData.price}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="max-w-screen-md mx-auto">
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black" htmlFor="img">Subir imagen</label>
                            <input
                                className="block w-full p-2.5 text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-500 focus:outline-none dark:bg-white dark:border-gray-600 dark:placeholder-gray-500"
                                id="img"
                                name="img"
                                type="file"
                                accept=".png, .jpg, .jpeg"
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="flex justify-end">
                            <button
                                type="submit"
                                className="flex items-center gap-2 text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-6 py-2.5 text-center dark:bg-palete-1 dark:hover:bg-palete-3 dark:focus:ring-blue-900"
                            >
                                <FaPlus /> Agregar nuevo paquete
                            </button>
                        </div>
                    </form>
                </div>
            </section>
        </>
    );
}

export default CreatePaquete;