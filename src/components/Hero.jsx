import Button from "./Button";
import { HeroBanner } from "./Hero/HeroBanner";
import { FeatureList } from "./Hero/FeatureList";
import { Testimonial } from "./Hero/Testimonial";
import { LogoCarousel } from "./Hero/LogoCarousel";
import LogoList from "./Hero/LogoList";
import TitleComponent from "./TitleComponent";
import { globalTitle } from "../constants";

const Hero = () => {
  return (
    <>
      <HeroBanner />
      <div className="flex flex-col items-center w-full md:items-start md:max-w-7xl md:p-6 gap-3">
        <div className="flex justify-center p-4 max-w-sm md:justify-start">
          <img src="src/assets/logo.png" alt="Logo" />
        </div>
        <div className="md:flex md:justify-between md:items-center w-full">
          <div className="flex flex-col items-center gap-3 px-6 md:p-0 md:items-start">
            <TitleComponent title={globalTitle.hero} />
            <div className="flex flex-col items-center gap-4 py-4 min-w-sm">
              <div className="flex items-center md:hidden">
                <img
                  src="src/assets/group-mobile.png"
                  alt="Group Image Mobile"
                />
              </div>
              <FeatureList />
            </div>
            <div className="flex justify-center items-center p-2 min-w-sm max-w-4xl">
              <Button />
            </div>
            <Testimonial />
          </div>
          <div className="hidden justify-center max-h-[422px] max-w-[725px] md:flex">
            <img src="src/assets/group-desktop.png" alt="Group Image Desktop" />
          </div>
        </div>
      </div>
      <div className="flex items-center md:gap-6 p-4">
        <div className="flex p-4 md:hidden">
          <div className="flex gap-2 max-w-[450px]">
            <LogoCarousel />
          </div>
        </div>
        <LogoList />
      </div>
    </>
  );
};

export default Hero;
