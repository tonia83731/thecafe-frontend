import { ReactNode } from "react";
// import { FiPlus } from "react-icons/fi";
// import { FiMinus } from "react-icons/fi";
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
        <div className="overflow-y-auto h-[calc(100%-3rem)] px-2 flex flex-col justify-between">
          {children}
        </div>
      </div>
    </div>
  );
};

export default CustomDesktopLayout;
