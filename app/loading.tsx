import React from 'react';
import Image from 'next/image';
import spinergif from '@/assets/loader.gif';


export default function MainLoading() {
  return (
    <div
    /**style */>
      <Image src={spinergif} alt="Loading..." />
    </div>
  )
}
