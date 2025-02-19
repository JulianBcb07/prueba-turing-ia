import Navbar from '../components/Navbar';
import { FaEdit } from "react-icons/fa";

function AdminPage() {
    return (
        <>
            <Navbar></Navbar>
            <section className="mt-30 max-w-screen-xl mx-auto pt-6">

                <div className="max-w-screen-xl w-full px-4">
                    <div className="flex items-center justify-between">
                        <h1 className="text-3xl font-bold text-left mb-6">Lista de paquetes</h1>
                        <a className="focus:outline-none text-white bg-palete-1 hover:bg-palete-3 focus:ring-4 focus:ring-blue-600 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-palete-1 dark:hover:bg-palete-3 dark:focus:ring-blue-800" href="/nuevo-paquete">Agregar nuevo paquete</a>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full border-collapse bg-white shadow-sm rounded-lg overflow-hidden">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th className="px-6 py-8 text-left text-xs font-medium text-gray-800 uppercase tracking-wider">Nombre</th>
                                    <th className="px-6 py-8 text-left text-xs font-medium text-gray-800 uppercase tracking-wider">
                                        Descripción
                                    </th>
                                    <th className="px-6 py-8 text-left text-xs font-medium text-gray-800 uppercase tracking-wider">Precio</th>
                                    <th className="px-6 py-8 text-left text-xs font-medium text-gray-800 uppercase tracking-wider">Imagen Subida</th>
                                    <th className="px-6 py-8 text-left text-xs font-medium text-gray-800 uppercase tracking-wider">Acciones</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                <tr>
                                    <td className="px-6 py-4 whitespace-nowrap">Product 1</td>
                                    <td className="px-6 py-4">This is a description for Product 1.</td>
                                    <td className="px-6 py-4 whitespace-nowrap">$19.99</td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <img src="/placeholder.svg" alt="Product 1" width={50} height={50} className="rounded-full" />
                                    </td>
                                    <td>
                                        <div className="flex items-center gap-4 justify-center">
                                            <a className="flex items-center gap-4" href="/paquete/1"><FaEdit />Editar</a>
                                        </div>
                                    </td>
                                </tr>

                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AdminPage;