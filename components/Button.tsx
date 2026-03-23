import { ReactNode } from "react"

const Button = ({icon, title, extraClass, iconPosition}:{icon?:ReactNode, title?:string, extraClass?:string, iconPosition?:"left" | "right"}) => {
    return (
        <button className={`bg-black border border-transparent gap-2 hover:border-[#ffd903] duration-300 text-[#FFFFFF] hover:bg-transparent hover:text-[#ffd903] flex items-center justify-center gap-1.2 rounded-[5px] py-1.25 px-2 ${extraClass}`}>
            {iconPosition == "left" && icon && icon}
            {title && <span className="text-[10px] leading-[150%] ">Вход в аккаунт</span>}
            {iconPosition == "right" && icon && icon}
        </button>
    )
}

export default Button