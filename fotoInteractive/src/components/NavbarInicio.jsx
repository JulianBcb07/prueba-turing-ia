import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareWhatsapp } from "react-icons/fa6";


function NavbarInicio() {
    return (
        <>
            <nav className="bg-white border-gray-200 dark:bg-gray-900">
                <div className="flex flex-wrap justify-end items-center mx-auto max-w-screen-xl p-4">
                    <div className="flex items-center space-x-3 rtl:space-x-reverse">
                        <a href="Register" className="text-sm  text-white dark:text-white hover:underline">Registrarse</a>
                        <a href="Login" className="text-sm  text-white dark:text-white hover:underline">Iniciar Sesion</a>
                        <a href="" className="text-2xl   dark:text-white"><FaFacebookSquare /></a>
                        <a href="" className="text-2xl   dark:text-white"><FaSquareInstagram /></a>
                        <a href="" className="text-2xl   dark:text-white"><FaLinkedin /></a>
                        <a href="" className="text-2xl   dark:text-white"><FaSquareWhatsapp /></a>
                    </div>
                </div>
            </nav>
            <nav className="bg-gray-50 dark:bg-palete-3">
                <div className="max-w-screen-xl px-4  mx-auto">
                    <div className="flex items-center justify-between">
                        <ul>
                            <li>
                                <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
                                    <img src="./img/icon-foto.png" className="h-20 filter invert" alt="FotoInteractive Logo" />
                                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">FotoInteractive</span>
                                </a>
                            </li>
                        </ul>
                        <ul className="flex flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm">
                            <li>
                                <a href="#" className="text-gray-900 text-lg dark:text-white hover:underline" aria-current="page">Inicio</a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-900 text-lg dark:text-white hover:underline">Paquetes</a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-900 text-lg dark:text-white hover:underline">Gelería</a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-900 text-lg dark:text-white hover:underline">Nosotros</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav >
        </>

    )
};

export default NavbarInicio;