import ModalLayout from "./ModalLayout";
import DessertsCustom from "./DessertCustom";
import MealsCustom from "./MealsCustom";
import DrinksCustom from "./DrinksCustom";
import { useModalStore } from "@/state/useModalToggleStore";

const MobileCustom = () => {
  const { isProductType } = useModalStore();
  return (
    <ModalLayout>
      {isProductType === "dessert" && <DessertsCustom />}
      {isProductType === "meals" && <MealsCustom />}
      {isProductType === "drinks" && <DrinksCustom />}
    </ModalLayout>
  );
};
export default MobileCustom;
