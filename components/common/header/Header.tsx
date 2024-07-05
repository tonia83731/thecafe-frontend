import Link from "next/link";
import Image from "next/image";
import HeaderToggle from "./HeaderToggle";
import { useState } from "react";
import { useRouter } from "next/router";
import {
  navlinks,
  navlinks_mobile,
  navlinks_two,
} from "@/data/others/navlinks";

const Header = () => {
  const [isToggle, setIsToggle] = useState(false);
  const { pathname } = useRouter();
  return (
    <>
      <header className="z-[888] w-full h-[60px] md:w-[60px] md:h-screen leading-[60px] md:leading-normal bg-yellow flex justify-between items-center fixed top-0 left-0 md:flex-col px-4 md:px-0 md:py-6">
        <div className="md:flex md:flex-col gap-8 w-full">
          <Link href="/" className="flex gap-1 items-center justify-center">
            <Image
              src="/icons/logo.png"
              alt="logo"
              width={45}
              height={45}
              className="w-[30px] h-[30px] md:w-[45px] md:h-[45px] object-contain"
            ></Image>
            <h1 className="font-italiana text-latte text-3xl md:hidden">
              THE CAFE
            </h1>
          </Link>
          {/* desktop navbar */}
          <nav className="hidden md:flex md:flex-col md:gap-3">
            {navlinks.map(({ id, img, img_active, href }) => {
              return (
                <Link
                  href={href}
                  key={id}
                  title={id}
                  className={`${
                    pathname === href ? "bg-latte text-yellow" : ""
                  } md:flex md:justify-center`}
                >
                  <Image
                    src={pathname === href ? img_active : img}
                    width={30}
                    height={30}
                    alt={id}
                    className="py-2"
                  ></Image>
                </Link>
              );
            })}
          </nav>
        </div>
        {/* mobile navbar */}
        <nav className="flex md:hidden h-full min-w-[160px]">
          {navlinks_mobile.map(({ id, img, img_active, href }, index) => {
            return index > 0 ? (
              <Link
                href={href}
                key={id}
                title={id}
                className={`${
                  pathname === href ? "bg-latte text-yellow" : ""
                } h-full px-1.5 flex justify-center items-center`}
              >
                <Image
                  src={pathname === href ? img_active : img}
                  width={30}
                  height={30}
                  alt={id}
                ></Image>
              </Link>
            ) : (
              <button
                key={id}
                title={id}
                onClick={() => setIsToggle(!isToggle)}
                className={`px-1.5`}
              >
                <Image src={img} width={30} height={30} alt={id}></Image>
              </button>
            );
          })}
        </nav>

        <div className="hidden md:flex md:flex-col md:gap-3 w-full">
          {navlinks_two.map(({ id, img, img_active, href }, index) => {
            return index < 2 ? (
              <Link
                href={href}
                title={id}
                key={id}
                className={`${
                  pathname === href ? "bg-latte text-yellow" : ""
                } md:flex md:justify-center`}
              >
                <Image
                  src={pathname === href ? img_active : img}
                  width={30}
                  height={30}
                  alt={id}
                  className="py-2"
                ></Image>
              </Link>
            ) : (
              <button
                className="text-latte text-xl md:flex md:justify-center"
                title={id}
                key={id}
                onClick={() => setIsToggle(!isToggle)}
              >
                <Image src={img} width={30} height={30} alt="more"></Image>
              </button>
            );
          })}
        </div>
      </header>
      {isToggle && (
        <HeaderToggle
          handleHeaderToggle={() => setIsToggle(false)}
          isToggle={isToggle}
        />
      )}
    </>
  );
};

export default Header;
