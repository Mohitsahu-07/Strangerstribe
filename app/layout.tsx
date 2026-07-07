import type { Metadata } from "next";
import { Outfit, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { ClerkProvider } from "@clerk/nextjs";


const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Strangers Tribe - Come Solo. Leave with a Tribe.",
  description: "Explore Chopta, Kasol, Tosh, Manali, and Jibhi with the coolest travel community. Group trips, treks, and backpacking adventures for solo travelers.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white">
        <ClerkProvider dynamic>
            <Header />
            <main className="flex-1 w-full">{children}</main>
            <Footer />
            <WhatsAppButton />
        </ClerkProvider>
      </body>
    </html>
  );
}
