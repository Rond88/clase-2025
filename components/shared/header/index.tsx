import { ShoppingCart, User } from "lucide-react"
import Image from 'next/image'
import Link from 'next/link'
import MenuHeader from './menu'
import { APP_NAME } from '@/lib/constantes'

export default function Header() {
  return (
    <header className="w-full border-b">
        <div className="wrapper flex-between">
            <div className="flex-start">
                <Link href="/">
                    <Image src="/images/logo.svg" alt="Home" width={50} height={50}/>
                </Link>
                <span className="hidden lg:block font-bold text-2xl ml-3">
                    {APP_NAME}
                </span>
            </div>
            <div className="space-x-2">
                <MenuHeader />
            </div>
        </div>
    </header>
  )
}