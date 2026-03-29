import Link from 'next/link'

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const menuItems = [
    { name: 'Home', path: '/admin', icon: '🏠' },
    { name: 'Menu', path: '/admin/menu', icon: '🍔' },
    { name: 'Users', path: '/admin/users', icon: '👥' },
    { name: 'Zakaz', path: '/admin/orders', icon: '📦' },
    { name: 'ContactInfo', path: '/admin/contacts', icon: '📞' },
  ];

  return (
    <div className="flex min-h-screen bg-[#F8F9FA]">
      {/* Sidebar */}
      <aside className="w-72 bg-black text-white p-8 flex flex-col fixed h-full">
        <h2 className="text-3xl font-black italic mb-12 tracking-tighter text-[#FFD903]">ADMIN</h2>
        <nav className="flex flex-col gap-6">
          {menuItems.map((item) => (
            <Link key={item.path} href={item.path} className="flex items-center gap-4 text-xl opacity-70 hover:opacity-100 hover:text-[#FFD903] transition-all font-medium">
              <span>{item.icon}</span> {item.name}
            </Link>
          ))}
        </nav>
        <Link href="/" className="mt-auto opacity-50 hover:opacity-100 italic">← Saytga qaytish</Link>
      </aside>

      {/* Main Content */}
      <main className="flex-1 ml-72 p-12">
        <div className="max-w-[1200px] mx-auto">{children}</div>
      </main>
    </div>
  )
}