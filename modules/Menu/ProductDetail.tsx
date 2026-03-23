import { HeaderContent } from '@/components'
import { Basket, Belgi, Carousel2, Carousel3, LikeIcon } from '@/icons'
import Image from 'next/image'

const ProductDetail = () => {
  const similarItems = Array(4).fill({
    name: "Chicken soup",
    price: "$10.00",
    desc: "Spicy with garlic",
    img: "/images/2food.png" 
  })

  return (
    <main className="relative min-h-screen w-full pt-4 pb-24 overflow-x-hidden">
            <div className="fixed inset-0 z-0 w-full h-full">
        <Image  src="/images/Rectangle 1.png"  alt="background pizza" fill className="object-cover opacity-80"  quality={100} priority unoptimized/>
      </div>
      <div className="containers relative z-10">
        <div className="relative w-full px-6 md:px-16 py-10 bg-[#FFFFFF66] backdrop-blur-[30px] rounded-[60px] border border-white/40 shadow-2xl">
          
          <div className="mb-20"><HeaderContent /></div>

          {/* Breadcrumbs */}
          <div className="flex items-center gap-1 text-sm mt-12 mb-12 font-Gilroy-Regular text-black">
            <span className="opacity-50">Главная</span>
            <div className="scale-75 opacity-40"><Belgi /></div>
            <span className="opacity-50">Меню</span>
            <div className="scale-75 opacity-40"><Belgi /></div>
            <span className="font-bold text-[#FF3D00]">Бургер</span>
          </div>

          <h1 className="text-[48px] font-black text-center mb-16 font-gilroyBold text-black uppercase">Бургер</h1>

          {/* product main qismi */}
          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-20 mb-10">
            <div className="w-full lg:w-1/2 flex justify-center relative">
               <div className="w-[320px] h-80 md:w-125 md:h-125 relative drop-shadow-[0_35px_35px_rgba(0,0,0,0.3)]">
                  <Image src="/images/BigBurger.png" alt="Double Burger" fill className="object-contain" quality={100} />
               </div>
            </div>

            <div className="w-full lg:w-1/2">
              <h2 className="text-[40px] md:text-[52px] font-black mb-4 font-gilroyBold text-black uppercase leading-none">Дабл бургер</h2>
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
                <p className="text-[17px] leading-relaxed opacity-80 font-Gilroy-Regular max-w-125">Эти двусторонние шелковые брюки с запахом икат сочетают в себе универсальность двух потрясающих рисунков ткани.
                </p>
              </div>
              <div className="flex items-center gap-6">
                <div className="flex items-center bg-white/50 rounded-2xl border border-black/5 overflow-hidden backdrop-blur-md text-black">
                  <button className="px-6 py-4 text-2xl font-bold hover:bg-black/5">-</button>
                  <span className="px-4 py-4 font-bold text-xl min-w-12.5 text-center">1</span>
                  <button className="px-6 py-4 text-2xl font-bold hover:bg-black/5">+</button>
                </div>
                <button className="bg-black text-white px-12 py-5 rounded-[20px] font-bold uppercase text-[15px] hover:bg-[#FFD903] hover:text-black transition-all shadow-2xl">В корзину</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-325 mx-auto px-5 relative z-10 mt-32">
        <h2 className="text-[32px] font-black mb-16 font-Gilroy-Bold text-black uppercase">Похожие:</h2>
        
        {/* carousel Container */}
        <div className="relative px-4">
          <button className="absolute -left-4 md:-left-16 top-1/2 -translate-y-1/2 z-20 w-12 h-12 flex items-center justify-center border border-black/10 rounded-full bg-white hover:bg-black group transition-all duration-300 shadow-lg">
            <span className="group-hover:invert"><Carousel3 /></span>
          </button>
          <button className="absolute -right-4 md:-right-16 top-1/2 -translate-y-1/2 z-20 w-12 h-12 flex items-center justify-center border border-black/10 rounded-full bg-white hover:bg-black group transition-all duration-300 shadow-lg">
            <span className="group-hover:invert"><Carousel2 /></span>
          </button>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-32">
            {similarItems.map((item, index) => (
              <div key={index} className="bg-[#FFFFFF66] backdrop-blur-md rounded-[45px] p-8 pt-12 relative flex flex-col items-center group transition-all duration-500 hover:shadow-2xl border border-white/30">
                <div className="w-44 h-44 absolute -top-20 left-1/2 -translate-x-1/2 drop-shadow-2xl transition-transform duration-500 group-hover:scale-110">
                  <Image src="/images/burger3.png" alt={item.name} fill className="object-contain" /> 
                </div>
                
                <div className="w-full mt-16">
                  <h3 className="text-[22px] font-bold text-black mb-1 font-gilroyBold">{item.name}</h3>
                  <p className="text-[14px] text-black/50 mb-6 font-Gilroy-Regular leading-tight">{item.desc}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-[22px] font-black text-black font-gilroyBold">{item.price}</span>
                    <button className="bg-black text-white p-3.5 rounded-[14px] hover:bg-[#FFD903] hover:text-black transition-all shadow-md">
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