import React, { useState, useEffect } from 'react'
import HomeBanner from './HomeBanner';
import banner2 from '../../Images/Banner/banner-4.jpg'
import palacio from '../../Images/Logos/el-fogon.png'
import NuestrosClientes from '../../componentes/NuestrosClientes/NuestrosClientes';
function Home() {
    const [widthMobile, setWidthMobile] = useState()

    useEffect(() => {
        const widthScreen = window.innerWidth
        widthScreen > 1024 ? setWidthMobile(true) : setWidthMobile(false)
        console.log(widthScreen);
    }, [widthMobile])

    // const changeWidth = () => {
    //     if (window.innerWidth < 1025) {
    //         setWidthMobile(false)
    //     } else {
    //         setWidthMobile(true)
    //     }
    // }
    // window.addEventListener('resize', changeWidth)

    return (

        <div className='overflow-hidden'>
            <HomeBanner />
            <h2 className='text-center mt-5'>Quienes Somos</h2>
            <p className='w-50 m-auto text-center'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, ducimus expedita assumenda excepturi cumque perferendis, eveniet unde exercitationem illum, nesciunt modi molestiae. Quaerat ad perferendis praesentium ducimus laborum, nulla suscipit?

            </p>
            <div className='fixed '>
                <h3>Una imagen con una Sanata</h3>
            </div>
            <div className='servicios d-flex flex-column justify-content-center'>
                <h3 className='text-center fs-1 my-5'>servicios</h3>
                <div className='d-flex justify-content-evenly '>
                    <ul className='list-unstyled'>
                        <li><i className='spun fa-solid fa-minus' /> Servicio</li>
                        <li><i className='spun fa-solid fa-minus' />  Servicio</li>
                        <li><i className='spun fa-solid fa-minus' />  Servicio</li>
                        <li><i className='spun fa-solid fa-minus' />  Servicio</li>
                        <li><i className='spun fa-solid fa-minus' />  Servicio</li>
                    </ul>
                    <ul className='list-unstyled'>
                        <li><i className='spun fa-solid fa-minus' /> Servicio</li>
                        <li><i className='spun fa-solid fa-minus' /> Servicio</li>
                        <li><i className='spun fa-solid fa-minus' /> Servicio</li>
                        <li><i className='spun fa-solid fa-minus' /> Servicio</li>
                        <li><i className='spun fa-solid fa-minus' /> Servicio</li>
                    </ul>
                </div>
            </div>
            <div className='mt-5'>
                <h2 className='text-center mb-3'>CLIENTES QUE CONFIAN EN NOSOTROS</h2>
                <NuestrosClientes />
            </div>
            <div className='card_trabajos '>
                <img src={banner2} alt="" />
                <div className='card_trabajos-bg-1'>
                    <div className='card_trabajos-bg-2'>
                        <img src={palacio} alt="" />
                    </div>
                </div>
            </div>

           
            {/* <div>
                <GaleriaHome/>
            </div> */}
        </div>
    )
}

export default Home