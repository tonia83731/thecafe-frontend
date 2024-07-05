import Image from "next/image";
import { ProductCardProps } from "@/types/type";
import { FaHeart } from "react-icons/fa";

const ProductCard = (props: ProductCardProps) => {
  const {
    id,
    image,
    name,
    description,
    price,
    type,
    onProductSelect,
    onTypeSelect,
  } = props;
  return (
    <div className="bg-white drop-shadow-md rounded-md p-4">
      <div className="grid grid-cols-3 gap-2">
        <div className="relative">
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
        </div>
        <div className="col-span-2 w-full flex flex-col justify-between">
          <div className="flex justify-between items-center">
            <h4 className="font-bold text-olive text-lg truncate">{name}</h4>
            <p className="font-bold text-orange text-lg">${price}</p>
          </div>
          <p className="text-xs text-latte h-8 description-lime-clamp-3">
            {description}
          </p>
          <button
            className="md:hidden text-xs bg-orange text-white hover:drop-shadow-sm hover:font-bold px-2 py-1 rounded-md"
            onClick={onProductSelect}
          >
            Select Item
          </button>
          <button
            className="hidden md:block text-xs bg-orange text-white hover:drop-shadow-sm hover:font-bold px-2 py-1 rounded-md"
            onClick={() => onTypeSelect(type)}
          >
            Select Item
          </button>
        </div>
      </div>
    </div>
  );
};
export default ProductCard;
