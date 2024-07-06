import { BiSolidLeftArrow } from "react-icons/bi";
import { BiSolidRightArrow } from "react-icons/bi";
import { useState } from "react";
const Pagination = () => {
  const [currPage, setCurrPage] = useState<number>(1);
  return (
    <div className="w-full flex gap-2 justify-end mt-4">
      <button
        className="text-olive hover:text-macha disabled:text-gray-green"
        id="prev"
        disabled={currPage <= 1}
        onClick={() => {
          if (currPage > 1) setCurrPage(currPage - 1);
          else setCurrPage(1);
        }}
      >
        <BiSolidLeftArrow />
      </button>
      <div className="flex gap-1">
        <input
          type="number"
          value={currPage}
          min={1}
          max={10}
          className="bg-transparent border-b-2 focus:border-macha text-center border-olive"
          onChange={(e) => {
            const page = Number(e.target.value);
            if (page <= 1) setCurrPage(1);
            else if (page >= 10) setCurrPage(10);
            else setCurrPage(page);
          }}
        />
        <div className="">of 10</div>
      </div>
      <button
        className="text-olive hover:text-macha disabled:text-gray-green"
        id="next"
        disabled={currPage >= 10}
        onClick={() => {
          if (currPage < 10) setCurrPage(currPage + 1);
          else setCurrPage(10);
        }}
      >
        <BiSolidRightArrow />
      </button>
    </div>
  );
};
export default Pagination;
