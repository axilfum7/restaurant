// "use client"; 

// import { usePathname } from "next/navigation";
// import Footer from "@/modules/Home/Footer";
// import Header from "@/modules/Home/Header";
// import Image from "next/image";
// import "./globals.css";

// export default function RootLayout({ children }: { children: React.ReactNode }) {
//   const pathname = usePathname();
//     const isHomePage = pathname === "/";

//   return (
//     <html lang="ru">
//       <body className="antialiased min-h-screen flex flex-col relative">
        
//         {isHomePage && (
//           <div className="fixed inset-0 z-[-5] pointer-events-none">
//             <Image src="/images/Rectangle 1.png" alt="home-bg" fill className="object-cover"priority/>
//           </div>
//         )}

//         {!isHomePage && (
//           <div className="fixed inset-0 z-[-5] pointer-events-none">
//             <Image src="/images/pizza.png" alt="other-bg" fill className="object-cover blur-[100px] scale-150 opacity-20"/>
//           </div>
//         )}

//         <Header />
//         <main className="flex-1 relative z-10">
//           {children}
//         </main>
//         <Footer />
//       </body>
//     </html>
//   );
// }

"use client"; 

import { usePathname } from "next/navigation";
import Footer from "@/modules/Home/Footer";
import Header from "@/modules/Home/Header";
import Image from "next/image";
import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  
  const isHomePage = pathname === "/";
  // Login va Register sahifalarini aniqlaymiz
  const isAuthPage = pathname === "/login" || pathname === "/register";

  return (
    <html lang="ru">
      <body className="antialiased min-h-screen flex flex-col relative overflow-x-hidden">
        
        {/* ASOSIY SAHIFA FON RASMI */}
        {isHomePage && (
          <div className="fixed inset-0 z-[-5] pointer-events-none">
            <Image 
              src="/images/Rectangle 1.png" 
              alt="home-bg" 
              fill 
              className="object-cover"
              priority
            />
          </div>
        )}

        {/* BOSHQA SAHIFALAR UCHUN FON (Auth sahifalaridan tashqari) */}
        {!isHomePage && !isAuthPage && (
          <div className="fixed inset-0 z-[-5] pointer-events-none">
            <Image 
              src="/images/pizza.png" 
              alt="other-bg" 
              fill 
              className="object-cover blur-[100px] scale-150 opacity-20"
            />
          </div>
        )}

        {/* HEADER: Faqat auth sahifasi bo'lmasa ko'rinadi */}
        {!isAuthPage && <Header />}

        <main className={`flex-1 relative z-10 ${isAuthPage ? 'w-full h-full' : ''}`}>
          {children}
        </main>

        {/* FOOTER: Faqat auth sahifasi bo'lmasa ko'rinadi */}
        {!isAuthPage && <Footer />}
        
      </body>
    </html>
  );
}