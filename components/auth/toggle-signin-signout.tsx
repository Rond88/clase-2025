"use client";
import React from "react";
import { authClient } from "@/lib/auth-client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { User } from "lucide-react";
import Link from "next/link";

export default function ToggleSignInSignOut() {
  const router = useRouter();
  const { data: session, isPending } = authClient.useSession();
  if (isPending) {
    return <Button variant={"outline"}>Loading...</Button>;
  }
  if (session) {
    return (
      <Button
        onClick={async () => {
          await authClient.signOut({
            fetchOptions: {
              onSuccess: () => {
                router.push("/");
              },
            },
          });
        }}
        variant={"destructive"}
      >
        Sign Out
      </Button>
    );
  }
  return (
    <Button asChild variant={"ghost"}>
      <Link href="/sign-in">
        <User />
        Sign-in
      </Link>
    </Button>
  );
}
