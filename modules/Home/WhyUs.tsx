import { Icon1, Icon2, Icon3, Icon4, Icon5, Icon6 } from '@/icons' // O'zingizdagi SVG nomlari

const WhyUs = () => {
  const advantages = [
    { 
      id: 1, 
      title: "Качественные продукты", 
      desc: "Входные билеты в музеи, для посещения достопримечательностей, памятников", 
      icon: <Icon1 /> 
    },
    { 
      id: 2, 
      title: "Быстрая доставка", 
      desc: "Входные билеты в музеи, для посещения достопримечательностей, памятников", 
      icon: <Icon2 /> 
    },
    { 
      id: 3, 
      title: "Вкусные рецепты", 
      desc: "Входные билеты в музеи, для посещения достопримечательностей, памятников", 
      icon: <Icon3 /> 
    },
    { 
      id: 4, 
      title: "Уютная атмосфера", 
      desc: "Входные билеты в музеи, для посещения достопримечательностей, памятников", 
      icon: <Icon4 /> 
    },
    { 
      id: 5, 
      title: "Опытные повара", 
      desc: "Входные билеты в музеи, для посещения достопримечательностей, памятников", 
      icon: <Icon5 /> 
    },
    { 
      id: 6, 
      title: "Обслуживание", 
      desc: "Входные билеты в музеи, для посещения достопримечательностей, памятников", 
      icon: <Icon6 /> 
    },
  ]

  return (
    <section className="py-24">
      <div className="containers">
        <h2 className="text-[40px] font-black text-center mb-24 uppercase tracking-tight font-gilroyBold">Почему именно мы?</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-20 gap-x-12">
          {advantages.map((item) => (
            <div key={item.id} className="flex flex-col items-center text-center group">
              <div className="mb-8 w-20 h-20 flex items-center justify-center rounded-full transition-all duration-500 group-hover:bg-[#FFD903] group-hover:scale-125 group-hover:shadow-lg group-hover:shadow-[#FFD903]/20">
                <div className="scale-125 transition-all duration-300 group-hover:brightness-0">
                  {item.icon}
                </div>
              </div>
              <h3 className="text-[22px] font-extrabold text-black mb-4">{item.title}</h3>
              <p className="text-[14px] text-[#666666] leading-relaxed max-w-[320px]">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyUs