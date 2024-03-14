import { Link, useNavigate, useLocation } from 'react-router-dom';
import Hamb from "./Hamb";

export default function Header(){
    const navigate = useNavigate();
    const location = useLocation();

    const handleNavigation = (targetId) => {
        const element = document.getElementById(targetId);
        if (element) {
          const offset = 75;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - offset;
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth',
          });
        }
      };


    const handleLinkClick = (path, targetId) => {
        if (location.pathname === '/' && path!=location.pathname) {
            // Si estamos en la principal y queremos ir a otra página
            navigate(path);
            // Agrega un pequeño retraso antes de hacer el scrollTo para asegurarte de que la página haya cambiado
            setTimeout(() => {
                handleNavigation(targetId);
            }, 100);
        }else if(location.pathname === '/' && path===location.pathname){
            // Si estamos en la página principal, realiza el scrollTo al elemento
            handleNavigation(targetId);
        
        } else {
            // Si estamos en "nosotros", cambia de página y realiza el scrollTo a la sección correspondiente
            navigate(path);
    
            // Agrega un pequeño retraso antes de hacer el scrollTo para asegurarte de que la página haya cambiado
            setTimeout(() => {
                handleNavigation(targetId);
            }, 100);
        }
    };

    return(
        <>
            <header className="Header bg-2 fixed overflow-hidden w-full shadow-lg z-10 hidden lg:inline ">

                <div className=" top-w left-7 absolute flex-col flex-wrap hidden lg:flex overflow-hidden items-center">
                    <div className="socials flex items-center gap-3">
                        <a className="fa-brands fa-instagram text-2xl w-8 h-10 grid place-items-center rounded-full hover:text-3 transition-all duration-400"href="https://www.instagram.com/fymmancreativo/"></a>
                        <a className="fa-brands fa-facebook text-2xl w-8 h-10 grid place-items-center rounded-[50%] hover:text-3 transition-all duration-400" href="https://www.facebook.com/fymmancreativo/"></a>
                        <a className="fa-brands fa-whatsapp text-2xl w-8 h-10 grid place-items-center rounded-[50%] hover:text-3 transition-all duration-400" href="https://wa.me/93814667211?text=Hola!%20Me%20gustaría%20contactar%20con%20ustedes!"></a>
                        <a className="fa-brands fa-tiktok text-2xl w-5 h-10 grid place-items-center rounded-[50%] hover:text-3 transition-all duration-400" href="https://www.tiktok.com/@fymman.creativo"></a>
                    </div>
                    <div className="flex items-center">
                        <i className="fa-solid fa-phone text-base w-6 h-6 text-3 grid place-items-center"></i>
                        <p className="text-base cursor-default h-full text-center">+54 9 381 466 7211</p>
                    </div>
                </div>


                <nav className="nav_menu flex min-h-16 justify-center items-center">
                    <ul className="menu list-none flex justify-center items-stretch gap-5">
                        <li className="flex justify-center w-24 ease-in-out transition-all duration-300 hover:text-3">
                            <Link to="/" onClick={() => handleLinkClick('/', 'Home')} className=" flex items-center justify-center h-full cursor-pointer no-underline relative px-2 before:absolute before:w-full before:h-[3px] before:-bottom-[12px] before:left-0 before:bg-3 before:ease-in-out before:transition-all before:duration-200 before:invisible">
                                INICIO
                            </Link>
                        </li>
                        <li className="flex justify-center w-34 whitespace-nowrap ease-in-out transition-all duration-300 hover:text-3">
                            <Link to="/" className=" flex items-center justify-center h-full cursor-pointer no-underline relative px-2 before:absolute before:w-full before:h-[3px] before:-bottom-[12px] before:left-0 before:bg-3 before:ease-in-out before:transition-all before:duration-200 before:invisible" onClick={() => handleLinkClick('/', 'Demanda')}>
                                COMERCIAL
                            </Link>
                        </li>
                        <li className="flex justify-center w-34 whitespace-nowrap ease-in-out transition-all duration-300 hover:text-3">            
                            <Link to="/nosotros" className=" flex items-center justify-center h-full cursor-pointer no-underline relative px-2 before:absolute before:w-full before:h-[3px] before:-bottom-[12px] before:left-0 before:bg-3 before:ease-in-out before:transition-all before:duration-200 before:invisible" onClick={() => handleLinkClick('/nosotros', 'Nosotros')}>
                                NOSOTROS
                            </Link>
                        </li>
                        <li className="flex justify-center w-24 ease-in-out transition-all duration-300 hover:text-3">
                            <Link to="/" className=" flex items-center justify-center h-full cursor-pointer no-underline relative px-2 before:absolute before:w-full before:h-[3px] before:-bottom-[12px] before:left-0 before:bg-3 before:ease-in-out before:transition-all before:duration-200 before:invisible" onClick={() => handleLinkClick('/', 'Servicios')}>
                                SERVICIOS
                            </Link>
                        </li>
                        <li className="flex justify-center w-34 ease-in-out transition-all duration-300 hover:text-3">
                            <Link to="/" className=" flex items-center justify-center h-full cursor-pointer no-underline relative px-2 before:absolute before:w-full before:h-[3px] before:-bottom-[12px] before:left-0 before:bg-3 before:ease-in-out before:transition-all before:duration-200 before:invisible" onClick={() => handleLinkClick('/', 'Contacto')}>
                                CONTACTO
                            </Link>
                        </li>
                    </ul>
                </nav>
            </header>
            <div className="fixed h-0 z-10 lg:hidden">
                <Hamb onLinkClick={handleLinkClick}/>
            </div>
        </>
    )
}