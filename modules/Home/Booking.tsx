import Image from 'next/image'

const Booking = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="containers flex items-center">
        
        {/* Chap tomonda forma */}
        <div className="w-1/2 z-10">
          <div className="max-w-125 bg-white/30 backdrop-blur-xl rounded-[50px] p-14 shadow-2xl border border-white/40">
            <div className="flex items-center gap-4 mb-10">
               <div className="bg-black p-4 rounded-full text-white">
                  <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 002-2V2M7 2v11M15 2v20M15 2c2 0 4 1 4 5s-2 5-4 5V2z"/></svg>
               </div>
               <h2 className="text-[32px] font-black uppercase tracking-tight">Забронировать стол</h2>
            </div>

            <form className="space-y-8">
              <input type="text" placeholder="Имя/номер" className="w-full bg-transparent border-b-2 border-black/10 pb-4 outline-none focus:border-black transition-colors placeholder:text-black/40 font-medium" />
              
              <div className="relative">
                <select className="w-full bg-transparent border-b-2 border-black/10 pb-4 outline-none focus:border-black appearance-none cursor-pointer font-medium">
                  <option>На сколько человек?</option>
                  <option>2 kishi</option>
                  <option>4 kishi</option>
                </select>
                <div className="absolute right-0 bottom-5 pointer-events-none opacity-40">▼</div>
              </div>

              <div className="flex gap-8">
                <input type="date" className="w-1/2 bg-transparent border-b-2 border-black/10 pb-4 outline-none focus:border-black font-medium" />
                <input type="time" className="w-1/2 bg-transparent border-b-2 border-black/10 pb-4 outline-none focus:border-black font-medium" />
              </div>

              <button className="bg-black text-white w-full py-5 rounded-2xl font-bold uppercase text-lg mt-6 hover:bg-[#FFD903] hover:text-black transition-all duration-300 shadow-xl shadow-black/10">
                Забронировать
              </button>
            </form>
          </div>
        </div>

        {/* O'ng tomonda Pizza (Leaf lari bilan rasm ichida) */}
        <div className="w-1/2 relative flex justify-end">
            <div className="relative w-187.5 h-187.5 -mr-32 translate-y-10 scale-110">
                <Image 
                    src="/images/pizza.png" 
                    alt="Pizza and leaves" 
                    fill 
                    className="object-contain drop-shadow-[0_50px_50px_rgba(0,0,0,0.15)]" 
                />
            </div>
        </div>
      </div>
    </section>
  )
}

export default Booking