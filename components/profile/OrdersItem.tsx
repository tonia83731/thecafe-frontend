import { IoIosArrowDown } from "react-icons/io";
import { GoDotFill } from "react-icons/go";
import { OrderWithDetail } from "@/types/type";
import { useState } from "react";
type OrdersItemProps = OrderWithDetail & { isComplete: boolean };
const OrdersItem = (props: OrdersItemProps) => {
  const {
    id,
    date,
    items,
    price,
    shipping,
    payment,
    status,
    orders,
    isComplete,
  } = props;
  const [isOpened, setIsOpened] = useState(false);
  return (
    <div>
      <div
        className={`${
          isOpened ? "bg-yellow rounded-t-md" : "bg-white rounded-md"
        } grid grid-cols-4 md:grid-cols-10 gap-1 h-10 text-center text-xs items-center text-olive-80`}
      >
        <div className="hidden md:block">#{id}</div>
        <div className="">{date}</div>
        <div className="hidden md:block">{items}</div>
        <div className="">$ {price}</div>
        <div className="hidden md:block md:col-span-2">{shipping}</div>
        <div className="hidden md:block md:col-span-2">{payment}</div>
        <div
          className={`${
            status === "Completed"
              ? "text-gray-green-40"
              : status === "Pending"
              ? "text-red"
              : "text-macha"
          } flex gap-1 items-center justify-center`}
        >
          <div className={status !== "Completed" ? "animate-pulse" : ""}>
            <GoDotFill />
          </div>
          <div>{status}</div>
        </div>
        <button
          className="w-full flex justify-center items-center"
          onClick={() => setIsOpened(!isOpened)}
        >
          <div className={`transition ${isOpened && "rotate-180"} w-fit`}>
            <IoIosArrowDown />
          </div>
        </button>
      </div>
      {isOpened && (
        <div className="bg-white py-2 px-6">
          {orders.map(({ name, custom, price, qty }, index) => {
            return (
              <div
                className={`flex justify-between items-center py-2 ${
                  index > 0 ? "border-t border-dotted border-orange" : ""
                }`}
                key={`order-${index}`}
              >
                <div className="">
                  <h5 className="font-bold text-base">{name}</h5>
                  <p className="text-latte text-xs">{custom}</p>
                </div>
                <div
                  className={
                    isComplete ? "flex gap-2 justify-center items-center" : ""
                  }
                >
                  <div className="text-orange text-base">
                    X {qty}, ${price}
                  </div>
                  {isComplete && (
                    <button className="px-2 rounded-md border border-orange text-orange hover:bg-orange-60 hover:text-white">
                      Order Again
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default OrdersItem;
