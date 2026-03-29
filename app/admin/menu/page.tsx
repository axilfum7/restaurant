"use client"
import { useState, ChangeEvent } from 'react'
import Image from 'next/image'

interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  img: string;
}

export default function AdminMenuPage() {
  const [products, setProducts] = useState<Product[]>([
    { id: 1, name: 'Chicken soup', price: 10000, category: 'Первое', img: '/images/2food.png' },
    { id: 2, name: 'Burger Classic', price: 25000, category: 'Фаст-Фуд', img: '/images/2food.png' },
  ])
  
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [isModalOpen, setIsModalOpen] = useState(false)
  
  // Tahrirlash rejimini aniqlash uchun
  const [editingId, setEditingId] = useState<number | null>(null)
  const [formData, setFormData] = useState({ name: '', price: '', category: 'Первое' })

  // 1. Filter Logic
  const filteredProducts = products.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  // 2. Open Modal for Create or Edit
  const openModal = (product?: Product) => {
    if (product) {
      setEditingId(product.id)
      setFormData({ name: product.name, price: product.price.toString(), category: product.category })
    } else {
      setEditingId(null)
      setFormData({ name: '', price: '', category: 'Первое' })
    }
    setIsModalOpen(true)
  }

  // 3. Save (Create or Update) Logic
  const handleSave = () => {
    if (!formData.name || !formData.price) return alert("Ma'lumotlarni to'ldiring!")

    if (editingId) {
      // UPDATE
      setProducts(products.map(p => 
        p.id === editingId ? { ...p, ...formData, price: Number(formData.price) } : p
      ))
    } else {
      // CREATE
      const newProduct: Product = {
        id: Date.now(),
        name: formData.name,
        price: Number(formData.price),
        category: formData.category,
        img: '/images/2food.png'
      }
      setProducts([...products, newProduct])
    }
    setIsModalOpen(false)
  }

  // 4. Delete Logic
  const deleteProduct = (id: number) => {
    if(confirm("Ushbu mahsulotni o'chirasizmi?")) {
      setProducts(products.filter(p => p.id !== id))
    }
  }

  const formatUZS = (price: number) => new Intl.NumberFormat('fr-FR').format(price)

  return (
    <div className="space-y-10">
      <div className="flex justify-between items-center">
        <h1 className="text-4xl font-black uppercase italic tracking-tighter">Menu Boshqaruvi</h1>
        <button onClick={() => openModal()} className="bg-black text-white px-8 py-4 rounded-2xl font-black hover:bg-[#FFD903] hover:text-black transition-all shadow-xl active:scale-95">
          + TAOM QO'SHISH
        </button>
      </div>

      {/* FILTER */}
      <div className="bg-white p-6 rounded-[25px] flex flex-wrap gap-4 shadow-sm border border-black/5">
        <input 
          type="text" placeholder="Qidiruv..." 
          className="flex-1 min-w-[200px] bg-gray-100 p-4 rounded-xl outline-none focus:ring-2 ring-[#FFD903] text-black"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select className="bg-gray-100 p-4 rounded-xl outline-none text-black" onChange={(e) => setSelectedCategory(e.target.value)}>
          <option value="All">Hamma kategoriyalar</option>
          <option value="Первое">Первое</option>
          <option value="Фаст-Фуд">Фаст-Фуд</option>
        </select>
      </div>

      {/* TABLE */}
      <div className="bg-white rounded-[35px] overflow-hidden shadow-xl border border-black/5">
        <table className="w-full text-left border-collapse">
          <thead className="bg-gray-50 text-gray-400 uppercase text-sm font-bold">
            <tr>
              <th className="p-6">Rasm</th>
              <th className="p-6">Nomi</th>
              <th className="p-6 text-right">Amallar</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {filteredProducts.map((item) => (
              <tr key={item.id} className="hover:bg-gray-50 transition-colors">
                <td className="p-6">
                  <div className="relative w-12 h-12 bg-gray-100 rounded-lg overflow-hidden border">
                    <Image src={item.img} alt="" fill className="object-contain p-1" />
                  </div>
                </td>
                <td className="p-6 font-bold text-lg text-black">{item.name} <br/> <span className="text-sm font-normal text-gray-400">{formatUZS(item.price)} UZS</span></td>
                <td className="p-6 text-right space-x-4">
                  <button onClick={() => openModal(item)} className="text-blue-500 font-bold hover:underline">Edit</button>
                  <button onClick={() => deleteProduct(item.id)} className="text-red-500 font-bold hover:underline">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* MODAL (CREATE & EDIT) */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
          <div className="bg-white w-full max-w-md rounded-[40px] p-10 shadow-2xl">
            <h2 className="text-3xl font-black uppercase italic mb-8 text-black">
              {editingId ? 'Tahrirlash' : 'Yangi Taom'}
            </h2>
            <div className="space-y-6">
              <input 
                type="text" placeholder="Taom nomi" value={formData.name}
                className="w-full bg-gray-100 p-4 rounded-2xl outline-none text-black font-bold border"
                onChange={(e) => setFormData({...formData, name: e.target.value})}/>
              <input 
                type="number" placeholder="Narxi" value={formData.price}
                className="w-full bg-gray-100 p-4 rounded-2xl outline-none text-black font-bold border"
                onChange={(e) => setFormData({...formData, price: e.target.value})}/>
              <select 
                className="w-full bg-gray-100 p-4 rounded-2xl outline-none font-bold text-black border"
                value={formData.category}
                onChange={(e) => setFormData({...formData, category: e.target.value})}>
                <option value="Первое">Первое</option>
                <option value="Фаст-Фуд">Фаст-Фуд</option>
              </select>
              <div className="flex gap-4 pt-4">
                <button onClick={() => setIsModalOpen(false)} className="flex-1 py-4 font-bold text-gray-400">Bekor qilish</button>
                <button onClick={handleSave} className="flex-1 bg-black text-white py-4 rounded-2xl font-black uppercase hover:bg-[#FFD903] hover:text-black transition-all">
                  {editingId ? 'Saqlash' : "Qo'shish"}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}