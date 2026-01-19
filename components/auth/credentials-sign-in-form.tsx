"use client";
import React from 'react'
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from '../ui/button';
import { signUpDefaultValues } from '@/lib/constantes';
import { authClient } from '@/lib/auth-client';

export default function CredentialsSignUpForm() {

  async function handleSubmit(evt: React.FormEvent<HTMLFormElement>) {
    evt.preventDefault();
    const formData = new FormData(evt.currentTarget);
    const email = String(formData.get("email"));
    const password = String(formData.get("password"));
    // comprobación de los campos del formulario
    if(!email || !password) return;

    await authClient.signIn.email(
      {
        email,
        password,
        callbackURL: "/profile"
      },
      {
        onRequest:() => {},
        onResponse:() => {},
        onError: (ctx) => {console.log(ctx.error.message)},
        onSuccess: () => {console.log("Registro correcto")}
      }
    )
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className='space-y-6'>
        <div>
            <Label htmlFor='email'>Email</Label>
            <Input id='email' name='email' type='email' defaultValue={signUpDefaultValues.email} required></Input>
        </div>
        <div>
            <Label htmlFor='password'>Password</Label>
            <Input id='password' name='password' type='password' defaultValue={signUpDefaultValues.password} required></Input>
        </div>
        <div>
            <Button className='w-full' type='submit'>Sign In</Button>
        </div>
      </div>
    </form>
  )
}
