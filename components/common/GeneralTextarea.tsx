import { GeneralInputProps } from "./GeneralInput";

const GeneralTextArea = (props: GeneralInputProps) => {
  const { label, id, name, placeholder } = props;
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="w-full md:text-lg">
        {label}
      </label>
      <textarea
        id={id}
        cols={50}
        rows={3}
        name={name}
        placeholder={placeholder}
        className="bg-yellow text-olive placeholder:text-latte p-4 rounded-md focus:outline focus:outline-olive resize-none"
      ></textarea>
    </div>
  );
};

export default GeneralTextArea;
