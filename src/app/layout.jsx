//import type { Metadata } from "next";
//import localFont from "next/font/local";
import "./globals.css";
//import Image from "next/image";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

// export const metadata: Metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='bg-[url("/images/bg.svg")] bg-cover bg-center h-screen overflow-hidden '>
        <header className="flex flex-row justify-around p-4 items-center" >
          <div className="flex justify-self-start " >Toninyira</div>
          <nav className="flex justify-items-center " >
            <a href="/" className=" px-3 py-3 hover:border-b-2 " >Home</a>
            <a href="/about" className="mx-4 px-3 py-3 hover:border-b-2 " >About Us</a>
            <a href="/menu" className=" px-3 py-3 hover:border-b-2 " >Menu</a>
          </nav>
          <div className="" ></div>
        </header>
        <main>{children}</main>
        {/* <footer> 2024 MyWebsite</footer> */}
      </body>
    </html>
  );
}
