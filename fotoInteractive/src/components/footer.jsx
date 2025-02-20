import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareWhatsapp } from "react-icons/fa6";


function Footer() {
    return (
        <>
            <div className="px-4 pt-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
                <div className="flex flex-col lg:flex-row gap-10 mb-4">
                    {/* Logo */}
                    <div className="lg:w-1/4 pt-6">
                        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
                            <img src="./img/icon-foto.png" className="h-20 filter invert" alt="FotoInteractive Logo" />
                            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">FotoInteractive</span>
                        </a>
                    </div>

                    {/* Contacto, Dirección y Explorar en una fila */}
                    <div className="flex flex-col lg:flex-row gap-10 lg:w-3/4">
                        {/* Contacto */}
                        <div className="space-y-2 text-sm lg:w-1/3">
                            <p className="text-base font-bold tracking-wide text-gray-200">Contacto</p>
                            <div className="flex">
                                <p className="mr-1 text-gray-100">Teléfono: </p>
                                <p className="mr-1 text-gray-100">985-109-5977</p>
                            </div>
                            <div className="flex items-center">
                                <p className="mr-1 text-gray-100">Facebook </p>
                                <a href="" className="text-2xl   dark:text-white"><FaFacebookSquare /></a>
                            </div>
                            <div className="flex items-center">
                                <p className="mr-1 text-gray-100">Instagram </p>
                                <a href="" className="text-2xl   dark:text-white"><FaSquareInstagram /></a>
                            </div>
                            <div className="flex items-center">
                                <p className="mr-1 text-gray-100">LinkedIn </p>
                                <a href="" className="text-2xl   dark:text-white"><FaLinkedin /></a>
                            </div>
                            <div className="flex items-center">
                                <p className="mr-1 text-gray-100">WhatsApp </p>
                                <a href="" className="text-2xl   dark:text-white"><FaSquareWhatsapp /></a>

                            </div>

                        </div>

                        {/* Dirección */}
                        <div className="space-y-2 text-sm lg:w-1/3">
                            <p className="text-base font-bold tracking-wide text-gray-200">Dirección</p>
                            <div className="flex">
                                <p className="text-gray-100">
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                    Eaque numquam iste adipisci, voluptates voluptatem esse amet deserunt atque. Veritatis.
                                </p>
                            </div>
                        </div>

                        {/* Explorar */}
                        <div className="space-y-2 text-sm lg:w-1/3">
                            <p className="text-base font-bold tracking-wide text-gray-200">Explorar</p>

                            <div className="flex flex-col">
                                <p className="text-gray-100">
                                    Inicio
                                </p>
                                <p className="text-gray-100">
                                    Paquetes
                                </p>
                                <p className="text-gray-100">
                                    Galería
                                </p>
                                <p className="text-gray-100">
                                    Nosotros
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Pie de página */}
                <div className="flex flex-col-reverse justify-between pt-5 pb-10 border-t lg:flex-row">
                    <p className="text-sm text-gray-100">
                        © Copyright 2025 FotoInteractive todos los derechos reservados.
                    </p>
                </div>
            </div >
        </>
    )
}

export default Footer;
