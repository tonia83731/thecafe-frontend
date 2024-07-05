import Image from "next/image";
import Link from "next/link";
import StepsSection from "@/components/home/StepsSection";
import { buttonLinks } from "@/data/others/home_btnlist";

export default function Home() {
  return (
    <main className="">
      <div className="w-full h-[calc(100vh-60px)] relative md:h-screen">
        <Image
          src="/home/hero.png"
          alt="hero"
          width={590}
          height={1142}
          className="w-full h-full object-cover md:hidden"
        ></Image>
        <Image
          src="/home/hero_desktop.png"
          alt="hero"
          width={2070}
          height={1536}
          className="hidden md:block md:w-full md:h-full"
        ></Image>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-yellow flex flex-col gap-8 justify-center items-center">
          <h1 className="font-italiana text-6xl text-center">THE CAFE</h1>
          <p className="text-sm text-center md:text-base">
            Relax and Refresh <br /> Sip Serenity at Our Tea and Coffee Haven
          </p>
          <div className="flex flex-col gap-2 md:flex-row md:gap-4">
            {buttonLinks.map(({ name, href }) => {
              return (
                <Link
                  href={href}
                  key={name}
                  className="bg-yellow text-olive drop-shadow-md hover:bg-orange-60 hover:text-light w-44 h-10 md:h-12 flex justify-center items-center rounded-md"
                >
                  {name}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
      <StepsSection />
    </main>
  );
}
