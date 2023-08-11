import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export const dynamic = "force-dynamic";
export async function DELETE(request, { params }) {
  const id = params.id;

  const supbase = createRouteHandlerClient({ cookies });

  const { error } = await supbase.from("tickets").delete().eq("id", id);

  return NextResponse.json({ error });
}
