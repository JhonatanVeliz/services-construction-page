import React, { useState } from 'react';

import { Link } from 'react-router-dom';
import Errors from './Errors';
import { formSend } from '../helpers/formSend';

import img from '../assets/ultimate.gif';
import facebook from '../assets/Facebook.png';
import instagram from '../assets/Instagram.png';
import whatsApp from '../assets/WhatsApp.png';

const Formulario = () => {

  const [formValue, setFormValue] = useState({ name: '', tel: '', texto: '' });
  const [formError, setFormError] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    const { name, tel, texto } = formValue;

    if (name == '' || tel == '' || texto == '' || tel.length < 8) {
      setFormError('Campos Invalidos');
      return;
    };

    formSend(formValue)
    setFormValue({ name: '', tel: '', texto: '' })
    setFormError('');
  }

  const handleInputChange = e => {
    const { id, value } = e.target;

    setFormValue(prevFormValue => ({
      ...prevFormValue,
      [id]: value,
    }));
  };

  return (
    <div className='grid section formulario'>

      <h2 className='title'>Contactanos</h2>

      <div className="formulario__container" id='formulario'>

        <form className='form' onSubmit={handleSubmit}>

          <legend className='title--subrayado form__title'>Escribe tus Datos aquí:</legend>

          {
            formError && <Errors>{formError}</Errors>
          }

          <label className='form__label' htmlFor="name">Nombre:</label>
          <input className='form__input'
            type="text"
            placeholder='nombre:'
            id='name'
            value={formValue.name}
            onChange={handleInputChange}
          />

          <label className='form__label' htmlFor="tel">Celular:</label>
          <input className='form__input'
            type="number"
            placeholder='Número de celular:'
            id='tel'
            value={formValue.tel}
            onChange={handleInputChange}
          />

          <label className='form__label' htmlFor="texto">Consulta:</label>
          <textarea
            className='form__textarea'
            type="text"
            placeholder='Escribe aqui tu consulta::'
            id='texto'
            value={formValue.texto}
            onChange={handleInputChange}
          />

          <input className='form__submit' type="submit" />

        </form>

        <footer className='form__footer'>

          <aside className='form__footer__redes'>

            <Link to={'https://www.facebook.com/profile.php?id=100063931967239'} target='_blank'>
              <img className='form__footer__icon' src={facebook} alt="facebook" />
            </Link>

            <Link to={'https://wa.me/50255587475?text=*Consulta*'} target='_blank'>
              <img className='form__footer__icon' src={whatsApp} alt="whatsApp" />
            </Link>

            <Link to={'/'}>
              <img className='form__footer__icon' src={instagram} alt="instagram" />
            </Link>

          </aside>

          <div className='form__footer__img'>
            <img className='form__footer__img__item' src={img} alt="imagen final" />
          </div>

        </footer>

      </div>

    </div>
  )
}

export default Formulario