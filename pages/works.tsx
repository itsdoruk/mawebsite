import Link from "next/link";
import Image from "next/image";
import { age, message } from "../utils/myage";
import works from "../public/works.png";
import { SiAstro } from "react-icons/si";
import drk from "../public/drk.png";
import { DiReact } from "react-icons/di";
import { BiLogoJavascript } from "react-icons/bi";

export default function Works() {
  return (
    <>
      <div className="font-mono">
       <div className="block text-sm sm:text-lg">
        <Image
            src={works}
            alt="my works"
            className="rounded-3xl object-cover w-200px max-h-200px sm:h-[15rem]"
          />
         
         <span className="block text italic sm:text-4xl">
            My {" "}
            <span className="font-white font-bold">Works</span>
          </span>
Here are my works I have worked in the past or now.
        </div>
<div className="grid sm:grid-cols-1 sm:mt-10 mt-10 block text sm:text-4xl font-white font-bold">
<SiAstro /> 
Sprig (2023 - 2024)
</div> 
                  I helped and developed some ideas for{" "}
                  <Link
                     href="https://sprig.hackclub.com"
                     className="underline decoration-blue-1 decoration-1 underline-offset-1"
                  >
                    Sprig{"'"}s website.
                  </Link>
                  <div className="grid sm:grid-cols-1 sm:mt-10 mt-10 block text sm:text-4xl font-white font-bold">
<DiReact />
This website! (2023 - 20XX)
</div>
                  Fun fact:{" "}
                  <Link
                     href="https://dsplash.xyz"
                     className="underline decoration-blue-1 decoration-1 underline-offset-1"
                  >
                  I used ChatGPT to create my first website, but it didn{"'"}t worked!
                  </Link>
                                    <div className="grid sm:grid-cols-1 sm:mt-10 mt-10 block text sm:text-4xl font-white font-bold">
<BiLogoJavascript /> 
Hack Club (2023 - 20XX)
</div>
                  I{" "}
                  <Link
                     href="https://hackclub.com"
                     className="underline decoration-blue-1 decoration-1 underline-offset-1"
                  >
started some frontend wacking with Hack Club!
                  </Link>
</div>{/* <CommitHash /> */}
    </>
  );
}
