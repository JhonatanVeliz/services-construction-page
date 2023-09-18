import React from 'react';
import { Link } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <header className='header'>
        <div className="grid">

          <img src="" alt="logo" />

          <aside>

          <img src="" alt="entrar" />

          <nav>
            <img src="" alt="entrar" />

            <Link to='/'>Inicio</Link>
            <Link to='/services'>Servicios</Link>
            <Link to='/projects'>Proyectos</Link>

          </nav>

          </aside>

        </div>
      </header>
    </>
  )
}

export default Layout