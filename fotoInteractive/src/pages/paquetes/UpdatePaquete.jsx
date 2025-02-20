import Navbar from "../../components/Navbar";

function UpdatePaquete() {
    return (
        <>
            <Navbar></Navbar>
            <section className="max-w-screen-md mx-auto mt-30">
                <h1 className="text-2xl font-bold text-left mb-3">Actualizar paquete de fotografía</h1>
                <div className=" bg-white shadow rounded-lg p-8 mb-10">
                    <form className="space-y-4 md:space-y-6 max" method="POST">
                        <div className="max-w-screen-md mx-auto">
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Nombre del paquete</label>
                            <input type="text" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-500 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Paquete..." required />
                        </div>
                        <div className="max-w-screen-md mx-auto">
                            <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Descripción del paquete</label>
                            <textarea id="message" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-white dark:border-gray-600 dark:placeholder-gray-500 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Añadir una descripción..." required></textarea>
                        </div>
                        <div className="max-w-screen-md mx-auto">
                            <label htmlFor="number-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Precio del paquete</label>
                            <input type="number" id="number-input" aria-describedby="helper-text-explanation" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-500 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="1499.99" required />
                        </div>
                        <div className="max-w-screen-md mx-auto">
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black" htmlFor="file_input">Upload file</label>
                            <input className="block w-full p-2.5 text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-500 focus:outline-none dark:bg-white dark:border-gray-600 dark:placeholder-gray-500" id="file_input" type="file" accept=".png, .jpg, .jpeg" required />
                        </div>
                        <div className="flex justify-end gap-4">
                            <button type="submit" className="flex items-center gap-2 text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-6 py-2.5 text-center dark:bg-palete-1 dark:hover:bg-palete-3 dark:focus:ring-blue-900">Actualizar paquete</button>
                            <button type="submit" className="flex items-center gap-2 text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-6 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-blue-900">Eliminar</button>
                        </div>
                    </form>

                </div>
            </section>
        </>

    )
};

export default UpdatePaquete;