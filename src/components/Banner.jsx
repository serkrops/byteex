import { globalTitle } from "../constants";
import TitleComponent from "./TitleComponent";

const Banner = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-[#f0eeef] gap-8 p-6 w-full">
      <TitleComponent title={globalTitle.banner} />
      <div className="flex flex-col md:flex-row md:gap-10">
        <div className="flex flex-col gap-1 items-center justify-center leading-5 text-[#2A2996] p-4">
          <img src="src/assets/co2.png" alt="CO2" />
          <p className="text-2xl font-semibold">3,927 kg</p>
          <p className="text-sm">of CO2 saved</p>
        </div>
        <div className="flex flex-col gap-1 items-center justify-center leading-5 text-[#2A2996] md:border-l-2 md:border-r-2 p-4">
          <img src="src/assets/h2o.png" alt="H2O" />
          <p className="text-2xl font-semibold">2,546,167 days</p>
          <p className="text-sm">of drinking water saved</p>
        </div>
        <div className="hidden md:flex flex-col gap-1 items-center justify-center leading-5 text-[#2A2996] p-4">
          <img src="src/assets/energy.png" alt="H2O" />
          <p className="text-2xl font-semibold">7,321 kWh</p>
          <p className="text-sm">of energy saved</p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
