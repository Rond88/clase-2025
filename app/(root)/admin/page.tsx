import React from "react";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import SignOutButton from "@/components/auth/sign-out-button";

export default async function AdminPage() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  return (
    <>
      <div>Admin Page</div>
      <SignOutButton></SignOutButton>
    </>
  );
}
