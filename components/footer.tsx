import React from 'react'
import { APP_NAME } from '@/lib/constantes'

export default function Footer() {
    const currentYear = new Date().getFullYear();
  return (
     <footer id="footer" className="border-t">
        <div className="p-5 flex-center">
            {currentYear} {APP_NAME}. Todos los derechos reservados.
        </div>
    </footer>
  )
}
