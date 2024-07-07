import Select from "react-select";
import { selectstyles } from "@/styles/react-select-styles";
const shippingOptions = [
  { value: "standard", label: "Standard(free shipping)" },
  { value: "priority", label: "Priority(+$10)" },
];
const paymentOptions = [
  { value: "cash", label: "Cash on Delivery" },
  { value: "card", label: "Debit or Credit Card" },
];
const CheckoutStep1 = () => {
  return (
    <div className="h-full flex flex-col gap-12">
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-1">
          <h5 className="font-bold">Shipping</h5>
          <Select
            options={shippingOptions}
            defaultValue={shippingOptions[0]}
            isClearable={false}
            isSearchable={false}
            styles={selectstyles}
          />
        </div>
        <div className="flex flex-col gap-1">
          <h5 className="font-bold">Payment</h5>
          <Select
            options={paymentOptions}
            defaultValue={paymentOptions[1]}
            isClearable={false}
            isSearchable={false}
            styles={selectstyles}
          />
        </div>
        <div className="flex gap-2 h-10 w-full mt-2">
          <input
            type="text"
            placeholder="Enter code here"
            className="h-full w-full px-4 bg-orange-60 text-olive rounded-md placeholder:text-xs placeholder:text-latte"
          />
          <button className="h-full border border-orange hover:bg-orange hover:text-white text-orange rounded-md px-2 ">
            Add
          </button>
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <h5 className="font-bold">Price Calculate</h5>
        <ul className="flex flex-col gap-1.5">
          <li className="flex justify-between items-center">
            <div>Item Price</div>
            <div>$ 1500</div>
          </li>
          <li className="flex justify-between items-center">
            <div>Shipping Price</div>
            <div>$ 0</div>
          </li>
          <li className="flex justify-between items-center">
            <div>Tax (10%)</div>
            <div>$ 150</div>
          </li>
          <li className="w-full h-[2px] bg-olive"></li>
          <li className="flex justify-between items-center">
            <div>Total Price</div>
            <div>$ 1650</div>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default CheckoutStep1;
