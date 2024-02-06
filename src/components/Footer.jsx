
export default function Footer(){
   
    return(
        <>
        <footer className=" left-0 bottom-0 w-full bg-9 pt-[5dvh]">
            <section class=" top flex gap-[60%] justify-center align-middle items-center">
                <a href="https://www.fymmancreativo.com/">
                    <div className="flex items-center px-5">
                        <div className=" bg-2 flex justify-center rounded-full w-14">
                            <img src="../../public/img/logo.png" alt="fymannlogo" />
                        </div>
                        <h1 className="text-base text-2 ps-2">FYMANN <h6 className="text-2xl text-3">CREATIVO</h6></h1>
                    </div>
                </a>
                <div class=" flex flex-col px-5 items-center">
                    <div className="flex text-2 items-center">
                        <i class="fa-solid fa-phone text-xl w-8 h-8 text-3 grid place-items-center pb-1"></i>
                        <p className="text-sm cursor-default">+54 9 381 466 7211</p>
                    </div>
                    <div className="socials flex items-center gap-3 text-2">
                        <a class="fa-brands fa-instagram text-xl w-9 h-9 grid place-items-center rounded-full hover:text-3 transition-all duration-400"href="https://www.instagram.com/fymmancreativo/"></a>
                        <a class="fa-brands fa-facebook text-xl w-9 h-9 grid place-items-center rounded-[50%] hover:text-3 transition-all duration-400" href="https://www.facebook.com/fymmancreativo/"></a>
                        <a class="fa-brands fa-whatsapp text-xl w-9 h-9 grid place-items-center rounded-[50%] hover:text-3 transition-all duration-400" href="https://wa.me/93814667211?text=Hola!%20Me%20gustaría%20contactar%20con%20ustedes!"></a>
                    </div>
                </div>
            </section>
            <section class="bottom flex items-center justify-center text-2 flex-col gap-2 py-5 text-center">
                <p class="copyright text-sm">© 2024 Fymman Creativo - Todos los derechos reservados</p>
            </section>
        </footer>
        </>
    )
}