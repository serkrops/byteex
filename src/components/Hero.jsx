import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "../components/swiper.css";

const Hero = () => {
  const heroTitleMobile = "FREE SHIPPING on orders > $200";
  const heroTitleDesktop =
    "CONSCIOUSLY MADE BUTTER SOFT STAPLES FOR EVERY DAY (OR NIGHT) | FREE SHIPPING on orders > $200 | easy 45 day return window.";
  const features = [
    {
      img: "src/assets/sun-moon.png",
      text: "Beautiful, comfortable loungewear for day or night.",
    },
    {
      img: "src/assets/cart.png",
      text: "No wasteful extras, like tags or plastic packaging.",
    },
    {
      img: "src/assets/wind.png",
      text: "Our signature fabric is incredibly comfortable — unlike anything you’ve ever felt.",
    },
  ];

  return (
    <>
      <div className="flex justify-center p-4 bg-[#f9f0e5] md:hidden w-full">
        {heroTitleMobile}
      </div>
      <div className="hidden justify-center p-4 bg-[#f9f0e5] md:flex w-full">
        {heroTitleDesktop}
      </div>
      <div className="flex flex-col items-center w-full md:items-start md:max-w-7xl md:p-6 gap-3">
        <div className="flex justify-center p-4 max-w-sm md:justify-start">
          <img src="src/assets/logo.png" alt="Logo" />
        </div>
        <div className="md:flex md:justify-between md:items-center w-full">
          <div className="flex flex-col items-center gap-3 px-6 md:p-0 md:items-start">
            <div className="flex justify-center font-normal text-3xl text-center md:text-start text-[#01005B] leading-9 py-1 px-4 min-w-sm">
              <h1>Don’t apologize for being comfortable.</h1>
            </div>
            <div className="flex flex-col items-center gap-4 py-4 min-w-sm">
              <div className="flex items-center md:hidden">
                <img
                  src="src/assets/group-mobile.png"
                  alt="Group Image Mobile"
                />
              </div>
              <div className="flex flex-col gap-4 p-6">
                {features.map((feature, index) => (
                  <div className="flex items-center gap-4" key={index}>
                    <img src={feature.img} alt="Feature Icon" />
                    <p className="font-normal text-sm text-[#676869]">
                      {feature.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex justify-center items-center p-2 min-w-sm max-w-4xl">
              <button className="flex justify-center items-center gap-6 p-6 bg-[#01005B] hover:bg-[#5d81ce] text-white text-2xl rounded-md w-full transition-colors">
                <p>Customize Your Outfit</p>
                <img src="src/assets/arrow.png" alt="" />
              </button>
            </div>
            <div className="flex flex-col p-4 border rounded-lg shadow-xl max-w-sm">
              <div className="flex gap-1">
                <img src="src/assets/avatar.png" alt="Avatar Image" />
                <div className="flex flex-col">
                  <div className="flex justify-between">
                    <img src="src/assets/stars.svg" alt="Stars" />
                    <p className="text-xs text-[#828282]">
                      One of 500+ 5 Star Reviews Online
                    </p>
                  </div>
                  <p className="text-sm text-[#676869] leading-6">Jane, S.</p>
                </div>
              </div>
              <p className="text-xs text-[#676869] leading-6 p-1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque sed sollicitudin dolor, non sodales justo.
              </p>
            </div>
          </div>
          <div className="hidden justify-center max-h-[422px] max-w-[725px] md:flex">
            <img src="src/assets/group-desktop.png" alt="Group Image Desktop" />
          </div>
        </div>
      </div>
      <div className="flex items-center md:gap-6 p-4">
        <div className="flex p-4 md:hidden">
          <div className="flex gap-2 max-w-[450px]">
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
                  <img
                    src="src/assets/artboard-canadian.png"
                    alt="Eco-stylist"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="flex items-start justify-center">
                  <img
                    src="src/assets/artboard-jullian.png"
                    alt="Eco-stylist"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="flex items-start justify-center">
                  <img
                    src="src/assets/artboard-eco-hub.png"
                    alt="Eco-stylist"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="flex items-start justify-center">
                  <img
                    src="src/assets/artboard-trenhunter.png"
                    alt="Eco-stylist"
                  />
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
        <div className="hidden flex-col items-center gap-4 md:flex w-full">
          <p className="text-base text-[#868787]">as seen in</p>
          <div className="flex justify-evenly items-center">
            <div className="flex items-center justify-center p-1">
              <img src="src/assets/artboard-eco.png" alt="Eco-stylist" />
            </div>
            <div className="flex items-center justify-center p-1">
              <img src="src/assets/artboard-canadian.png" alt="Eco-stylist" />
            </div>
            <div className="flex items-center justify-center p-1">
              <img src="src/assets/artboard-jullian.png" alt="Eco-stylist" />
            </div>
            <div className="flex items-center justify-center p-1">
              <img src="src/assets/artboard-eco-hub.png" alt="Eco-stylist" />
            </div>
            <div className="flex items-center justify-center p-1">
              <img src="src/assets/artboard-trenhunter.png" alt="Eco-stylist" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
