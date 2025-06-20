// Esse é o layout principal, logo, tudo respeitará oq ue está aqui dentro, logo, as fontes selecionadas serão para todos
// Devo implementar o Header e o Footer aqui

import type { Metadata } from "next";
import "./globals.css";
import {  Montserrat } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

// importanto fonte do google!
const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Casa Reviver",
  description: "ONG Casa Reviver - Amor, acolhimento e transformação.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className={`${montserrat.className} bg-white text-gray-900`}>
        <Header />
        <main className="min-h-[calc(100vh-160px)] px-0 pt-[104px]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}