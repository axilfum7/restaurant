"use client"
import { useParams } from 'next/navigation'
import { HeaderContent } from '@/components'
import { Basket, Belgi, Carousel2, Carousel3 } from '@/icons'
import Image from 'next/image'
import Link from 'next/link'
import { useState, useRef } from 'react' // 1. Hooklarni import qildik

const ProductPage = () => {
  const params = useParams()
  const id = params?.id 

  // --- COUNTER LOGIKASI ---
  const [count, setCount] = useState(1) // Boshlang'ich qiymat 1

  const increment = () => setCount(prev => prev + 1)
  const decrement = () => {
    if (count > 1) setCount(prev => prev - 1) // 1 dan kamaymasligi uchun
  }

  // --- CAROUSEL LOGIKASI ---
  const scrollRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current
      // clientWidth - bu ekranda ko'rinib turgan qismning kengligi
      const scrollTo = direction === 'left' 
        ? scrollLeft - clientWidth 
        : scrollLeft + clientWidth
      
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' })
    }
  }

  const currentProduct = { name: "Дабл бургер", price: 4.00, description: "Эти двусторонние шелковые брюки с запахом икат сочетают в себе универсальность двух потрясающих рисунков ткани.", img: "/images/BigBurger.png"}

  const similarItems = Array(8).fill({ name: "Chicken soup", price: "$10.00", desc: "Spicy with garlic", img: "/images/burger3.png"})

  return (
    <main className="relative min-h-screen w-full pt-4 pb-24 overflow-x-hidden">
      
      {/* FON RASMI */}
      <div className="fixed inset-0 z-0 w-full h-full">
        <Image  src="/images/Rectangle 1.png"  alt="background" fill className="object-cover opacity-80"  quality={100} priority unoptimized/>
      </div>

      <div className="containers relative z-10 text-black">
        <div className="relative w-full px-6 md:px-16 py-10 bg-[#FFFFFF66] backdrop-blur-[30px] rounded-[60px] border border-white/40 shadow-2xl">
          
          <HeaderContent />

          {/* Breadcrumbs */}
          <div className="flex items-center gap-1 text-sm mt-12 mb-12 font-Gilroy-Regular">
            <Link href="/" className="opacity-50 hover:opacity-100 transition-opacity">Главная</Link>
            <div className="scale-75 opacity-40"><Belgi /></div>
            <Link href="/menu" className="opacity-50 hover:opacity-100 transition-opacity">Меню</Link>
            <div className="scale-75 opacity-40"><Belgi /></div>
            <span className="font-bold text-[#FF3D00] uppercase">{currentProduct.name}</span>
          </div>

          <h1 className="text-[48px] font-black text-center mb-16 font-gilroyBold uppercase tracking-tighter">
            {currentProduct.name}
          </h1>

          {/* PRODUCT MAIN CONTENT */}
          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-20 mb-10">
            <div className="w-full lg:w-1/2 flex justify-center relative">
               <div className="w-[320px] h-80 md:w-125 md:h-125 relative drop-shadow-[0_35px_35px_rgba(0,0,0,0.3)]">
                  <Image src={currentProduct.img} alt={currentProduct.name} fill className="object-contain" quality={100} />
               </div>
            </div>

            <div className="w-full lg:w-1/2">
              <h2 className="text-[40px] md:text-[52px] font-black mb-4 font-gilroyBold uppercase leading-none">{currentProduct.name}</h2>
              <div className="flex items-center gap-4 mb-8">
                {/* Narxni miqdorga ko'paytirib chiqarish */}
                <span className="text-[36px] font-black">{(currentProduct.price * count).toFixed(2)}$</span>
                <div className="flex items-center gap-1 text-[#FFD903] text-2xl">★★★★<span className="text-gray-400">★</span></div>
              </div>
              
              <div className="mb-10">
                <h3 className="text-[24px] font-bold mb-4 font-gilroyBold">Описание:</h3>
                <p className="text-[17px] leading-relaxed opacity-80 max-w-125">
                  {currentProduct.description} (ID: {id})
                </p>
              </div>

              {/* COUNTER QISMI */}
              <div className="flex items-center gap-6">
                <div className="flex items-center bg-white/50 rounded-2xl border border-black/5 overflow-hidden backdrop-blur-md select-none">
                  <button  onClick={decrement} className="px-6 py-4 text-2xl font-bold hover:bg-black/10 transition-all active:scale-90">-
                  </button>
                  <span className="px-4 py-4 font-bold text-xl min-w-12.5 text-center">{count}</span>
                  <button onClick={increment}className="px-6 py-4 text-2xl font-bold hover:bg-black/10 transition-all active:scale-90">
                    +
                  </button>
                </div>
                <button className="bg-black text-white px-12 py-5 rounded-[20px] font-bold uppercase hover:bg-[#FFD903] hover:text-black transition-all shadow-2xl active:scale-95">
                  В корзину
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CAROUSEL (ПОХОЖИЕ) */}
      <div className="max-w-325 mx-auto px-5 relative z-10 mt-32">
        <h2 className="text-[32px] font-black mb-16 font-Gilroy-Bold text-black uppercase tracking-tight">Похожие:</h2>
        
        <div className="relative group">
          {/* Chapga tugmasi */}
          <button 
            onClick={() => scroll('left')}
            className="absolute -left-4 md:-left-16 top-1/2 -translate-y-1/2 z-20 w-12 h-12 flex items-center justify-center border border-black/10 rounded-full bg-white hover:bg-black group transition-all duration-300 shadow-lg active:scale-90">
            <span className="group-hover:invert"><Carousel3 /></span>
          </button>

          {/* O'ngga tugmasi */}
          <button 
            onClick={() => scroll('right')}
            className="absolute -right-4 md:-right-16 top-1/2 -translate-y-1/2 z-20 w-12 h-12 flex items-center justify-center border border-black/10 rounded-full bg-white hover:bg-black group transition-all duration-300 shadow-lg active:scale-90"
          >
            <span className="group-hover:invert"><Carousel2 /></span>
          </button>

          {/* Scroll Container */}
          <div 
            ref={scrollRef}
            className="flex overflow-x-auto gap-8 scroll-smooth no-scrollbar pb-10 pt-20"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {similarItems.map((item, index) => (
              <div 
                key={index} 
                className="min-w-full sm:min-w-[calc(50%-16px)] lg:min-w-[calc(25%-24px)] shrink-0"
              >
                <div className="bg-[#FFFFFF66] backdrop-blur-md rounded-[45px] p-8 pt-12 relative flex flex-col items-center group transition-all duration-500 hover:shadow-2xl border border-white/30 h-full">
                  <div className="w-44 h-44 absolute -top-20 left-1/2 -translate-x-1/2 drop-shadow-2xl transition-transform duration-500 group-hover:scale-110">
                    <Image src={item.img} alt={item.name} fill className="object-contain" /> 
                  </div>
                  <div className="w-full mt-16 text-black">
                    <h3 className="text-[22px] font-bold font-gilroyBold leading-tight">{item.name}</h3>
                    <p className="text-[14px] opacity-50 mb-6 font-Gilroy-Regular">{item.desc}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-[22px] font-black font-gilroyBold">{item.price}</span>
                      <button className="bg-black text-white p-3.5 rounded-[14px] hover:bg-[#FFD903] hover:text-black transition-all shadow-md active:scale-90">
                        <Basket />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scrollbar-ni yashirish uchun global CSS */}
      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </main>
  )
}

export default ProductPage