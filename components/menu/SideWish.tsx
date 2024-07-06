import WishItem from "./WishItem";
import { wishItems } from "@/data/dummy/wishlist";

const SideWish = () => {
  return (
    <div className="flex flex-col gap-4">
      {wishItems.map((item, index) => {
        return (
          <>
            <WishItem {...item} index={index} key={item.id} />
          </>
        );
      })}
    </div>
  );
};

export default SideWish;
