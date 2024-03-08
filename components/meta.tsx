import Head from "next/head";

export default function Meta() {
   const title = "dSplash.xyz: born just in time to explore computers";
   const description = "student by day, open source coder by night. ";
   const keywords =
      "istanbul, hack club, doruk sarp aydın, dsplash, react, nextjs, bash, young developer, linux";
   const author = "Doruk Sarp Aydın";
   const image =
      "https://cloud-e87zjwx91-hack-club-bot.vercel.app/0coral_1fab8.png";
   return (
      <Head>
         <meta charSet="utf-8" />
         <meta name="viewport" content="width=device-width,initial-scale=1" />
         <title>{title}</title>
         <meta name="description" content={description} />
         <meta name="keywords" content={keywords} />
         <meta name="author" content={author} />
         <meta property="og:url" content="https://aram.sh" />
         <meta property="og:type" content="website" />
         <meta property="og:title" content={title} />
         <meta property="og:description" content={description} />
         <meta property="og:image" content={image} />
         <meta name="twitter:card" content="summary_large_image" />
         {children}
      </Head>
   );
}

