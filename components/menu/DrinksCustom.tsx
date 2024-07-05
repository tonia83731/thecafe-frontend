import { useState } from "react";
import ModalLayout from "./ModalLayout";
import { drinksCustomList } from "@/data/others/customlist";
import { CustomDrinks, CustomDrinksKeys } from "@/types/type";
import { FiPlus } from "react-icons/fi";
import { FiMinus } from "react-icons/fi";

const DrinksCustom = ({ onToggleClick }: { onToggleClick: () => void }) => {
  const [custom, setCustom] = useState<CustomDrinks>({
    size: "tall",
    sugar: "50%sugar",
    ice: "50%ice",
    toppings: [],
  });
  const handleDrinkCustoms = (
    e: React.ChangeEvent<HTMLInputElement>,
    uid: string
  ) => {
    const name = e.target.name;
    if (uid !== "toppings") {
      setCustom((prev) => ({
        ...prev,
        [uid]: name,
      }));
    } else {
      const checked = e.target.checked;
      setCustom((prev) => {
        const toppings = checked
          ? [...prev.toppings, name]
          : prev.toppings.filter((topping) => topping !== name);
        return { ...prev, toppings };
      });
    }
  };
  // console.log(custom);
  return (
    <ModalLayout onToggleClick={onToggleClick}>
      <div className="flex flex-col gap-2">
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
                      ? custom[uid as CustomDrinksKeys] === id
                      : custom.toppings.includes(id);
                  return (
                    <div className={index < 3 ? "flex" : "flex gap-2"} key={id}>
                      <input
                        type={index < 3 ? "radio" : "checkbox"}
                        id={id}
                        name={id}
                        // value={id}

                        checked={isChecked}
                        className={
                          index < 3 ? "hidden" : "accent-orange cursor-pointer"
                        }
                        onChange={(e) => handleDrinkCustoms(e, uid)}
                      />
                      <label
                        htmlFor={id}
                        className={`${
                          index === 3 ? "hidden" : "w-full"
                        } text-sm text-center rounded-full py-1 border-2 px-2 border-olive cursor-pointer ${
                          custom[uid as CustomDrinksKeys] === id
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
        <div className="bg-yellow flex w-full justify-evenly py-1">
          <button className="text-lg text-olive">
            <FiMinus />
          </button>
          <input
            type="number"
            className="text-center bg-transparent"
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
    </ModalLayout>
  );
};

export default DrinksCustom;
