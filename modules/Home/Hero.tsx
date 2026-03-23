import HeaderContent from "@/components/HeaderContent"
import { Carousel } from "@/icons"
import Image from "next/image"


const Hero = () => {
  return (
    <section className='hero-section'>
      <div className="containers hero-bg pt-13.75 h-180 relative pb-25 px-17.5 rounded-[50px]">
        <HeaderContent />
        <div className='w-82 pt-45.25 pb-25'>
          <h1 className='text-[64px] pt-17 leading-[120%] text-black font-black -translate-y-17'>Вкусная еда ждет тебя!</h1>
          <Image className='absolute bottom-0 m-auto right-40 pt-24 top-0 scale-[1.6]' style={{ width: "auto", height: "auto" }} src="/images/hero-bg.png" alt="Hero bg" width={1000} height={732} />
          <Image className='absolute scale-[1.7] top-37.5 left-0' style={{ width: "auto", height: "auto" }} src="/images/leaf.png" alt="Hero bg" width={298} height={293} />
          <button className="group flex items-center gap-3 ...">
<button className="bg-black text-white px-10 py-4 rounded-xl flex items-center gap-3 hover:bg-[#FFD903] hover:text-black duration-300 font-bold uppercase text-[14px]">
            Посмотреть меню <Carousel />
          </button>  
          <span className="transition-transform duration-300 group-hover:translate-x-1"> </span>
</button>
        </div>
      </div>
    </section>
  )
}

export default Hero