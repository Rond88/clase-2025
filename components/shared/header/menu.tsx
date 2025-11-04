import ModeToggle from './mode-toggle'
import { Button } from '@/components/ui/button'
import { EllipsisVertical, ShoppingCart, User } from 'lucide-react'
import Link from 'next/link'
import {
    Sheet,
    SheetContent,
    SheetTitle,
    SheetTrigger,
} from '@/components/ui/sheet'

export default function MenuHeader() {
  return (
    <div className="flex justify-end gap-3">
        <nav className='hidden md:flex max-w-xs gap-1'>
            <ModeToggle />
            <Button asChild variant={"ghost"}>
                <Link href="/cart">
                    <ShoppingCart/>Cart
                </Link>
            </Button>
            <Button asChild variant={"ghost"}>
                <Link href="/sign-in">
                    <User/>Sign-in
                </Link>
            </Button>
        </nav>
        <nav className='md:hidden'>
            <Sheet>
                <SheetTrigger className="align-middle">
                    <EllipsisVertical />
                </SheetTrigger>
                <SheetContent className='flex flex-col items-start p-4 max-w-xs'>
                    <SheetTitle>Menú</SheetTitle>
                    <ModeToggle />
                    <Button asChild variant={"ghost"}>
                        <Link href="/cart">
                            <ShoppingCart/>Cart
                        </Link>
                    </Button>
                    <Button asChild variant={"ghost"}>
                        <Link href="/sign-in">
                            <User/>Sign-in
                        </Link>
                    </Button>
                </SheetContent>
            </Sheet>
        </nav>
    </div>
  )
}