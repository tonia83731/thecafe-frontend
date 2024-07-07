import { BiSolidLeftArrow } from "react-icons/bi";
import { BiSolidRightArrow } from "react-icons/bi";
import { FaCheck } from "react-icons/fa6";
import { useStepsStore } from "@/state/useStepsStore";
import { stepsData } from "@/data/others/steps_list";
import CheckoutStep1 from "./CheckoutStep1";
import CheckoutStep2 from "./CheckoutStep2";
import CheckoutStep3 from "./CheckoutStep3";
const CheckoutFormMobile = () => {
  const { currStep, setCurrStep } = useStepsStore();
  return (
    <>
      <div className="flex flex-col gap-4">
        <div className="flex justify-between items-center px-4 xl:px-12">
          {stepsData.map((_, index) => {
            return (
              <>
                <div
                  className={`${
                    currStep === index + 1
                      ? "bg-orange text-white border-olive"
                      : currStep > index + 1
                      ? "bg-olive text-white border-olive"
                      : "text-gray-green border-gray-green"
                  } border  rounded-full w-7 h-7 flex justify-center items-center`}
                >
                  {currStep > index + 1 ? <FaCheck /> : index + 1}
                </div>
              </>
            );
          })}
        </div>
        <div className="flex flex-col gap-4 h-[calc(100%-2rem)]">
          <h5 className="font-bold text-lg">
            {currStep === 1
              ? "ORDERS INFO"
              : currStep === 2
              ? "CUSTOMER INFO"
              : "PAYMENT INFO"}
          </h5>
          <div className="overflow-y-auto flex flex-col justify-between h-full px-1">
            {currStep === 1 && <CheckoutStep1 />}
            {currStep === 2 && <CheckoutStep2 />}
            {currStep === 3 && <CheckoutStep3 />}
          </div>
          {/* {children} */}
        </div>
      </div>
      <div
        className={`flex ${
          currStep === 1 ? "justify-end" : "justify-between"
        } items-center`}
      >
        <button
          onClick={() => {
            if (currStep > 1) {
              setCurrStep(currStep - 1);
            }
          }}
          className={`flex gap-1 items-center px-4 py-0.5 border border-gray-green rounded-md text-gray-green hover:bg-gray-green-60 hover:text-white ${
            currStep === 1 ? "hidden" : ""
          }`}
        >
          <BiSolidLeftArrow />
          <div>Prev</div>
        </button>
        <button
          onClick={() => {
            if (currStep < 3) {
              setCurrStep(currStep + 1);
            }
          }}
          className={`flex gap-1 items-center px-4 py-0.5 border border-orange rounded-md text-orange hover:bg-orange-60 hover:text-white ${
            currStep === 3 ? "hidden" : ""
          }`}
        >
          <div>Next</div>
          <BiSolidRightArrow />
        </button>
        <button
          className={`flex gap-1 items-center px-4 py-0.5 border border-orange rounded-md text-orange hover:bg-orange-60 hover:text-white ${
            currStep === 3 ? "" : "hidden"
          }`}
        >
          Submit
        </button>
      </div>
    </>
  );
};
export default CheckoutFormMobile;
