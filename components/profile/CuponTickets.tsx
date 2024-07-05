import Image from "next/image";
import { TicketProps } from "@/types/type";

const ticket_styles =
  "before:content-[''] after:content-[''] before:block after:block before:absolute after:absolute before:top-[120px] after:top-[120px] before:w-[40px] before:h-[40px] after:w-[40px] after:h-[40px] before:rounded-[50%] after:rounded-[50%] before:z-[10] after:z-[10] before:bg-light after:bg-light before:-rotate-45 after:rotate-135 before:-left-[20px] after:-right-[20px]";
const CuponTickets = (props: TicketProps) => {
  const { code, title, due_date, description, method, img } = props;
  return (
    <div
      className={`bg-orange-5 w-full h-52 m-auto relative rounded-md z-1 ${ticket_styles}`}
    >
      <div className={`w-full h-full relative bg-orange-5 rounded-md p-4`}>
        <div className="">
          <div className="h-full">
            <div className="flex gap-8">
              <Image
                src={img}
                alt="cupon-icon"
                className="w-9 h-9"
                width={40}
                height={40}
              ></Image>
              <div className="">
                <h4 className="font-bold text-lg text-olive mb-4">{title}</h4>
                <ul className="text-xs text-latte flex flex-col gap-2">
                  <li className="truncate">{description}</li>
                  <li className="description-lime-clamp-2">{method}</li>
                </ul>
              </div>
            </div>
            <div className="w-full mx-auto border-t border-dotted border-latte my-4 xs:mt-4 xs:mb-6 md:my-4 lg:mt-4 lg:mb-6"></div>
          </div>
          <div className="flex justify-between items-center h-10">
            <div className="text-olive font-bold text-lg">CODE: {code}</div>
            <button className="border border-orange text-orange hover:text-white hover:bg-orange rounded-md px-2 py-1">
              Copy
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CuponTickets;
