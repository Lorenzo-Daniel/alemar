import React, { useState, useEffect } from 'react'

function HomeBanner() {
    const [picture, setpicture] = useState(parseInt(1));
    const [animacion, setAnimacion] = useState('')
    const [dnone, setDnone] = useState('')
    const [textCard, setTextCard] = useState(0)
    const value = [1, 2, 3, 4, 5]
    const bannerText = [
        'Soluciones Integrales en Madera', 'Muebles para el hogar', 'Equipamiento Cocinas', 'Equipamientos Industriales', 'Muebles Rusticos']

    useEffect(() => {
        if (textCard === 0) {
            setDnone('d-none')
        } else {
            setDnone('')
        }
    }, [picture, textCard])


    const arrowrigth = () => {
        if (picture <= 4) {
            setpicture(parseInt(picture) + parseInt(1))
            setAnimacion('animate__animated animate__fadeIn')
            setTextCard(picture)
            setTimeout(() => {
                setAnimacion('')
            }, 1000)
        }
    }
    const arrowLeft = () => {
        if (picture <= 5) {
            setpicture(parseInt(picture) - parseInt(1))
            setTextCard(prev => prev - 1)
            setAnimacion('animate__animated animate__fadeIn')
            setTimeout(() => {
                setAnimacion('')
            }, 1000)
        }
    }
    const selectPicture = (e) => {
        let value = e.target.value
        setAnimacion('animate__animated animate__fadeIn')
        setTextCard(value - parseInt(1))
        setpicture(value)
        setTimeout(() => {
            setAnimacion('')
        }, 500)
    }
    return (
        <div className='home-banner'>
            <div className={`home-banner-bg-img-box home-banner-bg-img-${picture} ${animacion} `}>
                <img alt={''} className='img-fluid' />
            </div>
            <div className={`home-banner-text ${dnone}`}>
                <div className='home-banner-text-1'>
                    <h3 className={`text-center ${dnone}`}>
                        {bannerText[textCard]}
                    </h3>
                </div>
            </div>
            <div className='arrow-box d-flex justify-content-center w-100'>
                <div className='d-flex justify-content-evenly col-7 col-sm-4 col-lg-2'>
                    <button className='fa-solid fa-arrow-left' disabled={parseInt(picture) === parseInt(1)} onClick={() => arrowLeft(picture)}></button>
                    <div className='numbers'>
                        {value.map((item) => {
                            return (
                                <input type="button" value={item} className='numbers' key={item} onClick={(e) => {
                                    selectPicture(e)
                                }} />
                            )
                        })}
                    </div>
                    <button className='fa-solid fa-arrow-right' onClick={arrowrigth} disabled={parseInt(picture) === parseInt(5)}></button>
                </div>
            </div>
        </div>
    )
}

export default HomeBanner