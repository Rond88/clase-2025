"use client";
import React, { useState } from "react";
import { authClient } from "@/lib/auth-client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { Loader2 } from "lucide-react";

export default function SignOutButton() {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

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
