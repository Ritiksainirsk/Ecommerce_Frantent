import React from 'react'
import ProductDetail from '../componant/product/productDetail'
import { useRouter } from "next/router";

export default function product() {
  const router = useRouter()
  const id = router.query.product

  return (
    <div>
      <ProductDetail id={id}/>
    </div>
  )
}
