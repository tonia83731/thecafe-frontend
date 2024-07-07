const CheckoutStep3 = () => {
  return (
    <div className="h-full flex flex-col gap-4">
      <div className="flex flex-col gap-1">
        <h5 className="font-bold">Card Owner</h5>
        <input
          type="text"
          className="h-10 w-full px-4 bg-orange-60 text-olive rounded-md placeholder:text-xs placeholder:text-latte"
          name="card-owner"
          placeholder="Cafe Lover"
        />
      </div>
      <div className="flex flex-col gap-1">
        <h5 className="font-bold">Card Number</h5>
        <input
          type="number"
          className="h-10 w-full px-4 bg-orange-60 text-olive rounded-md placeholder:text-xs placeholder:text-latte"
          name="card-number"
          placeholder="0000 1111 2222 3333"
        />
      </div>
      <div className="grid grid-cols-3 gap-4">
        <div className="flex flex-col gap-1 col-span-2">
          <h5 className="font-bold">Date</h5>
          <input
            type="text"
            className="h-10 w-full px-4 bg-orange-60 text-olive rounded-md placeholder:text-xs placeholder:text-latte"
            name="card-date"
            placeholder="05/28"
          />
        </div>
        <div className="flex flex-col gap-1">
          <h5 className="font-bold">CVC</h5>
          <input
            type="number"
            className="h-10 w-full px-4 bg-orange-60 text-olive rounded-md placeholder:text-xs placeholder:text-latte"
            name="cvc"
            placeholder="123"
          />
        </div>
      </div>
    </div>
  );
};
export default CheckoutStep3;
