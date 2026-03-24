"use client"
import { EmailIcon, PersonIcon, TelIcon } from "@/icons"
import Link from "next/link"
import LangConfig from "@/components/LangConfig"
import Button from "@/components/Button"
import { useState } from "react"

const Header = () => {
  // Tizimga kirganlik holati
  const [isLoggedIn, setIsLoggedIn] = useState(true); 
  const fullName = "Raxmatullayeva Muflixa";

  return (
    <header className="pt-3 pb-11.25 relative z-100">
      <div className="containers px-5 flex items-center justify-between">
        <div className="flex items-center text-black gap-6.75">
          <Link href={"tel:+998(90)758383833"} className="flex hover:text-[#ffd903] duration-300 items-center text-black gap-3">
            <TelIcon />
            <span className="text-[16px] leading-[100%] font-gilroyMedium">+998(90)758383833</span>
          </Link>
          <Link href={"mailto:info@bmgsoft.com"} className="flex hover:text-[#ffd903] duration-300 items-center text-black gap-3">
            <EmailIcon/>
            <span className="text-[16px] leading-[100%] font-gilroyMedium">info@bmgsoft.com</span>
          </Link>
        </div>

        <div className="flex items-center gap-8.75">
          <LangConfig/>
          
          {/* ASOSIY QISM: Hover bo'lganda ism chiqishi */}
          <div className="relative group"> 
            {/* Tugma doim ko'rinib turadi */}
            <Link href="/login">
              <Button 
                title="Вход в аккаунт" 
                icon={<PersonIcon/>} 
                iconPosition="left"
                className="hover:bg-[#FFD903] hover:text-black transition-all"
              />
            </Link>

            {/* Hover bo'lganda chiqadigan ism (Dropdown) */}
            {isLoggedIn && (
              <div className="absolute top-full left-0 mt-2 w-max opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-2 group-hover:translate-y-0 z-50">
                <Link href="/login">
                  <div className="bg-white border border-black/10 shadow-xl rounded-xl px-6 py-3 hover:bg-gray-50 transition-colors cursor-pointer">
                    <p className="text-black font-gilroyBold text-[15px] whitespace-nowrap">
                      {fullName}
                    </p>
                    <p className="text-[10px] text-blue-600 mt-1 uppercase font-bold tracking-wider">
                      Перейти в профиль
                    </p>
                  </div>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header