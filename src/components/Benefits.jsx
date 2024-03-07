import BenefitsList from "./Benefits/BenefitsList";
import { ImageSlider } from "./Benefits/ImageSlider";

const Benefits = () => (
  <div className="flex flex-col md:flex-row items-center w-full md:justify-evenly md:max-w-7xl md:p-6">
    <BenefitsList />
    <div className="hidden flex-col items-center gap-2 md:flex">
      <ImageSlider image="public/images/white-robe.png" altText="White Robe" />
      <p className="text-xs text-[#676869] leading-5">White Robe</p>
    </div>
  </div>
);

export default Benefits;
