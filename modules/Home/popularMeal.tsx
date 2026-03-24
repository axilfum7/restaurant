"use client" // Hooklar ishlashi uchun shart
import { Basket, LikeIcon, Carousel, Carousel2, Carousel3 } from '@/icons'
import Image from 'next/image'
import Link from 'next/link'
import { useRef } from 'react' // 1. useRef ni import qildik

const PopularMeals = () => {
  // 2. Carousel uchun Ref yaratamiz
  const scrollRef = useRef<HTMLDivElement>(null)

  // 3. Surish funksiyasi
  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current
      const scrollTo = direction === 'left' 
        ? scrollLeft - clientWidth 
        : scrollLeft + clientWidth
      
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' })
    }
  }

  const meals = [
    { id: 1, name: "Chicken soup", price: "$10.00", desc: "Spicy with garlic", img: "/images/1food.png" },
    { id: 2, name: "Chicken soup", price: "$10.00", desc: "Spicy with garlic", img: "/images/2food.png" },
    { id: 3, name: "Chicken soup", price: "$10.00", desc: "Spicy with garlic", img: "/images/3food.png" },
    { id: 4, name: "Chicken soup", price: "$10.00", desc: "Spicy with garlic", img: "/images/4food.png" },
    { id: 5, name: "Chicken soup", price: "$10.00", desc: "Spicy with garlic", img: "/images/1food.png" },
    { id: 6, name: "Chicken soup", price: "$10.00", desc: "Spicy with garlic", img: "/images/2food.png" },
  ]

  return (
    <section className="py-32 relative overflow-hidden">
      {/* Barglar dekoratsiyasi o'z joyida */}
      <div className="absolute -left-16 top-50 z-0 pointer-events-none">
        <Image src="/images/leaf3.png" alt="leaf" width={260} height={260} className="opacity-100 rotate-30 drop-shadow-2xl scale-110" />
      </div>
      <div className="absolute right-0 top-25 z-0 pointer-events-none">
        <Image src="/images/leaf2.png" alt="leaf" width={250} height={250} className="opacity-100 -rotate-20 drop-shadow-[0_20px_50px_rgba(0,0,0,0.15)] scale-125" />
      </div>
      
      <div className="containers relative z-10">
        <h2 className="text-[40px] font-black text-center mb-32 uppercase tracking-tight text-black">Популярные блюда</h2>
        
        <div className="relative">
          {/* 4. Chapga tugmasi - onClick biriktirildi */}
          <button 
            onClick={() => scroll('left')}
            className="absolute -left-4 md:-left-12 top-1/2 -translate-y-1/2 z-20 w-12 h-12 flex items-center justify-center border border-black/10 rounded-full bg-white hover:bg-black group transition-all duration-300 shadow-lg active:scale-90"
          >
             <span className="group-hover:invert"><Carousel3 /></span>
          </button>

          {/* 5. Scroll bo'ladigan qism: grid o'rniga flex ishlatdik */}
          <div 
            ref={scrollRef}
            className="flex overflow-x-auto gap-8 no-scrollbar scroll-smooth pt-24 pb-10"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {meals.map((item) => (
              <div 
                key={item.id} 
                className="min-w-full sm:min-w-[calc(50%-16px)] lg:min-w-[calc(25%-24px)] shrink-0"
              >
                {/* Link qo'shildi - mahsulotga o'tish uchun */}
                <Link href={`/product/${item.id}`}>
                  <div className="bg-[#FFFFFF66] backdrop-blur-md rounded-[40px] p-7 pt-12 shadow-[0px_15px_40px_rgba(0,0,0,0.04)] relative flex flex-col items-center group transition-all duration-500 hover:shadow-[0px_30px_60px_rgba(0,0,0,0.08)] border border-white/20 h-full cursor-pointer">
                    
                    <div className="w-48 h-48 absolute -top-24 left-1/2 -translate-x-1/2 drop-shadow-2xl transition-transform duration-500 group-hover:scale-110">
                      <Image src={item.img} alt={item.name} fill className="object-contain" />
                    </div>

                    <button className="absolute right-7 top-7 z-10 text-[#E2E2E2] hover:text-red-500 transition-colors">
                      <LikeIcon />
                    </button>
                    
                    <div className="w-full mt-12 text-black">
                      <h3 className="text-[22px] font-bold mb-1 font-gilroyBold">{item.name}</h3>
                      <p className="text-[14px] text-[#A5A5A5] mb-6 leading-tight font-gilroyRegular">{item.desc}</p>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-[22px] font-black font-gilroyBold">{item.price}</span>
                        <div className="bg-black p-3.5 rounded-[15px] text-white transition-all duration-300 group-hover:bg-[#FFD903] group-hover:text-black">
                          <Basket />
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>

          {/* 6. O'ngga tugmasi - onClick biriktirildi */}
          <button 
            onClick={() => scroll('right')}
            className="absolute -right-4 md:-right-12 top-1/2 -translate-y-1/2 z-20 w-12 h-12 flex items-center justify-center border border-black/10 rounded-full bg-white hover:bg-black group transition-all duration-300 shadow-lg active:scale-90"
          >
             <span className="group-hover:invert"><Carousel2 /></span>
          </button>
        </div>

        <div className="mt-20 flex justify-end pr-4">
          <Link href="/menu">
            <button className="bg-black text-white px-10 py-4.5 rounded-xl flex items-center gap-4 hover:bg-[#FFD903] hover:text-black transition-all duration-300 font-bold uppercase text-[15px] tracking-wider">
              Посмотреть меню <Carousel />
            </button>
          </Link>
        </div>
      </div>

      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  )
}

export default PopularMeals