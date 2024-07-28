import save from "../../assets/save.png";
import chat from "../../assets/ches.png";
import recipes from "../../assets/recipe.png";
import meet from "../../assets/meet.png";

export const Info = () => {
  return (
    <div className="flex flex-wrap flex-row w-11/12 ml-auto">
      <div className="flex gap-5 w-full lg:w-3/6 bg-white text-black justify-center items-center px-5">
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl md:text-4xl font-semibold">
            SUBSCRIBE & SAVE
          </h2>
          <p className="text-sm">
            Join Chef Matt’s Monthly Subscription and bring world class chef
            quality meals to your home.
          </p>
        </div>
        <div className="w-80 h-60">
          <img src={save} alt="subscribe" className="w-80 h-60 object-cover" />
        </div>
      </div>
      <div className="flex gap-5 w-full lg:w-3/6">
        <img src={meet} alt="subscribe" className="w-full h-60 object-cover" />
      </div>
      <div className="flex gap-5 w-full lg:w-3/6">
        <img
          src={recipes}
          alt="subscribe"
          className="w-full h-60 object-cover"
        />
      </div>
      <div className="flex gap-5 w-full lg:w-3/6 ">
        <img src={chat} alt="subscribe" className="w-full h-60 object-cover" />
      </div>
    </div>
  );
};
