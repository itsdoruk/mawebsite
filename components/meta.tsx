import Head from "next/head"
import { useRouter } from "next/router"

export default function Meta() {
    const router = useRouter()
    const meta = {
        title: `${router.pathname === "/" ? "" : ` ${router.pathname} |`} dSplash.xyz: born just in time to explore programming.`,
        description: "Linux user, programmer and a student",
        image: "https://cloud-e87zjwx91-hack-club-bot.vercel.app/0coral_1fab8.png",
        type: "website"
    }

    return (
        <Head>
            <title>{meta.title}</title>
            <meta name="robots" content="follow, index" />
            <meta content={meta.description} name="description" />
            <meta property="og:url" content={`https://example.com/${router.asPath}`} />
            <link rel="canonical" href={`https://example.com/${router.asPath}`} />
            <meta property="og:type" content={meta.type} />
            <meta property="og:site_name" content="Conifer" />
            <meta property="og:description" content={meta.description} />
            <meta property="og:title" content={meta.title} />
            <meta property="og:image" content={meta.image} />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:site" content="@example" />
            <meta name="twitter:title" content={meta.title} />
            <meta name="twitter:description" content={meta.description} />
            <meta name="twitter:image" content={meta.image} />
        </Head>
    )
}
