const Describe = () => {
  return (
    <div className="flex flex-col gap-4 md:gap-8 w-full">
      <div className="flex justify-center font-normal text-3xl text-center md:text-start text-[#01005B] leading-9 py-1 px-4 min-w-sm">
        <h1>Comfort made easy</h1>
      </div>
      <div className="flex justify-center items-center gap-6 md:hidden">
        <img src="src/assets/arrow-left.png" alt="Arrow left" />
        <div className="flex flex-col items-center justify-center w-[288px] h-[288px] p-8 gap-4 bg-[#f0eeef] text-center rounded-lg">
          <img src="src/assets/cart-leaf.png" alt="Cart Icon" />
          <p className="text-2xl leading-10 text-[#01005B]">You save.</p>
          <p className="text-base leading-6 text-[#676869]">
            Browse our store and find something you love.
          </p>
        </div>
        <img src="src/assets/arrow-right.png" alt="Arrow right" />
      </div>
      <div className="hidden md:flex justify-evenly">
        <div className="flex flex-col items-center justify-center w-[240px] h-[240px] p-8 gap-4 bg-[#f0eeef] text-center rounded-lg hover:bg-[#ffcee6a8] transition-colors cursor-pointer">
          <img src="src/assets/cart-leaf.png" alt="Cart Icon" />
          <p className="text-2xl leading-10 text-[#01005B]">You save.</p>
          <p className="text-base leading-6 text-[#676869]">
            Browse our store and find something you love.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center w-[240px] h-[240px] p-8 gap-4 bg-[#f9f0e6] text-center rounded-lg hover:bg-[#ffedd7] transition-colors cursor-pointer">
          <img src="src/assets/truck.png" alt="Cart Icon" />
          <p className="text-2xl leading-10 text-[#01005B]">We ship.</p>
          <p className="text-base leading-6 text-[#676869]">
            We ship your items within 1-2 days of receiving your order.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center w-[240px] h-[240px] p-8 gap-4 bg-[#f0eeef] text-center rounded-lg hover:bg-[#ffcee6a8] transition-colors cursor-pointer">
          <img src="src/assets/sun-moon-desktop.png" alt="Cart Icon" />
          <p className="text-2xl leading-10 text-[#01005B]">You enjoy!</p>
          <p className="text-base leading-6 text-[#676869]">
            Wear hernest around the house, out on the town, or in bed.
          </p>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center p-2 min-w-sm">
        <button className="flex justify-center items-center gap-6 p-6 bg-[#01005B] hover:bg-[#5d81ce] text-white text-2xl rounded-md transition-colors">
          <p>Customize Your Outfit</p>
          <img src="src/assets/arrow.png" alt="" />
        </button>
      </div>
    </div>
  );
};

export default Describe;