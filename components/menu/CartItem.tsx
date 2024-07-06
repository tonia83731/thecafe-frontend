import { FaHeart } from "react-icons/fa";
import { ProductCartProps } from "@/types/type";
import { FaEdit } from "react-icons/fa";
import { IoTrashBin } from "react-icons/io5";
type CartItemProps = ProductCartProps & { index: number };
const CartItem = (props: CartItemProps) => {
  const { id, image, name, custom, price, type, qty, index } = props;
  return (
    <div className={`py-4 ${index > 0 && "border-t border-orange"} w-full`}>
      <div className="flex gap-2 items-start">
        <button className="text-light text-lg hover:text-red mt-1">
          <FaHeart />
        </button>
        <div>
          <div className="mb-1">
            <h4 className="font-bold text-olive text-lg break-words">{name}</h4>
            <p className="font-bold text-orange">
              ${price}, Qty:{qty}
            </p>
          </div>
          {custom && <p className="text-xs text-latte break-words">{custom}</p>}
        </div>
      </div>
      <div className="flex justify-end items-center text-olive text-lg gap-2 mt-2">
        <button className="bg-white px-2 py-1 rounded-md drop-shadow-md hover:bg-light">
          <FaEdit />
        </button>
        <button className="bg-white px-2 py-1 rounded-md drop-shadow-md hover:bg-light">
          <IoTrashBin />
        </button>
      </div>
    </div>
  );
};
export default CartItem;
