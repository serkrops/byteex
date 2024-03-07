import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./swiper.css";

export const LogoCarousel = () => (
  <div className="w-[350px]">
    <Swiper
      slidesPerView={2}
      spaceBetween={5}
      autoplay={{ delay: 2500 }}
      loop={true}
      modules={[Autoplay]}
    >
      <SwiperSlide>
        <div className="flex items-start justify-center">
          <img src="/images/artboard-eco.png" alt="Eco-stylist" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="flex items-start justify-center">
          <img src="/images/artboard-canadian.png" alt="Eco-stylist" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="flex items-start justify-center">
          <img src="/images/artboard-jullian.png" alt="Eco-stylist" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="flex items-start justify-center">
          <img src="/images/artboard-eco-hub.png" alt="Eco-stylist" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="flex items-start justify-center">
          <img src="/images/artboard-trenhunter.png" alt="Eco-stylist" />
        </div>
      </SwiperSlide>
    </Swiper>
  </div>
);
