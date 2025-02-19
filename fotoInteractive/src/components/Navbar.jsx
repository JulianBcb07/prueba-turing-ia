

function Navbar() {
    return (
        <nav className="bg-white dark:bg-palete-1 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600 mb-48">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-4">
                <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src="/img/icon-foto.png" className="h-20 filter invert" alt="FotoInteractive Logo" />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">FotoInteractive</span>
                </a>
                <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                    <a href="/admin" className="text-gray-900 text-lg px-3 py-2  dark:text-white hover:underline">Volver a inicio</a>
                </div>
            </div>
        </nav>
    )
};

export default Navbar;