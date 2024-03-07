import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

export const ImageSlider = ({ image, altText }) => (
  <div className="flex items-center justify-center gap-4 w-[400px]">
    <Swiper
      slidesPerView={1}
      loop={true}
      autoplay={{ delay: 2500 }}
      speed={1000}
      modules={[Autoplay]}
    >
      <SwiperSlide>
        <div className="flex items-center justify-center">
          <img src={image} alt={altText} />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="flex items-center justify-center">
          <img src={image} alt={altText} />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="flex items-center justify-center">
          <img src={image} alt={altText} />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="flex items-center justify-center">
          <img src={image} alt={altText} />
        </div>
      </SwiperSlide>
     
    </Swiper>
  </div>
);
