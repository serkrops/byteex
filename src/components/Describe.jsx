import { globalTitle } from "../constants";
import Button from "./Button";
import TitleComponent from "./TitleComponent";

const Describe = () => {
  return (
    <div className="flex flex-col gap-4 md:gap-8 w-full">
      <TitleComponent title={globalTitle.describe} />
      <div className="flex justify-center items-center gap-6 md:hidden">
        <img src="public/images/arrow-left.png" alt="Arrow left" />
        <div className="flex flex-col items-center justify-center w-[288px] h-[288px] p-8 gap-4 bg-[#f0eeef] text-center rounded-lg">
          <img src="public/images/cart-leaf.png" alt="Cart Icon" />
          <p className="text-2xl leading-10 text-[#01005B]">You save.</p>
          <p className="text-base leading-6 text-[#676869]">
            Browse our store and find something you love.
          </p>
        </div>
        <img src="public/images/arrow-right.png" alt="Arrow right" />
      </div>
      <div className="hidden md:flex justify-evenly">
        <div className="flex flex-col items-center justify-center w-[240px] h-[240px] p-8 gap-4 bg-[#f0eeef] text-center rounded-lg hover:bg-[#ffcee6a8] transition-colors cursor-pointer">
          <img src="public/images/cart-leaf.png" alt="Cart Icon" />
          <p className="text-2xl leading-10 text-[#01005B]">You save.</p>
          <p className="text-base leading-6 text-[#676869]">
            Browse our store and find something you love.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center w-[240px] h-[240px] p-8 gap-4 bg-[#f9f0e6] text-center rounded-lg hover:bg-[#ffedd7] transition-colors cursor-pointer">
          <img src="public/images/truck.png" alt="Cart Icon" />
          <p className="text-2xl leading-10 text-[#01005B]">We ship.</p>
          <p className="text-base leading-6 text-[#676869]">
            We ship your items within 1-2 days of receiving your order.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center w-[240px] h-[240px] p-8 gap-4 bg-[#f0eeef] text-center rounded-lg hover:bg-[#ffcee6a8] transition-colors cursor-pointer">
          <img src="public/images/sun-moon-desktop.png" alt="Cart Icon" />
          <p className="text-2xl leading-10 text-[#01005B]">You enjoy!</p>
          <p className="text-base leading-6 text-[#676869]">
            Wear hernest around the house, out on the town, or in bed.
          </p>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center p-2 min-w-sm">
        <Button />
      </div>
    </div>
  );
};

export default Describe;
