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

  function handleChangeLang(item:{id:number,name:string,icon:string}){
    const newList = langList.filter(v => v.id !== item.id)
    setLangList([item, ...newList])
    setOpen(false)
  }

  return (
    <div 
      onClick={() => setOpen(!open)}
      className="flex cursor-pointer relative items-center gap-3.5">
      <Image src={langList[0].icon} alt="flag" width={16} height={16}/>
      <span className="text-[16px]">{langList[0].name}</span>
      <Arraydown/>

      <ul className={`absolute top-7 bg-black flex flex-col gap-2 w-full p-2 rounded-[5px] transition-all duration-300 ${open ? "opacity-100 visible" : "opacity-0 invisible"}`}>
        {langList.slice(1).map(item => (
          <li key={item.id} onClick={() => handleChangeLang(item)} className="text-white p-1 flex items-center gap-2 hover:bg-white hover:text-black rounded">
            <Image src={item.icon} alt="flag" width={16} height={16}/>
            <span>{item.name}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default LangConfig
