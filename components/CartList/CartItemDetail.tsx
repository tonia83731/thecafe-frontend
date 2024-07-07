import { ProductCartProps } from "@/types/type";
import PlusAndMinus from "../common/PlusAndMinus";
import { useState } from "react";
import CartDrinkCustom from "./CartDrinkCustom";
import CartMealCustom from "./CartMealCustom";
const CartItemDetail = (props: ProductCartProps) => {
  const { id, name, custom, price, type, qty } = props;
  const [customShow, setCustomShow] = useState<boolean>(false);
  return (
    <div>
      <div
        className={`${
          customShow ? "bg-orange-5 rounded-t-md" : "bg-white rounded-md"
        } drop-shadow-md px-4 py-2  w-full flex justify-between items-center`}
      >
        <div className="flex flex-col gap-1">
          <div className="flex gap-4 items-center">
            <h5 className="font-bold md:text-lg">{name}</h5>
            <p className="bg-gray-green text-white text-xs rounded-sm px-1 w-fit h-fit">
              {type}
            </p>
          </div>
          <div className="text-xs text-latte">{custom}</div>
          <div className="flex gap-2 lg:gap-8">
            <div className="text-orange md:text-lg font-bold w-8 lg:w-12">
              ${price}
            </div>
            <div className="max-w-56">
              <PlusAndMinus value={qty} />
            </div>
          </div>
        </div>
        <div
          className="flex flex-col gap-2"
          onClick={() => setCustomShow(!customShow)}
        >
          <button
            disabled={type === "dessert"}
            className="rounded-md px-2 lg:px-4 py-0.5 border border-latte text-latte hover:bg-latte hover:text-white hover:drop-shadow-md disabled:text-gray-green-40 disabled:border-gray-green-40"
          >
            Edit
          </button>
          <button className="rounded-md px-2 lg:px-4 py-0.5 border border-orange text-orange hover:bg-orange hover:text-white hover:drop-shadow-md">
            Delete
          </button>
        </div>
      </div>
      {customShow && (
        <div className="bg-white rounded-b-md p-4">
          {type === "drinks" && <CartDrinkCustom />}
          {type === "meals" && <CartMealCustom />}
          <div className="w-full grid grid-cols-2 gap-4 mt-4">
            <button className="rounded-md px-2 lg:px-4 py-0.5 border border-latte text-latte hover:bg-latte hover:text-white hover:drop-shadow-md">
              Confirm
            </button>
            <button
              className="rounded-md px-2 lg:px-4 py-0.5 border border-orange text-orange hover:bg-orange hover:text-white hover:drop-shadow-md"
              onClick={() => setCustomShow(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartItemDetail;
