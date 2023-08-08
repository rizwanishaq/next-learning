import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav>
      <Image
        src="/assets/images/logo.svg"
        alt="logo"
        width={30}
        height={30}
        quality={100}
      />
      <h1>RiIsBiTech</h1>
      <Link href="/">Dashboard</Link>
      <Link href="/tickets">tickets</Link>
    </nav>
  );
}
