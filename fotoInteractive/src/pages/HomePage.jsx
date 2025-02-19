import Comentarios from "../components/Comentarios";
import Equipo from "../components/Equipo";
import NavbarInicio from "../components/NavbarInicio";
import Imagenes from "../components/imagenes";
import Footer from "../components/footer";

function HomePage() {
    return (
        <>
            <NavbarInicio></NavbarInicio>
            <section className="bg-center bg-no-repeat bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/conference.jpg')] bg-gray-700 bg-blend-multiply relative">
                <div className="px-4 mx-auto max-w-screen-xl text-center py-40 lg:py-56">
                    <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">FotoInteractive</h1>
                    <p className="mb-8 text-xl font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">Hacemos que cada foto y video sea un recuerdo único y especial para nuestros clientes</p>
                    <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
                        <a href="#" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-palete-3 hover:bg-blue-900 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                            Agende sus sesion ahora!
                            <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                            </svg>
                        </a>
                    </div>
                </div>
            </section>

            <section >
                {/* Componente para ver las reseñas de clientes */}
                <div className="-mt-40 relative">
                    <div className="flex justify-center gap-8 p-8">
                        <Comentarios></Comentarios>
                    </div>
                </div>
            </section>

            <section>
                <div className="px-4 mx-auto max-w-screen-xl text-center pt-3">
                    <h1 className="mb-4 text-5xl pb-8 font-extrabold tracking-tight leading-none text-black md:text-5xl lg:text-4xl">Nuestros paquetes</h1>
                </div>

                <div className="grid grid-cols-3 mx-auto max-w-screen-xl">
                    <div className="max-w-sm m-5 border rounded-lg shadow-sm dark:bg-gray-100 dark:border-gray-700">
                        <a href="#">
                            <img className="rounded-t-lg" src="../img/OIP.jpg" alt="" />
                        </a>
                        <div className="p-5">
                            <a href="#">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black">Noteworthy technology acquisitions 2021</h5>
                            </a>
                            <p className="mb-3 font-normal text-gray-700 dark:text-black">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                            <div className="flex items-center justify-between pt-9">
                                <span className="text-2xl font-bold text-gray-900 dark:text-black">$599</span>
                                <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-950  focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-palete-3 dark:hover:bg-blue-900 dark:focus:ring-blue-800">
                                    Solicitar
                                    <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="max-w-sm m-5 border rounded-lg shadow-sm dark:bg-gray-100 dark:border-gray-700">
                        <a href="#">
                            <img className="rounded-t-lg" src="../img/OIP.jpg" alt="" />
                        </a>
                        <div className="p-5">
                            <a href="#">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black">Noteworthy technology acquisitions 2021</h5>
                            </a>
                            <p className="mb-3 font-normal text-gray-700 dark:text-black">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                            <div className="flex items-center justify-between pt-9">
                                <span className="text-2xl font-bold text-gray-900 dark:text-black">$599</span>
                                <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-palete-3 dark:hover:bg-blue-900 dark:focus:ring-blue-800">
                                    Solicitar
                                    <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="max-w-sm m-5 border rounded-lg shadow-sm dark:bg-gray-100 dark:border-gray-700">
                        <a href="#">
                            <img className="rounded-t-lg" src="../img/OIP.jpg" alt="" />
                        </a>
                        <div className="p-5">
                            <a href="#">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black">Noteworthy technology acquisitions 2021</h5>
                            </a>
                            <p className="mb-3 font-normal text-gray-700 dark:text-black">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                            <div className="flex items-center justify-between pt-9">
                                <span className="text-2xl font-bold text-gray-900 dark:text-black">$599</span>
                                <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-palete-3 dark:hover:bg-blue-900 dark:focus:ring-blue-800">
                                    Solicitar
                                    <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="max-w-sm m-5 border rounded-lg shadow-sm dark:bg-gray-100 dark:border-gray-700">
                        <a href="#">
                            <img className="rounded-t-lg" src="../img/OIP.jpg" alt="" />
                        </a>
                        <div className="p-5">
                            <a href="#">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black">Noteworthy technology acquisitions 2021</h5>
                            </a>
                            <p className="mb-3 font-normal text-gray-700 dark:text-black">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                            <div className="flex items-center justify-between pt-9">
                                <span className="text-2xl font-bold text-gray-900 dark:text-black">$599</span>
                                <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-palete-3 dark:hover:bg-blue-900 dark:focus:ring-blue-800">
                                    Solicitar
                                    <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="max-w-sm m-5 border rounded-lg shadow-sm dark:bg-gray-100 dark:border-gray-700">
                        <a href="#">
                            <img className="rounded-t-lg" src="../img/OIP.jpg" alt="" />
                        </a>
                        <div className="p-5">
                            <a href="#">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black">Noteworthy technology acquisitions 2021</h5>
                            </a>
                            <p className="mb-3 font-normal text-gray-700 dark:text-black">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                            <div className="flex items-center justify-between pt-9">
                                <span className="text-2xl font-bold text-gray-900 dark:text-black">$599</span>
                                <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-palete-3 dark:hover:bg-blue-900 dark:focus:ring-blue-800">
                                    Solicitar
                                    <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="max-w-sm m-5 border rounded-lg shadow-sm dark:bg-gray-100 dark:border-gray-700">
                        <a href="#">
                            <img className="rounded-t-lg" src="../img/OIP.jpg" alt="" />
                        </a>
                        <div className="p-5">
                            <a href="#">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black">Noteworthy technology acquisitions 2021</h5>
                            </a>
                            <p className="mb-3 font-normal text-gray-700 dark:text-black">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                            <div className="flex items-center justify-between pt-9">
                                <span className="text-2xl font-bold text-gray-900 dark:text-black">$599</span>
                                <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-palete-3 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-palet-3 dark:hover:bg-blue-900 dark:focus:ring-blue-800">
                                    Solicitar
                                    <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <Imagenes></Imagenes>
            </section>

            <section>
                <Equipo></Equipo>
            </section>

            <footer className="mt-5 bg-customColor border-b border-gray-100 bg-palete-1">
                <Footer></Footer>
            </footer>
        </>
    )
};

export default HomePage;