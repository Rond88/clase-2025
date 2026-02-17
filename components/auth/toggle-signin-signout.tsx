"use client";
import React, { useState } from "react";
import { authClient } from "@/lib/auth-client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { User, Loader2 } from "lucide-react";
import Link from "next/link";

export default function ToggleSignInSignOut() {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const { data: session, isPending } = authClient.useSession();

  const handleSignOut = async () => {
    setIsLoading(true);
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          router.push("/");
        },
        onError: () => {
          setIsLoading(false);
        },
      },
    });
  };

  if (isPending) {
    return <Button variant={"outline"}>Loading...</Button>;
  }
  if (session) {
    return (
      <Button
        onClick={handleSignOut}
        disabled={isLoading}
        variant={"destructive"}
      >
        {isLoading ? (
          <>
            <Loader2 className="animate-spin" />
            Cerrando sesión...
          </>
        ) : (
          "Sign Out"
        )}
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
