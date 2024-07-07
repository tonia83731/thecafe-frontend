import ProfileLayout from "@/components/common/ProfileLayout";
import Select from "react-select";
import CuponTickets from "@/components/profile/CuponTickets";
import { dummyCupons } from "@/data/dummy/cuponlist";
import { selectstyles } from "@/styles/react-select-styles";
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
            styles={selectstyles}
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
