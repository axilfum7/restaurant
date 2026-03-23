import { HeaderContent } from '@/components'
import { Belgi, Location, Pochta, Tel } from '@/icons'
import Image from 'next/image'

const ContactPage = () => {
  return (
    <main className="relative min-h-screen pt-4 pb-24 overflow-hidden">
      <div className="containers relative">
        {/* Asosiy oq fon */}
        <div className="absolute inset-0 z-[-1] bg-white/40 backdrop-blur-[35px] rounded-[60px] border border-white/30 shadow-2xl"></div>

        {/* leaflari */}
        <div className="absolute -left-16 top-[20%] z-0 pointer-events-none opacity-60">
          <Image src="/images/leaf3.png" alt="leaf" width={220} height={220} className="rotate-45" />
        </div>
        <div className="absolute -right-12 bottom-[15%] z-0 pointer-events-none opacity-50">
          <Image src="/images/leaf2.png" alt="leaf" width={200} height={200} className="-rotate-12" />
        </div>

        <div className="px-5 md:px-17.5 py-8 relative z-10">
          <HeaderContent />

          {/* Breadcrumbs */}
          <div className="flex items-center gap-1 text-sm mt-12 mb-12 font-Gilroy-Regular text-black">
            <span className="opacity-50">Главная</span>
            <div className="scale-75 opacity-40"><Belgi /></div>
            <span className="font-bold text-[#FF9E0C]">Контакты</span>
          </div>

          <h1 className="text-[52px] font-black text-center mb-24 uppercase font-gilroyBold text-black tracking-tighter">
            Контакты
          </h1>

          {/* CONTACT info cardlari */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-32">
            <div className="flex flex-col items-center text-center group">
              <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300"><Pochta /></div>
              <h3 className="text-[22px] font-bold mb-4 font-gilroyBold">Напишите нам</h3>
              <p className="text-black/60 font-Gilroy-Regular">info@bmgsoft.com</p>
              <p className="text-black/60 font-Gilroy-Regular">t.me/bmgsoft_com</p>
            </div>

            <div className="flex flex-col items-center text-center group">
              <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                <Tel />
              </div>
              <h3 className="text-[22px] font-bold mb-4 font-gilroyBold">Позвоните нам</h3>
              <p className="text-black/60 font-Gilroy-Regular">+9998908767888</p>
              <p className="text-black/60 font-Gilroy-Regular">+9989865332322</p>
            </div>

            <div className="flex flex-col items-center text-center group">
              <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                <Location />
              </div>
              <h3 className="text-[22px] font-bold mb-4 font-gilroyBold">Посетите нас</h3>
              <p className="text-black/60 font-Gilroy-Regular">Узбекистан, Ташкент</p>
              <p className="text-black/60 font-Gilroy-Regular">Улица, 24</p>
            </div>
          </div>

          {/* CONTACT FORM */}
          <section className="max-w-190 mx-auto mb-20">
            <h2 className="text-[42px] font-black text-center mb-16 uppercase font-gilroyBold">Написать нам</h2>
            
            <form className="space-y-8">
              <div className="grid grid-cols-1 gap-8">
                <input type="text" placeholder="Ваше имя" className="w-full bg-[#0000000D] border border-black/10 rounded-[15px] px-6 py-5 outline-none focus:border-[#FF9E0C] transition-colors font-Gilroy-Regular text-black"/>
                <input type="email" placeholder="Ваш E-mail" className="w-full bg-[#0000000D] border border-black/10 rounded-[15px] px-6 py-5 outline-none focus:border-[#FF9E0C] transition-colors font-Gilroy-Regular text-black"/>
                <input type="tel" placeholder="Ваш номер телефона" className="w-full bg-[#0000000D] border border-black/10 rounded-[15px] px-6 py-5 outline-none focus:border-[#FF9E0C] transition-colors font-Gilroy-Regular text-black"/>
                <textarea placeholder="Ваше сообщение" rows={4}className="w-full bg-[#0000000D] border border-black/10 rounded-[25px] px-6 py-5 outline-none focus:border-[#FF9E0C] transition-colors font-Gilroy-Regular text-black resize-none"></textarea>
              </div>

              <div className="flex justify-end mt-10">
                <button type="submit"className="bg-black text-white px-12 py-4 rounded-xl font-bold uppercase text-[15px] hover:bg-[#FFD903] hover:text-black transition-all duration-300 shadow-xl">
                  Отправить
                </button>
              </div>
            </form>
          </section>
        </div>
      </div>
    </main>
  )
}

export default ContactPage