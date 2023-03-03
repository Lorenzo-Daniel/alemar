import { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { array } from '../NuestrosClientes/data'
import CardMarca from "../../Pages/Home/CardMarca";
import "swiper/css/pagination";
function NuestrosClientes() {
    return (
        <div className="container">
            <div className="swiperContainer">
                <Swiper
                    modules={[Pagination, Autoplay]}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: true
                    }}
                    pagination={{
                        el: ".pagination",
                        clickable: true,
                    }}
                    slidesPerView={4}
                    breakpoints={{
                        "@0.00": {
                            slidesPerView: 2,
                            spaceBetween: 25,
                        },
                        // "@0.50": {
                        //     slidesPerView: 1.25,
                        //     spaceBetween: 25,
                        // },
                        "@1.00": {
                            slidesPerView: 2,
                            spaceBetween: 25,
                        },
                        "@1.25": {
                            slidesPerView: 2.5,
                            spaceBetween: 20,
                        },
                        "@1.50": {
                            slidesPerView: 3,
                            spaceBetween: 30,
                        },
                        "@1.75": {
                            slidesPerView: 4,
                            spaceBetween: 20,
                        },
                    }}
                >
                    {array.map((item) => (
                        <SwiperSlide key={item.marca} >
                            <CardMarca marca={item.marca} img={item.img} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <div pagination={true}  className="pagination justify-content-center mt-2">
                
            </div>
        </div>
    );
}

export default NuestrosClientes