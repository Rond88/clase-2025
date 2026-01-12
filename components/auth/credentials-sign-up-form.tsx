"use client";
import React from 'react'
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from '../ui/button';
import { signUpDefaultValues } from '@/lib/constantes';

export default function CredentialsSignUpForm() {
  return (
    <form>
      <div className='space-y-6'>
        <div>
            <Label htmlFor='name'>Name</Label>
            <Input id='name' name='name' type='text' defaultValue={signUpDefaultValues.name} required></Input>
        </div>
        <div>
            <Label htmlFor='email'>Email</Label>
            <Input id='email' name='email' type='email' defaultValue={signUpDefaultValues.email} required></Input>
        </div>
        <div>
            <Label htmlFor='password'>Password</Label>
            <Input id='password' name='password' type='password' defaultValue={signUpDefaultValues.password} required></Input>
        </div>
        <div>
            <Button className='w-full'>Sign Up</Button>
        </div>
      </div>
    </form>
  )
}
