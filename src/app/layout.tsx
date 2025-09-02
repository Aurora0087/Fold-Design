import type { Metadata } from "next";
import { EB_Garamond, Bebas_Neue } from "next/font/google";
import "./globals.css";
import LenisScroll from "@/components/LenisScroll";
import Header from "@/components/header/Header";

const eb_Garamond = EB_Garamond({
  variable: "--font-eb-gramond",
  subsets: ["latin"],
});
const bebas_neue = Bebas_Neue({ weight: "400" });

export const metadata: Metadata = {
  title: "Fold Design",
  description: "Fold Design",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className=" no-scrollbar">
      <LenisScroll>
        <body className={`${bebas_neue.className} relative max-w-screen overflow-x-hidden min-h-screen grid`}>
          {children}
        </body>
      </LenisScroll>
    </html>
  );
}
