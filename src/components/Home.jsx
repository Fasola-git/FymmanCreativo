
export default function Home() {
    return (
        <section id="Home" className=" justify-evenly h-screen bg-1 flex flex-col md:pt-10 lg:justify-evenly">
            <div className=" flex flex-col gap-10 lg:gap-0 lg:flex lg:flex-row lg:justify-evenly lg:items-center lg:basis-4/5">
                <div className="grid gap-5 lg:flex lg:flex-col lg:gap-16 lg:w-1/3">
                    <div className="pl-6 lg:pl-0 lg:flex lg:flex-col lg:gap-6">
                        <div>
                            <h1 className="text-2xl lg:text-4xl md:text-3xl text-7 lg:ps-1">FYMMAN </h1>
                            <h6 className="text-3xl lg:text-6xl md:text-5xl lg:ps-1 text-3">CREATIVO</h6>
                        </div>
                        <div>
                            <p className="lg:text-4xl md:text-3xl lg:ps-3 text-9">Agencia de publicidad & </p>
                            <p className="lg:text-4xl md:text-3xl lg:ps-3 text-9">Maketing Digital</p>
                        </div>
                        <div>
                            <h2 className="text-3xl lg:text-5xl md:text-4xl text-7">HAGAMOS ALGO DE</h2>
                            <h2 className=" text-3 text-3xl lg:text-6xl md:text-5xl">CREATIVIDAD</h2>
                        </div>
                    </div>
                    <a className="bg-5 rounded-md w-1/2 h-[150%] flex justify-center items-center justify-self-center border-2 border-3 lg:h-16 lg:w-[80%] lg:mx-4 lg:rounded-full lg:text-3xl md:text-2xl cursor-pointer text-center hover:bg-violet-400 hover:text-2 transition-all duration-300" href="https://wa.me/93814667211?text=Hola!%20Me%20gustaría%20contactar%20con%20ustedes!">Contáctanos Aquí</a>
                </div>

                <div className="lg:flex lg:flex-col md:flex md:flex-col lg:items-center lg:w-1/3 gap-5">
                    <img src="../../img/Logo-persona.png" className="lg:w-10/12 md:w-3/4 place-self-center" alt="" />
                    <div className="flex flex-row gap-4 items-center w-full justify-center lg:pe-4">
                        <img src="../../img/logo.png" className="w-10 md:w-14 lg:w-20 " alt="" />
                        <div className="pr-3 lg:pr-0 flex flex-col">
                            <h1 className="text-7 text-2xl md:text-2xl lg:text-4xl place-self-center">FYMMAN</h1>
                            <h6 className="lg:text-xl text-3 md:text-2xl lg:tracking-widest place-self-center">C R E A T I V O</h6>
                        </div>
                    </div>
                </div>
            </div>
            <div className="lg:flex lg:flex-row lg:justify-center lg:basis-1/12">
                <p className="text-2xl text-center md:text-5xl text-6">Creemos que el cambio ya se dió... está entre nosotros.</p>
            </div>
        </section>
    )
}
