import Image from "next/image";
import { ProductsProps } from "@/types/type";
const ProductCard = (props: ProductsProps) => {
  const { id, image, name, description, price, type } = props;
  return (
    <div className="bg-white drop-shadow-md rounded-md p-4">
      <div className="grid grid-cols-3 gap-2">
        <Image
          src={image}
          alt={name}
          width={100}
          height={100}
          className="rounded w-full aspect-ratio object-cover object-center"
        ></Image>
        <div className="col-span-2 w-full flex flex-col justify-between">
          <h4 className="font-bold text-olive text-lg truncate">{name}</h4>
          <p className="text-xs text-latte h-8 description-lime-clamp-3">
            {description}
          </p>
          <button className="text-xs bg-orange text-white hover:drop-shadow-sm hover:font-bold px-2 py-1 rounded-md">
            Select Item
          </button>
        </div>
      </div>
    </div>
  );
};
export default ProductCard;
