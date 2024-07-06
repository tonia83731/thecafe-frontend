import ProfileLayout from "@/components/common/ProfileLayout";
import OrdersLayout from "@/components/profile/OrdersLayout";
import OrdersItem from "@/components/profile/OrdersItem";
import { ongoingOrders, completedOrders } from "@/data/dummy/orders";
const Orders = () => {
  return (
    <ProfileLayout>
      <div className="flex flex-col gap-6">
        <OrdersLayout title="Ongoing Orders">
          {ongoingOrders.map((item) => {
            return <OrdersItem {...item} key={item.id} isComplete={false} />;
          })}
        </OrdersLayout>
        <OrdersLayout title="Past Orders">
          {completedOrders.map((item) => {
            return <OrdersItem {...item} key={item.id} isComplete={true} />;
          })}
        </OrdersLayout>
      </div>
    </ProfileLayout>
  );
};

export default Orders;
