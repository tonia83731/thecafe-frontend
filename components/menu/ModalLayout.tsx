import { ReactNode } from "react";
import { ImCross } from "react-icons/im";
import { useModalStore } from "@/state/useModalToggleStore";
const ModalLayout = ({ children }: { children?: ReactNode }) => {
  const { handleToggleClose } = useModalStore();
  return (
    <div className="w-full h-full min-h-screen fixed top-0 left-0 bg-olive-40">
      <div className="bg-white w-4/5 h-[calc(100vh-120px)] translate-y-[60px] mx-auto my-[30px] rounded-md">
        <div className="flex flex-col gap-4 pb-6 px-4 w-full h-full">
          <div className="h-12 leading-[3rem] w-full border-b border-latte flex justify-end items-center">
            <button
              className="text-lg text-olive hover:text-latte"
              onClick={handleToggleClose}
            >
              <ImCross />
            </button>
          </div>
          <div className="h-[calc(100%-3rem)] overflow-y-auto">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default ModalLayout;
