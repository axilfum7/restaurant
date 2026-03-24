"use client"
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/navigation' // 1. Routerni chaqiramiz

export default function LoginPage() {
  const router = useRouter() // 2. Routerni ishga tushiramiz

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault() // Sahifa yangilanib ketishini to'xtatamiz
    
    // Bu yerda kelajakda API orqali tekshirish (backend) yoziladi
    // Hozircha login bosilganda to'g'ridan-to'g'ri Homega o'tkazib yuboramiz
    router.push('/')
  }

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center p-4">
      {/* ... Fon rasmi qismi o'sha-o'sha ... */}
      <div className="fixed inset-0 z-0">
        <Image src="/images/Rectangle 1.png" alt="background" fill className="object-cover blur-[5px]" />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <div className="relative z-10 w-full max-w-112.5 bg-white/70 backdrop-blur-xl rounded-[40px] p-10 py-16 flex flex-col items-center shadow-2xl border border-white/30">
        <div className="bg-black w-20 h-20 rounded-full flex items-center justify-center absolute -top-10 shadow-xl border-4 border-white/50">
           <span className="text-white text-3xl">🍴</span>
        </div>

        <h2 className="text-[32px] font-black text-black mb-10 uppercase tracking-tight">Вход в аккаунт</h2>

        {/* 3. Formaga onSubmit beramiz */}
        <form onSubmit={handleSubmit} className="w-full flex flex-col gap-6">
          <div className="w-full">
            <label className="text-[10px] text-black/50 ml-1 uppercase font-bold">Ваше имя пользователя</label>
            <input  required type="text"  className="w-full bg-transparent rounded-md border-b border-black/20 py-2 outline-none focus:border-black transition-all" />
          </div>

          <div className="w-full">
            <label className="text-[10px] text-black/50 ml-1 uppercase font-bold">Пароль</label>
            <input  required type="password"  className="w-full rounded-md bg-transparent border-b border-black/20 py-2 outline-none focus:border-black transition-all" />
            <p className="text-[10px] mt-2 text-black/60 cursor-pointer hover:underline text-right font-gilroyMedium">Забыли пароль?</p>
          </div>

          {/* Tugma turi "submit" bo'lishi kerak */}
          <button type="submit" className="bg-black text-white w-full py-4 rounded-xl mt-6 font-bold uppercase hover:bg-black/80 transition-all active:scale-95">
            Вход в аккаунт
          </button>
        </form>

        <Link href="/register" className="mt-6 text-[11px] text-blue-700 font-bold hover:underline uppercase">
          Еще нет учетной записи?
        </Link>
      </div>
    </div>
  )
}