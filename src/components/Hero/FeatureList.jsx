import { features } from "../../constants";
import { FeatureItem } from "./FeatureItem";

export const FeatureList = () => {
  return (
    <div className="flex flex-col gap-4 p-6">
      {features.map((feature, index) => (
        <FeatureItem key={index} feature={feature} />
      ))}
    </div>
  );
};
