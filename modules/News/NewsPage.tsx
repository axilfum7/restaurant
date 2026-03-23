import { HeaderContent } from '@/components'
import { One, Two, Three, Four, Tochka, Belgi } from '@/icons'
import Image from 'next/image'

const NewsPage = () => {
  const newsItems = [
    { id: 1, img: "/images/meal1.png", text: "Используйте гибкие структуры, чтобы предоставить надежный обзор для обзоров высокого уровня." },
    { id: 2, img: "/images/meal2.png", text: "Итеративные подходы к данным корпоративной стратегии способствуют коллективному мышлению." },
    { id: 3, img: "/images/meal3.png", text: "Общая ценность создается за счет понимания потребностей клиентов и рыночных тенденций." },
    { id: 4, img: "/images/meal4.png", text: "Используйте гибкие структуры, чтобы предоставить надежный обзор для обзоров высокого уровня." },
    { id: 5, img: "/images/meal5.png", text: "Итеративные подходы к данным корпоративной стратегии способствуют коллективному мышлению." },
    { id: 6, img: "/images/meal6.png", text: "Общая ценность создается за счет понимания потребностей клиентов." },
  ]

  const galleryItems = [
    "/images/meal1.png", "/images/meal2.png", "/images/meal3.png", "/images/meal4.png",
    "/images/meal5.png", "/images/meal6.png", "/images/meal7.png", "/images/meal8.png"
  ]

  const paginationLinks = [
    { id: 1, icon: <One /> },
    { id: 2, icon: <Two /> },
    { id: 3, icon: <Three /> },
    { id: 4, icon: <Four /> },
    { id: 'dots', icon: <Tochka /> },
    { id: 'next', icon: <Belgi /> },
  ]

  return (
    <main className="relative min-h-screen pt-4 pb-24 overflow-hidden">
      <div className="fixed inset-0 z-[-3] opacity-20 pointer-events-none">
        <Image src="/images/pizza.png" alt="bg" fill className="object-cover blur-[100px] scale-150" />
      </div>

      <div className="containers relative">
        <div className="absolute inset-0 z-[-1] bg-white/40 backdrop-blur-[35px] rounded-[60px] border border-white/30 shadow-2xl"></div>

        <div className="absolute -left-20 top-20 z-0 pointer-events-none">
          <Image src="/images/leaf3.png" alt="leaf" width={240} height={240} className="rotate-45 opacity-90" />
        </div>
        <div className="absolute -right-16 top-60 z-0 pointer-events-none">
          <Image src="/images/leaf2.png" alt="leaf" width={220} height={220} className="-rotate-25 opacity-80" />
        </div>

        <div className="px-5 md:px-17.5 py-8 relative z-10">
          <div className="mb-14">
            <HeaderContent />
          </div>

          {/* Breadcrumbs */}
          <div className="flex items-center gap-1 text-sm mb-12 font-Gilroy-Regular text-[#000000]">
            <span className="opacity-50">Главная</span>
            <div className="scale-75 opacity-40">
              <Belgi />
            </div>
            <span className="font-bold text-[#000000]">Новости</span>
          </div>

          {/* НОВОСТИ section */}
          <section className="mb-32">
            <h1 className="text-[52px] font-black text-center mb-32 uppercase tracking-tighter font-gilroyBold text-[#000000]">
              Новости
            </h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-40">
              {newsItems.map((item) => (
                <div key={item.id} className="bg-[#FFFFFF66] backdrop-blur-md rounded-[45px] p-8 pt-24 relative border border-white/20 group hover:shadow-xl transition-all duration-500">
                  <div className="absolute -top-16 left-8 w-40 h-40 rounded-[35px] overflow-hidden shadow-2xl border-4 border-white/30 z-20">
                    <Image src={item.img} alt="news" fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                  </div>
                  <div className="mt-14">
                    <p className="text-[14px] text-[#000000] opacity-70 mb-8 leading-relaxed font-Gilroy-Regular">
                      "{item.text}"
                    </p>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full border-2 border-white overflow-hidden shadow-sm">
                        <Image src="/images/avatar.svg" alt="author" width={40} height={40} />
                      </div>
                      <span className="font-bold text-[#000000] font-gilroyBold">Сергей</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination News */}
            <div className="flex justify-center items-center gap-2 mt-24">
              {paginationLinks.map((item, idx) => (
                <button key={idx} className={`transition-transform duration-300 hover:scale-110 active:scale-95 ${item.id === 1 ? 'opacity-100' : 'opacity-60 hover:opacity-100'}`}>
                  {item.icon}
                </button>
              ))}
            </div>
          </section>

          {/* ГАЛЕРЕЯ SECTION */}
          <section className="pb-10">
            <h2 className="text-[52px] font-black text-center mb-16 uppercase tracking-tighter font-gilroyBold text-[#000000]">
              Галерея
            </h2>
            
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {galleryItems.map((img, idx) => (
                <div key={idx} className="aspect-4/3 relative rounded-[35px] overflow-hidden shadow-lg group border border-white/20">
                  <Image src={img} alt="gallery" fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              ))}
            </div>

            {/* PAGINATION GALLERY qismi */}
            <div className="flex justify-center items-center gap-2 mt-20">
              {paginationLinks.map((item, idx) => (
                <button key={idx} className={`transition-transform duration-300 hover:scale-110 active:scale-95 ${item.id === 1 ? 'opacity-100' : 'opacity-60 hover:opacity-100'}`}>
                  {item.icon}
                </button>
              ))}
            </div>
          </section>
        </div>
      </div>
    </main>
  )
}

export default NewsPage