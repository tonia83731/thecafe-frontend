import { GeneralInputProps } from "@/types/type";

const GeneralInput = (props: GeneralInputProps) => {
  const { label, type = "text", id, name, placeholder } = props;
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="w-full md:text-lg">
        {label}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        className="h-9 bg-yellow text-olive placeholder:text-latte md:h-14 px-4 rounded-md focus:outline focus:outline-olive"
        placeholder={placeholder}
      />
    </div>
  );
};

export default GeneralInput;
