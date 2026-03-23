import { HeaderContent } from '@/components'
import { Basket, Belgi, LikeIcon } from '@/icons'
import Image from 'next/image'

const MenuPage = () => {
  const categories = ["Первое", "Вторые", "Салаты", "Напитки", "Фаст-Фуд"]
  
  const menuItems = Array(12).fill({
    name: "Chicken soup",
    price: "$10.00",
    desc: "Spicy with garlic",
    img: "/images/2food.png" 
  })

  return (
    <main className="relative min-h-screen pt-10 pb-20 overflow-hidden">
      <div className="fixed inset-0 z-[-3] opacity-20 pointer-events-none">
        <Image src="/images/pizza.png" alt="bg" fill className="object-cover blur-[100px] scale-150" />
      </div>

      <div className="containers relative">
        <div className="absolute inset-0 z-[-1] bg-white/40 backdrop-blur-[35px] rounded-[60px] border border-white/30 shadow-2xl"></div>

        <div className="absolute -left-20 lg:-left-28 top-10 z-0 pointer-events-none opacity-90">
          <Image src="/images/leaf3.png" alt="leaf" width={240} height={240} className="rotate-40 drop-shadow-2xl scale-110" />
        </div>
        <div className="absolute -left-16 bottom-[25%] z-0 pointer-events-none opacity-80">
          <Image src="/images/leaf3.png" alt="leaf" width={200} height={200} className="-rotate-20 drop-shadow-xl" />
        </div>

        <div className="absolute -right-16 top-[35%] z-0 pointer-events-none opacity-80">
          <Image src="/images/leaf2.png" alt="leaf" width={200} height={200} className="-rotate-25 drop-shadow-2xl" />
        </div>
        <div className="absolute left-1/2 top-[25%] -translate-x-1/2 z-0 pointer-events-none opacity-40">
          <Image src="/images/leaf.png" alt="leaf" width={300} height={300} className="rotate-90 blur-[2px]" />
        </div>

        <div className="px-5 md:px-17.5 py-10 relative z-10">
          
          <div className="mb-20"><HeaderContent /></div>

          <div className="flex items-center gap-1 text-sm mb-12 font-Gilroy-Regular text-[#000000]">
            <span className="opacity-50">Главная</span>
            <div className="scale-75 opacity-40"><Belgi /></div>
            <span className="font-bold text-[#000000]">Меню</span>
          </div>

          <h1 className="text-[56px] font-black text-center mb-16 uppercase tracking-tight font-gilroyBold text-black">Меню</h1>

          {/* categorylari */}
          <div className="flex flex-wrap justify-center gap-3 mb-32 bg-white/50 backdrop-blur-md p-2 rounded-full w-fit mx-auto border border-white/30 shadow-lg">
            {categories.map((cat, idx) => (
              <button key={idx}className={`px-10 py-3.5 rounded-full text-[15px] font-gilroySemiBold transition-all duration-500
                ${idx === 0 ? 'bg-white text-black shadow-md' : 'text-black/60 hover:bg-white/40'}`}>{cat}
              </button>
            ))}
          </div>

          {/* gri */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-32">
            {menuItems.map((item, index) => (
              <div key={index} className="bg-[#FFFFFF66] backdrop-blur-md rounded-[45px] p-8 pt-12 relative flex flex-col items-center group transition-all duration-500 hover:shadow-[0_30px_60px_rgba(0,0,0,0.08)] border border-white/20">
                <div className="w-48 h-48 absolute -top-24 left-1/2 -translate-x-1/2 drop-shadow-2xl transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6"><Image src={item.img} alt={item.name} fill className="object-contain" /></div>

                <button className="absolute right-7 top-7 text-[#E2E2E2] hover:text-red-500 transition-colors"><LikeIcon /></button>
                
                <div className="w-full mt-14">
                  <h3 className="text-[22px] font-bold text-black mb-1 font-gilroyBold">{item.name}</h3>
                  <p className="text-[14px] text-[#A5A5A5] mb-6 leading-tight font-gilroyRegular">{item.desc}</p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-[22px] font-black text-black font-gilroyBold">{item.price}</span>
                    <button className="bg-black text-white p-3.5 rounded-[15px] transition-all duration-500 hover:bg-[#FFD903] hover:text-black shadow-lg shadow-black/10">
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

export default MenuPage