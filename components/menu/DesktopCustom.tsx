import CustomDesktopLayout from "./CustomDesktopLayout";
import { mealsCustomList } from "@/data/others/customlist";
import { drinksCustomList } from "@/data/others/customlist";
import {
  CustomMeals,
  CustomMealsKeys,
  CustomDrinks,
  CustomDrinksKeys,
} from "@/types/type";
import { useState } from "react";
import { DiVim } from "react-icons/di";
type DesktopCustomProps = {
  type: string;
};
const DesktopCustom = (props: DesktopCustomProps) => {
  const { type } = props;
  const [custom, setCustom] = useState<CustomMeals>({
    based: ["mayo", "ketchup", "lettuce", "tomato", "cucumbur"],
    addon: [],
  });
  const [customDrinks, setCustomDrinks] = useState<CustomDrinks>({
    size: "tall",
    sugar: "50%sugar",
    ice: "50%ice",
    toppings: [],
  });
  const handleMealsCustoms = (
    e: React.ChangeEvent<HTMLInputElement>,
    uid: string
  ) => {
    const name = e.target.name;
    const checked = e.target.checked;
    setCustom((prev) => {
      const data = checked
        ? [...prev[uid as CustomMealsKeys], name]
        : prev[uid as CustomMealsKeys].filter((item) => item !== name);
      return { ...prev, [uid]: data };
    });
  };

  const handleDrinkCustoms = (
    e: React.ChangeEvent<HTMLInputElement>,
    uid: string
  ) => {
    const name = e.target.name;
    if (uid !== "toppings") {
      setCustomDrinks((prev) => ({
        ...prev,
        [uid]: name,
      }));
    } else {
      const checked = e.target.checked;
      setCustomDrinks((prev) => {
        const toppings = checked
          ? [...prev.toppings, name]
          : prev.toppings.filter((topping) => topping !== name);
        return { ...prev, toppings };
      });
    }
  };
  return (
    <CustomDesktopLayout>
      {type === "" && (
        <div className="text-sm text-latte w-full text-center">
          Nothing select.
        </div>
      )}
      {type === "dessert" && (
        <div className="text-latte w-full text-sm text-center">
          No custom options
          <br /> Enjoy your desserts!
        </div>
      )}
      {type === "meals" && (
        <div>
          {mealsCustomList.map(({ uid, title, options }) => {
            return (
              <div className="" key={uid}>
                <h5 className="font-bold text-olive text-lg mb-2">{title}</h5>
                <div className="flex flex-col gap-2">
                  {options.map(({ id, name, price }) => {
                    const isChecked =
                      custom[uid as CustomMealsKeys].includes(id);
                    return (
                      <div className="flex gap-2" key={id}>
                        <input
                          type="checkbox"
                          id={id}
                          name={id}
                          checked={isChecked}
                          className="accent-orange cursor-pointer"
                          onChange={(e) => handleMealsCustoms(e, uid)}
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
      {type === "drinks" && (
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
                        ? customDrinks[uid as CustomDrinksKeys] === id
                        : customDrinks.toppings.includes(id);
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
                          onChange={(e) => handleDrinkCustoms(e, uid)}
                        />
                        <label
                          htmlFor={id}
                          className={`${
                            index === 3 ? "hidden" : "w-full"
                          } text-sm text-center rounded-full py-1 border-2 px-2 border-olive cursor-pointer ${
                            customDrinks[uid as CustomDrinksKeys] === id
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
    </CustomDesktopLayout>
  );
};
export default DesktopCustom;
