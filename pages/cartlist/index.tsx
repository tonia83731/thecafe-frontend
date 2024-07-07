import CheckoutForm from "@/components/cartList/CheckoutForm";
import CheckoutFormMobile from "@/components/cartList/CheckoutFormMobile";
import CartItemDetail from "@/components/cartList/CartItemDetail";
import { cartlist } from "@/data/dummy/cartlist";
const CartList = () => {
  return (
    <>
      <main className="w-full h-full px-4 py-12 md:w-4/5 md:mx-auto md:my-8 md:px-0 max-w-[1280px]">
        <div className="md:grid md:grid-cols-3 relative">
          <div className="flex flex-col gap-8 col-span-2">
            {/* title */}
            <h1 className="text-olive font-italiana text-2xl md:text-3xl">
              Cart
            </h1>

            {/* cartlist */}
            <div className="flex flex-col gap-4">
              {cartlist.map((item) => {
                return <CartItemDetail {...item} key={item.id} />;
              })}
            </div>
            {/* checkout steps */}
            <div className="bg-yellow md:hidden rounded-md p-4 flex flex-col justify-between h-[600px]">
              <CheckoutFormMobile />
            </div>
          </div>
        </div>
      </main>
      <CheckoutForm />
    </>
  );
};

export default CartList;
