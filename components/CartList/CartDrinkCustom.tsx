import { drinksCustomList } from "@/data/others/customlist";
import { useCustomStore } from "@/state/useCustomStore";
import { CustomDrinksKeys } from "@/types/type";
const CartDrinkCustom = () => {
  const { drinkCustom, handleDrinksCustom } = useCustomStore();
  return (
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
  );
};
export default CartDrinkCustom;
