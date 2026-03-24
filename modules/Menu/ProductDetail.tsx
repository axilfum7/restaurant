"use client" 

import { HeaderContent } from '@/components'
import { Basket, Belgi, Carousel2, Carousel3 } from '@/icons'
import Image from 'next/image'
import { useParams } from 'next/navigation'
import { useState } from 'react'

const ProductDetail = () => {
  const params = useParams()
  const { id } = params // URL dan kelgan ID: /product/1 bo'lsa, id = 1 bo'ladi
  
  const [count, setCount] = useState(1)

  const similarItems = Array(4).fill({
    name: "Chicken soup",
    price: "$10.00",
    desc: "Spicy with garlic",
    img: "/images/burger3.png" 
  })

  return (
    <main className="relative min-h-screen w-full pt-4 pb-24 overflow-x-hidden">
      {/* 1. Fon rasmi */}
      <div className="fixed inset-0 z-0 w-full h-full">
        <Image 
          src="/images/Rectangle 1.png" 
          alt="background pizza" 
          fill 
          className="object-cover opacity-80" 
          quality={100} 
          priority 
          unoptimized 
        />
      </div>

      <div className="containers relative z-10">
        <div className="relative w-full px-6 md:px-16 py-10 bg-[#FFFFFF66] backdrop-blur-[30px] rounded-[60px] border border-white/40 shadow-2xl">
          
          <div className="mb-10"><HeaderContent /></div>

          {/* Breadcrumbs */}
          <div className="flex items-center gap-1 text-sm mt-12 mb-12 font-Gilroy-Regular text-black">
            <span className="opacity-50">Главная</span>
            <div className="scale-75 opacity-40"><Belgi /></div>
            <span className="opacity-50">Меню</span>
            <div className="scale-75 opacity-40"><Belgi /></div>
            <span className="font-bold text-[#FF3D00]">Бургер</span>
          </div>

          <h1 className="text-[48px] font-black text-center mb-16 font-gilroyBold text-black uppercase">Бургер</h1>

          {/* Mahsulot asosiy qismi */}
          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-20 mb-10">
            <div className="w-full lg:w-1/2 flex justify-center relative">
               <div className="w-[320px] h-80 md:w-[500px] md:h-[500px] relative drop-shadow-[0_35px_35px_rgba(0,0,0,0.3)]">
                  <Image src="/images/BigBurger.png" alt="Double Burger" fill className="object-contain" quality={100} />
               </div>
            </div>

            <div className="w-full lg:w-1/2">
              <h2 className="text-[40px] md:text-[52px] font-black mb-4 font-gilroyBold text-black uppercase leading-none">
                Дабл бургер {id}
              </h2>
              <div className="flex items-center gap-4 mb-8">
                <span className="text-[32px] font-black text-black">4.00$</span>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className={i < 4 ? "text-[#FFD903] text-2xl" : "text-gray-400 text-2xl"}>★</span>
                  ))}
                </div>
              </div>
              <div className="mb-10 text-black">
                <h3 className="text-[24px] font-bold mb-4 font-gilroyBold">Описание:</h3>
                <p className="text-[17px] leading-relaxed opacity-80 font-Gilroy-Regular max-w-125">
                  Bu mazali burger maxsus tayyorlangan go'sht va yangi sabzavotlardan iborat. Dynamic ID: {id}
                </p>
              </div>

              {/* Counter va Savat tugmasi */}
              <div className="flex items-center gap-6">
                <div className="flex items-center bg-white/50 rounded-2xl border border-black/5 overflow-hidden backdrop-blur-md text-black">
                  <button 
                    onClick={() => count > 1 && setCount(count - 1)}
                    className="px-6 py-4 text-2xl font-bold hover:bg-black/5 transition-colors"
                  >
                    -
                  </button>
                  <span className="px-4 py-4 font-bold text-xl min-w-[50px] text-center">{count}</span>
                  <button 
                    onClick={() => setCount(count + 1)}
                    className="px-6 py-4 text-2xl font-bold hover:bg-black/5 transition-colors"
                  >
                    +
                  </button>
                </div>
                <button className="bg-black text-white px-12 py-5 rounded-[20px] font-bold uppercase text-[15px] hover:bg-[#FFD903] hover:text-black transition-all shadow-2xl active:scale-95">
                  В корзину
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* O'xshash mahsulotlar */}
      <div className="max-w-325 mx-auto px-5 relative z-10 mt-32">
        <h2 className="text-[32px] font-black mb-16 font-Gilroy-Bold text-black uppercase">Похожие:</h2>
        
        <div className="relative px-4">
          {/* Carousel tugmalari */}
          <button className="absolute -left-4 md:-left-16 top-1/2 -translate-y-1/2 z-20 w-12 h-12 flex items-center justify-center border border-black/10 rounded-full bg-white hover:bg-black group transition-all duration-300 shadow-lg">
            <span className="group-hover:invert transition-all"><Carousel3 /></span>
          </button>
          <button className="absolute -right-4 md:-right-16 top-1/2 -translate-y-1/2 z-20 w-12 h-12 flex items-center justify-center border border-black/10 rounded-full bg-white hover:bg-black group transition-all duration-300 shadow-lg">
            <span className="group-hover:invert transition-all"><Carousel2 /></span>
          </button>

          {/* Grid mahsulotlar */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-32">
            {similarItems.map((item, index) => (
              <div key={index} className="bg-[#FFFFFF66] backdrop-blur-md rounded-[45px] p-8 pt-12 relative flex flex-col items-center group transition-all duration-500 hover:shadow-2xl border border-white/30">
                <div className="w-44 h-44 absolute -top-20 left-1/2 -translate-x-1/2 drop-shadow-2xl transition-transform duration-500 group-hover:scale-110">
                  <Image src={item.img} alt={item.name} fill className="object-contain" /> 
                </div>
                
                <div className="w-full mt-16">
                  <h3 className="text-[22px] font-bold text-black mb-1 font-gilroyBold">{item.name}</h3>
                  <p className="text-[14px] text-black/50 mb-6 font-Gilroy-Regular leading-tight">{item.desc}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-[22px] font-black text-black font-gilroyBold">{item.price}</span>
                    <button className="bg-black text-white p-3.5 rounded-[14px] hover:bg-[#FFD903] hover:text-black transition-all shadow-md active:scale-90">
                      <Basket />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}

export default ProductDetail