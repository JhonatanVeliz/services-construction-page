import { useRef, useState } from 'react';

import { Link, useLocation } from 'react-router-dom';

import icon from '../assets/icon.png'
import iconOpen from '../assets/Menu.png';
import iconClose from '../assets/Close.png';

const Nav = () => {

  const menuRef = useRef(null);
  const [ stateMenu, setStateMenu ] = useState(true);
  
  const { pathname } = useLocation();

  const handleMenu = menu => {
    stateMenu 
    ? menu.current.classList.add('nav--active')
    : menu.current.classList.remove('nav--active')
    
    setStateMenu( state => !state );
  }

  return (
    <>
      <header className='header'>
        <div className="grid header__nav">

          <Link to='/'>
            <img className='nav__icon' src={icon} alt="logo" />
          </Link>

          <aside className='sidebar'>

            <button type='button' onClick={() => handleMenu(menuRef)}>
              <img className='icon-menu' src={ iconOpen } alt="entrar" />
            </button>

            <nav className='nav' ref={ menuRef }>

              <button type='button' onClick={() => handleMenu(menuRef)}>
                <img className='icon-menu' src={ iconClose } alt="entrar" />
              </button>

              <Link to='/' 
              className={ `${ pathname == '/' ? 'link--active' : null}` }
              onClick={()=> handleMenu(menuRef)}
              >
                inicio
              </Link>

              <Link to='/services' 
              className={ `${ pathname == '/services' ? 'link--active' : null}` }
              onClick={()=> handleMenu(menuRef)}
              >
                servicios
              </Link>

              <Link to='/projects' 
              className={ `${ pathname == '/projects' ? 'link--active' : null}` }
              onClick={()=> handleMenu(menuRef)}
              >
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