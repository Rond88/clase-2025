import React from 'react'
import { getProductBySlug } from '@/lib/actions/product.actions';

export default async function ProductDetailsPage({
    params
}:{
    params: Promise<{slug:string}>
}) {
    const { slug } = await params;
    const product = await getProductBySlug(slug);
  return (
    <div>
      Detalles del producto: {slug}
      <p>{product?.description}</p>
    </div>
  )
}
