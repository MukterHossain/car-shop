import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./component/Shared/Navbar";
import Footer from "./component/Shared/Footer";
import AuthProvider from "@/services/AuthProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Car Shop",
  description: "Car repearing and sell shop",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AuthProvider>
        <Navbar></Navbar>       
        <div className=" max-w-7xl mx-auto px-2">
        {children}
        <Footer></Footer>
        </div>
        </AuthProvider>
      </body>
      
      
    </html>
  );
}
