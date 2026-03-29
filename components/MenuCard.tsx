"use client"
import Image from 'next/image'
import { Basket } from '@/icons'
import { useCart } from '@/context/CartContext'

const MenuCard = ({ product }: { product: any }) => {
  const { addToCart } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault(); 
    e.stopPropagation(); // Link-ga o'tib ketmasligi uchun
    addToCart(product); 
    // Hech qayerga o'tmaydi, faqat tepada son oshadi
  };

  return (
    <div className="group bg-white/50 backdrop-blur-md rounded-[30px] p-6 border border-white/20 hover:shadow-2xl transition-all duration-500">
      <div className="relative w-full h-[200px] mb-6 overflow-hidden rounded-2xl">
        <Image src={product.image} alt={product.title} fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-xl font-gilroyBold text-black uppercase">{product.title}</h3>
        <p className="text-[12px] text-black/50 font-gilroyMedium line-clamp-2">{product.description}</p>
        <div className="flex items-center justify-between mt-4">
          <span className="text-[20px] font-black text-black">{product.price.toLocaleString()} UZS</span>
          <button 
            onClick={handleAddToCart} 
            className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center hover:bg-[#FFD903] hover:text-black transition-all active:scale-90 shadow-lg cursor-pointer"
          >
            <Basket />
          </button>
        </div>
      </div>
    </div>
  )
}
export default MenuCard