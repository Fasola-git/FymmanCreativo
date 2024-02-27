
export default function Home(){
/* LOGO MAS CHICO BANNER USAR TIPITOS DE CANVAS */
    return(
        <>
            <div id="Home" className="lg:h-screen bg-1 lg:flex lg:flex-col lg:pt-16 lg:justify-around" >
                <div className="lg:flex lg:justify-evenly lg:items-center lg:basis-4/5">
                    <div className="lg:flex lg:flex-col lg:gap-24 lg:w-1/3">
                        <div className=" lg:flex lg:flex-col lg:gap-6">
                            <h1 className="lg:text-4xl text-7 lg:ps-1">FYMANN <h6 className="lg:text-6xl text-3">CREATIVO</h6></h1>
                            <p className="lg:text-4xl lg:ps-3 text-9">Agencia de Publicidad & Maketing Digital</p>
                            <h2 className="lg:text-6xl text-7">HAGAMOS ALGO DE <span className="text-3">CREATIVIDAD</span></h2>
                        </div>
                        <a className="bg-5 lg:rounded-full lg:h-16 lg:mx-8 lg:text-xl cursor-pointer text-center lg:flex lg:items-center lg:justify-center hover:bg-violet-400 hover:text-2 transition-all duration-300" href="https://wa.me/93814667211?text=Hola!%20Me%20gustaría%20contactar%20con%20ustedes!">Contáctanos Aquí</a>
                    </div>
                    
                    <div className="lg:flex lg:flex-col lg:items-center lg:w-1/3 gap-5">
                            <img src="../../public/img/Logo-persona.png" className="w-10/12 place-self-center" alt="" />
                        <div className="flex flex-row gap-4 items-center w-full justify-end pe-4">
                            <img src="../../public/img/logo.png" className="w-20 " alt="" />
                            <div className="flex flex-col">
                                <h1 className=" text-7 lg:text-4xl lg:place-self-center">FYMMAN</h1>
                                <h6 className=" text-3 lg:text-xl lg:tracking-widest lg:place-self-center">C R E A T I V O</h6>    
                            </div>
                        </div>
                    </div>
                </div>
                <div className="lg:flex lg:flex-row lg:justify-center lg:basis-1/12">
                    <p className="lg:text-5xl text-6">Creemos que el cambio ya se dió... está entre nosotros.</p>
                </div>
            </div>
        </>
    )
}