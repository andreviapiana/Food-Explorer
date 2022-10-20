import { Container, Content } from "./styles";

import { Card } from "../Card";

// Import Swiper
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// Import required modules
import { Navigation } from "swiper";

export function Carousel() {

    return (
        <Container>
            <Content>

                <Swiper
                    slidesPerView={1}
                    spaceBetween={27}
                    centeredSlides={true}
                    grabCursor={true}
                    loop={true}
                    hashNavigation={{
                        watchState: true,
                    }}
                    breakpoints={{
                        "@0.00": {
                          slidesPerView: 1,
                          spaceBetween: 10,
                        },
                        "@0.75": {
                          slidesPerView: 2,
                          spaceBetween: 20,
                        },
                        "@1.00": {
                          slidesPerView: 3,
                          spaceBetween: 40,
                        },
                        "@1.20": {
                          slidesPerView: 4,
                          spaceBetween: 130,
                        },
                    }}
                    navigation={true}
                    modules={[Navigation]}
                    className="mySwiper"
                >
                    <SwiperSlide><Card /></SwiperSlide>
                    <SwiperSlide><Card /></SwiperSlide>
                    <SwiperSlide><Card /></SwiperSlide>
                    <SwiperSlide><Card /></SwiperSlide>
                    <SwiperSlide><Card /></SwiperSlide>
                    <SwiperSlide><Card /></SwiperSlide>
                    <SwiperSlide><Card /></SwiperSlide>
                    <SwiperSlide><Card /></SwiperSlide>
                    <SwiperSlide><Card /></SwiperSlide>
                </Swiper>

            </Content>
        </Container>
    );
}
