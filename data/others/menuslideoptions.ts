type SideBarType = {
  id: "cart" | "custom" | "wish";
  name: string;
};

export const menusideoptions: SideBarType[] = [
  {
    id: "custom",
    name: "CUSTOM",
  },
  {
    id: "cart",
    name: "CART",
  },
  {
    id: "wish",
    name: "WISH",
  },
];
