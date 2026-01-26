
"use client";
import { Label } from "@radix-ui/react-label";
import React from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { signUpDefaultValues } from "@/lib/constantes";
import { authClient } from "@/lib/auth-client";

export default function CredentialsSignUpForm() {
  async function handleSubmit(evt: React.FormEvent<HTMLFormElement>) {
    evt.preventDefault();
    const formData = new FormData(evt.currentTarget);
    const name = String(formData.get("name"));
    const email = String(formData.get("email"));
    const password = String(formData.get("password"));
    const phone = String(formData.get("phone"));
    //Comprobaciones de los campos del formulario
    if (!name || !password || !email) {
      console.log("Faltan campos obligatorios");
      return;
    }

    console.log("Registro");
    try {
      await authClient.signUp.email(
        {
          email,
          password,
          name,
          // enviar phone si viene (es optional en el auth)
          ...(phone ? { phone } : {}),
        },
        {
          onRequest: () => {},
          onResponse: () => {},
          onError: (ctx) => {
            console.log("Sign up error:", ctx?.error?.message ?? ctx);
          },
          onSuccess: () => {
            console.log("Registro correcto");
          },
        },
      );
    } catch (err) {
      console.error("Error inesperado al registrarse:", err);
    }
  }
  return (
    <form onSubmit={handleSubmit}>
      <div className="space-y-6">
        <div>
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            name="name"
            type="text"
            defaultValue={signUpDefaultValues.name}
            required
          />
        </div>
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
          <Label htmlFor="phone">
            Phone <span className="text-muted-foreground">(Optional)</span>
          </Label>
          <Input
            id="phone"
            name="phone"
            type="text"
            defaultValue={signUpDefaultValues.phone}
            // optional: no debe ser required
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
          <Button className="w-full" type="submit">
            Sign Up
          </Button>
        </div>
      </div>
    </form>
  );
}
