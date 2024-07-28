interface PropType {
  title: string;
  pera: string;
  icon: string;
}

const Tags: React.FC<PropType> = ({ title, pera, icon }) => {
  return (
    <div className="flex gap-2 items-start justify-start md:w-auto w-full">
      <img src={icon} alt={title} className="w-6 h-6 mr-3" />
      <div className="flex flex-col gap-2">
        <h5 className="text-primary font-semibold text-base md:text-lg">
          {title}
        </h5>
        <p className="text-sm">{pera}</p>
      </div>
    </div>
  );
};

export default Tags;
