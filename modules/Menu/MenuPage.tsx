// modules/Menu/index.tsx (yoki sizda qaysi fayl bo'lsa)
import { HeaderContent } from '@/components'
import { Basket, Belgi, LikeIcon } from '@/icons'
import Image from 'next/image'
import Link from 'next/link' // 1. Linkni import qiling

const MenuPage = () => {
  const categories = ["Первое", "Вторые", "Салаты", "Напитки", "Фаст-Фуд"]
  
  // Ma'lumotlarga ID qo'shdik, chunki har bir Linkga ID kerak
  const menuItems = Array(12).fill(null).map((_, index) => ({
    id: index + 1, // Har biriga alohida ID (1, 2, 3...)
    name: "Chicken soup",
    price: "$10.00",
    desc: "Spicy with garlic",
    img: "/images/2food.png" 
  }))

  return (
    <main className="relative min-h-screen pt-10 pb-20 overflow-hidden">
      {/* Fon rasmlari va Leaf dekoratsiyalari o'z joyida qoladi... */}
      <div className="fixed inset-0 z-[-3] opacity-20 pointer-events-none">
        <Image src="/images/pizza.png" alt="bg" fill className="object-cover blur-[100px] scale-150" />
      </div>

      <div className="containers relative">
        <div className="absolute inset-0 z-[-1] bg-white/40 backdrop-blur-[35px] rounded-[60px] border border-white/30 shadow-2xl"></div>
        {/* ... boshqa barglar (leaf) kodi ... */}

        <div className="px-5 md:px-17.5 py-10 relative z-10">
          <div className="mb-20"><HeaderContent /></div>

          {/* Breadcrumbs va H1 o'z joyida... */}
          <h1 className="text-[56px] font-black text-center mb-16 uppercase font-gilroyBold text-black">Меню</h1>

          {/* Kategoriyalar... */}

          {/* Grid qismi - O'ZGARISH SHU YERDA */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-32">
            {menuItems.map((item, index) => (
              <div key={index} className="relative group">
                
                {/* 2. BUTUN KARTANI LINK BILAN O'RAYMIZ */}
                <Link href={`/product/${item.id}`}>
                  <div className="bg-[#FFFFFF66] backdrop-blur-md rounded-[45px] p-8 pt-12 relative flex flex-col items-center transition-all duration-500 hover:shadow-[0_30px_60px_rgba(0,0,0,0.08)] border border-white/20 cursor-pointer h-full">
                    
                    {/* Mahsulot rasmi */}
                    <div className="w-48 h-48 absolute -top-24 left-1/2 -translate-x-1/2 drop-shadow-2xl transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
                      <Image src={item.img} alt={item.name} fill className="object-contain" />
                    </div>

                    <div className="w-full mt-14">
                      <h3 className="text-[22px] font-bold text-black mb-1 font-gilroyBold">{item.name}</h3>
                      <p className="text-[14px] text-[#A5A5A5] mb-6 leading-tight font-gilroyRegular">{item.desc}</p>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-[22px] font-black text-black font-gilroyBold">{item.price}</span>
                        
                        {/* 3. SAVAT TUGMASINI LINK ICHIDAN CHIQARISH KERAK (agar alohida bossa savatga qo'shishi uchun) */}
                        {/* Yoki shunday qolsa ham bo'ladi, lekin savat tugmasi bosilganda ham ichkariga kirib ketadi */}
                        <div className="bg-black text-white p-3.5 rounded-[15px] transition-all duration-500 hover:bg-[#FFD903] hover:text-black shadow-lg shadow-black/10">
                          <Basket />
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>

                {/* Like tugmasi Linkdan tashqarida bo'lishi kerak (ovqatga kirmasdan like bosish uchun) */}
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





