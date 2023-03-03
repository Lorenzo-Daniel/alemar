import React from 'react'
function CardMarca({ marca, img }) {
    

    
    return (
        <div className='card-marca'>
                    <img src={`./images/Logos/${img}`} className='img-fluid' alt="" />
        </div>
    )
}

export default CardMarca