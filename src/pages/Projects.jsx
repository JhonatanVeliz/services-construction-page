import { useMemo, useState } from 'react';
import proyectos from '../data/datos.json';
import img from '../assets/projects/doctora_coloch/coloch_1.jpg';
import '../css/projects.css';

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

const ProjectListItem = ({ project, setCardInfo, setPortada }) => {

  const { img_1, title } = project;

  const handleCard = project => {
    setPortada(img_1)
    setCardInfo([ project ])
  }

  return (
    <div 
      className="projects__item" 
      data-content={ title }
      onClick={() => handleCard(project)}
    >
      <img src={ img_1 } alt={ title } />
    </div>
  )
}

const Projects = () => {

  const [portada, setPortada] = useState(img);
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
                key={project.id} 
                project={project}
                setCardInfo={setCardInfo}
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