import { DeliveryData } from "../../data/DeliveryData";
import Tags from "../Common/Tags";

export const Delivery = () => {
  return (
    <div className="flex flex-wrap justify-between items-center py-10 gap-y-5 flex-col md:flex-row w-11/12 ml-auto px-5">
      {DeliveryData.map((item, index) => (
        <Tags
          key={index}
          title={item.title}
          pera={item.pera}
          icon={item.icon}
        />
      ))}
    </div>
  );
};
