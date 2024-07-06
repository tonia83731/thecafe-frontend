import { mealsCustomList } from "@/data/others/customlist";
import { drinksCustomList } from "@/data/others/customlist";
import { CustomMealsKeys, CustomDrinksKeys } from "@/types/type";
import { useModalStore } from "@/state/useModalToggleStore";
import { useCustomStore } from "@/state/useCustomStore";
import { FiPlus } from "react-icons/fi";
import { FiMinus } from "react-icons/fi";

const SideCustom = () => {
  const { isProductType } = useModalStore();
  const { mealCustom, drinkCustom, handleMealsCustom, handleDrinksCustom } =
    useCustomStore();
  // console.log(isProductType);
  return (
    <>
      {!isProductType && (
        <div className="text-sm text-latte w-full text-center">
          Nothing select.
        </div>
      )}
      {isProductType === "dessert" && (
        <div className="text-latte w-full text-sm text-center">
          No custom options
          <br /> Enjoy your desserts!
        </div>
      )}
      {isProductType === "meals" && (
        <div>
          {mealsCustomList.map(({ uid, title, options }) => {
            return (
              <div className="" key={uid}>
                <h5 className="font-bold text-olive text-lg mb-2">{title}</h5>
                <div className="flex flex-col gap-2">
                  {options.map(({ id, name, price }) => {
                    const isChecked =
                      mealCustom[uid as CustomMealsKeys].includes(id);
                    return (
                      <div className="flex gap-2" key={id}>
                        <input
                          type="checkbox"
                          id={id}
                          name={id}
                          checked={isChecked}
                          className="accent-orange cursor-pointer"
                          onChange={(e) => handleMealsCustom(e, uid)}
                        />
                        <label
                          htmlFor={id}
                          className="w-full flex justify-between cursor-pointer"
                        >
                          <div className="">{name}</div>
                          <div className="">+{price}</div>
                        </label>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      )}
      {isProductType === "drinks" && (
        <div>
          {drinksCustomList.map(({ uid, title, options }, index) => {
            return (
              <div className="" key={uid}>
                <h5 className="font-bold text-olive text-lg mb-2">{title}</h5>
                <div
                  className={
                    index < 3 ? "flex flex-wrap gap-2" : "flex flex-col gap-2"
                  }
                >
                  {options.map(({ id, name, price }) => {
                    const isChecked =
                      uid !== "toppings"
                        ? drinkCustom[uid as CustomDrinksKeys] === id
                        : drinkCustom.toppings.includes(id);
                    return (
                      <div
                        className={index < 3 ? "flex" : "flex gap-2"}
                        key={id}
                      >
                        <input
                          type={index < 3 ? "radio" : "checkbox"}
                          id={id}
                          name={id}
                          // value={id}

                          checked={isChecked}
                          className={
                            index < 3
                              ? "hidden"
                              : "accent-orange cursor-pointer"
                          }
                          onChange={(e) => handleDrinksCustom(e, uid)}
                        />
                        <label
                          htmlFor={id}
                          className={`${
                            index === 3 ? "hidden" : "w-full"
                          } text-sm text-center rounded-full py-1 border-2 px-2 border-olive cursor-pointer ${
                            drinkCustom[uid as CustomDrinksKeys] === id
                              ? "bg-olive text-light"
                              : "text-olive"
                          }`}
                        >
                          {name}
                          {price > 0 && (
                            <span className={index === 3 ? "hidden" : ""}>
                              (+{price})
                            </span>
                          )}
                        </label>
                        <label
                          htmlFor={id}
                          className={`${
                            index < 3 && "hidden"
                          } w-full flex justify-between cursor-pointer`}
                        >
                          <div className="">{name}</div>
                          <div className="">+{price}</div>
                        </label>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      )}
      {isProductType && (
        <div className="flex flex-col gap-2 h-20">
          <div className="bg-yellow flex w-full mx-auto py-1 justify-around">
            <button className="text-lg text-olive">
              <FiMinus />
            </button>
            <input
              type="number"
              className="text-center bg-transparent w-24 lg:w-full"
              defaultValue={1}
            />
            <button className="text-lg text-olive ">
              <FiPlus />
            </button>
          </div>
          <button className="bg-orange text-white text-sm w-full py-1 rounded-md">
            Add to Cart
          </button>
        </div>
      )}
    </>
  );
};

export default SideCustom;
