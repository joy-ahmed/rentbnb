'use client'
import Image from "next/image"
import { useRouter } from "next/navigation"
import BrandIcon from '/public/static/images/brand.png'

const Logo = () => {
  return (
    <Image src={BrandIcon} alt="logo" className="hidden md:block cursor-pointer" height='100' width='100' />
  )
}

export default Logo