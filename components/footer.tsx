import React from 'react'
import { APP_NAME } from '@/lib/constantes'

export default function Footer() {
    const currentYear = new Date().getFullYear();
  return (
    <div>
      <h1>{APP_NAME}</h1>
      <div id='footer' className='border-t'>
      <p>&copy; {currentYear}</p>

      </div>
    </div>
  )
}
