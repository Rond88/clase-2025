'use client'
import React from 'react'
import { authClient } from '@/lib/auth-client';
import { Button } from '../ui/button';

export default function SignOutButton() {
  return (
    <Button onClick={() => authClient.signOut()}>
      Sign Out
    </Button>
  )
}
