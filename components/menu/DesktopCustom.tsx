import CustomDesktopLayout from "./CustomDesktopLayout";
import SideCustom from "./SideCustom";
import SideWish from "./SideWish";
import SideCart from "./SideCart";
import { useSidebarStore } from "@/state/useSidebarStore";

const DesktopCustom = () => {
  const { sidebarOption } = useSidebarStore();
  console.log(sidebarOption);
  return (
    <CustomDesktopLayout>
      {sidebarOption === "custom" && <SideCustom />}
      {sidebarOption === "wish" && <SideWish />}
      {sidebarOption === "cart" && <SideCart />}
    </CustomDesktopLayout>
  );
};
export default DesktopCustom;
