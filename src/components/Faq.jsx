import Accordion from "./AccordionComponent";

const Faq = () => {
  return (
    <div className="flex flex-col items-center justify-center md:items-start md:justify-evenly md:flex-row p-3 w-full">
      <div className="flex flex-col md:items-start gap-6 max-h-[645px]">
        <div className="flex justify-center font-normal text-3xl text-center md:text-start text-[#01005B] leading-9 py-1 px-4 min-w-sm">
          <h1 className="p-2.5">Frequently asked questions.</h1>
        </div>
        <div className="flex flex-col gap-6 p-2 max-w-96">
          <Accordion />
        </div>
        <div className="flex justify-start items-center p-6 min-w-sm max-w-4xl">
          <button className="flex justify-center items-center gap-6 p-6 bg-[#01005B] hover:bg-[#5d81ce] text-white text-2xl rounded-md transition-colors">
            <p>Customize Your Outfit</p>
            <img src="src/assets/arrow.png" alt="" />
          </button>
        </div>
      </div>
      <div className="hidden justify-center p-6 max-w-[430px] max-h-[645px] md:flex">
        <img
          src="src/assets/group-corners-faq.png"
          alt="Group images in corners for FAQ"
        />
      </div>
    </div>
  );
};

export default Faq;
