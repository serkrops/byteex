import { globalTitle } from "../constants";
import AccordionComponent from "./AccordionComponent";
import Button from "./Button";
import TitleComponent from "./TitleComponent";

const Faq = () => {
  return (
    <div className="flex flex-col items-center justify-center md:items-start md:justify-evenly md:flex-row p-3 w-full">
      <div className="flex flex-col md:items-start gap-6 max-h-[645px]">
        <TitleComponent title={globalTitle.faq} />
        <div className="flex flex-col gap-6 p-2 max-w-96">
          <AccordionComponent />
        </div>
        <div className="flex justify-start items-center p-6 min-w-sm max-w-4xl">
          <Button />
        </div>
      </div>
      <div className="hidden justify-center p-6 max-w-[430px] max-h-[645px] md:flex">
        <img
          src="/images/group-corners-faq.png"
          alt="Group images in corners for FAQ"
        />
      </div>
    </div>
  );
};

export default Faq;
