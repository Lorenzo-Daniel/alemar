import React from 'react'
import CardMarca from '../../Pages/Home/CardMarca'
import { array } from './data'


function NuestrasMarcas() {

    return (
        <div className='nuestrasMarcas'>
            <div className='left'><h1>
                Nuestras <br /> Marcas</h1></div>
            <div className='right'>
                <div className='column-cards' data-aos="fade-up">
                    {array.map((item) => {
                        return (
                            <CardMarca key={item.marca} marca={item.marca} img={item.img} />
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default NuestrasMarcas