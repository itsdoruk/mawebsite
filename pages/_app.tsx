import Meta from "../components/meta";
import "@/styles/globals.css";
import { AppProps } from "next/app";
import Navbar from "../components/nav";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <div className="px-20">
     <Meta>
            </Meta>
      <Navbar />
      </div>
      <div className="container mx-auto px-20">
        <Component {...pageProps} />
      </div>
    </>
  );
}

