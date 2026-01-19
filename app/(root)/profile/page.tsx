"use client";
import React from "react";
import { authClient } from "@/lib/auth-client";
import { Button } from "@/components/ui/button";
import { Link } from "lucide-react";

export default function ProfilePage() {
  const { data: session, isPending, error, refetch } = authClient.useSession();
  if (isPending) {
    return <div>Loading...</div>;
  }
  if (!session) {
    return (
      <div className="space-x-4">
        <h1>You are not authenticated</h1>
        <Button asChild variant={"destructive"}>
          <Link href={"/sign-in"}>Sign In</Link>
          <Link href={"/"}>Go Home</Link>
        </Button>
      </div>
    );
  }
  return (
    <section id="profile" className="container mx-auto">
      <div className="space-y-8">
        <h1 className="text-3xl font-bold">Profile</h1>
      </div>

      <pre className="text sm overflow-clip">
        {!!session ? JSON.stringify(session, null, 2) : "UNAUTHORIZED"}
      </pre>
    </section>
  );
}
