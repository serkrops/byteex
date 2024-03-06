const Cta = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center gap-6">
        <div className="flex justify-center font-normal text-3xl text-center md:text-start text-[#15005B] leading-9 py-1 px-4 min-w-sm">
          <h1>Our Total Green Impact</h1>
        </div>
        <p className="text-base text-[#676869] leading-5">
          Click below to browse our collection!
        </p>
        <img src="src/assets/group-cta.png" alt="Group image CTA" />
        <div className="flex justify-start items-center p-2 min-w-sm max-w-4xl">
          <button className="flex justify-center items-center gap-6 p-6 bg-[#01005B] hover:bg-[#5d81ce] text-white text-2xl rounded-md transition-colors">
            <p>Customize Your Outfit</p>
            <img src="src/assets/arrow.png" alt="Arrow" />
          </button>
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
            <p className="text-sm leading-5">
              FREE Shipping on Orders over $200
            </p>
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
    </>
  );
};

export default Cta;
