import type { Metadata } from "next";
import { EB_Garamond } from "next/font/google";
import "./globals.css";
import LenisScroll from "@/components/LenisScroll";
import Header from "@/components/header/Header";
import Footer from "@/components/home/footer/Footer";

const eb_Garamond = EB_Garamond({
  variable: "--font-eb-gramond",
  subsets: ["latin"],
});

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
        <body className={`${eb_Garamond.className} relative max-w-screen overflow-x-hidden min-h-screen grid`}>
          <Header />
          {children}
          <Footer />
          <div className=" py-2 md:py-8">
            <p className=" text-center">@Copyright reserved by Fold Design</p>
          </div>
        </body>
      </LenisScroll>
    </html>
  );
}
