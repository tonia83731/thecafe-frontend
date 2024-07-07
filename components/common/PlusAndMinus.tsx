import { FiPlus } from "react-icons/fi";
import { FiMinus } from "react-icons/fi";
import { useState } from "react";
const PlusAndMinus = ({ value = 1 }: { value?: number }) => {
  const [quantity, setQuantity] = useState<number>(value);
  return (
    <div className="bg-yellow flex w-full justify-evenly py-1">
      <button
        className="text-start text-lg text-olive disabled:text-gray-green w-6"
        onClick={() => setQuantity(quantity - 1)}
        disabled={quantity <= 1}
        title="Minus items"
      >
        <FiMinus />
      </button>
      <input
        type="number"
        className="text-center bg-transparent disabled:text-gray-green"
        value={quantity}
        onChange={(e) => {
          const num = Number(e.target.value);
          setQuantity(num);
        }}
      />
      <button
        className="text-end text-lg text-olive disabled:text-gray-green w-6"
        onClick={() => setQuantity(quantity + 1)}
        disabled={quantity >= 10}
        title={quantity >= 10 ? "No more than 10 items!" : "Plus items"}
      >
        <FiPlus />
      </button>
    </div>
  );
};

export default PlusAndMinus;
