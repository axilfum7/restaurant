"use client"
import { useCart } from '@/context/CartContext'
import { Dom, Basket } from '@/icons' // Ikonkalarni markaziy fayldan olamiz
import Image from 'next/image'

export default function CheckoutPage() {
  const { cartItems, totalPrice } = useCart(); //

  return (
    <div className="min-h-screen pt-40 pb-24 px-4 flex justify-center items-start relative z-10">
      <div className="max-w-[1200px] w-full bg-white/40 backdrop-blur-3xl rounded-[60px] p-8 md:p-14 shadow-2xl flex flex-col lg:flex-row gap-16 border border-white/30">
        
        {/* CHAP TOMON: Formlar */}
        <div className="flex-1 space-y-12">
          <h1 className="text-4xl md:text-5xl font-black text-black uppercase tracking-tight italic">
            Оформление заказа
          </h1>

          <div className="space-y-10">
            {/* Способ получения */}
            <section className="space-y-6">
              <h3 className="text-2xl font-bold italic underline decoration-[#FFD903] underline-offset-[12px] decoration-4">
                Способ получения:
              </h3>
              <div className="space-y-5 pt-4">
                <label className="flex items-center gap-4 text-xl font-medium cursor-pointer">
                  <input type="radio" name="delivery" className="w-6 h-6 accent-black" />
                  <span>Заказ с собой</span>
                </label>
                <label className="flex items-center gap-4 text-xl font-medium cursor-pointer">
                  <input type="radio" name="delivery" defaultChecked className="w-6 h-6 accent-black" />
                  <span>Доставка до двери</span>
                </label>
                
                <div className="mt-4 space-y-4">
                  <div className="flex items-center gap-3 text-xl font-medium">
                    <Dom /> {/* Icons papkasidan kelayotgan Dom ikonkasi */}
                    <span>Доставка по адресу:</span>
                  </div>
                  <p className="text-sm text-black/40 ml-9">Укажите адрес доставки на карте:</p>
                  <button className="ml-9 bg-black text-white px-10 py-3 rounded-full uppercase font-black text-sm hover:bg-[#FFD903] hover:text-black transition-all shadow-lg active:scale-95">
                    Выбрать
                  </button>
                </div>
              </div>
            </section>

            {/* Способ оплаты */}
            <section className="space-y-6 pt-6">
              <h3 className="text-2xl font-bold italic underline decoration-[#FFD903] underline-offset-[12px] decoration-4">
                Способ оплаты:
              </h3>
              <div className="space-y-6 pt-4">
                 <div className="space-y-4">
                   <label className="flex items-center gap-4 text-xl font-medium cursor-pointer">
                     <input type="radio" name="pay" defaultChecked className="w-6 h-6 accent-black" />
                     <span>Картой онлайн</span>
                   </label>
                   
                   {/* To'lov tizimlari orasida joy bilan joylashtirildi */}
                   <div className="ml-10 flex items-center gap-4 flex-wrap bg-white/60 p-3 rounded-2xl border border-black/5 w-fit">
                      <span className="text-[14px] font-black text-blue-900 italic px-2">HUMO</span>
                      <span className="text-[14px] font-black text-green-600 italic px-2 border-l border-black/10">UZCARD</span>
                      <span className="text-[14px] font-black text-blue-700 italic px-2 border-l border-black/10">VISA</span>
                      <span className="text-[14px] font-black text-red-500 italic px-2 border-l border-black/10">MC</span>
                      <span className="text-[14px] font-black text-black px-2 border-l border-black/10">Pay</span>
                   </div>
                 </div>
                 
                 <label className="flex items-center gap-4 text-xl font-medium cursor-pointer">
                    <input type="radio" name="pay" className="w-6 h-6 accent-black" />
                    <span>Оплата при получении</span>
                 </label>
              </div>
            </section>
          </div>
        </div>

        {/* O'NG TOMON: Savat kvitansiyasi */}
        <div className="w-full lg:w-[400px]">
          <div className="bg-white/70 rounded-[45px] p-10 shadow-xl border border-white/50 h-fit sticky top-40">
            <h2 className="text-[28px] font-black text-center uppercase italic mb-8">Ваш заказ</h2>
            
            <div className="space-y-4 mb-10 max-h-[350px] overflow-y-auto pr-2 custom-scrollbar">
              {cartItems.map((item, i) => (
                <div key={i} className="flex justify-between items-end border-b border-black/10 pb-2">
                  <span className="text-lg font-medium opacity-70">{item.title || item.name}</span>
                  <span className="text-lg font-black whitespace-nowrap">
                    {Number(item.price).toLocaleString()}сум
                  </span>
                </div>
              ))}
            </div>

            <div className="flex justify-between items-center mb-10">
              <span className="text-2xl font-black uppercase italic tracking-tighter">Итого:</span>
              <span className="text-3xl font-black">
                {totalPrice.toLocaleString()}сум
              </span>
            </div>

            <button className="w-full bg-black text-white py-5 rounded-[22px] text-xl font-black uppercase hover:bg-[#FFD903] hover:text-black transition-all shadow-2xl active:scale-95">
              Заказать
            </button>
          </div>
        </div>

      </div>
    </div>
  )
}