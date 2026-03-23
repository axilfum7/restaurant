"use client"
import { Basket, LikeIcon, Logo } from '@/icons'
import Link from 'next/link'
import BageAction from './BageAction'

const HeaderContent = () => {
  const navList = [
    {id:1, title:"Меню", path:"/menu"},
    {id:2, title:"Новости", path:"/news"},
    {id:3, title:"Бронирование", path:"/booking"},
    {id:4, title:"О нас", path:"/about"},
    {id:5, title:"Контакты", path:"/contact"}
  ]
  return (
    <div className='flex items-center justify-between'>
      <Link href={"/"}>
      <Logo/>
      </Link>
      <nav className='flex items-center gap-10.75'>
  {navList.map((item, index) => (
    <Link 
      key={index} 
      href={item.path}
      className='text-[18px] font-gilroyMedium leading-[150%] text-black hover:text-[#FFD903] transition-all duration-300'
    >
      {item.title}
    </Link>
  ))}
</nav>
      <div className='flex items-center gap-6.25'>
        <BageAction icon={<LikeIcon/>}/>
        <BageAction icon={<Basket/>} count={5}/>
        
      </div>
    </div>
  )
}

export default HeaderContent

