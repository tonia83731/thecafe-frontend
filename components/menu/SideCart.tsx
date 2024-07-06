import { cartlist } from "@/data/dummy/cartlist";
import CartItem from "./CartItem";
const SideCart = () => {
  return (
    <div className="flex flex-col gap-2">
      {cartlist.map((item, index) => {
        return (
          <div key={item.id} className="">
            <CartItem {...item} index={index} />
          </div>
        );
      })}
    </div>
  );
};

export default SideCart;
