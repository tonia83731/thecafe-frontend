import { StepsCardProps } from "@/types/type";

const StepsCard = (props: StepsCardProps) => {
  const { index, title, description } = props;
  return (
    <div className="relative md:flex md:gap-4">
      <div className="absolute -top-[1.5rem] left-4 w-14 h-14 rounded-full font-italiana text-4xl bg-olive text-yellow flex justify-center items-center md:static">
        {index + 1}
      </div>
      <div className="bg-yellow text-olive px-4 pt-12 pb-4 rounded-md md:w-full md:px-4 md:py-8">
        <h4 className="font-medium text-2xl">{title}</h4>
        <p className="text-sm text-latte">{description}</p>
      </div>
    </div>
  );
};

export default StepsCard;
