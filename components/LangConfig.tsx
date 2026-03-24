"use client"
import { Arraydown } from "@/icons"
import Image from "next/image"
import { useState } from "react"

const LangConfig = () => {
  const [open, setOpen] = useState(false)
  const [langList, setLangList] = useState([
    { id: 1, name: "Русский", icon: "/images/ru-flag.svg" },
    { id: 2, name: "English", icon: "/images/us-flag.svg" },
    { id: 3, name: "Uzbek", icon: "/images/uz-flag.svg" }
  ])

  // Tanlangan tilni o'zgartirish funksiyasi
  const handleChangeLang = (e: React.MouseEvent, item: { id: number, name: string, icon: string }) => {
    e.stopPropagation(); // MUHIM: Click voqeasi div-ga o'tib ketmasligi uchun
    
    const newList = langList.filter(v => v.id !== item.id)
    setLangList([item, ...newList])
    setOpen(false)
  }

  return (
    <div 
      onClick={() => setOpen(!open)}
      className="flex cursor-pointer relative items-center gap-3.5 select-none" // select-none qo'shildi
    >
      {/* Tanlangan til */}
      <div className="flex items-center gap-2">
         {/* Icon chiqishi uchun public/images/ papkasida rasm borligini tekshiring */}
         <Image 
            src={langList[0].icon} 
            alt="flag" 
            width={20} 
            height={20} 
            className="object-contain" 
         />
         <span className="text-[16px] text-black">{langList[0].name}</span>
      </div>
      
      <div className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`}>
        <Arraydown/>
      </div>

      {/* Ochiladigan ro'yxat */}
      <ul 
        className={`absolute top-10 left-0 bg-white shadow-xl flex flex-col min-w-30 p-2 rounded-[10px] z-99 border border-gray-100 transition-all duration-300 ${
          open ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"
        }`}
        onClick={(e) => e.stopPropagation()} // Ro'yxat ichini bosganda menyu yopilib ketmasligi uchun
      >
        {langList.slice(1).map(item => (
          <li 
            key={item.id} 
            onClick={(e) => handleChangeLang(e, item)} 
            className="flex items-center gap-3 p-2 hover:bg-gray-100 rounded-lg transition-colors text-black"
          >
            <Image 
                src={item.icon} 
                alt={item.name} 
                width={20} 
                height={20} 
                className="object-contain"
            />
            <span className="text-sm font-medium">{item.name}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default LangConfig