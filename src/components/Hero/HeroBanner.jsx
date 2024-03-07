export const HeroBanner = () => {
  const titleMobile = "FREE SHIPPING on orders > $200";
  const titleDesktop =
    "CONSCIOUSLY MADE BUTTER SOFT STAPLES FOR EVERY DAY (OR NIGHT) | FREE SHIPPING on orders > $200 | easy 45 day return window.";

  return (
    <>
      <div className="flex justify-center p-4 bg-[#f9f0e5] md:hidden w-full">
        {titleMobile}
      </div>
      <div className="hidden justify-center p-4 bg-[#f9f0e5] md:flex w-full">
        {titleDesktop}
      </div>
    </>
  );
};
