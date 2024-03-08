import Head from "next/head";

export default function Meta({ children }) {
   const title = "dSplash.xyz: born in time to explore computers";
   const description = "student. developer. designer.";
   const keywords =
      "istanbul, hack club, doruk sarp aydın, dsplash, react, nextjs, bash, young developer";
   const author = "Doruk Sarp Aydın";
   const image =
      "https://cloud-3ri5zqk55-hack-club-bot.vercel.app/0aramshiva.png";
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

