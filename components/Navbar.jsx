import Image from "next/image";
import Link from "next/link";
import LogoutButton from "./LogoutButton";

export default function Navbar({ user }) {
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
      <Link href="/tickets" className="mr-auto">
        tickets
      </Link>

      {user && <span>Hello, {user.email}</span>}
      <LogoutButton />
    </nav>
  );
}
