import { HeaderContent } from '@/components'
import { Belgi, Carousel } from '@/icons'
import Image from 'next/image'
import Link from 'next/link'

const AboutPage = () => {
  const team = [
    { name: "Александр Петро", role: "главный повар", img: "/images/per1.png" },
    { name: "Александр Петро", role: "помощник повара", img: "/images/per2.png" },
    { name: "Александр Петро", role: "бургер кинг", img: "/images/per3.png" },
    { name: "Жулия Виллиам", role: "официантка", img: "/images/per4.png" },
    { name: "Жулия Виллиам", role: "официантка", img: "/images/per5.png" },
    { name: "Жулия Виллиам", role: "официантка", img: "/images/per6.png" },
  ]

  const miniNews = [
    { id: 1, img: "/images/news1.png", text: "Используйте гибкие структуры, чтобы предоставить надежный обзор для обзоров высокого уровня." },
    { id: 2, img: "/images/news2.png", text: "Итеративные подходы к данным корпоративной стратегии способствуют коллективному мышлению." },
    { id: 3, img: "/images/news3.png", text: "Используйте гибкие структуры, чтобы предоставить надежный обзор для обзоров высокого уровня." },
  ]

  return (
    <main className="relative min-h-screen pt-4 pb-24 overflow-hidden">
      <div className="containers relative mb-20">
        {/* Shaffof oq fon */}
        <div className="absolute inset-0 z-[-1] bg-white/40 backdrop-blur-[35px] rounded-[60px] border border-white/30 shadow-2xl"></div>

        <div className="absolute -left-12 top-[15%] z-0 pointer-events-none">
          <Image src="/images/leaf3.png" alt="leaf" width={180} height={180} className="rotate-12 opacity-70" />
        </div>
        <div className="absolute -right-10 top-[30%] z-0 pointer-events-none">
          <Image src="/images/leaf2.png" alt="leaf" width={200} height={200} className="-rotate-45 opacity-60" />
        </div>

        <div className="px-5 md:px-17.5 py-8 relative z-10">
          <HeaderContent />

          <div className="flex items-center gap-1 text-sm mt-12 mb-12 font-Gilroy-Regular text-black">
            <span className="opacity-50 font-Gilroy-Regular">Главная</span>
            <div className="scale-75 opacity-40"><Belgi /></div>
            <span className="font-bold text-[#FFD903] font-Gilroy-Regular">О нас</span>
          </div>

          <h1 className="text-[52px] font-black text-center mb-10 uppercase font-gilroyBold text-black tracking-tighter">
            О нас
          </h1>

          <section className="max-w-250 mx-auto text-center space-y-6 mb-24">
            <p className="text-[16px] leading-relaxed font-Gilroy-Regular text-black/80">
              С 1975 года наша миссия в ресторанах — питать надежду и мечты каждого члена команды, гостя и сообщества, которому мы служим. Спустя все эти годы эти основные ценности остаются в основе всего, что мы делаем. От нашего меню до наших услуг и способов ведения бизнеса — наш свежий, неожиданный и человечный взгляд отличает нас. Мы называем это Необыкновенной Добротой. И это во всем, что мы делаем.
            </p>
            <p className="text-[16px] leading-relaxed font-Gilroy-Regular text-black/80">
              Имея более 450 ресторанов в 26 штатах и более 3000 членов команды, мы два года подряд были названы Forbes одним из лучших работодателей Америки в области разнообразия. Еженедельник Fortune признал нас одним из лучших мест для работы. Мы считаем, что наш успех основан на нашей уникальной и заботливой культуре, благодаря которой каждый, кто входит в наши двери, чувствует себя желанным гостем и оцененным по достоинству.
            </p>
          </section>

          <section className="flex flex-col lg:flex-row items-center justify-between gap-16 mb-32">
            <div className="w-full lg:w-1/2 space-y-8">
              <h2 className="text-[36px] font-black uppercase font-gilroyBold text-black">Наша еда</h2>
              <p className="text-[16px] leading-relaxed text-black/70 font-Gilroy-Regular">
                Наша печать — отборные свежие ингредиенты от еды до отличной цены. От традиционных и современных блюд до наших собственных кулинарных творений, таких как свежеприготовленные по нашим собственным рецептам соусы и оригинальные заправки, наши рецепты отличаются индивидуальностью, креативностью и ярким вкусом кухонь всего мира.
              </p>
              <p className="text-[16px] leading-relaxed text-black/70 font-Gilroy-Regular">
                От «Пенне Россо» до японской лапши, салата «Мар» и всемирно известных макарон с сыром «Бакманс» — мы используем только самые лучшие и полезные ингредиенты. Каждое блюдо готовится свежим и делается на заказ. Наше богатое меню наполнено яркими, свежими и приятными вкусами.
              </p>
              <Link href="/menu">
                <button className="bg-black text-white px-10 py-4 rounded-xl flex items-center gap-3 hover:bg-[#FFD903] hover:text-black duration-300 font-bold uppercase text-[14px] shadow-lg group">
                  Посмотреть меню 
                  <span className="group-hover:translate-x-1 duration-300">
                    <Carousel />
                  </span>
                </button> 
              </Link>
            </div>
            <div className="w-full lg:w-125 h-125 relative rounded-[50px] overflow-hidden shadow-2xl border-8 border-white/20">
              <Image src="/images/soup.png" alt="food" fill className="object-cover" />
            </div>
          </section>

          <section className="flex flex-col lg:flex-row-reverse items-center justify-between gap-16 mb-32">
            <div className="w-full lg:w-1/2 space-y-8">
              <h2 className="text-[36px] font-black uppercase font-gilroyBold text-black text-right lg:text-left">Наш путь</h2>
              <p className="text-[16px] leading-relaxed text-black/70 font-Gilroy-Regular">
                С самого начала мы взяли на себя обязательство предлагать свежие продукты, свежие ингредиенты и новые идеи на заботу о наших гостях, членах нашей команды и наших сообществах. Мы искренне верим, что нет ничего, что могло бы объединить людей или сделать мир лучше, чем горячая еда.
              </p>
              <p className="text-[16px] leading-relaxed text-black/70 font-Gilroy-Regular">
                Придумывая рецепты, мы учитываем влияние этих решений на всю нашу компанию, чтобы поддержать светлое будущее. В нашем отчете о свежих ингредиентах отражаются некоторые из этих областей, такие как создание нашего меню, наполненного свежими и захватывающими новыми вкусами; активные усилия в отрасли льгот для людей; и некоторые способы лучше заботиться о наших сообщестях — и о нашей планете — которую мы называем домом.
              </p>
            </div>
            <div className="w-full lg:w-125 h-125 relative rounded-[50px] overflow-hidden shadow-2xl border-8 border-white/20">
              <Image src="/images/burger.png" alt="journey" fill className="object-cover" />
            </div>
          </section>

          <section className="mb-20">
            <h2 className="text-[42px] font-black text-center mb-20 uppercase font-gilroyBold text-black">Наша команда</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-y-16 gap-x-8">
              {team.map((member, idx) => (
                <div key={idx} className="flex flex-col items-center group">
                  <div className="w-40 h-40 md:w-52 md:h-52 relative mb-6">
                    <div className="absolute inset-0 rounded-full border-2 border-dashed border-black/20 group-hover:border-[#FFD903] group-hover:rotate-45 transition-all duration-700"></div>
                    <div className="absolute inset-2 rounded-full overflow-hidden border-4 border-white shadow-xl">
                      <Image 
                        src={member.img} 
                        alt={member.name} 
                        fill 
                        className="object-cover group-hover:scale-110 transition-transform duration-500" 
                      />
                    </div>
                  </div>
                  <h3 className="font-bold text-[20px] text-black font-gilroyBold">{member.name}</h3>
                  <p className="text-black/50 text-[14px] uppercase tracking-wider mt-1 font-Gilroy-Regular">{member.role}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>

      <section className="mt-40">
        <div className="max-w-325 mx-auto px-5">
          <h2 className="text-[42px] font-black text-center mb-24 uppercase font-gilroyBold text-black tracking-tighter">
            Новости/Галерея
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-36 mb-20">
            {miniNews.map((item) => (
              <div key={item.id} className="bg-[#FFFFFF66] backdrop-blur-md rounded-[45px] p-8 pt-20 relative border border-white/20 group hover:shadow-xl transition-all duration-500">
                <div className="absolute -top-14 left-8 w-35 h-35 rounded-[30px] overflow-hidden shadow-2xl border-4 border-white/30 z-20">
                  <Image src={item.img} alt="news" fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                </div>
                <div className="mt-10">
                  <p className="text-[14px] text-black/70 mb-8 leading-relaxed font-Gilroy-Regular">
                    "{item.text}"
                  </p>
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
            <Link href="/news" className="bg-black text-white px-10 py-4 rounded-xl flex items-center gap-3 font-bold uppercase text-sm hover:bg-[#FFD903] hover:text-black transition-all group shadow-lg">
              Посмотреть все
              <div className="rotate-0 group-hover:translate-x-1 transition-transform">
                <Belgi />
              </div>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

export default AboutPage