import Link from "next/link";

export default function nav() {
  return (
    <nav className="navbar">
      <div className="font-mono ixed space-x-4 bottom-0 m-6 md:top-0">
        <Link href="/">dSplash</Link>
        <Link href="/works">works</Link>
        <Link href="mailto:derek@dsplash.xyz">mail me</Link>
      </div>
    </nav>
  );
}

