import { ProductCardProps } from "@/types/type";
import { FaHeart } from "react-icons/fa";
const ProductList = (props: ProductCardProps) => {
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
      <div className="grid grid-cols-4 gap-4 items-start">
        <div className="flex justify-between items-start col-span-3">
          <div className="flex gap-2">
            <button className="text-red-40 text-lg hover:text-red">
              <FaHeart />
            </button>
            <div className="">
              <h4 className="font-bold text-olive text-lg truncate">{name}</h4>
              <div className="text-xs text-latte h-8 description-lime-clamp-3">
                {description}
              </div>
            </div>
          </div>
          <p className="font-bold text-orange text-lg">${price}</p>
        </div>
        <button
          className="md:hidden max-h-10 text-xs bg-orange text-white hover:drop-shadow-sm hover:font-bold px-2 py-1 rounded-md"
          onClick={onProductSelect}
        >
          Select Item
        </button>
        <button
          className="hidden md:block max-h-10 text-xs bg-orange text-white hover:drop-shadow-sm hover:font-bold px-2 py-1 rounded-md"
          onClick={() => onTypeSelect(type)}
        >
          Select Item
        </button>
      </div>
    </div>
  );
};
export default ProductList;
