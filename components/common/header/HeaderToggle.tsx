import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { navtoggleLinks, navtogglelinks_two } from "@/data/others/navlinks";
import { HeaderToggleProps } from "@/types/type";

const HeaderToggle = (props: HeaderToggleProps) => {
  const { isToggle, handleHeaderToggle } = props;
  const { pathname } = useRouter();
  return (
    <div
      className={`h-screen w-60 bg-yellow drop-shadow-md z-[999] fixed top-0 transition-all ease-in-out origin-top ${
        isToggle ? "opacity-100 left-0" : "opacity-0 left-[-100%]"
      }`}
    >
      <div className="w-full h-full flex flex-col justify-between py-4 md:py-6">
        <div className="flex flex-col gap-8">
          <Link href="/" className="flex gap-1 items-center px-8">
            <Image
              src="/icons/logo.png"
              alt="logo"
              width={45}
              height={45}
              className="w-[30px] h-[30px] md:w-[40px] md:h-[40px] object-contain"
            ></Image>
            <h1 className="font-italiana text-latte text-2xl md:text-3xl">
              THE CAFE
            </h1>
          </Link>
          {/* desktop navbar */}
          <nav className="flex flex-col gap-3 text-latte">
            {navtoggleLinks.map(({ id, img, img_active, href, title }) => {
              return (
                <Link
                  href={href}
                  key={id}
                  title={id}
                  className={pathname === href ? "bg-latte text-yellow" : ""}
                >
                  <div className="flex gap-2 px-8 py-2">
                    <Image
                      src={pathname === href ? img_active : img}
                      width={30}
                      height={30}
                      alt={id}
                      className="w-[25px] h-[25px] md:w-[30px] md:h-[30px]"
                    ></Image>
                    <h4 className="font-italiana text-lg md:text-2xl">
                      {title}
                    </h4>
                  </div>
                </Link>
              );
            })}
          </nav>
        </div>
        <div className="flex flex-col gap-3 text-latte">
          {navtogglelinks_two.map(
            ({ id, img, img_active, href, title }, index) => {
              return index < 2 ? (
                <Link
                  href={href}
                  key={id}
                  title={id}
                  className={pathname === href ? "bg-latte text-yellow" : ""}
                >
                  <div className="flex gap-2 px-8 py-2">
                    <Image
                      src={pathname === href ? img_active : img}
                      width={30}
                      height={30}
                      alt={id}
                      className="w-[25px] h-[25px] md:w-[30px] md:h-[30px]"
                    ></Image>
                    <h4 className="font-italiana text-lg md:text-2xl">
                      {title}
                    </h4>
                  </div>
                </Link>
              ) : (
                <button
                  className="text-latte text-xl"
                  title={id}
                  key={id}
                  onClick={handleHeaderToggle}
                >
                  <div className="flex gap-2 px-8">
                    <Image
                      src={img}
                      width={30}
                      height={30}
                      alt={id}
                      className="w-[25px] h-[25px] md:w-[30px] md:h-[30px]"
                    ></Image>
                    <h4 className="font-italiana text-lg md:text-2xl">
                      {title}
                    </h4>
                  </div>
                </button>
              );
            }
          )}
        </div>
      </div>
    </div>
  );
};

export default HeaderToggle;
