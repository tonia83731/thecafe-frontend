import PageLayout from "./PageLayout";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { ReactNode } from "react";
const profileLinks = [
  {
    id: "settings",
    title: "Settings",
    img: "/icons/settingsicon.png",
    href: "/profile",
  },
  {
    id: "orders",
    title: "Orders",
    img: "/icons/ordersicon.png",
    href: "/profile/orders",
  },
  {
    id: "cupons",
    title: "Cupons",
    img: "/icons/cuponsicon.png",
    href: "/profile/cupons",
  },
];
const ProfileLayout = ({ children }: { children: ReactNode }) => {
  const { pathname } = useRouter();
  return (
    <PageLayout title="Profile">
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
        {profileLinks.map(({ id, title, img, href }) => {
          return (
            <Link href={href} key={id}>
              <div
                className={`flex gap-2 rounded-md py-4 justify-center items-center ${
                  pathname === href
                    ? "bg-latte-60 font-bold border-2 border-olive"
                    : "bg-latte-40"
                }`}
              >
                <Image
                  src={img}
                  alt={id}
                  width={40}
                  height={40}
                  className="w-6 h-6 "
                ></Image>
                <h4 className="text-olive font-italiana text-xl md:text-2xl">
                  {title}
                </h4>
              </div>
            </Link>
          );
        })}
      </div>
      {children}
    </PageLayout>
  );
};

export default ProfileLayout;
