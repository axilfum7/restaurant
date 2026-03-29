export default function AdminDashboard() {
  const stats = [
    { label: 'Jami Zakazlar', count: '124', color: 'bg-blue-500' },
    { label: 'Foydalanuvchilar', count: '45', color: 'bg-green-500' },
    { label: 'Menu Taomlar', count: '32', color: 'bg-orange-500' },
  ]

  return (
    <div>
      <h1 className="text-4xl font-black uppercase italic mb-10">Boshqaruv Paneli</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {stats.map((s, i) => (
          <div key={i} className={`${s.color} p-8 rounded-[30px] text-white shadow-xl`}>
            <p className="text-lg opacity-80">{s.label}</p>
            <h2 className="text-5xl font-black mt-2">{s.count}</h2>
          </div>
        ))}
      </div>
    </div>
  )
}