import { HashLink } from 'react-router-hash-link';

const Hero = () => {
  return (
    <section className='hero'>

      <div className="hero__content animate__animated animate__flipInX">

        <h1 className='hero__title'>Construcciones M-A</h1>

        <p className='hero__text'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio totam ad praesentium tempora dolore voluptate provident placeat, minima unde explicabo omnis, iste molestiae, cum laboriosam!</p>

        <HashLink to={'/#formulario'} className='hero__link'>Asesoría Gratuita</HashLink>

      </div>

    </section>
  )
}

export default Hero