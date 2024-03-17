import Meta from "../components/meta";
import "@/styles/globals.css";
import { AppProps } from "next/app";
import Navbar from "../components/nav";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <div className="h-screen w-screen dark:bg-black dark:text-white">
        <div className="pb-10 pt-10 px-10">
          <Meta></Meta>
          <Navbar />
        </div>
        <div className="container mx-auto px-20">
          <Component {...pageProps} />
        </div>
      </div>
    </>
  );
}
