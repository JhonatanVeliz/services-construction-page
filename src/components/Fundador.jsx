import img from '../assets/fundador.jpg'

const Fundador = () => {
  return (
    <div className='fundador'>

      <div className="fundador__container grid">

        <div className="fundador__container__foto">
          <img src={ img } alt="imagen del fundador" />
        </div>

        <div className="fundador__container__info">

          <h2 className='title fundador__title'>Manolo Mejía</h2>

          <p className="fundador__text"><strong>Fundador de Constructora M-A </strong>. Es una figura respetada en el ámbito de la construcción a nivel regional. Con más de una década de experiencia en la industria, Manolo ha dejado una huella sólida en el paisaje urbano de nuestra región. Su pasión por crear estructuras sólidas y funcionales ha sido fundamental para el crecimiento y desarrollo de nuestra empresa a lo largo de los años.</p>

          <p className="fundador__text">Es arquitecto emprendedor que desde 2005, ha dejado una huella imborrable en el campo de la construcción. Su contribución a numerosas empresas no solo se traduce en obras físicas impresionantes, sino también en asociaciones duraderas basadas en la confianza y la integridad. Las empresas con las que ha colaborado a lo largo de los años afirman que su enfoque centrado en el cliente y su habilidad para materializar ideas complejas en proyectos tangibles han sido clave para el éxito compartido. Manolo Mejía es más que un arquitecto, es un visionario que ha moldeado nuestra región con su dedicación incansable a la excelencia en la construcción y el desarrollo. Su legado perdurará por generaciones, sirviendo como inspiración para futuros arquitectos y profesionales de la industria.</p>

        </div>

      </div>

    </div>
  )
}

export default Fundador