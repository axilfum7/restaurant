import { ReactNode } from "react"

// Interface orqali tiplarni aniqlaymiz
interface ButtonProps {
    icon?: ReactNode;
    title?: string;
    className?: string; // extraClass o'rniga className ishlatish qulayroq
    iconPosition?: "left" | "right";
    onClick?: () => void;
}

const Button = ({ icon, title, className, iconPosition = "left", onClick }: ButtonProps) => {
    return (
        <button 
            onClick={onClick}
            className={`bg-black border border-transparent hover:border-[#ffd903] duration-300 text-[#FFFFFF] hover:bg-transparent hover:text-[#ffd903] flex items-center justify-center gap-2 rounded-[5px] py-1.25 px-4 transition-all ${className}`}
        >
            {/* Ikona chapda bo'lsa */}
            {iconPosition === "left" && icon && <span>{icon}</span>}
            
            {/* Sarlavha (title propidan keladi, qotirilgan emas) */}
            {title && <span className="text-[14px] leading-[150%] font-gilroyMedium">{title}</span>}
            
            {/* Ikona o'ngda bo'lsa */}
            {iconPosition === "right" && icon && <span>{icon}</span>}
        </button>
    )
}

export default Button