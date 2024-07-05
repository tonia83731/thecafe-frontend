import { ReactNode } from "react";
import { InputWithIconProps } from "../../types/type";

const InputWithIcon = (props: InputWithIconProps) => {
  const {
    label,
    type = "text",
    id,
    name,
    placeholder,
    icon,
    btn_open,
    btn_close,
    isShowed,
    onSwitch,
  } = props;
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="w-full md:text-lg">
        {label}
      </label>
      <div className="h-10 md:h-16 relative">
        <div className="text-latte md:text-lg absolute top-1/2 left-4 -translate-y-1/2">
          {icon}
        </div>
        <input
          id={id}
          name={name}
          type={type}
          className="w-full h-full bg-yellow text-olive placeholder:text-latte pl-12 pr-4 rounded-md focus:outline focus:outline-olive"
          placeholder={placeholder}
        />
        {name === "password" && (
          <button
            className="text-latte md:text-lg absolute right-4 top-1/2 -translate-y-1/2"
            onClick={onSwitch}
          >
            {isShowed ? btn_close : btn_open}
          </button>
        )}
      </div>
    </div>
  );
};
export default InputWithIcon;
