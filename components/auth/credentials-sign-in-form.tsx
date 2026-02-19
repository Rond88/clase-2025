"use client";
import { Label } from "@radix-ui/react-label";
import React, { useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { signUpDefaultValues } from "@/lib/constantes";
import { authClient } from "@/lib/auth-client";
import { Loader2 } from "lucide-react";

export default function CredentialsSignInForm({
  callbackUrl = "/profile",
}: {
  callbackUrl: string;
}) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  async function handleSumbit(evt: React.FormEvent<HTMLFormElement>) {
    evt.preventDefault();
    setError("");
    const formData = new FormData(evt.currentTarget);
    const email = String(formData.get("email"));
    const password = String(formData.get("password"));
    //Comprobaciones de los campos del formulario
    if (!password || !email) return;

    setIsLoading(true);
    await authClient.signIn.email(
      {
        email,
        password,
        callbackURL: callbackUrl,
      },
      {
        onRequest: () => {},
        onResponse: () => {},
        onError: (ctx) => {
          console.log(ctx.error.message);
          setError(ctx.error.message || "Error al iniciar sesión");
          setIsLoading(false);
        },
        onSuccess: () => {
          console.log("Login correcto");
          setError("");
        },
      },
    );
  }
  return (
    <form onSubmit={handleSumbit}>
      <div className="space-y-6">
        <div>
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            type="text"
            defaultValue={signUpDefaultValues.email}
            required
          />
        </div>
        <div>
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            name="password"
            type="password"
            defaultValue={signUpDefaultValues.password}
            required
          />
        </div>
        <div>
          <Button className="w-full" type="submit" disabled={isLoading}>
            {isLoading ? (
              <>
                <Loader2 className="animate-spin" />
                Iniciando sesión...
              </>
            ) : (
              "Sign In"
            )}
          </Button>
        </div>

        {error && (
          <p className="text-destructive text-sm font-medium">{error}</p>
        )}
      </div>
    </form>
  );
}
