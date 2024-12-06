"use client"
import { instance } from "@/hook/instance"
import { useEffect, useState } from "react"

interface CategoryType {
  id: number
  name: string
  createdAt?: string
  lastUpdateAt?: string
}

export const useCategories = () => {
  const [categories, setCategories] = useState<CategoryType[]>([])

  useEffect(() => {
    instance().get("/category/search").then((res) => {
        setCategories(res.data.data.categories)
      })
  }, [])

  return categories
}
