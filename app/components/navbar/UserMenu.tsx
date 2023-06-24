'use client'

import {AiOutlineMenu} from "react-icons/ai"
import Avatar from "../Avatar"

const UserMenu = () => {
  return (
    <div className='relative'>
      <div className="flex flex-row items-center gap-3">
        <div onClick={() => console.log('clicked')} className='hidden md:block text-sm font-semibold py-3 px-4 rounded-full hover:bg-neutral-100 transition cursor-pointer'>
          Become a host
        </div>
        <div onClick={() => console.log('clicked')} className='p-4 md:py-1 md:px-2 border-[1px] border-neutral-20 rounded-full flex flex-row items-center gap-3 cursor-pointer hover:shadow-md transition'>
          <AiOutlineMenu />
          <div className="hideen md:block">
            <Avatar />
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserMenu