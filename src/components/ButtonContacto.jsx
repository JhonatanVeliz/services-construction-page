import React from 'react';
import { Link } from 'react-router-dom';

import icon from '../assets/WhatsApp.png'

const ButtonContacto = () => {
  return (
    <Link 
        to={'https://wa.me/50255587475?text=*Consulta*'} 
        className='btn--contacto'
        target='_blank'
    >
        <img src={ icon } alt="contacto" />
    </Link>
  )
}

export default ButtonContacto