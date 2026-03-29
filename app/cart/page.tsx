"use client"
import { useCart } from '@/context/CartContext'
import Image from 'next/image'
import Link from 'next/link'

export default function CartPage() {
  const { cartItems, removeFromCart } = useCart();

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-6">
        <h2 className="text-4xl font-black opacity-10 uppercase italic">Savat bo'sh</h2>
        <Link href="/menu" className="bg-black text-white px-10 py-4 rounded-2xl font-bold uppercase">Menyuga qaytish</Link>
      </div>
    );
  }

  return (
    <div className="max-w-250 mx-auto py-24 px-4 min-h-screen">
      <h1 className="text-4xl font-black mb-10 uppercase italic">Siz tanlagan taomlar</h1>
      
      <div className="flex flex-col gap-6">
        {cartItems.map((item, index) => (
          <div key={index} className="flex gap-10 bg-white/60 backdrop-blur-2xl p-8 rounded-[40px] shadow-xl border border-white/40 relative">
            <button 
              onClick={() => removeFromCart(index)}
              className="absolute top-6 right-8 text-black/30 hover:text-red-500 transition-colors text-2xl"
            >✕</button>
            
            <div className="relative w-48 h-48 rounded-3xl overflow-hidden shadow-lg border-4 border-white">
              <Image src={item.image} alt={item.title} fill className="object-cover" />
            </div>

            <div className="flex flex-col justify-center gap-3">
              <span className="text-[10px] font-bold text-black/20 tracking-[4px]">ID: #{item.id}</span>
              <h2 className="text-4xl font-black uppercase tracking-tighter leading-none">{item.title}</h2>
              <p className="text-black/50 italic text-lg">{item.description}</p>
              <span className="text-3xl font-black mt-2">{item.price.toLocaleString()} UZS</span>
            </div>
          </div>
        ))}
      </div>

      {/* ZAKAZ TUGMASI - CHEKOUTGA O'TKAZADI */}
      <div className="mt-16 flex justify-end">
        <Link href="/checkout" className="bg-black text-white px-20 py-6 rounded-[24px] font-black uppercase text-xl hover:bg-[#FFD903] hover:text-black transition-all shadow-2xl active:scale-95">
          Zakaz
        </Link>
      </div>
    </div>
  );
}