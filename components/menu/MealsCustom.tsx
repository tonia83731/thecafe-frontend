import { useState } from "react";
import ModalLayout from "./ModalLayout";
import { mealsCustomList } from "@/data/others/customlist";
import { CustomMeals, CustomMealsKeys } from "@/types/type";
import { FiPlus } from "react-icons/fi";
import { FiMinus } from "react-icons/fi";

const MealsCustom = ({ onToggleClick }: { onToggleClick: () => void }) => {
  const [custom, setCustom] = useState<CustomMeals>({
    based: ["mayo", "ketchup", "lettuce", "tomato", "cucumbur"],
    addon: [],
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
  //   console.log(custom);
  return (
    <ModalLayout onToggleClick={onToggleClick}>
      <div className="flex flex-col gap-2">
        {mealsCustomList.map(({ uid, title, options }) => {
          return (
            <div className="" key={uid}>
              <h5 className="font-bold text-olive text-lg mb-2">{title}</h5>
              <div className="flex flex-col gap-2">
                {options.map(({ id, name, price }) => {
                  const isChecked = custom[uid as CustomMealsKeys].includes(id);
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

export default MealsCustom;
