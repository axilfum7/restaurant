"use client"; 
import { usePathname } from "next/navigation";
import Footer from "@/modules/Home/Footer";
import Header from "@/modules/Home/Header";
import Image from "next/image";
import "./globals.css";
import { CartProvider } from "@/context/CartContext"; // Qo'shildi

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const isAuthPage = pathname === "/login" || pathname === "/register";

  return (
    <html lang="ru">
      <body className="antialiased min-h-screen flex flex-col relative overflow-x-hidden">
        <CartProvider> {/* O'rab olindi */}
          {isHomePage && (
            <div className="fixed inset-0 z-[-5] pointer-events-none">
              <Image src="/images/Rectangle 1.png" alt="home-bg" fill className="object-cover" priority />
            </div>
          )}
          {!isHomePage && !isAuthPage && (
            <div className="fixed inset-0 z-[-5] pointer-events-none">
              <Image src="/images/pizza.png" alt="other-bg" fill className="object-cover blur-[100px] scale-150 opacity-20" />
            </div>
          )}
          {!isAuthPage && <Header />}
          <main className={`flex-1 relative z-10 ${isAuthPage ? 'w-full h-full' : ''}`}>
            {children}
          </main>
          {!isAuthPage && <Footer />}
        </CartProvider>
      </body>
    </html>
  );
}