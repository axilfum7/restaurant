"use client"
import { Basket, LikeIcon, Logo } from '@/icons'
import Link from 'next/link'
import BageAction from './BageAction'
import { useCart } from '@/context/CartContext' // Context-ni import qilamiz

const HeaderContent = () => {
  // Context-dan savatdagi mahsulotlarni olamiz
  const { cartItems } = useCart();
  
  // Mahsulotlar sonini hisoblaymiz
  const cartCount = cartItems?.length || 0;

  const navList = [
    {id: 1, title: "Меню", path: "/menu"},
    {id: 2, title: "Новости", path: "/news"},
    {id: 3, title: "Бронирование", path: "/booking"},
    {id: 4, title: "О нас", path: "/about"},
    {id: 5, title: "Контакты", path: "/contact"}
  ]

  return (
    <div className='flex items-center justify-between'>
      <Link href="/">
        <Logo />
      </Link>
      
      <nav className='flex items-center gap-10.75'>
        {navList.map((item) => (
          <Link 
            key={item.id} 
            href={item.path}
            className='text-[18px] font-gilroyMedium leading-[150%] text-black hover:text-[#FFD903] transition-all duration-300'
          >
            {item.title}
          </Link>
        ))}
      </nav>

      <div className='flex items-center gap-6.25'>
        <BageAction icon={<LikeIcon />} />
        
        <Link href="/cart">
          {/* Savat raqami endi real vaqtda (real-time) o'zgaradi */}
          <BageAction icon={<Basket />} count={cartCount} />
        </Link>
      </div>
    </div>
  )
}

export default HeaderContent