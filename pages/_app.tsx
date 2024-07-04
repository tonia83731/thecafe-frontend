import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import Header from "@/components/common/header/Header";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>TheCafe</title>
        <meta
          name="description"
          content="Relax and Refresh Sip Serenity at Our Tea and Coffee Haven"
        />
      </Head>
      <div className="w-full h-full min-h-screen">
        <Header />
        <div className="h-full min-h-screen mt-[60px] md:mt-0 md:ml-[60px]">
          <Component {...pageProps} />
        </div>
      </div>
    </>
  );
}
