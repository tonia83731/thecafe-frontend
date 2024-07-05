import PageLayout from "@/components/common/PageLayout";
import { RiSearch2Line } from "react-icons/ri";
import { BsFillGridFill } from "react-icons/bs";
import { FaListUl } from "react-icons/fa";
import { useState } from "react";
import ProductCard from "@/components/menu/ProductCard";
import { menuItems } from "@/data/dummy/productlist";
import { typeOptions } from "@/data/others/producttype";
import { filterOptions } from "@/types/type";
import DrinksCustom from "@/components/menu/DrinksCustom";
import MealsCustom from "@/components/menu/MealsCustom";
import DessertsCustom from "@/components/menu/DessertCustom";

const Menu = () => {
  const [isChecked, setIsChecked] = useState<filterOptions>({
    all: true,
    drinks: true,
    desserts: true,
    meals: true,
  });
  const [isTypeSelected, setIsTypeSelected] = useState<string>("grid");
  const [drinkToggle, setDrinkToggle] = useState(false);
  const [mealToggle, setMealToggle] = useState(false);
  const [dessertToggle, setDessertToggle] = useState(false);
  const handleFilterOptions = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name as keyof filterOptions;
    const checked = e.target.checked;
    if (name === "all" && checked) initializedOptions();
    else if (name === "all" && !checked) {
      setIsChecked({
        all: false,
        drinks: false,
        desserts: false,
        meals: false,
      });
    } else {
      setIsChecked((prev) => ({
        ...prev,
        all: false,
        [name]: checked,
      }));
    }
  };

  const initializedOptions = () => {
    setIsChecked({
      all: true,
      drinks: false,
      desserts: false,
      meals: false,
    });
  };
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
                    isTypeSelected === "grid"
                      ? "bg-olive text-light"
                      : "text-olive"
                  }`}
                  onClick={() => setIsTypeSelected("grid")}
                >
                  <BsFillGridFill />
                </button>
                <button
                  className={`text-lg p-2 rounded-md border-2 border-olive ${
                    isTypeSelected === "list"
                      ? "bg-olive text-light"
                      : "text-olive"
                  }`}
                  onClick={() => setIsTypeSelected("list")}
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
                        checked={isChecked[id as keyof filterOptions]}
                        onChange={handleFilterOptions}
                      />
                      <label
                        htmlFor={id}
                        className={`text-sm md:text-xs lg:text-sm text-center w-full rounded-full py-1 border-2 border-olive ${
                          isChecked[id as keyof filterOptions]
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
              {/* menu */}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2">
                {menuItems.map((item) => {
                  return (
                    <ProductCard
                      {...item}
                      key={item.id}
                      onProductSelect={() => {
                        if (item.type === "drinks") setDrinkToggle(true);
                        if (item.type === "meals") setMealToggle(true);
                        if (item.type === "dessert") setDessertToggle(true);
                      }}
                    />
                  );
                })}
              </div>
              {/* pagination */}
              <div className=""></div>
            </div>
          </div>
        </div>
      </main>
      {drinkToggle && (
        <DrinksCustom onToggleClick={() => setDrinkToggle(false)} />
      )}
      {mealToggle && <MealsCustom onToggleClick={() => setMealToggle(false)} />}
      {dessertToggle && (
        <DessertsCustom onToggleClick={() => setDessertToggle(false)} />
      )}
    </>
  );
};

export default Menu;
