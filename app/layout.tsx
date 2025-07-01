import Footer from "@/components/user/Footer";
import Navbar from "@/components/user/Navbar";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AXUM SEC | Cybersecurity Solutions",
  description: "Enterprise-grade penetration testing and vulnerability management services powered by global security experts.",
  keywords: ["cybersecurity", "penetration testing", "bug bounty", "vulnerability management"],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://axumsec.com",
    title: "AXUM SEC | Cybersecurity Solutions",
    description: "Enterprise-grade security testing services",
    images: [{
      url: "/og-image.jpg",
      width: 1200,
      height: 630,
      alt: "AXUM SEC Cybersecurity",
    }]
  },
  twitter: {
    card: "summary_large_image",
    site: "@axumsec",
    creator: "@axumsec",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body 
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950 min-h-screen flex flex-col`}
      >
        {/* Animated background elements */}
        <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
          <div className="absolute -top-96 -left-96 w-[600px] h-[600px] bg-red-500/5 rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute -bottom-80 -right-80 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-3xl animate-pulse-slow animation-delay-2000"></div>
        </div>
        
        <div className="fixed inset-0 -z-20 bg-grid-light dark:bg-grid-dark bg-[size:40px_40px]"></div>
        
        {/* Glowing accent */}
        <div className="fixed top-1/4 right-1/3 w-96 h-96 bg-red-500/10 rounded-full blur-[100px] pointer-events-none animate-pulse"></div>
        
        <Navbar />
        
        <main className="flex-grow pt-34 pb-20">
          {children}
        </main>
        
        <Footer />
        
        {/* Custom cursor effects */}
        <div className="cursor-dot"></div>
        <div className="cursor-outline"></div>
      </body>
    </html>
  );
}