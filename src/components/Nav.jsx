import React from 'react';

import { Link, useLocation } from 'react-router-dom';

import icon from '../assets/icon.png'

const Nav = () => {

  const { pathname } = useLocation();

  return (
    <>
      <header className='header'>
        <div className="grid header__nav">

          <Link to='/'>
            <img className='nav__icon' src={icon} alt="logo" />
          </Link>

          <aside className='sidebar'>

            <img className='icon-menu' src="" alt="entrar" />

            <nav className='nav'>

              <img className='icon-menu' src="" alt="entrar" />

              <Link to='/' className={ `${pathname == '/' ? 'link--active' : null}` }>
                inicio
              </Link>

              <Link to='/services' className={ `${pathname == 'services' ? 'link--active' : null}` }>
                servicios
              </Link>

              <Link to='/projects' className={ `${pathname == 'projects' ? 'link--active' : null}` }>
                proyectos
              </Link>

            </nav>

          </aside>

        </div>
      </header>
    </>
  )
}

export default Nav