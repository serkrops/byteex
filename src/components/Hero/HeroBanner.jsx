import { titleDesktop, titleMobile } from "../../constants";

export const HeroBanner = () => (
  <>
    <div className="flex justify-center p-4 bg-[#f9f0e5] md:hidden w-full">
      {titleMobile}
    </div>
    <div className="hidden justify-center p-4 bg-[#f9f0e5] md:flex w-full">
      {titleDesktop}
    </div>
  </>
);
