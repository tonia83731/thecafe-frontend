import ProfileLayout from "@/components/common/ProfileLayout";
import GeneralFileInput from "@/components/common/GeneralFileInput";
import InputWithIcon from "@/components/common/InputWithIcon";
import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { MdOutlinePhoneIphone } from "react-icons/md";
import { LuEye } from "react-icons/lu";
import { LuEyeOff } from "react-icons/lu";
import { FaLocationDot } from "react-icons/fa6";
import { useState } from "react";
const Profile = () => {
  const [isShowed, setIsShowed] = useState(false);
  return (
    <ProfileLayout>
      <div className="flex flex-col gap-4 md:grid md:grid-cols-3">
        <div className="md:hidden">
          <GeneralFileInput />
        </div>
        <div className="flex flex-col gap-4 md:col-span-2">
          <InputWithIcon
            label="Name"
            id="name"
            name="name"
            placeholder="Cafe Lover"
            icon={<FaUser />}
          />
          <InputWithIcon
            label="Email"
            type="email"
            id="email"
            name="email"
            placeholder="cafe@example.com"
            icon={<MdEmail />}
          />
          <InputWithIcon
            label="Password"
            type={isShowed ? "text" : "password"}
            id="password"
            name="password"
            placeholder="12345678"
            icon={<RiLockPasswordFill />}
            btn_open={<LuEye />}
            btn_close={<LuEyeOff />}
            onSwitch={() => setIsShowed(!isShowed)}
            isShowed={isShowed}
          />
          <InputWithIcon
            label="Phone"
            id="phone"
            name="phone"
            placeholder="0912345678"
            icon={<MdOutlinePhoneIphone />}
          />
          <InputWithIcon
            label="Address"
            id="address"
            name="address"
            placeholder="Cafe Rd. No.158"
            icon={<FaLocationDot />}
          />
        </div>
        <div className="hidden md:block">
          <GeneralFileInput />
        </div>
      </div>
      <div className="w-full flex justify-end">
        <button className="bg-orange text-yellow rounded-md py-2 px-4 w-1/4 hover:drop-shadow-md">
          Update
        </button>
      </div>
    </ProfileLayout>
  );
};

export default Profile;
