import React from 'react'
import { Link } from 'react-router-dom';
import Iframe from '../componentes/Iframe';

function Footer() {
    return (
        <footer className='footer'>
            <div className='footer_brand'>
                <img src='/images/logos/alemarLogo-blanco-1.png' alt="" width={220} />
                <p className='m-0'>Soluciones integrales en Madera</p>
            </div>
            <div className='footer-content'>
                <div className='footer_social_contact'>
                    <div className='footer_social_contact-icon'>
                        <i className='fa-brands fa-facebook'></i>
                        <span>www.facebook.com</span>
                    </div>
                    <div className='footer_social_contact-icon'>
                        <i className='fa-brands fa-instagram'></i>
                        <span>@alemarcarpinteria</span>
                    </div>
                    <div className='footer_social_contact-icon'>
                        <i className='fa-solid fa-envelope'></i>
                        <span>alemar_carpinteria@gmail.com</span>
                    </div>
                    <div className='footer_social_contact-icon'>
                        <i className='fa-brands fa-whatsapp'></i>
                        <span>091 555 555</span>
                    </div>
                    <div className='footer_social_contact-icon d-sm-none '>
                        <i className='fa-solid fa-location-dot '></i>
                        <span>Av. sin nombre 4315</span>
                    </div>
                </div>
                <div className='footer-nav'>
                    <div className='iframe'>
                        <Iframe />
                    </div>
                    <ul>
                        <li>SOBRE NOSOTROS</li>
                        <li>GALERIA DE TRABAJOS</li>
                        <li>SERVICIOS</li>
                        <li>
                            <Link to='/contacto' >
                                CONTACTO
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='copy'>
                <span className=''>Copyrigth. todos los derechos reservados</span>
            </div>
        </footer>
    )
}

export default Footer