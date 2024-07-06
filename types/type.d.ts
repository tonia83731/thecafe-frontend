export type HeaderToggleProps = {
  isToggle: boolean;
  handleHeaderToggle: () => void;
};
export type GeneralInputProps = {
  label: string;
  type?: string;
  id: string;
  name: string;
  placeholder: string;
};
export type InputWithIconProps = GeneralInputProps & {
  icon: ReactNode;
  btn_close?: ReactNode;
  btn_open?: ReactNode;
  onSwitch?: () => void;
  isShowed?: boolean;
};
export type LayoutProps = {
  title: string;
  page?: string;
  children: ReactNode;
  href?: string;
  text?: string;
};
export type StepsCardProps = {
  index: number;
  title: string;
  description: string;
};
export type ProductsProps = {
  id: string;
  image: string;
  name: string;
  description: string;
  price: number;
  type: string;
};
export type ProductCardProps = ProductsProps & {
  onProductSelect: () => void;
};
export type TicketProps = {
  code: string;
  title: string;
  due_date: string;
  description: string;
  method: string;
  img: string;
};
export type filterOptions = {
  all: boolean;
  drinks: boolean;
  desserts: boolean;
  meals: boolean;
};
export type CustomDrinks = {
  size: string;
  sugar: string;
  ice: string;
  toppings: string[];
};
export type CustomDrinksKeys = keyof CustomDrinks;
export type CustomMeals = {
  based: string[];
  addon: string[];
};
export type CustomMealsKeys = keyof CustomMeals;
export type ProductCartProps = {
  id: string;
  image: string;
  name: string;
  custom: string | null;
  price: number;
  type: "drinks" | "dessert" | "meals";
  qty: number;
};
