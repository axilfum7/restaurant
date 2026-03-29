"use client"
import { HeaderContent } from '@/components'
import { Basket, Belgi, LikeIcon } from '@/icons'
import Image from 'next/image'
import Link from 'next/link'
import { useCart } from '@/context/CartContext' // 1. Context-ni import qildik

const MenuPage = () => {
  const { addToCart } = useCart(); // 2. Qo'shish funksiyasini olamiz

  const categories = ["Первое", "Вторые", "Салаты", "Напитки", "Фаст-Фуд"]
  
  const menuItems = Array(12).fill(null).map((_, index) => ({
    id: index + 1,
    name: "Chicken soup",
    // Narxni raqam formatida yozish hisob-kitob uchun yaxshi
    price: 10000, 
    desc: "Spicy with garlic",
    img: "/images/2food.png" 
  }))

  return (
    <main className="relative min-h-screen pt-10 pb-20 overflow-hidden">
      <div className="fixed inset-0 z-[-3] opacity-20 pointer-events-none">
        <Image src="/images/pizza.png" alt="bg" fill className="object-cover blur-[100px] scale-150" />
      </div>

      <div className="containers relative">
        <div className="absolute inset-0 z-[-1] bg-white/40 backdrop-blur-[35px] rounded-[60px] border border-white/30 shadow-2xl"></div>

        <div className="px-5 md:px-17.5 py-10 relative z-10">
          <div className="mb-20"><HeaderContent /></div>

          <div className="flex items-center gap-1 text-sm mb-12 font-Gilroy-Regular text-[#000000]">
                      <span className="opacity-50">Главная</span>
                      <div className="scale-75 opacity-40">
                        <Belgi />
                      </div>
                      <span className="font-bold text-[#000000]">menu</span>
                    </div>

          <h1 className="text-[56px] font-black text-center mb-16 uppercase font-gilroyBold text-black">Меню</h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-32">
            {menuItems.map((item, index) => (
              <div key={index} className="relative group">
                <div>
                  <div className="bg-[#FFFFFF66] backdrop-blur-md rounded-[45px] p-8 pt-12 relative flex flex-col items-center transition-all duration-500 hover:shadow-[0_30px_60px_rgba(0,0,0,0.08)] border border-white/20 h-full">
                    
                    <Link href={`/product/${item.id}`} className="w-48 h-48 absolute -top-24 left-1/2 -translate-x-1/2 drop-shadow-2xl transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
                      <Image src={item.img} alt={item.name} fill className="object-contain" />
                    </Link>

                    <div className="w-full mt-14">
                      <Link href={`/product/${item.id}`}>
                        <h3 className="text-[22px] font-bold text-black mb-1 font-gilroyBold">{item.name}</h3>
                      </Link>
                      <p className="text-[14px] text-[#A5A5A5] mb-6 leading-tight font-gilroyRegular">{item.desc}</p>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-[22px] font-black text-black font-gilroyBold">
                          {item.price.toLocaleString()} UZS
                        </span>
                        
                        {/* SAVAT TUGMASI - DIZAYN O'ZGARMADI, FUNKSIYA QO'SHILDI */}
                        <button 
                          onClick={(e) => {
                            e.preventDefault(); // Sahifa o'tib ketmasligi uchun
                            addToCart({
                              id: item.id,
                              title: item.name,
                              price: item.price,
                              image: item.img,
                              description: item.desc
                            });
                          }}
                          className="bg-black text-white p-3.5 rounded-[15px] transition-all duration-500 hover:bg-[#FFD903] hover:text-black shadow-lg shadow-black/10 z-20 cursor-pointer active:scale-90"
                        >
                          <Basket />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <button className="absolute right-7 top-7 z-20 text-[#E2E2E2] hover:text-red-500 transition-colors">
                  <LikeIcon />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}

export default MenuPage