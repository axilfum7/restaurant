import { LikeIcon } from '@/icons'
import { ReactNode } from 'react'

const BageAction = ({icon, count}:{icon:ReactNode, count?:number}) => {
  return (
    <button className='flex items-center relative justify-center w-8.25 h-8.25 rounded-full border-2 border-black duration-300 hover:border-[#ffd903] hover:text-[#ffd903] cursor-pointer'>
              {icon}
              {count && <span className="absolute inline-block w-3.25 h-3.25 bg-[#FF0000] rounded-full text-[10px] text-white -top-1 -right-1" >{count}</span>}
              
            </button>
  )
}

export default BageAction