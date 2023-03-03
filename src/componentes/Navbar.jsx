import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { useNavbarContext } from '../context/NavbarContex';
import PopUpMenu from './PopUpMenu';


function Navbar() {
    const [hedaerClass, setHedaerClass] = useState(true)

    const {
        openPopUpMenu
    } = useNavbarContext();

    const changeStyle = () => {
        if (window.scrollY < 20) {
            setHedaerClass(true)
        } else {
            setHedaerClass(false)
        }
    }
    window.addEventListener('scroll', changeStyle)
    return (
        <div>
            <header className='p-0'>
                <navbar className={hedaerClass
                    ? 'nav-bar animate__animated'
                    : 'nav-bar bg-header animate__animated animate__fadeIn'}>
                    <Link to='/'>
                        <img src={'/images/logos/alemarLogo-Blanco-1.png'} className='logo' alt="alemar-logo" />
                    </Link>
                    <PopUpMenu visibility={true} />

                    <div className='text-white'>
                        <div className='d-flex '>
                            <h2 className='fs-4 d-none d-lg-block pe-2'>MENÚ</h2>
                            <i className='fa-solid fa-bars fs-3 fw-ligther' onClick={openPopUpMenu}></i>
                        </div>
                    </div>
                </navbar>
            </header>
        </div>
    )
}

export default Navbar;