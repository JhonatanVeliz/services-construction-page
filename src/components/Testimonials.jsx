import React from 'react';

import img1 from '../assets/1.png';
import img2 from '../assets/2.png';
import img3 from '../assets/3.png';
import img4 from '../assets/4.png';
import img5 from '../assets/5.png';

const testimonialsData = [
  {
    name: 'Juan Vásquez',
    text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid asperiores maiores voluptatum blanditiis adipisci, nihil necessitatibus vero officia aut',
    qualification: 5,
    id: 211
  },
  {
    name: 'Juan Vásquez',
    text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid asperiores maiores voluptatum blanditiis adipisci, nihil necessitatibus vero officia aut',
    qualification: 5,
    id: 222
  },
  {
    name: 'Juan Vásquez',
    text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid asperiores maiores voluptatum blanditiis adipisci, nihil necessitatibus vero officia aut',
    qualification: 5,
    id: 233
  }
];

const imgStars = {
  1: img1,
  2: img2,
  3: img3,
  4: img4,
  5: img5,
}

const TestimonialCard = ({ testimonial }) => {

  const { name, text, qualification } = testimonial;

  return (
    <div className="testimonial__card">

      <h3 className='title--subrayado'>{ name }</h3>

      <p className='testimonial__card__text'> { text }.</p>

      <img className='testimonial__card__img'
          src={`${ imgStars[qualification] }`}
          alt="estrellas" 
      />

    </div>
  )
}

const Testimonials = () => {
  return (
    <div className='grid section'>
      <h2 className='title--gray'>Testimonios de Clientes</h2>

      <div className="testimonial__cards">
        {
          testimonialsData.map( testimonial => (
            <TestimonialCard key={testimonial.id} testimonial={ testimonial }/>
          ))
        }
      </div>


    </div>
  )
}

export default Testimonials