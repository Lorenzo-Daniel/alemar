import React from 'react'
import { Link } from 'react-router-dom'
function FloatContact() {
    return (
        <div className='presupuesto'>
            <div className='floatContact_whatsapp'>
                <a href="http://www.whatsapp.com" target="_blank" rel="noopener noreferrer">
                    <i className="fa-brands fa-whatsapp fs-3"></i>
                </a>
            </div>
            <Link to={'/contacto'} className='link asesoramiento'>
                {/* <button className='d-flex align-items-center'>
                        Asesoramiento
                </button> */}
                <i className='fa-solid fa-comments fs-3'></i>
            </Link>
        </div>
    )
}

export default FloatContact