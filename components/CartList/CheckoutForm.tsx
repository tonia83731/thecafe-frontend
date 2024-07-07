import CheckoutLayout from "./CheckoutLayout";
import CheckoutStep1 from "./CheckoutStep1";
import CheckoutStep2 from "./CheckoutStep2";
import CheckoutStep3 from "./CheckoutStep3";
import { useStepsStore } from "@/state/useStepsStore";
const CheckoutForm = () => {
  const { currStep } = useStepsStore();
  return (
    <CheckoutLayout>
      {currStep === 1 && <CheckoutStep1 />}
      {currStep === 2 && <CheckoutStep2 />}
      {currStep === 3 && <CheckoutStep3 />}
    </CheckoutLayout>
  );
};

export default CheckoutForm;
