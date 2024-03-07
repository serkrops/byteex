import { globalTitle } from "../constants";
import Button from "./Button";
import TitleComponent from "./TitleComponent";

const Cta = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-6 p-6">
      <TitleComponent title={globalTitle.cta} />
      <p className="text-base text-[#676869] leading-5">
        Click below to browse our collection!
      </p>
      <img src="src/assets/group-cta.png" alt="Group image CTA" />
      <div className="flex justify-start items-center p-2 min-w-sm max-w-4xl">
        <Button />
      </div>
      <div className="hidden md:flex justify-center items-center gap-4">
        <div className="flex gap-2">
          <img
            src="src/assets/clock.png"
            alt="Clock icon"
            className="w-[11px] h-[11px]"
          />
          <p className="text-[10px] text-[#1FAD40]">Ships in 1-2 Days</p>
        </div>
        <img src="src/assets/payments.png" alt="Payments" />
      </div>
      <div className="hidden md:flex gap-6">
        <div className="flex justify-center gap-2 items-center max-w-80">
          <img
            src="src/assets/truck-small.png"
            alt="Truck"
            className="w-[33px] h-[33px]"
          />
          <p className="text-sm leading-5">FREE Shipping on Orders over $200</p>
        </div>
        <div className="flex justify-center gap-2 items-center max-w-80">
          <img
            src="src/assets/shield.png"
            alt="Truck"
            className="w-[33px] h-[33px]"
          />
          <p className="text-sm leading-5">Over 500+ 5 Star Reviews Online</p>
        </div>
        <div className="flex justify-center gap-2 items-center max-w-80">
          <img
            src="src/assets/cart-leaf-small.png"
            alt="Truck"
            className="w-[33px] h-[33px]"
          />
          <p className="text-sm leading-5">Made ethically and responsibly.</p>
        </div>
      </div>
    </div>
  );
};

export default Cta;
