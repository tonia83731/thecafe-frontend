import { ReactNode } from "react";

type LayoutProps = {
  title: string;
  children: ReactNode;
};

const PageLayout = (props: LayoutProps) => {
  const { title, children } = props;
  return (
    <main className="w-full h-full px-4 py-12 md:w-4/5 md:mx-auto md:my-8 md:px-0 max-w-[1280px]">
      <div className="flex flex-col gap-8">
        <h1 className="text-olive font-italiana text-2xl text-center md:text-3xl">
          {title}
        </h1>
        {children}
      </div>
    </main>
  );
};
export default PageLayout;
