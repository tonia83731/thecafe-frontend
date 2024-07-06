import { cartlist } from "@/data/dummy/cartlist";
import CartItem from "./CartItem";
import Link from "next/link";
const SideCart = () => {
  return (
    <div className="flex flex-col gap-2 h-full">
      {cartlist.map((item, index) => {
        return (
          <div key={item.id} className="">
            <CartItem {...item} index={index} />
          </div>
        );
      })}
      <Link
        href="/cartlist"
        className="bg-orange-60 hover:bg-orange hover:drop-shadow-md text-white rounded-md px-4 py-1 text-center"
      >
        Go to Cart
      </Link>
    </div>
  );
};

export default SideCart;
