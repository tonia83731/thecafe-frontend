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
