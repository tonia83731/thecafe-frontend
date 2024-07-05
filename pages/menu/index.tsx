import { RiSearch2Line } from "react-icons/ri";
import { BsFillGridFill } from "react-icons/bs";
import { FaListUl } from "react-icons/fa";
import ProductCard from "@/components/menu/ProductCard";
import ProductList from "@/components/menu/ProductList";
import { menuItems } from "@/data/dummy/productlist";
import { typeOptions } from "@/data/others/producttype";
import { filterOptions } from "@/types/type";
import MobileCustom from "@/components/menu/MobileCustom";
import DesktopCustom from "@/components/menu/DesktopCustom";
import { useFilterStore } from "@/state/useFilterStore";
import { useMenuTypeStore } from "@/state/useMenuTypeStore";
import { useModalStore } from "@/state/useModalToggleStore";
const Menu = () => {
  const { isCheckedOptions, handleIsCheckedOptions } = useFilterStore();
  const { menuType, handleTypeSwitch } = useMenuTypeStore();
  const { isModalToggle, handleProductType, handleToggle } = useModalStore();

  return (
    <>
      <main className="w-full h-full px-4 py-12 md:w-4/5 md:mx-auto md:my-8 md:px-0 max-w-[1280px]">
        <div className="md:grid md:grid-cols-3 relative">
          <div className="flex flex-col gap-8 col-span-2">
            {/* title */}
            <div className="flex justify-between items-center">
              <h1 className="text-olive font-italiana text-2xl text-center md:text-3xl">
                Menu
              </h1>
              <div className="flex gap-2 items-center">
                <button
                  className={`text-lg p-2 rounded-md border-2 border-olive ${
                    menuType === "grid" ? "bg-olive text-light" : "text-olive"
                  }`}
                  onClick={() => handleTypeSwitch("grid")}
                >
                  <BsFillGridFill />
                </button>
                <button
                  className={`text-lg p-2 rounded-md border-2 border-olive ${
                    menuType === "list" ? "bg-olive text-light" : "text-olive"
                  }`}
                  onClick={() => handleTypeSwitch("list")}
                >
                  <FaListUl />
                </button>
              </div>
            </div>
            {/* search & filter */}
            <div className="flex flex-col gap-2 lg:flex-row lg:justify-between lg:gap-6 items-center">
              <div className="w-full grid grid-cols-4 gap-2">
                {typeOptions.map(({ id, label }) => {
                  return (
                    <div
                      className="w-full flex justify-center items-center"
                      key={id}
                    >
                      <input
                        type="checkbox"
                        id={id}
                        className="hidden"
                        name={id}
                        checked={isCheckedOptions[id as keyof filterOptions]}
                        onChange={handleIsCheckedOptions}
                      />
                      <label
                        htmlFor={id}
                        className={`text-sm md:text-xs lg:text-sm text-center w-full rounded-full py-1 border-2 border-olive ${
                          isCheckedOptions[id as keyof filterOptions]
                            ? "bg-olive text-light"
                            : "text-olive"
                        }`}
                      >
                        {label}
                      </label>
                    </div>
                  );
                })}
              </div>
              <div className="relative w-full lg:w-1/2">
                <input
                  type="text"
                  className="w-full bg-transparent rounded-full border-2 border-olive py-1 px-4 placeholder:text-latte placeholder:text-xs text-olive"
                  placeholder="Search items here..."
                />
                <button className="text-lg text-latte hover:text-olive absolute top-1/2 right-4 -translate-y-1/2">
                  <RiSearch2Line />
                </button>
              </div>
            </div>
            {/* menu & pagination */}
            <div className="">
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

              {/* pagination */}
              <div className=""></div>
            </div>
          </div>
        </div>
      </main>
      {isModalToggle && <MobileCustom />}
      <DesktopCustom />
    </>
  );
};

export default Menu;
