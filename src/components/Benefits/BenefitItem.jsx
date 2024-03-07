export const BenefitItem = ({ benefit }) => (
  <div className="flex flex-col items-center text-center gap-3 p-3 max-w-sm md:flex-row md:items-start">
    <img src={benefit.img} alt={benefit.title} />
    <div className="flex flex-col md:text-start">
      <p className="leading-6 text-xl text-[#01005B]">{benefit.title}</p>
      <p className="text-sm text-[#676869] leading-5">{benefit.description}</p>
    </div>
  </div>
);
