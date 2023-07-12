import React from 'react'
import Products from '../componant/product/products'
import { useRouter } from "next/router";

export default function keyword() {
    const route = useRouter()
    const keyword = route.query.keyword

  return (
    <div>
      <Products keyword={keyword}/>
    </div>
  )
}
