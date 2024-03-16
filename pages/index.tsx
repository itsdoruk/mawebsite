import Link from "next/link";
import Image from "next/image";
import { age, message } from "../utils/myage";
import istanbul from "../public/istanbul.jpg";

export default function Index() {
  return (
    <>
      <div className="font-mono">
       <div className="block text-sm sm:text-lg">
        <Image
            src={istanbul}
            alt="image by Ufuk Aslan"
            className="rounded-3xl object-cover w-200px max-h-200px sm:h-[15rem]"
          />
         
         <span className="block text italic sm:text-4xl">
            Hello, {" "}
            <span className="font-bold">World!</span>
          </span>
                 <span>
           Hi, My name is Doruk or (Derek if its hard to pronounce) I am <>{age}</> years old developer who lives in Europe.
          </span>  
        </div>
<div className="grid sm:grid-cols-1 sm:mt-10 mt-10 sm:space-x-8">
When I was 4 or 5, I remember looking inside of PCBs inside of clocks, toys and some cheap-ass bluetooth headphones.
My coding adventure started at when I was 7, I was about to learn JavaScript but that did not come to the reality.
So instead of it I started learning when I was 8,
then when I was 10 to 11, I learnt Java,
and it did not go well because I never thought that Java was easy and I did not practice it.
When I was 12, I learnt Bash, HTML and CSS. And finally,
When I was 13, I learnt React, JS, Vue, Next.js, and Python!
</div>
</div>{/* <CommitHash /> */}
    </>
  );
}
