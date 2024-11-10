import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-blue-950`}
     >
        <div className="flex justify-between mt-2 text-orange-400 ">
        <a className="text-[20px] font-bold md:text-5xl md:ml-8">fAtiMa</a>
        <ul className="flex gap-x-5 md:gap-x-10 text-[13px]  md:text-[20px] md:mr-9">
          <li><a href="/">Home</a></li>
          <li><a href="Aboutme">About Me</a></li>
          <li><a href="Contact">Contact</a></li>
        </ul>
        </div>
        {children}
      </body>
    </html>
  );
}
