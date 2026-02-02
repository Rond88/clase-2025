import React from 'react'
import { Product } from '@/types/Product'
import { Table, TableCaption, TableBody, TableCell, TableRow, TableHeader  } from '@/components/ui/table'

export default function ProductTable({products, totalPages=1, currentPage=1, pageSize=2}:
  {
    products: Product[],
    totalPages?: number,
    currentPage?: number,
    pageSize?: number,
  }
) {
  return (
    <div>
      
    </div>
  )
}
