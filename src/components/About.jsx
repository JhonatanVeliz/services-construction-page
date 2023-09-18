import React from 'react';
import { Link } from 'react-router-dom';

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
              <span>Con mas de 10 años de experiencia en el area de construcción te aseguramos que tendras un trabajo de calidad.</span>
            </li>

            <li>
              <h4>Garantía de Calidad:</h4>
              <span>Demostramos compromiso y satisfaccion del cliente a la hora de realizar los proyectos.</span>
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
            <Link className='about__info__form__btn'>Más Información</Link>
          </div>

        </main>

      </div>

    </div>
  )
}

export default About