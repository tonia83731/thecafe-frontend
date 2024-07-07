import { ReactNode, useState } from "react";
import { BiSolidLeftArrow } from "react-icons/bi";
import { BiSolidRightArrow } from "react-icons/bi";
import { FaCheck } from "react-icons/fa6";
import { useStepsStore } from "@/state/useStepsStore";
import { stepsData } from "@/data/others/steps_list";

const CheckoutLayout = ({ children }: { children?: ReactNode }) => {
  // const [currStep, setCurrStep] = useState(1);
  const { currStep, setCurrStep } = useStepsStore();

  return (
    <div className="hidden w-1/4 h-full max-h-screen bg-yellow fixed top-0 right-0 p-4 md:flex md:flex-col md:justify-between">
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
      <div className="flex flex-col gap-4 h-[calc(100%-8rem)]">
        <h5 className="font-bold text-lg">
          {currStep === 1
            ? "ORDERS INFO"
            : currStep === 2
            ? "CUSTOMER INFO"
            : "PAYMENT INFO"}
        </h5>
        <div className="overflow-y-auto flex flex-col justify-between h-full">
          {children}
        </div>
        {/* {children} */}
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
    </div>
  );
};
export default CheckoutLayout;
