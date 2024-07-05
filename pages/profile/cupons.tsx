import ProfileLayout from "@/components/common/ProfileLayout";
import Select from "react-select";
import CuponTickets from "@/components/profile/CuponTickets";
import { dummyCupons } from "@/data/dummy/cuponlist";

const filterOptions = [
  { value: "NToT", label: "From new to old" },
  { value: "TToN", label: "From old to new" },
];
const Cupons = () => {
  return (
    <ProfileLayout>
      <div className="md:grid md:grid-cols-3 md:gap-4">
        <div className="md:col-start-3">
          <Select
            options={filterOptions}
            defaultValue={filterOptions[0]}
            isClearable={false}
            isSearchable={false}
            styles={{
              control: (baseStyles, state) => ({
                ...baseStyles,
                border: "none",
                backgroundColor: "rgb(224, 145, 50, .6)",
                "&:focus": {
                  outline: "none",
                },
              }),
              singleValue: (baseStyles, state) => ({
                ...baseStyles,
                color: "#424530",
              }),
              indicatorSeparator: (baseStyles, state) => ({
                ...baseStyles,
                display: "none",
              }),
              dropdownIndicator: (baseStyles, state) => ({
                ...baseStyles,
                color: "#424530",
              }),
              menu: (baseStyles, state) => ({
                ...baseStyles,
                backgroundColor: "rgb(224, 145, 50, .6)",
              }),
              menuList: (baseStyles, state) => ({
                ...baseStyles,
                "::-webkit-scrollbar": {
                  width: "4px",
                },
                "::-webkit-scrollbar-thumb": {
                  backgroundColor: "#A68E74",
                  borderRadius: "4px",
                },
                "::-webkit-scrollbar-track": {
                  backgroundColor: "rgb(224, 145, 50, .6)",
                },
                // For Firefox
                scrollbarWidth: "thin",
                scrollbarColor: "#A68E74 rgb(224, 145, 50, .6)",
              }),
              option: (styles) => ({
                ...styles,
                "&:hover": {
                  backgroundColor: "#E09132",
                },
              }),
            }}
          />
        </div>
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {dummyCupons.map((item) => {
          return <CuponTickets key={item.code} {...item} />;
        })}
      </div>
    </ProfileLayout>
  );
};

export default Cupons;
