import { benefits, globalTitle } from "../../constants";
import TitleComponent from "../TitleComponent";
import { BenefitItem } from "./BenefitItem";
import { ImageSlider } from "./ImageSlider";

const BenefitsList = () => {
  return (
    <div className="flex flex-col items-center gap-4 md:items-start">
      <div className="flex flex-col justify-center items-center gap-6">
        <TitleComponent title={globalTitle.benefits} />
        <div className="flex flex-col items-center gap-2 md:hidden">
          <ImageSlider image="/images/white-robe.png" altText="White Robe" />
          <p className="text-xs text-[#676869] leading-5">White Robe</p>
        </div>
      </div>
      {benefits.map((benefit, index) => (
        <BenefitItem key={index} benefit={benefit} />
      ))}
    </div>
  );
};

export default BenefitsList;
