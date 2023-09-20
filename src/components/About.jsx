import React from 'react';
import { HashLink } from 'react-router-hash-link';

const About = () => {
  return (
    <div className='grid about section'>

      <h2 className='title title--gray'>Nosotros</h2>

      <div className="about__container">

        <aside className='about__aside'>

          <h3 className='title--center'>Razones Para Confíar en EMPRESA</h3>

          <ul className='about__aside__ul'>

            <li>
              <h4>Experiencia y Trayectoria:</h4>
              <span>Con 35,000m2 y más de 10 años de experiencia en la construcción te aseguramos un trabajo de alta calidad. <br /> <i>¡ PARA LOS MÁS EXIGENTES !</i></span>
            </li>

            <li>
              <h4>Garantía de Calidad:</h4>
              <span>Demostramos compromiso y satisfaccion del cliente a la hora de realizar los proyectos. <br /> <i>Garantía por los trabajos realizados.</i></span>
            </li>

            <li>
              <h4>Equipo y Tecnología Actualizados:</h4>
              <span>Con maquinaria eficiente y de alta calidad somos capaces de abordar proyectos de manera efectiva.</span>
            </li>

          </ul>

        </aside>

        <main className='about__info'>

          <div className="about__info__cards">

            <div className="about__info__card">

              <h4 className='title--subrayado about__info__card__title'>Mision:</h4>

              <p className='about__info__card__text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid accusamus amet illum nostrum expedita at velit culpa minima nobis veniam?
              </p>

            </div>

            <div className="about__info__card">

              <h4 className='title--subrayado about__info__card__title'>Visión:</h4>

              <p className='about__info__card__text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid accusamus amet illum nostrum expedita at velit culpa minima nobis veniam?
              </p>

            </div>        

            <div className="about__info__card">

              <h4 className='title--subrayado about__info__card__title'>Metas:</h4>

              <p className='about__info__card__text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid accusamus amet illum nostrum expedita at velit culpa minima nobis veniam?
              </p>

            </div>

            <div className="about__info__card">

              <h4 className='title--subrayado about__info__card__title'>Alcances:</h4>

              <p className='about__info__card__text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid accusamus amet illum nostrum expedita at velit culpa minima nobis veniam?
              </p>

            </div>

          </div>

          <div className="about__info__form">
            <span className='about__info__form__title'>¿ Necesitas más información ?</span>
            <HashLink to={'/#formulario'} className='about__info__form__btn'>Más Información</HashLink>
          </div>

        </main>

      </div>

    </div>
  )
}

export default About