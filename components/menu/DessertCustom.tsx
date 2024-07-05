import ModalLayout from "./ModalLayout";
import { FiPlus } from "react-icons/fi";
import { FiMinus } from "react-icons/fi";

const DessertsCustom = () => {
  return (
    <div className="flex flex-col justify-between gap-2 h-full">
      <div className="text-latte w-full text-sm text-center">
        No custom options
        <br /> Enjoy your desserts!
      </div>
      <div className="flex flex-col gap-2">
        <div className="bg-yellow flex w-full justify-evenly py-1">
          <button className="text-lg text-olive">
            <FiMinus />
          </button>
          <input
            type="number"
            className="text-center bg-transparent"
            defaultValue={1}
          />
          <button className="text-lg text-olive ">
            <FiPlus />
          </button>
        </div>
        <button className="bg-orange text-white text-sm w-full py-1 rounded-md">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default DessertsCustom;
