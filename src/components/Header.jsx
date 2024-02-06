
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
                    <li className="flex w-24 justify-center ease-in-out transition-all duration-300 hover:text-3">
                        <button onClick={() => {
                        const element = document.getElementById('Home')
                        scrollToTargetAdjusted(element)
                    }} href="#Home" className=" flex items-center justify-center h-full cursor-pointer no-underline relative px-2 before:absolute before:w-full before:h-[3px] before:-bottom-[12px] before:left-0 before:bg-3 before:ease-in-out before:transition-all before:duration-200 before:invisible">Inicio</button></li>
                    <li className="flex justify-center w-34 whitespace-nowrap ease-in-out transition-all duration-300 hover:text-3">
                        <button onClick={() => {
                        const element = document.getElementById('Nosotros')
                        scrollToTargetAdjusted(element)
                    }} href="#Nosotros" className=" flex items-center justify-center h-full cursor-pointer no-underline relative px-2 before:absolute before:w-full before:h-[3px] before:-bottom-[12px] before:left-0 before:bg-3 before:ease-in-out before:transition-all before:duration-200 before:invisible">Sobre nosotros</button></li>
                    <li className="flex w-24 justify-center ease-in-out transition-all duration-300 hover:text-3">
                        <button onClick={() => {
                        const element = document.getElementById('Servicios')
                        scrollToTargetAdjusted(element)
                    }} href="#Servicios" className=" flex items-center justify-center h-full cursor-pointer no-underline relative px-2 before:absolute before:w-full before:h-[3px] before:-bottom-[12px] before:left-0 before:bg-3 before:ease-in-out before:transition-all before:duration-200 before:invisible">Servicios</button></li>
                    <li className="flex w-24 justify-center  ease-in-out transition-all duration-300 hover:text-3">
                        <button onClick={() => {
                        const element = document.getElementById('Clientes')
                        scrollToTargetAdjusted(element)
                    }} href="#Clientes" className=" flex items-center justify-center h-full cursor-pointer no-underline relative px-2 before:absolute before:w-full before:h-[3px] before:-bottom-[12px] before:left-0 before:bg-3 before:ease-in-out before:transition-all before:duration-200 before:invisible">Clientes</button></li>
                    <li className="flex w-24 justify-center ease-in-out transition-all duration-300 hover:text-3">
                        <button onClick={() => {
                        const element = document.getElementById('Contacto')
                        scrollToTargetAdjusted(element)
                    }} href="#Contacto" className=" flex items-center justify-center h-full cursor-pointer no-underline relative px-2 before:absolute before:w-full before:h-[3px] before:-bottom-[12px] before:left-0 before:bg-3 before:ease-in-out before:transition-all before:duration-200 before:invisible">Contacto</button></li>
                </ul>
            </nav>
        </header>
        </>
    )
}