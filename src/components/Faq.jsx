const Faq = () => {
  return (
    <div className="flex flex-col items-start justify-center md:flex-row md:justify-between">
      <div className="flex flex-col items-center justify-be gap-8 p-6 max-h-[645px]">
        <div className="flex justify-center font-normal text-3xl text-center md:text-start text-[#01005B] leading-9 py-1 px-4 min-w-sm">
          <h1>Frequently asked questions.</h1>
        </div>
        <div className="flex flex-col gap-6 p-1 max-w-96">
          <div className="flex flex-col">
            <div className="flex justify-between text-[#01005B] text-lg leading-6">
              <p>lorem ipsum dolor sit amet</p>
              <img src="src/assets/minus.svg" alt="Minus" />
            </div>
            <p className="text-sm text-[#676869] leading-5">
              Our fabrics and garments are made in Portugal. We build strong
              relationships with our immediate suppliers and visit as often as
              possible.
            </p>
          </div>
          <div className="flex flex-col">
            <div className="flex justify-between text-[#01005B] text-lg leading-6">
              <p>lorem ipsum dolor sit amet</p>
              <img src="src/assets/plus.svg" alt="Plus" />
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex justify-between text-[#01005B] text-lg leading-6">
              <p>lorem ipsum dolor sit amet</p>
              <img src="src/assets/plus.svg" alt="Plus" />
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex justify-between text-[#01005B] text-lg leading-6">
              <p>lorem ipsum dolor sit amet</p>
              <img src="src/assets/plus.svg" alt="Plus" />
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex justify-between text-[#01005B] text-lg leading-6">
              <p>lorem ipsum dolor sit amet</p>
              <img src="src/assets/plus.svg" alt="Plus" />
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex justify-between text-[#01005B] text-lg leading-6">
              <p>lorem ipsum dolor sit amet</p>
              <img src="src/assets/plus.svg" alt="Plus" />
            </div>
          </div>
        </div>
        <div className="flex justify-start items-center p-2 min-w-sm max-w-4xl">
          <button className="flex justify-center items-center gap-6 p-6 bg-[#01005B] hover:bg-[#5d81ce] text-white text-2xl rounded-md transition-colors">
            <p>Customize Your Outfit</p>
            <img src="src/assets/arrow.png" alt="" />
          </button>
        </div>
      </div>
      <div className="hidden justify-center items-center md:flex max-w-[430px] max-h-[645px] p-4">
        <img
          src="src/assets/group-corners-faq.png"
          alt="Group images in corners for FAQ"
          className="hidden md:block max-w-[430px] max-h-[645px] p-4"
        />
      </div>
    </div>
  );
};

export default Faq;
