import PlusAndMinus from "../common/PlusAndMinus";

const DessertsCustom = () => {
  return (
    <div className="flex flex-col justify-between gap-2 h-full">
      <div className="text-latte w-full text-sm text-center">
        No custom options
        <br /> Enjoy your desserts!
      </div>
      <div className="flex flex-col gap-2">
        <PlusAndMinus />
        <button className="bg-orange text-white text-sm w-full py-1 rounded-md">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default DessertsCustom;
