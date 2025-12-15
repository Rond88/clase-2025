import React from 'react'
import { getProductBySlug } from '@/lib/actions/product.actions';
import { notFound } from 'next/navigation';

export default async function ProductDetailsPage({
    params
}:{
    params: Promise<{slug:string}>
}) {
    const { slug } = await params;
    const product = await getProductBySlug(slug);
    if(!product) notFound();
  return (
    <>
      <section className='grid grid-cols-4 md:grid-cols-5'>
        {/* Product Images x2*/}
        {/* Columna detalles x2*/}
        {/* Columna acciones x1 */}

      </section>
    </>
  )
}
