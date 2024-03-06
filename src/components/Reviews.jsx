const Reviews = () => {
  return (
    <div className="flex flex-col items-center gap-6 p-6">
      <div className="flex flex-col items-center gap-6 max-w-xl">
        <div className="flex justify-center font-normal text-3xl text-center md:text-start text-[#01005B] leading-9 py-1 px-4 min-w-sm">
          <h1>What are our fans saying?</h1>
        </div>
        <p className="text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
          lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et
          felis finibus consequat. Fusce non nibh luctus.
        </p>
      </div>
      <div className="flex justify-center items-center md:hidden">
        <img
          src="src/assets/group-eight-images.png"
          alt="Group of eight images"
        />
      </div>
      <div className="hidden justify-center items-center md:flex">
        <img
          src="src/assets/group-twelve-images.png"
          alt="Group of twelve images"
        />
      </div>
      <div className="flex flex-col items-center gap-6 md:hidden">
        <div className="flex justify-center items-center gap-6">
          <img src="src/assets/arrow-left.png" alt="Arrow left" />
          <div className="flex flex-col p-4 border rounded-lg shadow-xl max-w-xs">
            <div className="flex gap-1">
              <img src="src/assets/fake-avatar.png" alt="Avatar Image" />
              <div className="flex flex-col">
                <div className="flex justify-between">
                  <img src="src/assets/stars.svg" alt="Stars" />
                </div>
                <p className="text-sm text-[#676869] leading-6">Jane, S.</p>
              </div>
            </div>
            <p className="text-xs text-[#676869] leading-6 p-1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque sed sollicitudin dolor, non sodales justo. Aenean
              eget aliquet mi. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Pellentesque sed sollicitudin dolor, non sodales.
            </p>
          </div>
          <img src="src/assets/arrow-right.png" alt="Arrow right" />
        </div>
        <div className="flex gap-2">
          <img src="src/assets/ellipse-black.png" alt="" />
          <img src="src/assets/ellipse-gray.png" alt="" />
          <img src="src/assets/ellipse-gray.png" alt="" />
        </div>
      </div>
      <div className="hidden gap-8 items-center md:flex">
        <img src="src/assets/arrow-left.png" alt="Arrow left" />
        <div className="flex items-start gap-6">
          <div className="flex flex-col p-4 border rounded-lg shadow-xl max-w-60">
            <div className="flex gap-1">
              <img src="src/assets/fake-avatar.png" alt="Avatar Image" />
              <div className="flex flex-col">
                <div className="flex justify-between">
                  <img src="src/assets/stars.svg" alt="Stars" />
                </div>
                <p className="text-sm text-[#676869] leading-6">Jane, S.</p>
              </div>
            </div>
            <p className="text-xs text-[#676869] leading-6 p-1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque sed sollicitudin dolor, non sodales justo. Aenean
              eget aliquet mi.
            </p>
          </div>
          <div className="flex flex-col p-4 border rounded-lg shadow-xl max-w-60">
            <div className="flex gap-1">
              <img src="src/assets/fake-avatar.png" alt="Avatar Image" />
              <div className="flex flex-col">
                <div className="flex justify-between">
                  <img src="src/assets/stars.svg" alt="Stars" />
                </div>
                <p className="text-sm text-[#676869] leading-6">Jane, S.</p>
              </div>
            </div>
            <p className="text-xs text-[#676869] leading-6 p-1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque sed sollicitudin dolor, non sodales justo. Aenean
              eget aliquet mi. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Pellentesque sed sollicitudin dolor, non sodales.
            </p>
          </div>
          <div className="flex flex-col p-4 border rounded-lg shadow-xl max-w-60">
            <div className="flex gap-1">
              <img src="src/assets/fake-avatar.png" alt="Avatar Image" />
              <div className="flex flex-col">
                <div className="flex justify-between">
                  <img src="src/assets/stars.svg" alt="Stars" />
                </div>
                <p className="text-sm text-[#676869] leading-6">Jane, S.</p>
              </div>
            </div>
            <p className="text-xs text-[#676869] leading-6 p-1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque sed sollicitudin dolor, non sodales justo. Aenean
              eget aliquet mi.
            </p>
          </div>
        </div>
        <img src="src/assets/arrow-right.png" alt="Arrow right" />
      </div>
      <div className="flex justify-start items-center p-2 min-w-sm max-w-4xl">
        <button className="flex justify-center items-center gap-6 p-6 bg-[#01005B] hover:bg-[#5d81ce] text-white text-2xl rounded-md transition-colors">
          <p>Customize Your Outfit</p>
          <img src="src/assets/arrow.png" alt="" />
        </button>
      </div>
    </div>
  );
};

export default Reviews;
