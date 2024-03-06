const Benefits = () => {
  const benefits = [
    {
      img: "src/assets/cloud.png",
      title: "Ethically sourced.",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et felis finibus consequat.",
    },
    {
      img: "src/assets/sun-moon.png",
      title: "Responsibly made.",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et felis finibus consequat.",
    },
    {
      img: "src/assets/leaf.png",
      title: "Made for living in.",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et felis finibus consequat.",
    },
    {
      img: "src/assets/wind.png",
      title: "Unimaginably comfortable.",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et felis finibus consequat.",
    },
  ];
  return (
    <div className="flex flex-col items-center w-full md:items-start md:max-w-7xl md:p-6 gap-3">
      <div className="md:flex md:justify-between md:items-center w-full">
        <div className="flex flex-col items-center gap-4 md:items-start">
          <div className="flex flex-col justify-center items-center gap-6">
            <div className="flex justify-center font-normal text-3xl text-center md:text-start text-[#01005B] leading-9 py-1 px-4 min-w-sm">
              <h1>Loungewear you can be proud of.</h1>
            </div>
            {/* Need to add swiper */}
            <div className="flex flex-col items-center gap-2 md:hidden">
              <div className="flex items-center gap-4 ">
                <img
                  src="src/assets/arrow-left.png"
                  alt="Arrow left"
                  className="cursor-pointer"
                />
                <img src="src/assets/white-robe.png" alt="White Robe" />
                <img
                  src="src/assets/arrow-right.png"
                  alt="Arrow right"
                  className="cursor-pointer"
                />
              </div>
              <p className="text-xs text-[#676869] leading-5">White Robe</p>
            </div>
          </div>
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center gap-3 p-3 max-w-sm md:flex-row md:items-start"
            >
              <img src={benefit.img} alt={benefit.title} />
              <div className="flex flex-col md:text-start">
                <p className="leading-6 text-xl text-[#01005B]">
                  {benefit.title}
                </p>
                <p className="text-sm text-[#676869] leading-5">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="hidden flex-col items-center gap-2 md:flex">
          <div className="flex items-center gap-4 ">
            <img
              src="src/assets/arrow-left.png"
              alt="Arrow left"
              className="cursor-pointer"
            />
            <img src="src/assets/white-robe.png" alt="White Robe" />
            <img
              src="src/assets/arrow-right.png"
              alt="Arrow right"
              className="cursor-pointer"
            />
          </div>
          <p className="text-xs text-[#676869] leading-5">White Robe</p>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
