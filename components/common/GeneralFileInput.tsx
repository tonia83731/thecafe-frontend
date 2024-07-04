import Image from "next/image";
const GeneralFileInput = () => {
  return (
    <label htmlFor="file-input" className="rounded-md cursor-pointer">
      <div className="bg-yellow flex justify-center items-center p-4 rounded-t-md">
        <Image
          src="/profile/inputfile.png"
          alt="input-file"
          width={120}
          height={110}
        ></Image>
      </div>
      <div className="bg-latte text-yellow px-4 rounded-b-md text-center py-2">
        upload image here
      </div>
      <input type="file" className="hidden" id="file-input" />
    </label>
  );
};

export default GeneralFileInput;
