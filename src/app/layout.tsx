import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";

export const metadata: Metadata = {
   title: "Casamento de Bia e Gabriel",
   description: "Casamento de Bia e Gabriel",
};

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <html lang="pt-br">
         <body className={`antialiased w-screen h-screen hide-scrollbar`}>
            <Header />
            <main>{children}</main>
         </body>
      </html>
   );
}
