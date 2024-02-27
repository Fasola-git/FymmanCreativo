import { NavLink } from "react-router-dom"

export default function Header(){

    function scrollToTargetAdjusted(element){
        var Element = element
        var headerOffset = 45;
        var elementPosition = Element.getBoundingClientRect().top;
        var offsetPosition = elementPosition + window.pageYOffset - headerOffset -50;
      
        window.scrollTo({
             top: offsetPosition,
             behavior: "smooth"
        });
    }

    return(
        <>
        <header className="Header bg-2 fixed w-full shadow-lg z-10">
            <nav className="nav_menu flex min-h-16 justify-center items-center">
                <ul className="menu list-none flex justify-center items-stretch gap-5">
                    <li className="flex justify-center w-24 ease-in-out transition-all duration-300 hover:text-3">
                        <NavLink to={`/`} className=" flex items-center justify-center text-base h-full cursor-pointer no-underline relative px-2 before:absolute before:w-full before:h-[3px] before:-bottom-[12px] before:left-0 before:bg-3 before:ease-in-out before:transition-all before:duration-200 before:invisible"><button onClick={() => {
                        const element = document.getElementById('Home')
                        scrollToTargetAdjusted(element)
                    }} href="#Home" >Inicio</button></NavLink></li>
                    <li className="flex justify-center w-34 whitespace-nowrap ease-in-out transition-all duration-300 hover:text-3">
                        <NavLink to={`/`} className=" flex items-center justify-center text-base h-full cursor-pointer no-underline relative px-2 before:absolute before:w-full before:h-[3px] before:-bottom-[12px] before:left-0 before:bg-3 before:ease-in-out before:transition-all before:duration-200 before:invisible"><button onClick={() => {
                        const element = document.getElementById('Demanda')
                        scrollToTargetAdjusted(element)
                    }} href="#Demanda" >Demanda</button></NavLink></li>
                    <li className="flex justify-center w-34 whitespace-nowrap ease-in-out transition-all duration-300 hover:text-3">            
                        <NavLink to={`/nosotros`} className=" flex items-center justify-center h-full cursor-pointer no-underline relative px-2 before:absolute before:w-full before:h-[3px] before:-bottom-[12px] before:left-0 before:bg-3 before:ease-in-out before:transition-all before:duration-200 before:invisible">Nosotros</NavLink>
                    </li>
                    <li className="flex justify-center w-24 ease-in-out transition-all duration-300 hover:text-3">
                        <NavLink to={`/`} className=" flex items-center justify-center text-base h-full cursor-pointer no-underline relative px-2 before:absolute before:w-full before:h-[3px] before:-bottom-[12px] before:left-0 before:bg-3 before:ease-in-out before:transition-all before:duration-200 before:invisible"><button onClick={() => {
                        const element = document.getElementById('Servicios')
                        scrollToTargetAdjusted(element)
                    }} href="#Servicios" >Servicios</button></NavLink></li>
                    <li className="flex justify-center w-24 ease-in-out transition-all duration-300 hover:text-3">
                        <NavLink to={`/`} className=" flex items-center justify-center text-base h-full cursor-pointer no-underline relative px-2 before:absolute before:w-full before:h-[3px] before:-bottom-[12px] before:left-0 before:bg-3 before:ease-in-out before:transition-all before:duration-200 before:invisible"><button onClick={() => {
                        const element = document.getElementById('Contacto')
                        scrollToTargetAdjusted(element)
                    }} href="#Contacto" >Contacto</button></NavLink></li>
                </ul>
            </nav>
        </header>
        </>
    )
}