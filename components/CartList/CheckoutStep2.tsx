const CheckoutStep2 = () => {
  return (
    <div className="h-full flex flex-col gap-4">
      <div className="flex flex-col gap-1">
        <h5 className="font-bold">Name</h5>
        <input
          type="text"
          className="h-10 w-full px-4 bg-orange-60 text-olive rounded-md placeholder:text-xs placeholder:text-latte"
          name="name"
          placeholder="Cafe Lover"
        />
      </div>
      <div className="flex flex-col gap-1">
        <h5 className="font-bold">Phone</h5>
        <input
          type="text"
          className="h-10 w-full px-4 bg-orange-60 text-olive rounded-md placeholder:text-xs placeholder:text-latte"
          name="phone"
          placeholder="0912345678"
        />
      </div>
      <div className="flex flex-col gap-1">
        <h5 className="font-bold">Email</h5>
        <input
          type="email"
          className="h-10 w-full px-4 bg-orange-60 text-olive rounded-md placeholder:text-xs placeholder:text-latte"
          name="email"
          placeholder="cafe.L@example.com"
        />
      </div>
      <div className="flex flex-col gap-1">
        <h5 className="font-bold">Address</h5>
        <input
          type="text"
          className="h-10 w-full px-4 bg-orange-60 text-olive rounded-md placeholder:text-xs placeholder:text-latte"
          name="address"
          placeholder="CafeLover Rd. No.105"
        />
      </div>
    </div>
  );
};
export default CheckoutStep2;
