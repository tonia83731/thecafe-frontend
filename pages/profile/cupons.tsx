import ProfileLayout from "@/components/common/ProfileLayout";
import Select from "react-select";
import CuponTickets from "@/components/profile/CuponTickets";

const dummyCupons = [
  {
    code: "@SAVE30",
    title: "SAVE30",
    due_date: "2024/12/31",
    description:
      "Enjoy a 30% discount on your entire purchase. Use this exclusive coupon to save on your favorite products!",
    method:
      "Method: Enter the coupon code SAVE30 at checkout to receive your discount. Each account can use this coupon only once.",
    img: "/icons/cuponicon.png",
  },
  {
    code: "@WELCOME10",
    title: "WELCOME10",
    due_date: "2024/11/30",
    description:
      "Get 10% off on your first purchase with us. Welcome to our store!",
    method:
      "Method: Enter the coupon code WELCOME10 at checkout to receive your discount. This coupon is valid for new customers only.",
    img: "/icons/cuponicon.png",
  },
  {
    code: "@FREESHIP",
    title: "FREESHIP",
    due_date: "2024/10/31",
    description:
      "Enjoy free shipping on orders over $50. Shop now and save on shipping costs!",
    method:
      "Method: Enter the coupon code FREESHIP at checkout to receive free shipping. This coupon is valid for orders over $50.",
    img: "/icons/cuponicon.png",
  },
  {
    code: "@HALFOFF",
    title: "HALFOFF",
    due_date: "2024/09/30",
    description:
      "Take 50% off any one item in your cart. Don't miss this limited-time offer!",
    method:
      "Method: Enter the coupon code HALFOFF at checkout to receive your discount. Each account can use this coupon only once.",
    img: "/icons/cuponicon.png",
  },
  {
    code: "@B1G1FREE",
    title: "B1G1FREE",
    due_date: "2024/08/31",
    description:
      "Buy one, get one free on select items. Enjoy the savings with this special offer!",
    method:
      "Method: Enter the coupon code B1G1FREE at checkout to receive your discount. This coupon is valid on select items only.",
    img: "/icons/cuponicon.png",
  },
  {
    code: "@SPRING20",
    title: "SPRING20",
    due_date: "2024/07/31",
    description:
      "Celebrate spring with a 20% discount on all items. Freshen up your wardrobe for the new season!",
    method:
      "Method: Enter the coupon code SPRING20 at checkout to receive your discount. Each account can use this coupon only once.",
    img: "/icons/cuponicon.png",
  },
];
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
