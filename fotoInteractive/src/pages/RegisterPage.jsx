import Navbar from "../components/Navbar";

function Register() {
    return (
        <>
            <Navbar></Navbar>
            <section className="flex flex-col items-center justify-center min-h-screen pt-6">
                <div
                    className="w-full bg-white rounded-t-lg shadow dark: border-x dark:border-t md:mt-0 sm:max-w-md xl:p-0 dark:bg-palete-4 dark:border-gray-700">
                    <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl p-5 text-center dark:text-black">Registrarse
                    </h1>
                </div>
                <div
                    className="w-full bg-white rounded-b-lg shadow dark: border-x dark:border-b md:mt-0 sm:max-w-md xl:p-0 dark:bg-white dark:border-gray-700">
                    <div className="p-6 pb-10 space-y-4 md:space-y-6 sm:px-8">

                        <form className="space-y-4 md:space-y-6" method="POST">
                            <div>
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Nombre de usuario</label>
                                <input type="text" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-500 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Emelia Erickson" required="" />
                            </div>
                            <div>
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Correo electronico</label>
                                <input type="text" name="username" id="username" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-500 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="correo@correo.com" required="" />
                            </div>
                            <div>
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Contraseña</label>
                                <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-500 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                            </div>
                            <button type="submit" className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-6 py-2.5 text-center dark:bg-palete-1 dark:hover:bg-blue-900 dark:focus:ring-blue-900">Crear una cuenta</button>
                        </form>
                        <div className="flex justify-center gap-4">
                            <p className="text-sm">¿Ya tiene un cuenta activa?</p>
                            <a href="Login" className="text-sm font-semibold text-black dark:text-black hover:text-blue-800">Inicie sesión aquí</a>
                        </div>
                    </div>
                </div>
            </section>

        </>

    )
};

export default Register;