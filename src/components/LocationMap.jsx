import React from 'react'

const LocationMap = () => {
  return (
    <div className='grid section location'>
        <h2 className='title title--gray'>Ubicación</h2>

        <iframe className='location-map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3852.3717619179574!2d-90.49616142583848!3d15.08282588546268!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x858a29a138c06fbb%3A0x4ba1119c84b73b63!2sConstructora%20M-A!5e0!3m2!1ses-419!2sgt!4v1695501475737!5m2!1ses-419!2sgt" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
    </div>
  )
}

export default LocationMap