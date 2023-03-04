import React from 'react'
import bannerContacto from '../Images/821.jpg'
import img from '../Images/Banner/banner-2.jpg'

function Contacto() {
    return (
        <div className='contacto'>
            <section className='contacto-banner m-0'>
                <img src={bannerContacto} alt="" />
            </section>
            <section className='contacto_text '>
                <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. A est, voluptatem tempora ex exercitationem earum aperiam cumque doloribus officiis sint iste fugiat possimus delectus autem. Expedita iusto laborum perferendis temporibus.</p>
            </section>
            <main className='contacto_main'>
                <form className='contacto_form' >
                    <div>
                        <label className='contacto_form-label'>
                            <input type="text" />
                            Nombre
                        </label>
                    </div>

                    <div>
                        <label className='contacto_form-label'  >
                            <input type="text" label='' />
                            Apellido
                        </label>
                    </div>
                    <div>
                        <label className='contacto_form-label'  >
                            <input type="email" label='' />
                            email
                        </label>
                    </div>
                    <div>
                        <label className='contacto_form-label'  >
                            <input type="number" label='' />
                            Telefono
                        </label>
                    </div>
                    <div>
                        <label className='contacto_form-label'  >
                            <textarea name="" cols="30" rows="10" />
                            Escribinos tu mensaje
                        </label>
                    </div>
                    <input type="button" value="Enviar" />
                </form>
                <aside className='contacto_form-aside'>
                    <div>
                        <img src={img} width={380} alt="" />
                    </div>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum dolorum reiciendis eos molestias quis suscipit accusantium similique dignissimos fugiat! Vero fugit sunt eveniet repellat exercitationem, deserunt molestias corporis cumque repudiandae.
                    </p>
                    {/* <input type="text" />
                    <button>pegar link</button> */}
                </aside>
            </main>
        </div>
    )
}

export default Contacto