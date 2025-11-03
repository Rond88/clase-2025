'use client'
import React from 'react'
import  Image from 'next/image'
import { APP_NAME } from '@/lib/constantes'
import { Button } from '@/components/ui/button'

export default function NotFound() {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen'>
        <Image src={"/images/logo.svg"} alt={`Logo ${APP_NAME}`} width={48} height={48} />
        <div className='p-6 rounded-lg shadow-md text-center'>
            <h1>Not found</h1>
        </div>
        <Button variant="outline" className='mt-4 ml-2' onClick={() => window.location.href = '/'}>Go back</Button>
    </div>
  )
}
