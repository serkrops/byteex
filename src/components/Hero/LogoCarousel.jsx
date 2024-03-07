import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./swiper.css";

export const LogoCarousel = () => (
  <Swiper
    slidesPerView={3}
    spaceBetween={5}
    autoplay={{ delay: 2500 }}
    loop={true}
    navigation={true}
    modules={[Autoplay]}
  >
    <SwiperSlide>
      <div className="flex items-start justify-center">
        <img src="src/assets/artboard-eco.png" alt="Eco-stylist" />
      </div>
    </SwiperSlide>
    <SwiperSlide>
      <div className="flex items-start justify-center">
        <img src="src/assets/artboard-canadian.png" alt="Eco-stylist" />
      </div>
    </SwiperSlide>
    <SwiperSlide>
      <div className="flex items-start justify-center">
        <img src="src/assets/artboard-jullian.png" alt="Eco-stylist" />
      </div>
    </SwiperSlide>
    <SwiperSlide>
      <div className="flex items-start justify-center">
        <img src="src/assets/artboard-eco-hub.png" alt="Eco-stylist" />
      </div>
    </SwiperSlide>
    <SwiperSlide>
      <div className="flex items-start justify-center">
        <img src="src/assets/artboard-trenhunter.png" alt="Eco-stylist" />
      </div>
    </SwiperSlide>
  </Swiper>
);
