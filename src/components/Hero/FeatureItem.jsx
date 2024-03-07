export const FeatureItem = ({ feature }) => (
  <div className="flex items-center gap-4">
    <img src={feature.img} alt="Feature Icon" />
    <p className="font-normal text-sm text-[#676869]">{feature.text}</p>
  </div>
);
