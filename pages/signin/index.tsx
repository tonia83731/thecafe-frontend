import PageLayout from "@/components/common/PageLayout";
import InputWithIcon from "@/components/common/InputWithIcon";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { LuEye } from "react-icons/lu";
import { LuEyeOff } from "react-icons/lu";
import { useState } from "react";
const SignIn = () => {
  const [isShowed, setIsShowed] = useState(false);
  return (
    <PageLayout title="Sign In" page="need" href="/signup" text="Sign Up">
      <div className="flex flex-col gap-4">
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
      </div>
      <div className="w-full flex justify-center">
        <button className="bg-orange text-yellow rounded-md py-2 px-4 w-1/4 hover:drop-shadow-md">
          Sing In
        </button>
      </div>
    </PageLayout>
  );
};

export default SignIn;
