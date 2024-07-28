import { DeliveryData } from "../../data/DeliveryData";
import Tags from "../Common/Tags";

export const Delivery = () => {
  return (
    <div className="flex flex-wrap justify-around items-center py-10 gap-y-5 flex-col md:flex-row md:w-[calc(100%-130px)] w-[calc(100%-70px)] ml-auto px-5">
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
