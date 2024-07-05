import { ReactNode } from "react";
import { FiPlus } from "react-icons/fi";
import { FiMinus } from "react-icons/fi";
import { menusideoptions } from "@/data/others/menuslideoptions";
import { useSidebarStore } from "@/state/useSidebarStore";
const CustomDesktopLayout = ({ children }: { children?: ReactNode }) => {
  const { sidebarOption, handleSidebarOption } = useSidebarStore();
  return (
    <div className="hidden md:block w-1/4 h-full max-h-screen bg-yellow fixed top-0 right-0">
      <div className="text-italiana text-lg w-full bg-orange-60 flex justify-between">
        {menusideoptions.map(({ id, name }) => {
          return (
            <button
              className={`text-center w-full py-2 ${
                sidebarOption === id ? "bg-orange text-white" : ""
              }`}
              key={id}
              onClick={() => handleSidebarOption(id)}
            >
              {name}
            </button>
          );
        })}
      </div>
      <div className="py-6 px-2 flex flex-col justify-between h-full">
        <div className="overflow-y-auto h-[calc(100%-5rem)] px-2">
          {children}
        </div>
        <div className="flex flex-col gap-2 h-20">
          <div className="bg-yellow flex w-full mx-auto py-1 justify-around">
            <button className="text-lg text-olive">
              <FiMinus />
            </button>
            <input
              type="number"
              className="text-center bg-transparent w-24 lg:w-full"
              defaultValue={1}
            />
            <button className="text-lg text-olive ">
              <FiPlus />
            </button>
          </div>
          <button className="bg-orange text-white text-sm w-full py-1 rounded-md">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default CustomDesktopLayout;
