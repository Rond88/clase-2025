import React from 'react'
import ProductList from '@/components/shared/product/product-list'
import { getALatestProducts } from '@/lib/actions/product.actions'
import { Product } from '@/types/Product';

export default async function HomePage() {
  const data= await getALatestProducts() as unknown as Product[];
  return (
    <div className='wrapper'>
      <ProductList data={data} title='Mi lista' limit={4} />
    </div>
  )
}
