export const selectstyles = {
  control: (baseStyles: any, state: any) => ({
    ...baseStyles,
    border: "none",
    backgroundColor: "rgb(224, 145, 50, .6)",
    "&:focus": {
      outline: "none",
    },
  }),
  singleValue: (baseStyles: any, state: any) => ({
    ...baseStyles,
    color: "#424530",
  }),
  indicatorSeparator: (baseStyles: any, state: any) => ({
    ...baseStyles,
    display: "none",
  }),
  dropdownIndicator: (baseStyles: any, state: any) => ({
    ...baseStyles,
    color: "#424530",
  }),
  menu: (baseStyles: any, state: any) => ({
    ...baseStyles,
    backgroundColor: "rgb(224, 145, 50, .6)",
  }),
  menuList: (baseStyles: any, state: any) => ({
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
  option: (styles: any) => ({
    ...styles,
    "&:hover": {
      backgroundColor: "#E09132",
    },
  }),
};
