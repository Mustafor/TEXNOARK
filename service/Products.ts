"use client"
import { instance } from "@/hook/instance"
import { useEffect, useState } from "react"

interface ProductsType {
  id: number
  name: string
  price: string
  rate: string
  images: string[]
  brand_id: number
}

export const useProducts = () => {
  const [products, setProducts] = useState<ProductsType[]>([])

  useEffect(() => {
    instance().get("/products/search").then((res) => {
        setProducts(res.data.data.products)
      })
  }, [])

  return products
}
