"use client"
import React from 'react'
import Image from 'next/image'

interface ProductCardProps {
  name: string
  price: string
  image: string
}

const ProductCard = ({name,price,image}: ProductCardProps) => {
  return (
    <div className="w-[310px] h-[98px] bg-[#67B43733] flex rounded-md items-center justify-center">
      <Image src={image} alt={name} width={110} height={50} />
      <div>
        <h3 className="font-bold text-[#0A1729]">{name}</h3>
        <p className="text-[#545D6A]">{price}</p>
      </div>
    </div>
  )
}

export default ProductCard
