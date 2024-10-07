//import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

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
      <body
        
      >
        <header>
          <nav>
            <a href="/">Home</a>
            <a href="/about">About Us</a>
            <a href="/menu">Menu</a>
          </nav>
        </header>
        <main>{children}</main>
        {/* <footer> 2024 MyWebsite</footer> */}
      </body>
    </html>
  );
}
