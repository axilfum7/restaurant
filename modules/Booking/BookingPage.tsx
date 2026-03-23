import { HeaderContent } from '@/components'
import { Belgi, Carousel, Location, Pochta, Tel } from '@/icons'
import Image from 'next/image'
import Link from 'next/link'

const BookingPage = () => {
  const workingHours = [
    { day: "Понедельник", time: "10:00-23:00" },
    { day: "Вторник", time: "10:00-23:00" },
    { day: "Среда", time: "10:00-23:00" },
    { day: "Четверг", time: "10:00-23:00" },
    { day: "Пятница", time: "10:00-23:00" },
    { day: "Воскресенье", time: "11:00-22:00" },
  ]

  const miniNews = [
    { id: 1, img: "/images/news1.png", text: "Используйте гибкие структуры, чтобы предоставить надежный обзор для обзоров высокого уровня." },
    { id: 2, img: "/images/news2.png", text: "Итеративные подходы к данным корпоративной стратегии способствуют коллективному мышлению." },
    { id: 3, img: "/images/news3.png", text: "Используйте гибкие структуры, чтобы предоставить надежный обзор для обзоров высокого уровня." },
  ]

  return (
    <main className="relative min-h-screen pt-4 pb-24 overflow-hidden">
      {/* asosiy oq konteyneri */}
      <div className="containers relative mb-20">
        {/* oq fon */}
        <div className="absolute inset-0 z-[-1] bg-white/40 backdrop-blur-[35px] rounded-[60px] border border-white/30 shadow-2xl"></div>

        {/* Sahifa ichidagi barglar */}
        <div className="absolute -left-12 top-[30%] z-0 pointer-events-none">
          <Image src="/images/leaf3.png" alt="leaf" width={180} height={180} className="rotate-12 opacity-70" />
        </div>
        <div className="absolute -right-10 top-[15%] z-0 pointer-events-none">
          <Image src="/images/leaf2.png" alt="leaf" width={200} height={200} className="-rotate-45 opacity-60" />
        </div>

        <div className="px-5 md:px-17.5 py-8 relative z-10">
          <div className="mb-14">
            <HeaderContent />
          </div>

          {/* Breadcrumbs */}
          <div className="flex items-center gap-1 text-sm mb-12 font-Gilroy-Regular text-black">
            <span className="opacity-50 font-Gilroy-Regular">Главная</span>
            <div className="scale-75 opacity-40"><Belgi /></div>
            <span className="font-bold text-[#FFD903] font-Gilroy-Regular">Бронирование</span>
          </div>

          <h1 className="text-[52px] font-black text-center mb-20 uppercase tracking-tighter font-gilroyBold text-black">
            Бронирование
          </h1>

          <section className="flex flex-col lg:flex-row items-start justify-between gap-16 mb-32">
            <div className="w-full lg:w-1/2">
              <h2 className="text-[28px] font-black mb-10 font-gilroyBold uppercase text-black">Часы работы</h2>
              <div className="space-y-6">
                {workingHours.map((item, idx) => (
                  <div key={idx} className="flex justify-between items-center border-b border-black/10 pb-3 font-Gilroy-Regular text-black">
                    <span className="text-[18px] opacity-80">{item.day}</span>
                    <span className="font-bold text-[18px]">{item.time}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="w-full lg:w-135 h-135 relative rounded-[50px] overflow-hidden shadow-2xl border-8 border-white/20">
              <Image src="/images/Bakal.png" alt="restaurant" fill className="object-cover" />
            </div>
          </section>

          <section className="max-w-190 mx-auto text-center mb-40">
            <h2 className="text-[36px] font-black mb-16 uppercase font-gilroyBold tracking-tight text-black">Хотите забронировать стол?</h2>
            
            <form className="grid grid-cols-1 gap-10 text-left">
              <input type="text" placeholder="Ваш номер" className="w-full bg-transparent border-b border-black/20 py-4 outline-none focus:border-[#FFD903] transition-colors font-Gilroy-Regular text-[18px] text-black" />
              
              <div className="relative border-b border-black/20">
                <select className="w-full bg-transparent py-4 outline-none appearance-none font-Gilroy-Regular text-[18px] opacity-60 text-black">
                  <option>На сколько человек?</option>
                  <option>2 человека</option>
                  <option>4 человека</option>
                </select>
                <div className="absolute right-0 top-1/2 -translate-y-1/2 rotate-90 scale-75 opacity-40"><Belgi /></div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <input type="text" placeholder="Выберите дату" className="w-full bg-transparent border-b border-black/20 py-4 outline-none font-Gilroy-Regular text-[18px] text-black" />
                <input type="text" placeholder="Выберите время" className="w-full bg-transparent border-b border-black/20 py-4 outline-none font-Gilroy-Regular text-[18px] text-black" />
              </div>

              <div className="relative border-b border-black/20">
                <select className="w-full bg-transparent py-4 outline-none appearance-none font-Gilroy-Regular text-[18px] opacity-60 text-black">
                  <option>Выберите место</option>
                </select>
                <div className="absolute right-0 top-1/2 -translate-y-1/2 rotate-90 scale-75 opacity-40"><Belgi /></div>
              </div>

              <button className="bg-black text-white px-16 py-5 rounded-2xl mt-10 hover:bg-[#FFD903] hover:text-black transition-all duration-300 font-bold uppercase tracking-widest text-[16px] mx-auto block shadow-xl">
                Забронировать
              </button>
            </form>
          </section>

{/* cardlar */}
          <h2 className="text-[36px] font-black text-center mb-16 uppercase font-gilroyBold text-black">Связаться с нами</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            <ContactCard title="Напишите нам" lines={["info@bmgsoft.com", "t.me/bmgsoft_com"]} icon={<Pochta />} />
            <ContactCard title="Позвоните нам" lines={["+998901234567", "+998901231212"]} icon={<Tel />} />
            <ContactCard title="Посетите нас" lines={["Узбекистан, Ташкент", "Улица, 24"]} icon={<Location />} />
          </div>
        </div>
      </div>

      {/* 2. KONTEYNERDAN TASHQARIDAGI QISM (Новости/Галерея) */}
      <section className="mt-40">
        <div className="max-w-325 mx-auto px-5">
          <h2 className="text-[42px] font-black text-center mb-24 uppercase font-gilroyBold text-black tracking-tighter">
            Новости/Галерея
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-36 mb-20">
            {miniNews.map((item) => (
              <div key={item.id} className="bg-[#FFFFFF66] backdrop-blur-md rounded-[45px] p-8 pt-20 relative border border-white/20 group hover:shadow-xl transition-all duration-500">
                {/* Asosiy rasm (news1, news2, news3) */}
                <div className="absolute -top-14 left-8 w-35 h-35 rounded-[30px] overflow-hidden shadow-2xl border-4 border-white/30 z-20">
                  <Image src={item.img} alt="news" fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                </div>
                
                <div className="mt-10">
                  <p className="text-[14px] text-black/70 mb-8 leading-relaxed font-Gilroy-Regular">"{item.text}"</p>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-gray-200 overflow-hidden relative border border-white">
                        <Image src="/images/avatar.svg" alt="author" fill className="object-cover" />
                    </div>
                    <span className="font-bold text-black font-gilroyBold text-[15px]">Сергей</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-24">
            <button className="bg-black text-white px-10 py-4 rounded-xl flex items-center gap-3 hover:bg-[#FFD903] hover:text-black duration-300 font-bold uppercase text-[14px]">
                        Посмотреть меню <Carousel />
                      </button>  
          </div>
        </div>
      </section>
    </main>
  )
}

const ContactCard = ({ title, lines, icon }: { title: string, lines: string[], icon: any }) => (
  <div className="flex flex-col items-center text-center p-10 h-full">
    {/* Ikonka konteyneri - fon yo'q, o'zi chiqadi */}
    <div className="mb-6 flex items-center justify-center">
      <div className="scale-125">
         {icon}
      </div>
    </div>
    
    <h3 className="font-black text-[22px] mb-4 uppercase font-gilroyBold text-black tracking-tight">
      {title}
    </h3>
    
    <div className="space-y-1">
      {lines.map((line, i) => (
        <p key={i} className="font-Gilroy-Regular text-[16px] text-black opacity-60 mb-1">
          {line}
        </p>
      ))}
    </div>
  </div>
)

export default BookingPage