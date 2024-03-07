export const ImageSlider = ({ image, altText }) => (
  <div className="flex items-center gap-4 ">
    <img
      src="public/images/arrow-left.png"
      alt="Arrow left"
      className="cursor-pointer"
    />
    <img src={image} alt={altText} />
    <img
      src="public/images/arrow-right.png"
      alt="Arrow right"
      className="cursor-pointer"
    />
  </div>
);
