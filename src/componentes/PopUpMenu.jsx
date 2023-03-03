import React from 'react'
import { useNavbarContext } from '../context/NavbarContex';

function PopUpMenu() {
    const{initial,
    closePopUpMenu} = useNavbarContext ()
    return (
        <div className={
            initial 
            ? 'popUpMenu'
            : 'd-none' 
        }>
            <div className='d-flex justify-content-between '>
            <h3>MENU</h3>
            <i className='fa-solid fa-close fs-3' onClick={closePopUpMenu}></i>
            </div>
            <ul className='p-0 m-0'>
                <li>SOBRE NOSOTROS</li>
                <li>GALERIA DE TRABAJOS</li>
                <li>SERVICIOS</li>
                <li>CONTACTO</li>
            </ul>
        </div>
    )
}

export default PopUpMenu