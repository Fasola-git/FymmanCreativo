import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Hamb({ onLinkClick }) {

  const [isActive, setIsActive] = useState(false);


  const handleLinkClick = (path, targetId) => {
    toggleClass();
    onLinkClick(path, targetId);
  };

  const toggleClass = () => {
    setIsActive(!isActive);
    // Añadir o quitar una clase al body para manejar el scroll
    // Esto usando tailwind de lo contrario reemplazar overflow-hidden por una clase y en css agregar overflow: hidden;
    document.body.classList.toggle('overflow-hidden', !isActive);
  };

  // Limpiar la clase al desmontar el componente
  useEffect(() => {
    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, []);

  return (
    <>
        <svg
          className={`ham hamRotate ham8 absolute right-0 z-10 ${isActive ? 'active' : ''}`}
          viewBox="0 0 100 100"
          width="80"
          onClick={toggleClass}
        >
          <path
            className={`line top ${isActive ? 'active' : ''} transition-all duration-300`}
            d="m 30,33 h 40 c 3.722839,0 7.5,3.126468 7.5,8.578427 0,5.451959 -2.727029,8.421573 -7.5,8.421573 h -20"
          />
          <path className={`line middle ${isActive ? 'active' : ''} transition-all duration-300`} d="m 30,50 h 40" />
          <path
            className={`line bottom ${isActive ? 'active' : ''} transition-all duration-300`}
            d="m 70,67 h -40 c 0,0 -7.5,-0.802118 -7.5,-8.365747 0,-7.563629 7.5,-8.634253 7.5,-8.634253 h 20"
          />
        </svg>
        <nav
          className={` w-screen h-screen bg-10 opacity-95 top-0 right-0 transform ${
            isActive ? 'translate-x-0' : 'translate-x-full'
          } transition-transform duration-300`}
        >
          <ul className=" h-full list-none flex  flex-col text-2 items-center justify-evenly">
            <li>
              <Link to="/" className='text-3xl tracking-wider' onClick={() => handleLinkClick('/', 'Home')}>
                Inicio
              </Link>
            </li>
            <li>
              <Link to="/" className='text-3xl tracking-wider overflow-hidden' onClick={() => handleLinkClick('/', 'Demanda')}>
                Comercial
              </Link>
            </li>
            <li>
              <Link to="/nosotros" className='text-3xl tracking-wider' onClick={() => handleLinkClick('/nosotros', 'Nosotros')}>
                Nosotros
              </Link>
            </li>
            <li>
              <Link to="/" className='text-3xl tracking-wider' onClick={() => handleLinkClick('/', 'Servicios')}>
                Servicios
              </Link>
            </li>
            <li>
              <Link to="/" className='text-3xl tracking-wider' onClick={() => handleLinkClick('/', 'Contacto')}>
                Contacto
              </Link>
            </li>
          </ul>
        </nav>
    </>
  );
}
