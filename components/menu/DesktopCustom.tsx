import CustomDesktopLayout from "./CustomDesktopLayout";
import SideCustom from "./SideCustom";
import { useSidebarStore } from "@/state/useSidebarStore";

const DesktopCustom = () => {
  const { sidebarOption } = useSidebarStore();
  return (
    <CustomDesktopLayout>
      {sidebarOption === "custom" && <SideCustom />}
    </CustomDesktopLayout>
  );
};
export default DesktopCustom;
