import {  EmailIcon, PersonIcon, TelIcon } from "@/icons"
import Link from "next/link"
import LangConfig from "@/components/LangConfig"
import Button from "@/components/Button"

const Header = () => {
  return (
    <header className="pt-3 pb-11.25">
      <div className="containers px-5 flex items-center justify-between">
        <div className="flex items-center text-black gap-6.75">
          <Link href={"tel:+998(90)758383833"} className="flex hover:text-[#ffd903] duration-300 items-center text-black gap-3">
            <TelIcon />
            <span className="text-[16px] leading-[100%]">+998(90)758383833</span>
          </Link>
          <Link href={"mailto:info@bmgsoft.com"} className="flex hover:text-[#ffd903] duration-300 items-center text-black gap-3">
            <EmailIcon/>
            <span className="text-[16px] leading-[100%]">info@bmgsoft.com</span>
          </Link>
        </div>
        <div className="flex items-center gap-8.75">
         <LangConfig/>
          <Button title="Вход в аккаунт" icon={<PersonIcon/>} iconPosition="left"/>
          
        </div>
      </div>
    </header>
  )
}

export default Header