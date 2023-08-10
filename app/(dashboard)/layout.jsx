import Navbar from "@components/Navbar";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";

const DashboardLayout = async ({ children }) => {
  const supabase = createServerComponentClient({ cookies });
  const { data } = await supabase.auth.getSession();

  if (!data.session) {
    redirect("/signin");
  }

  return (
    <>
      <Navbar user={data.session.user} />
      {children}
    </>
  );
};

export default DashboardLayout;
