const TitleComponent = ({ title }) => {
  return (
    <div className="flex justify-center font-normal text-3xl text-center md:text-start text-[#01005B] leading-9 py-1 px-4 min-w-sm">
      <h1>{title}</h1>
    </div>
  );
};

export default TitleComponent;
