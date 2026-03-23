// components/Footer.tsx
import { Facebook, Instagram, Logo, Telegram, Telephone } from "@/icons"
import Link from "next/link"

const Footer = () => {
  return (
    <footer 
      className="pt-20 pb-12 relative border-t  bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/images/footer.jpg')" }} // Rasm manzili
    >
      {/* Agar rasm juda to'q bo'lsa yoki matn ko'rinmasa, ustidan xira qatlam (overlay) qo'shish mumkin */}
      <div className="absolute inset-0  z-0"></div> 

      <div className="containers relative z-10 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="space-y-8">
          <Logo />

          {/* Ikonkalar */}
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-[#FFD903] transition-colors duration-300">
              <Telegram />
            </a>
            <a href="tel:+99890758383833" className="hover:text-[#FFD903] transition-colors duration-300">
              <Telephone />
            </a>
            <a href="#" className="hover:text-[#FFD903] transition-colors duration-300">
              <Facebook />
            </a>
            <a href="#" className="hover:text-[#FFD903] transition-colors duration-300">
              <Instagram />
            </a>
          </div>
        </div>

       <div>
          {/* Sarlavha Gilroy-Medium uslubida */}
          <h4 className="font-bold text-[18px] mb-6 font-gilroyMedium text-black">
            Наши услуги
          </h4>
          <ul className="space-y-4 font-gilroyRegular">
            <li>
              <Link href="/" className="text-[#080808] hover:text-[#FFD903] transition-colors duration-300">
                Меню
              </Link>
            </li>
            <li>
              <Link href="/" className="text-[#080808] hover:text-[#FFD903] transition-colors duration-300">
                Бронирование
              </Link>
            </li>
            <li>
              <Link href="/" className="text-[#080808] hover:text-[#FFD903] transition-colors duration-300">
                Доставка
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-[18px] mb-6 font-gilroyMedium text-black">Наша компания</h4>
          <ul className="space-y-4 font-gilroyRegular">
            <li>
              <Link href="/" className="text-[#080808] hover:text-[#FFD903] transition-colors duration-300">
                О нас
              </Link>
            </li>
            <li>
              <Link href="/" className="text-[#080808] hover:text-[#FFD903] transition-colors duration-300">
                Новости
              </Link>
            </li>
            <li>
              <Link href="/" className="text-[#080808] hover:text-[#FFD903] transition-colors duration-300">
                Контакты
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-[18px] mb-6 font-gilroyMedium text-black">Адрес</h4>
          <ul className="space-y-4 font-gilroyRegular text-[#080808]">
            <li className="opacity-90">Узбекистан, Ташкент</li>
            <li className="opacity-90">Улица: 20</li>
            <li>
              <a href="tel:+99890758383833" className="hover:text-[#FFD903] transition-colors duration-300">
                +998(90) 758383833
              </a>
            </li>
            <li>
              <a href="mailto:info@bmgsoft.com" className="hover:text-[#FFD903] transition-colors duration-300">
                info@bmgsoft.com
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer