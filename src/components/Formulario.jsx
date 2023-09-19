import React, { useState } from 'react';
import img from '../assets/ultimate.gif'

const Formulario = () => {

  const [ formValue, setFormValue ] = useState({ name: '', tel: '', texto: '' });

  const handleSubmit = e => {
    e.preventDefault();

    const { name, tel, texto } = formValue;

    if(name == '' || tel == '' || texto == ''){
      return alert('no hay nada');
    };

    console.log(formValue);
  }

  const handleInputChange = e => {
    const { id, value } = e.target;
  
    setFormValue( prevFormValue => ({
      ...prevFormValue,
      [id]: value,
    }));
  };

  return (
    <div className='grid section formulario'>
      <h2 className='title'>Contactanos</h2>

      <div className="formulario__container">

        <form className='form' onSubmit={handleSubmit}>

          <legend className='title--subrayado form__title'>Escribe tus Datos aquí:</legend>

          <label className='form__label' htmlFor="name">Nombre:</label>
          <input className='form__input' 
                 type="text" 
                 placeholder='nombre:'
                 id='name'
                 value={formValue.name}
                 onChange={ handleInputChange }
          />

          <label className='form__label' htmlFor="tel">Celular:</label>
          <input className='form__input' 
                 type="number" 
                 placeholder='Número de celular:' 
                 id='tel'
                 value={formValue.tel}
                 onChange={ handleInputChange }
          />

          <label className='form__label' htmlFor="texto">Consulta:</label>
          <textarea 
            className='form__textarea' 
            type="text" 
            placeholder='Escribe aqui tu consulta::' 
            id='texto'
            value={formValue.texto}
            onChange={ handleInputChange }
          />

          <input className='form__submit' type="submit" />

        </form>

        <footer className='form__footer'>

          <aside className='form__footer__redes'>
            facebook, instagram, whatsApp
            &copy; Todos los derechos reservados 2023
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