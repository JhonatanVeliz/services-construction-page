import React from 'react'

const LocationMap = () => {
  return (
    <div className='grid section location'>
        <h2 className='title title--gray'>Ubicación</h2>
        <iframe className='location-map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15409.292653095748!2d-90.50296791559735!3d15.085507667362585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x858a29021e10d0af%3A0x4d4be037abcbad68!2sRabinal!5e0!3m2!1ses!2sgt!4v1695071645478!5m2!1ses!2sgt"allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
    </div>
  )
}

export default LocationMap