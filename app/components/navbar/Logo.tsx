import Image from "next/image"
import { useRouter } from "next/navigation"

const Logo = () => {
  return (
    <Image alt="logo" className="hidden md:block cursor-pointer" height='100' width='100' src={'/static/images/brand.png'} />
  )
}

export default Logo