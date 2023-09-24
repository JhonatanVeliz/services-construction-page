import { useMemo, memo, useState } from 'react';

import coloch_1 from '../assets/projects/doctora_coloch/coloch_1.jpg';
import coloch_2 from '../assets/projects/doctora_coloch/coloch_2.jpg';
import coloch_3 from '../assets/projects/doctora_coloch/coloch_3.jpg';
import gravielas_1 from '../assets/projects/gravileas/gravielas_1.jpg';
import gravielas_2 from '../assets/projects/gravileas/gravielas_2.jpg';
import gravielas_3 from '../assets/projects/gravileas/gravielas_3.jpg';
import gustavo_1 from '../assets/projects/gustavo_reyes/g_1.jpg';
import gustavo_2 from '../assets/projects/gustavo_reyes/g_2.jpg';
import gustavo_3 from '../assets/projects/gustavo_reyes/g_3.jpg';
import juana_1 from '../assets/projects/juana/j_1.jpg';
import juana_2 from '../assets/projects/juana/j_2.jpg';
import juana_3 from '../assets/projects/juana/j_3.jpg';
import lux_1 from '../assets/projects/lux/l_1.jpg';
import lux_2 from '../assets/projects/lux/l_2.jpg';
import lux_3 from '../assets/projects/lux/l_3.jpg';
import pachica_1 from '../assets/projects/pachica/p_1.jpg';
import pachica_2 from '../assets/projects/pachica/p_2.jpg';
import pachica_3 from '../assets/projects/pachica/p_3.jpg';
import pulte_1 from '../assets/projects/pulte/pu_1.jpg';
import pulte_2 from '../assets/projects/pulte/pu_2.jpg';
import pulte_3 from '../assets/projects/pulte/pu_3.jpg';
import resina_1 from '../assets/projects/resina_epoxica/r_1.jpg';
import resina_2 from '../assets/projects/resina_epoxica/r_2.jpg';
import resina_3 from '../assets/projects/resina_epoxica/r_3.jpg';
import rudy_1 from '../assets/projects/rudy_guzman/ru_1.jpg';
import rudy_2 from '../assets/projects/rudy_guzman/ru_2.jpg';
import rudy_3 from '../assets/projects/rudy_guzman/ru_3.jpg';

import '../css/projects.css';

const proyectos = [
  {
      id: 1441,
      title: "Nombre del Proyecto 1",
      text_1: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt magni magnam iusto unde eius dolor delectus sit praesentium omnis possimus?",
      text_2: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt magni magnam iusto unde eius dolor delectus sit praesentium omnis possimus?",
      text_3: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt magni magnam iusto unde eius dolor delectus sit praesentium omnis possimus?",
      img_1: coloch_1,
      img_2: coloch_2,
      img_3: coloch_3
  },
  {
      id: 1442,
      title: "Nombre del Proyecto 2",
      text_1: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt magni magnam iusto unde eius dolor delectus sit praesentium omnis possimus?",
      text_2: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt magni magnam iusto unde eius dolor delectus sit praesentium omnis possimus?",
      text_3: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt magni magnam iusto unde eius dolor delectus sit praesentium omnis possimus?",
      img_1: gravielas_1,
      img_2: gravielas_2,
      img_3: gravielas_3
  },
  {
      id: 1443,
      title: "Nombre del Proyecto 3",
      text_1: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt magni magnam iusto unde eius dolor delectus sit praesentium omnis possimus?",
      text_2: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt magni magnam iusto unde eius dolor delectus sit praesentium omnis possimus?",
      text_3: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt magni magnam iusto unde eius dolor delectus sit praesentium omnis possimus?",
      img_1: gustavo_1,
      img_2: gustavo_2,
      img_3: gustavo_3
  },
  {
      id: 1445,
      title: "Nombre del Proyecto 4",
      text_1: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt magni magnam iusto unde eius dolor delectus sit praesentium omnis possimus?",
      text_2: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt magni magnam iusto unde eius dolor delectus sit praesentium omnis possimus?",
      text_3: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt magni magnam iusto unde eius dolor delectus sit praesentium omnis possimus?",
      img_1: juana_1,
      img_2: juana_2,
      img_3: juana_3
  },
  {
      id: 1446,
      title: "Nombre del Proyecto 5",
      text_1: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt magni magnam iusto unde eius dolor delectus sit praesentium omnis possimus?",
      text_2: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt magni magnam iusto unde eius dolor delectus sit praesentium omnis possimus?",
      text_3: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt magni magnam iusto unde eius dolor delectus sit praesentium omnis possimus?",
      img_1: lux_1,
      img_2: lux_2,
      img_3: lux_3
  },
  {
      id: 1447,
      title: "Nombre del Proyecto 6",
      text_1: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt magni magnam iusto unde eius dolor delectus sit praesentium omnis possimus?",
      text_2: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt magni magnam iusto unde eius dolor delectus sit praesentium omnis possimus?",
      text_3: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt magni magnam iusto unde eius dolor delectus sit praesentium omnis possimus?",
      img_1: pachica_1,
      img_2: pachica_2,
      img_3: pachica_3
  },
  {
      id: 1448,
      title: "Nombre del Proyecto 7",
      text_1: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt magni magnam iusto unde eius dolor delectus sit praesentium omnis possimus?",
      text_2: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt magni magnam iusto unde eius dolor delectus sit praesentium omnis possimus?",
      text_3: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt magni magnam iusto unde eius dolor delectus sit praesentium omnis possimus?",
      img_1: pulte_1,
      img_2: pulte_2,
      img_3: pulte_3
  },
  {
      id: 1449,
      title: "Nombre del Proyecto 8",
      text_1: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt magni magnam iusto unde eius dolor delectus sit praesentium omnis possimus?",
      text_2: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt magni magnam iusto unde eius dolor delectus sit praesentium omnis possimus?",
      text_3: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt magni magnam iusto unde eius dolor delectus sit praesentium omnis possimus?",
      img_1: resina_1,
      img_2: resina_2,
      img_3: resina_3
  },
  {
      id: 14410,
      title: "Nombre del Proyecto 9",
      text_1: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt magni magnam iusto unde eius dolor delectus sit praesentium omnis possimus?",
      text_2: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt magni magnam iusto unde eius dolor delectus sit praesentium omnis possimus?",
      text_3: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt magni magnam iusto unde eius dolor delectus sit praesentium omnis possimus?",
      img_1: rudy_1,
      img_2: rudy_2,
      img_3: rudy_3
  }
];

