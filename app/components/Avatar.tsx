'use client'

import Image from "next/image"
import PlaceholderImg from '../../Images/placeholder.jpg'

const Avatar = () => {
  return (
    <Image className="rounded-full" height='30' width='30' alt="Avatar" src={PlaceholderImg} />
  )
}

export default Avatar