import { FaHeart } from "react-icons/fa";
import Image from "next/image";
import { ProductsProps } from "@/types/type";
type WishItemProps = ProductsProps & {
  index: number;
};
const WishItem = (props: WishItemProps) => {
  const { image, name, description, price, type, index } = props;
  return (
    <div className={`py-4 ${index > 0 && "border-t border-orange"}`}>
      <div className="w-full grid grid-cols-3 gap-2">
        <div className="relative flex flex-col gap-2 items-center">
          <Image
            src={image}
            alt={name}
            width={100}
            height={100}
            className="rounded w-full aspect-ratio object-cover object-center"
          ></Image>
          <button className="text-light text-lg hover:text-red absolute top-2 left-2">
            <FaHeart />
          </button>
          <p className="bg-orange text-white text-xs w-full rounded-sm text-center lg:hidden">
            {type}
          </p>
        </div>
        <div className="col-span-2 w-full flex flex-col justify-between">
          <div className="flex justify-between items-start">
            <div className="flex flex-col gap-1">
              <h4 className="font-bold text-olive text-lg break-words">
                {name}
              </h4>
              <p className="bg-orange text-white text-xs w-full rounded-sm text-center hidden lg:block">
                {type}
              </p>
            </div>
            <p className="font-bold text-orange text-lg">${price}</p>
          </div>
          <p className="text-xs text-latte h-8 description-lime-clamp-3">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};
export default WishItem;
