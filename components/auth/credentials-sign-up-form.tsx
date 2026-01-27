"use client";
import { Label } from "@radix-ui/react-label";
import React, { useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { signUpDefaultValues } from "@/lib/constantes";
import { authClient } from "@/lib/auth-client";

export default function CredentialsSignUpForm() {
  const [error, setError] = useState("");

  async function handleSubmit(evt: React.FormEvent<HTMLFormElement>) {
    evt.preventDefault();
    setError(""); // Limpiar error anterior
    const formData = new FormData(evt.currentTarget);
    const name = String(formData.get("name"));
    const email = String(formData.get("email"));
    const password = String(formData.get("password"));
    const phone = String(formData.get("phone"));
    const confirmPassword = String(formData.get("confirmPassword"));
    const agreeToTerms = String(formData.get("agreeToTerms"));
    //Comprobaciones de los campos del formulario
    if (!name || !password || !email) {
      console.log("Faltan campos obligatorios");
      setError("Faltan campos obligatorios");
      return;
    }

    if (password !== confirmPassword) {
      console.log("Las contraseñas no coinciden");
      // mensaje de error si las contraseñas no coinciden
      setError("Las contraseñas no coinciden");
      return;
    }
    if (agreeToTerms !== "on") {
      console.log("Debe aceptar los términos y condiciones");
      setError("Debe aceptar los términos y condiciones");
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
            setError(ctx?.error?.message || "Error al registrarse");
          },
          onSuccess: () => {
            console.log("Registro correcto");
            setError(""); // Limpiar error en éxito
          },
        },
      );
    } catch (err) {
      console.error("Error inesperado al registrarse:", err);
      setError("Error inesperado al registrarse");
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
          <Label htmlFor="confirmPassword">Confirm Password</Label>
          <Input
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            required
          />
        </div>
        {/* términos y condiciones */}
        <div className="flex items-center space-x-2">
          <input
            id="agreeToTerms"
            name="agreeToTerms"
            type="checkbox"
            
          />
          <Label htmlFor="agreeToTerms" className="text-sm">
            I agree to the Terms and conditions
          </Label>
        </div>
        {/* Método de recibir comunicaciones */}
        <div>
          <Label htmlFor="communications">How do you want to receive communications?</Label>
          
        </div>
        <div>
          <Button className="w-full" type="submit">
            Sign Up
          </Button>
        </div>

        {error && <p className="text-red-600 text-sm font-medium">{error}</p>}
      </div>
    </form>
  );
}
