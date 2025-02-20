import Navbar from "../components/Navbar";
import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";

function Login() {

    const { register, handleSubmit, formState: { errors }, } = useForm();

    const { signin } = useAuth();

    const onSubmit = handleSubmit((data) => {
        signin(data);
    });

    return (
        <>
            <Navbar></Navbar>
            <section className="flex flex-col items-center justify-center min-h-screen pt-6">
                <div
                    className="w-full bg-white rounded-t-lg shadow dark: border-x dark:border-t md:mt-0 sm:max-w-md xl:p-0 dark:bg-palete-4 dark:border-gray-700">
                    <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl p-5 text-center dark:text-black">Iniciar sesion
                    </h1>
                </div>
                <div
                    className="w-full bg-white rounded-b-lg shadow dark: border-x dark:border-b md:mt-0 sm:max-w-md xl:p-0 dark:bg-white dark:border-gray-700">
                    <div className="p-6 pb-10 space-y-4 md:space-y-6 sm:px-8">

                        <form onSubmit={onSubmit} className="space-y-4 md:space-y-6">
                            <div>
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Correo electronico</label>
                                <input type="email" name="email" {...register("email", { required: true })} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-500 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="correo@correo.com" />
                                {errors.email && <p className="text-red-500">El email es requerido</p>}
                            </div>
                            <div>
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Contraseña</label>
                                <input type="password" name="password" {...register("password", { required: true, minLength: 6 })} placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-500 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                                {errors.password && <p className="text-red-500">La constraseña es requerida</p>}
                            </div>
                            <button type="submit" className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-6 py-2.5 text-center dark:bg-palete-1 dark:hover:bg-blue-900 dark:focus:ring-blue-900">Iniciar sesion</button>
                        </form>
                        <div className="flex justify-center gap-4">
                            <p className="text-sm">¿Aún no se ha registrado?</p>
                            <a href="Register" className="text-sm font-semibold text-black dark:text-black hover:text-blue-800">Registre una cuenta aquí</a>
                        </div>
                    </div>
                </div>
            </section>

        </>

    )
};

export default Login;