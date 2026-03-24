"use client"
import Link from 'next/link'
import Image from 'next/image'

export default function RegisterPage() {
  return (
    <div className="relative min-h-screen flex items-center justify-center p-4 py-20">
      <div className="fixed inset-0 z-0">
        <Image src="/images/Rectangle 1.png" alt="bg" fill className="object-cover blur-md" />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <div className="relative z-10 w-full max-w-125 bg-white/70 backdrop-blur-xl rounded-[40px] p-10 py-12 flex flex-col items-center shadow-2xl border border-white/30">
        <h2 className="text-[32px] font-black text-black mb-8 font-gilroyBold uppercase">Зарегистрироваться</h2>

        <form className="w-full flex flex-col gap-5">
          <input placeholder="Ваше имя" className="w-full bg-transparent border-b border-black/20 py-3 outline-none focus:border-black" />
          <input placeholder="Фамилия" className="w-full bg-transparent border-b border-black/20 py-3 outline-none focus:border-black" />
          <input placeholder="Ваш номер телефона" className="w-full bg-transparent border-b border-black/20 py-3 outline-none focus:border-black" />
          <input placeholder="Ваше имя пользователя" className="w-full bg-transparent border-b border-black/20 py-3 outline-none focus:border-black" />
          <input type="password" placeholder="Пароль" className="w-full bg-transparent border-b border-black/20 py-3 outline-none focus:border-black" />
          <input type="password" placeholder="Подтвердите пароль" className="w-full bg-transparent border-b border-black/20 py-3 outline-none focus:border-black" />

          <label className="flex items-center gap-2 cursor-pointer mt-4">
            <input type="checkbox" className="w-4 h-4" />
            <span className="text-[10px] text-black/60">Я прочитал и принял Политику конфиденциальности и Условия</span>
          </label>

          <button className="bg-black text-white w-full py-4 rounded-xl mt-6 font-bold uppercase">
            Вход в аккаунт
          </button>
        </form>

        <Link href="/login" className="mt-4 text-[11px] text-black/60 font-bold hover:underline uppercase">
          Уже есть аккаунт?
        </Link>
      </div>
    </div>
  )
}