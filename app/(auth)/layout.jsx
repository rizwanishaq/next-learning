import Link from "next/link";

export default function AuthLayout({ children }) {
  return (
    <>
      <nav>
        <h2>Dojo Helpdesk</h2>
        <Link href="/signup">SignUp</Link>
        <Link href="/signin">SignIn</Link>
      </nav>
      {children}
    </>
  );
}
