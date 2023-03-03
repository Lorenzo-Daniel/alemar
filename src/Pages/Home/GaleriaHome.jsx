import React from 'react'
import auditorio from '../../Images/HomeGalery/auditorios.jpg'
import educacion from '../../Images/HomeGalery/educacion.jpg'
import hoteleria from '../../Images/HomeGalery/hoteleria.jpg'
import oficinas from '../../Images/HomeGalery/oficinas.jpg'
import restaurantes from '../../Images/HomeGalery/restaurantes.jpg'
import salud from '../../Images/HomeGalery/Salud.jpg'
import terminales from '../../Images/HomeGalery/terminales.jpg'


function GaleriaHome() {
  return (
    <div className='container-fluid m-0 p-0 d-flex flex-column '>
      <div className='d-flex justify-content-evenly'>
        <div className='uno '>
          <img src={auditorio} alt="" />
        </div>

        <div className='uno' >
          <img src={educacion} alt="" />
        </div>
        <div className='uno' >
          <img src={hoteleria} alt="" />
        </div>
        <div className='uno' >
          <img src={oficinas} alt="" />
        </div>
      </div>
      <div className='d-flex justify-content-evenly este '>
        <div className='uno' >
          <img src={restaurantes} alt="" />
        </div>
        <div className='uno' >
          <img src={salud} alt="" />
        </div>
        <div className='dos'>
          <img src={terminales} className='img-fluid' alt="" />
        </div>
      </div>

      {/* <div className='prueba'>
         <div className='pruebaChild d-flex justify-content-center align-items-center'>
          <h3 className='text-white '>Auditorios</h3>
        </div>
      </div> */}
    </div>
  )
}

export default GaleriaHome