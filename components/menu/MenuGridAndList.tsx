import { useMenuTypeStore } from "@/state/useMenuTypeStore";
import { useModalStore } from "@/state/useModalToggleStore";
import ProductCard from "./ProductCard";
import ProductList from "./ProductList";
import { menuItems } from "@/data/dummy/productlist";
const MenuGridAndList = () => {
  const { menuType } = useMenuTypeStore();
  const { handleProductType, handleToggle } = useModalStore();
  return (
    <>
      {menuType === "list" ? (
        <div className="flex flex-col gap-4">
          {menuItems.map((item) => {
            return (
              <ProductList
                {...item}
                key={item.id}
                onProductSelect={() => {
                  handleProductType(item.type);
                  handleToggle();
                }}
              />
            );
          })}
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2">
          {menuItems.map((item) => {
            return (
              <ProductCard
                {...item}
                key={item.id}
                onProductSelect={() => {
                  handleProductType(item.type);
                  handleToggle();
                }}
              />
            );
          })}
        </div>
      )}
    </>
  );
};

export default MenuGridAndList;
