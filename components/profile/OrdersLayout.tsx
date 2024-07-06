import { ReactNode } from "react";
import { ordertablehead } from "@/data/others/ordertablehead";
type OrdersLayoutProps = {
  title: string;
  children?: ReactNode;
};
const OrdersLayout = (props: OrdersLayoutProps) => {
  const { title, children } = props;
  return (
    <div className="text-olive flex flex-col gap-4">
      <div className="w-full">
        <h5 className=" font-italiana text-xl mb-2">{title}</h5>
        <div className="w-full h-[2px] border-t border-dotted border-olive"></div>
      </div>
      {/* head line */}
      <div className="flex flex-col gap-4">
        <div className="bg-gray-green-20 font-bold grid grid-cols-4 md:grid-cols-10 gap-1 rounded-md py-4 text-center">
          {ordertablehead.map(({ id, title }, index) => {
            return (
              <>
                <div
                  className={`${
                    index === 0 || index === 2 || index === 4 || index === 5
                      ? "hidden md:block"
                      : ""
                  } ${index === 4 || index === 5 ? "md:col-span-2" : ""}`}
                  key={id}
                >
                  {title}
                </div>
              </>
            );
          })}
        </div>
        <div className="flex flex-col gap-2">{children}</div>
      </div>
    </div>
  );
};
export default OrdersLayout;
