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
      <button className="bg-gray-green-40 hover:bg-gray-green hover:drop-shadow-md text-white rounded-md px-4 py-1">
        Clear All
      </button>
    </div>
  );
};

export default SideWish;
