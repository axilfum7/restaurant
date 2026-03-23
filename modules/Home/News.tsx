import { Carousel, Carousel2 } from "@/icons"
import Image from "next/image"

const News = () => {
  const posts = [
    { id: 1, img: "/images/news1.png", author: "Сергей", authorImg: "/images/avatar.svg",text: "Используйте гибкие структуры, чтобы предоставить надежный обзор для обзоров высокого уровня. Итеративные подходы к данным корпоративной." },
    { id: 2, img: "/images/news2.png", author: "Сергей", authorImg: "/images/avatar.svg",text: "Используйте гибкие структуры, чтобы предоставить надежный обзор для обзоров высокого уровня. Итеративные подходы к данным корпоративной." },
    { id: 3, img: "/images/news3.png", author: "Сергей", authorImg: "/images/avatar.svg",text: "Используйте гибкие структуры, чтобы предоставить надежный обзор для обзоров высокого уровня. Итеративные подходы к данным корпоративной." },
  ]

  return (
    <section className="py-32 relative">
      <div className="containers">
        <h2 className="text-[40px] font-black text-center mb-32 uppercase tracking-tight">Новости/Галерея</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-32 mb-16">
          {posts.map((post) => (
            <div key={post.id} className="relative bg-[#FFFFFF66] rounded-[40px] p-8 pt-20 shadow-[0px_15px_50px_rgba(0,0,0,0.05)] group transition-all duration-500 hover:shadow-[0px_30px_70px_rgba(0,0,0,0.1)]">
              
              <div className="absolute -top-24 left-6 w-60 h-45 overflow-hidden rounded-[30px] shadow-lg">
                <Image src={post.img} alt="news" fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
              </div>
              
              <div className="text-center md:text-left">
                <p className="text-[14px] text-[#666666] pt-9 leading-[1.8] mb-8 gilroyRegular">"{post.text}"</p>
                
                <div className="flex items-center gap-3 border-gray-100 ">
                  <div className="w-10 h-10 relative rounded-full overflow-hidden border border-gray-200">
                    <Image src={post.authorImg} alt={post.author} fill className="object-cover" />
                  </div>
                  <span className="text-[15px] font-bold text-black">{post.author}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-end pr-4">
          <button className="bg-black text-white px-10 py-4 rounded-xl flex items-center gap-3 hover:bg-[#FFD903] hover:text-black duration-300 font-bold uppercase text-[14px]">
                      Посмотреть меню <Carousel />
                    </button> 
        </div>
      </div>
    </section>
  )
}

export default News