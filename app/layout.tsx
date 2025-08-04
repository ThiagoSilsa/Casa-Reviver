import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Casa Reviver",
  description:
    "ONG que atende mais de 200 famílias no Morro do Estado com atividades socioeducativas, apoio psicológico e projetos de desenvolvimento social.",
  keywords:
    "ONG, Casa Reviver, Niterói, educação social, voluntariado, doações, comunidade",
  icons: {
    icon: "/favicon/favicon.ico", // ou .png, .svg
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
