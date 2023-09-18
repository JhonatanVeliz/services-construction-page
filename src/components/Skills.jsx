import React from 'react';

import img1 from '../assets/planos.png';
import img2 from '../assets/herramientas.png';
import img3 from '../assets/herramientas-1.png';
import img4 from '../assets/maquina.png';
import img5 from '../assets/maquina-1.png';
import img6 from '../assets/seguridad.png';

const skillsData = [
  {
    title: 'Planificación',
    text: 'Planificamos tus proyectos de inicio a fin a tu medida.',
    img: img1,
    id: 111
  },
  {
    title: 'Con las mejores herramientas',
    text: 'Construimos tus proyectos con las mejores herramientas.',
    img: img2,
    id: 122
  },
  {
    title: 'Productos Sólidos',
    text: 'Utilizamos las mejores tecnicas de construcción para darte el mejor trabajo.',
    img: img3,
    id: 133
  },
  {
    title: 'Maquinaria Profesional',
    text: 'Hacemos uso de los mejores equipos para tener mayor seguridad y efectividad de tu proyecto.',
    img: img4,
    id: 4
  },
  {
    title: 'Materiales',
    text: 'Contamos con una amplia variedad de materiales de alta calidad para darte la mejor experiencia',
    img: img5,
    id: 5
  },
  {
    title: 'Personal Capacitado',
    text: 'Nos aseguramos que cada personal este altamente capacitado para tener la mayor seguridad y confianza de su proyecto.',
    img: img6,
    id: 6
  }
];

const SkillsCard = ({ card }) => {

  const { img, title, text } = card;

  return (
    <div className="skills__card">

      <img src={ img } alt="icono" className='skills__card__img' />

      <div className="skills__texts">
        <h3 className='title--subrayado'>{ title }</h3>
        <p className='skills__card__text'> { text } </p>
      </div>

    </div>
  )
}

const Skills = () => {
  return (
    <div className='grid section skills'>

      {
        skillsData.map( card => (
          <SkillsCard key={card.id} card={ card } />
        ))
      }

    </div>
  )
}

export default Skills