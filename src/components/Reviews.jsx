import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { globalTitle } from "../constants";
import Button from "./Button";
import TitleComponent from "./TitleComponent";
import { Autoplay } from "swiper/modules";

const Reviews = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-6 w-full">
      <div className="flex flex-col items-center gap-6">
        <TitleComponent title={globalTitle.reviews} />
        <p className="text-center max-w-[768px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
          lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et
          felis finibus consequat. Fusce non nibh luctus.
        </p>
      </div>
      <div className="flex justify-center items-center md:hidden max-w-[768px]">
        <img src="/images/group-eight-images.png" alt="Group of eight images" />
      </div>
      <div className="hidden justify-center items-center md:flex">
        <img
          src="/images/group-twelve-images.png"
          alt="Group of twelve images"
        />
      </div>
      <div className="flex flex-col items-center gap-6 md:hidden">
        <div className="flex justify-center w-[400px]">
          <Swiper
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 2500 }}
            speed={1000}
            modules={[Autoplay]}
          >
            <SwiperSlide>
              <div className="flex justify-center items-center w-[400px]">
                <div className="flex flex-col p-4 border rounded-lg shadow-xl max-w-xs">
                  <div className="flex gap-1">
                    <img src="/images/fake-avatar.png" alt="Avatar Image" />
                    <div className="flex flex-col">
                      <div className="flex justify-between">
                        <img src="/images/stars.svg" alt="Stars" />
                      </div>
                      <p className="text-sm text-[#676869] leading-6">
                        Jane, S.
                      </p>
                    </div>
                  </div>
                  <p className="text-xs text-[#676869] leading-6 p-1">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Pellentesque sed sollicitudin dolor, non sodales justo.
                    Aenean eget aliquet mi. Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit. Pellentesque sed sollicitudin
                    dolor, non sodales.
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex justify-center items-center w-[400px]">
                <div className="flex flex-col p-4 border rounded-lg shadow-xl max-w-60">
                  <div className="flex gap-1">
                    <img src="/images/fake-avatar.png" alt="Avatar Image" />
                    <div className="flex flex-col">
                      <div className="flex justify-between">
                        <img src="/images/stars.svg" alt="Stars" />
                      </div>
                      <p className="text-sm text-[#676869] leading-6">
                        Jane, S.
                      </p>
                    </div>
                  </div>
                  <p className="text-xs text-[#676869] leading-6 p-1">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Pellentesque sed sollicitudin dolor, non sodales justo.
                    Aenean eget aliquet mi. Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit. Pellentesque sed sollicitudin
                    dolor, non sodales.
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex justify-center items-center w-[400px]">
                <div className="flex flex-col p-4 border rounded-lg shadow-xl max-w-60">
                  <div className="flex gap-1">
                    <img src="/images/fake-avatar.png" alt="Avatar Image" />
                    <div className="flex flex-col">
                      <div className="flex justify-between">
                        <img src="/images/stars.svg" alt="Stars" />
                      </div>
                      <p className="text-sm text-[#676869] leading-6">
                        Jane, S.
                      </p>
                    </div>
                  </div>
                  <p className="text-xs text-[#676869] leading-6 p-1">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Pellentesque sed sollicitudin dolor, non sodales justo.
                    Aenean eget aliquet mi.
                  </p>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <div className="hidden gap-4 items-center justify-center md:flex w-full">
        <div className="flex max-w-[730px]">
          <Swiper
            slidesPerView={3}
            spaceBetween={10}
            loop={true}
            autoplay={{ delay: 2500 }}
            speed={1000}
            modules={[Autoplay]}
          >
            <SwiperSlide>
              <div className="flex flex-col items-start p-4 border rounded-lg shadow-xl max-w-xs">
                <div className="flex gap-1">
                  <img src="/images/fake-avatar.png" alt="Avatar Image" />
                  <div className="flex flex-col">
                    <div className="flex justify-between">
                      <img src="/images/stars.svg" alt="Stars" />
                    </div>
                    <p className="text-sm text-[#676869] leading-6">Jane, S.</p>
                  </div>
                </div>
                <p className="text-xs text-[#676869] leading-6 p-1">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Pellentesque sed sollicitudin dolor, non sodales justo. Aenean
                  eget aliquet mi. Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit. Pellentesque sed sollicitudin dolor, non
                  sodales.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex flex-col items-start p-4 border rounded-lg shadow-xl max-w-60">
                <div className="flex gap-1">
                  <img src="/images/fake-avatar.png" alt="Avatar Image" />
                  <div className="flex flex-col">
                    <div className="flex justify-between">
                      <img src="/images/stars.svg" alt="Stars" />
                    </div>
                    <p className="text-sm text-[#676869] leading-6">Jane, S.</p>
                  </div>
                </div>
                <p className="text-xs text-[#676869] leading-6 p-1">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Pellentesque sed sollicitudin dolor, non sodales justo. Aenean
                  eget aliquet mi. Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit. Pellentesque sed sollicitudin dolor, non
                  sodales.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex flex-col items-start p-4 border rounded-lg shadow-xl max-w-60">
                <div className="flex gap-1">
                  <img src="/images/fake-avatar.png" alt="Avatar Image" />
                  <div className="flex flex-col">
                    <div className="flex justify-between">
                      <img src="/images/stars.svg" alt="Stars" />
                    </div>
                    <p className="text-sm text-[#676869] leading-6">Jane, S.</p>
                  </div>
                </div>
                <p className="text-xs text-[#676869] leading-6 p-1">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Pellentesque sed sollicitudin dolor, non sodales justo. Aenean
                  eget aliquet mi.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex flex-col items-start p-4 border rounded-lg shadow-xl max-w-xs">
                <div className="flex gap-1">
                  <img src="/images/fake-avatar.png" alt="Avatar Image" />
                  <div className="flex flex-col">
                    <div className="flex justify-between">
                      <img src="/images/stars.svg" alt="Stars" />
                    </div>
                    <p className="text-sm text-[#676869] leading-6">Jane, S.</p>
                  </div>
                </div>
                <p className="text-xs text-[#676869] leading-6 p-1">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Pellentesque sed sollicitudin dolor, non sodales justo. Aenean
                  eget aliquet mi. Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit. Pellentesque sed sollicitudin dolor, non
                  sodales.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex flex-col items-start p-4 border rounded-lg shadow-xl max-w-60">
                <div className="flex gap-1">
                  <img src="/images/fake-avatar.png" alt="Avatar Image" />
                  <div className="flex flex-col">
                    <div className="flex justify-between">
                      <img src="/images/stars.svg" alt="Stars" />
                    </div>
                    <p className="text-sm text-[#676869] leading-6">Jane, S.</p>
                  </div>
                </div>
                <p className="text-xs text-[#676869] leading-6 p-1">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Pellentesque sed sollicitudin dolor, non sodales justo. Aenean
                  eget aliquet mi.
                </p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <div className="flex justify-start items-center p-2 min-w-sm max-w-4xl">
        <Button />
      </div>
    </div>
  );
};

export default Reviews;
