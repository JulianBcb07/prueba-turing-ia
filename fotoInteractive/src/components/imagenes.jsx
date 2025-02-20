
function Imagenes() {
    return (
        <>

            <div className="px-4 mx-auto max-w-screen-xl text-center pt-5">
                <h1 className="mb-4 text-5xl pb-8 font-extrabold tracking-tight leading-none text-black md:text-5xl lg:text-4xl">Galería de imagenes</h1>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-4 mx-auto max-w-screen-xl">

                <div className="group cursor-pointer relative">
                    <img
                        src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw1fHxuYXR1cmV8ZW58MHwwfHx8MTY5NDA5OTcyOXww&ixlib=rb-4.0.3&q=80&w=1080"
                        alt="Image 1"
                        className="w-full h-48 object-cover rounded-lg transition-transform transform scale-100 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <button className="bg-white text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors">
                            View
                        </button>
                    </div>
                </div>
                <div className="group cursor-pointer relative">
                    <img
                        src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw1fHxuYXR1cmV8ZW58MHwwfHx8MTY5NDA5OTcyOXww&ixlib=rb-4.0.3&q=80&w=1080"
                        alt="Image 1"
                        className="w-full h-48 object-cover rounded-lg transition-transform transform scale-100 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <button className="bg-white text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors">
                            View
                        </button>
                    </div>
                </div>
                <div className="group cursor-pointer relative">
                    <img
                        src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw1fHxuYXR1cmV8ZW58MHwwfHx8MTY5NDA5OTcyOXww&ixlib=rb-4.0.3&q=80&w=1080"
                        alt="Image 1"
                        className="w-full h-48 object-cover rounded-lg transition-transform transform scale-100 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <button className="bg-white text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors">
                            View
                        </button>
                    </div>
                </div>
                <div className="group cursor-pointer relative">
                    <img
                        src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw1fHxuYXR1cmV8ZW58MHwwfHx8MTY5NDA5OTcyOXww&ixlib=rb-4.0.3&q=80&w=1080"
                        alt="Image 1"
                        className="w-full h-48 object-cover rounded-lg transition-transform transform scale-100 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <button className="bg-white text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors">
                            View
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Imagenes;