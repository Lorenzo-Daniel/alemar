import React from 'react'
import GaleriaHome from './Pages/Home/GaleriaHome'
function BoConcept() {
    return (
        <div className='portada'>
            <img src={''} alt="" />
            <div className='portada2'>
                <div className='portada-texto'>
                    <img src={'/images/Logos/boconcept-ajustado.png'} width={150} alt=""/>
                                        <p >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia rerum fuga eum. Nostrum repellendus est molestias provident quo, veritatis earum ipsa quidem beatae nam. Asperiores voluptates ex delectus exercitationem pariatur.
                    </p>
                    <a href="https">wwww.algo.com</a>
                </div>
                <div className='portada-ul'>
                    <h3>Espacio BoConcept</h3>
                    <ul className='p-0'>
                        <li> -  Sofas</li>
                        <li> -  Sofas</li>
                        <li> -  Sofas</li>
                        <li> -  Sofas</li>
                        <li> -  Sofas</li>
                        <li> -  Sofas</li>
                        <li> -  Sofas</li>
                    </ul>
                </div>
            </div>
            <div className='buttons'>
                <div className='buttons-box'>
                    <button className='btn text-white'>descargar  <i className='fa-solid fa-arrow-right'></i></button>
                    <button className='btn text-white'>cotizacion <i className='fa-solid fa-arrow-right'></i></button>
                </div>
            </div>
            <div className='mt-5'>
                <GaleriaHome />
            </div>
        </div>
    )
}

export default BoConcept