const CardPortada = ({ project, portada, setPortada }) => {

  const
    { title, text_1, text_2, text_3, img_1, img_2, img_3 } = project;

  const PortadaActual = useMemo(() => {
    return <img src={portada} alt="imagen de portada" className='card__imgs__items__portada' />;
  }, [portada]);

  const handlePortada = (img) => {
    setPortada(img);
  }

  return (
    <>
      <article className="card__imgs">

        <div className="card__imgs__items">

          {PortadaActual}

          <img src={img_1}
            alt="imagen 1 del proyecto"
            className='card__imgs__items__option'
            onClick={() => handlePortada(img_1)}
          />
          <img src={img_2}
            alt="imagen 1 del proyecto"
            className='card__imgs__items__option'
            onClick={() => handlePortada(img_2)}
          />
          <img src={img_3}
            alt="imagen 1 del proyecto"
            className='card__imgs__items__option'
            onClick={() => handlePortada(img_3)}
          />

        </div>

      </article>

      <article className="card__info">

        <h2 className='card__info__title'>{title}</h2>

        <p className='card__info__text'>
          {text_1}
        </p>

        <p className='card__info__text'>
          {text_2}
        </p>

        <p className='card__info__text'>
          {text_3}
        </p>

      </article>
    </>
  )
}

const ProjectListItem = memo(({ project, cardInfo, setCardInfo, setPortada }) => {
  const { img_1, title } = project;

  const { title: cardTitle } = cardInfo[0];

  const handleCard = project => {
    setPortada(img_1);
    setCardInfo([project]);
  }

  return (
    <div 
      className={`projects__item ${ cardTitle == title ? 'projects__item--active' : null }`}
      data-content={title}
      onClick={() => handleCard(project)}
    >
      <img src={img_1} alt={title} />
    </div>
  )
});


const Projects = () => {

  const [portada, setPortada] = useState(coloch_1);
  const [cardInfo, setCardInfo] = useState([proyectos[0]]);

  return (
    <div className='grid section projects'>

      <h2 className='title projects-container__title'>Proyectos</h2>

      <div className="projects-container">

        <section className="card">

          {
            cardInfo.map(project => (
              <CardPortada
                key={project.id}
                project={project}
                portada={portada}
                setPortada={setPortada}
              />
            ))
          }

        </section>

        <aside className='projects-list'>

          {
            proyectos.map( project => (
              <ProjectListItem 
                key={ project.id} 
                project={ project }
                cardInfo={ cardInfo }
                setCardInfo={ setCardInfo }
                setPortada={ setPortada }
              />
            ))
          }

        </aside>

      </div>

    </div>
  )
}
export default Projects