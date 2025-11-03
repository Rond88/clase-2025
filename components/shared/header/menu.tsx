import React from 'react';
import ModeToggle from './mode-toggle';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { EllipsisVertical, ShoppingCartIcon, UserIcon } from 'lucide-react';
import { Sheet, SheetTrigger } from '@/components/ui/sheet';

export default function MenuHeader() {
    return (
        <div className='flex justify-end gap-3'>
            <nav className='hidden md:flex max-w-xs gap-1'>
                <ModeToggle />

                <Button asChild variant={'ghost'}>
                    <Link href={"/cart"}>
                        <ShoppingCartIcon />Cart
                    </Link>
                </Button>
                <Button asChild variant={'ghost'}>
                    <Link href={"/sign-in"}>
                        <UserIcon />Sign-In
                    </Link>
                </Button>
            </nav>
            <nav className='md:flex '>
                <Sheet>
                    <SheetTrigger asChild className='align-middle'>
                        <EllipsisVertical/>

                    </SheetTrigger>
                    {/*  Faltan cosas*/}
                </Sheet>
                <ModeToggle />

               
            </nav>
        </div>
    )
}
