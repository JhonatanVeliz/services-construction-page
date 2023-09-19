import { HashLink } from 'react-router-hash-link';

import servicio from '../assets/service.jpg';
import '../css/services.css'

const ServiceCard = ({ service }) => {

  const { img, alt, title, text } = service;

  return (

    <div className="services__card">

      <img src={ img } alt={ alt } />

      <details>

        <summary className='services__card__title'>{ title }</summary>

        <p className='services__card__text'> { text } </p>

      </details>

      <HashLink to={'/#formulario'} className='services__card__btn'>
        Solicitar Servicio
      </HashLink>
    </div>

  )
}

const serviceData = [
  {
    img   : servicio,
    alt   : 'servicio de construccion', 
    title : 'Construcción de Casa', 
    text  : 'casa nuevas de casas anticudas y viejas le remodelamos todo sisisisisisisisisisis yesyesyesyesyesyes',
    id : 311
  },
  {
    img   : servicio,
    alt   : 'servicio de construccion', 
    title : 'Construcción de Casa', 
    text  : 'casa nuevas de casas anticudas y viejas le remodelamos todo sisisisisisisisisisis yesyesyesyesyesyes',
    id : 312
  },
  {
    img   : servicio,
    alt   : 'servicio de construccion', 
    title : 'Construcción de Casa', 
    text  : 'casa nuevas de casas anticudas y viejas le remodelamos todo sisisisisisisisisisis yesyesyesyesyesyes',
    id : 313
  },
  {
    img   : servicio,
    alt   : 'servicio de construccion', 
    title : 'Construcción de Casa', 
    text  : 'casa nuevas de casas anticudas y viejas le remodelamos todo sisisisisisisisisisis yesyesyesyesyesyes',
    id : 314
  },
  {
    img   : servicio,
    alt   : 'servicio de construccion', 
    title : 'Construcción de Casa', 
    text  : 'casa nuevas de casas anticudas y viejas le remodelamos todo sisisisisisisisisisis yesyesyesyesyesyes',
    id : 315
  },
  {
    img   : servicio,
    alt   : 'servicio de construccion', 
    title : 'Construcción de Casa', 
    text  : 'casa nuevas de casas anticudas y viejas le remodelamos todo sisisisisisisisisisis yesyesyesyesyesyes',
    id : 316
  }
]

const Services = () => {
  return (
    <div className='grid section services'>
      <h3 className='title--gray'> Servicios </h3>

      <div className="services__cards">
      {
        serviceData.map( service => (
          <ServiceCard key={service.id} service={ service } />
        ))
      }
      </div>

    </div>
  )
}

export default Services