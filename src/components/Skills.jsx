import React from 'react';

import img1 from '../assets/planos.png';
import img2 from '../assets/herramientas.png';
import img3 from '../assets/herramientas-1.png';
import img4 from '../assets/maquina.png';
import img5 from '../assets/maquina-1.png';
import img6 from '../assets/seguridad.png';

const skillsData = [
  {
    title: 'Planificación y Construcción',
    text: 'Construcción, planificación y supervisión de toda la obra realizada por un arquitecto  profesional calificado y con amplia experiencia.',
    img: img1,
    id: 111
  },
  {
    title: 'Con las mejores herramientas',
    text: 'Construimos tus proyectos con las mejores herramienta y equipo para brindar un trabajo de alta calidad.',
    img: img2,
    id: 122
  },
  {
    title: 'Maquinaria Profesional',
    text: 'Hacemos uso de los mejores equipos para tener mayor seguridad y efectividad en tu proyecto.',
    img: img4,
    id: 133
  },
  {
    title: 'Materiales',
    text: 'Contamos con una amplia variedad de materiales de alta calidad para brindarte la mejor experiencia con acabados sencillos y de lujo.',
    img: img5,
    id: 144
  },
  {
    title: 'Personal Capacitado',
    text: 'Nos aseguramos de que cada personal esté altamente capacitado, en constante capacitación y actualización en los métodos constructivos para brindarte la mayor seguridad y confianza en tu proyecto.',
    img: img6,
    id: 155
  },
  {
    title: 'Alquiler de Herramientas y Equipo',
    text: 'Contamos con una gran cantidad de herramientas entre las cuales son rotomartillo, pulidoras, concretera, puntales, placa vibratoria, andamio, equipo para textura, vibrador de concreto y mucho más.',
    img: img3,
    id: 166
  },
  {
    title: 'Garatía',
    text: 'Todos nuestros servicios cumplen con garantía. Damos garantía por los trabajos realizados.',
    img: img2,
    id: 177
  },
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