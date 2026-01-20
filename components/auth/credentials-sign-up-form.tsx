"use client";
import { Label } from "@radix-ui/react-label";
import React from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { signUpDefaultValues } from "@/lib/constantes";
import { authClient } from "@/lib/auth-client";

export default function CredentialsSignUpForm() {
  async function handleSumbit(evt:React.FormEvent<HTMLFormElement>) {
    evt.preventDefault();
    const formData = new FormData(evt.currentTarget);
    const name = String(formData.get("name"));
    const email = String(formData.get("email"));
    const password = String(formData.get("password"));
    const phone = String(formData.get("phone"));
    //Comprobaciones de los campos del formulario
    if(!name || !password || !email) return;
    console.log("Registro")
    await authClient.signUp.email(
      {
        email,
        password,
        name
      },
      {
        onRequest: () => {},
        onResponse: () => {},
        onError: (ctx) => { console.log(ctx.error.message)},
        onSuccess: () => { console.log("Registro correcto")},
      }
    );
  }
  return (
    <form onSubmit={handleSumbit}>
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
          <Label htmlFor="phone">Phone <span className="text-muted-foreground">(Optional)</span></Label>
          <Input
            id="phone"
            name="phone"
            type="text"
            defaultValue={signUpDefaultValues.phone}
            required
          />
        </div>
        <div>
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            name="password"
            type="text"
            defaultValue={signUpDefaultValues.password}
            required
          />
        </div>
        <div>
          <Button className="w-full" type="submit">Sign Up</Button>
        </div>
      </div>
    </form>
  );
}