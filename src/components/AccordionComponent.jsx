import { Accordion } from "rsuite";
import "rsuite/dist/rsuite.css";

const AccordionComponent = () => {
  return (
    <Accordion defaultActiveKey="3">
      <Accordion.Panel
        header={
          <div className="flex justify-between text-[#01005B] text-lg leading-6 w-[400px]">
            <p>lorem ipsum dolor sit amet</p>
          </div>
        }
        eventKey={1}
      >
        <p className="text-sm text-[#676869] leading-5">
          Our fabrics and garments are made in Portugal. We build strong
          relationships with our immediate suppliers and visit as often as
          possible.
        </p>
      </Accordion.Panel>
      <Accordion.Panel
        header={
          <div className="flex justify-between text-[#01005B] text-lg leading-6 w-[400px]">
            <p>lorem ipsum dolor sit amet</p>
          </div>
        }
        eventKey={2}
      >
        <p className="text-sm text-[#676869] leading-5">
          Our fabrics and garments are made in Portugal. We build strong
          relationships with our immediate suppliers and visit as often as
          possible.
        </p>
      </Accordion.Panel>
      <Accordion.Panel
        header={
          <div className="flex justify-between text-[#01005B] text-lg leading-6 w-[400px]">
            <p>lorem ipsum dolor sit amet</p>
          </div>
        }
        eventKey={3}
      >
        <p className="text-sm text-[#676869] leading-5">
          Our fabrics and garments are made in Portugal. We build strong
          relationships with our immediate suppliers and visit as often as
          possible.
        </p>
      </Accordion.Panel>
      <Accordion.Panel
        header={
          <div className="flex justify-between text-[#01005B] text-lg leading-6 w-[400px]">
            <p>lorem ipsum dolor sit amet</p>
          </div>
        }
        eventKey={4}
      >
        <p className="text-sm text-[#676869] leading-5">
          Our fabrics and garments are made in Portugal. We build strong
          relationships with our immediate suppliers and visit as often as
          possible.
        </p>
      </Accordion.Panel>
      <Accordion.Panel
        header={
          <div className="flex justify-between text-[#01005B] text-lg leading-6 w-[400px]">
            <p>lorem ipsum dolor sit amet</p>
          </div>
        }
        eventKey={5}
      >
        <p className="text-sm text-[#676869] leading-5">
          Our fabrics and garments are made in Portugal. We build strong
          relationships with our immediate suppliers and visit as often as
          possible.
        </p>
      </Accordion.Panel>
    </Accordion>
  );
};

export default AccordionComponent;
