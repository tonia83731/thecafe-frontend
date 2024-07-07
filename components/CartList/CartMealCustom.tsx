import { mealsCustomList } from "@/data/others/customlist";
import { useCustomStore } from "@/state/useCustomStore";
import { CustomMealsKeys } from "@/types/type";
const CartMealCustom = () => {
  const { mealCustom, handleMealsCustom } = useCustomStore();
  return (
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
  );
};

export default CartMealCustom;
