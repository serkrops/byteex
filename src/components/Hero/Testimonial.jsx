export const Testimonial = () => (
  <div className="flex flex-col p-4 border rounded-lg shadow-xl max-w-sm">
    <div className="flex gap-1">
      <img src="/images/avatar.png" alt="Avatar Image" />
      <div className="flex flex-col">
        <div className="flex justify-between">
          <img src="/images/stars.svg" alt="Stars" />
          <p className="text-xs text-[#828282]">
            One of 500+ 5 Star Reviews Online
          </p>
        </div>
        <p className="text-sm text-[#676869] leading-6">Jane, S.</p>
      </div>
    </div>
    <p className="text-xs text-[#676869] leading-6 p-1">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sed
      sollicitudin dolor, non sodales justo.
    </p>
  </div>
);
