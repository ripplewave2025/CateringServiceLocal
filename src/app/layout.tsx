import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";

const bodyFont = Manrope({
  variable: "--font-body",
  subsets: ["latin"],
});

const displayFont = Cormorant_Garamond({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Hamro Catering | Premium event catering across Darjeeling, Sikkim, and Siliguri",
  description:
    "Premium wedding, private, and corporate catering with fast quote planning, premium service design, and disciplined event operations.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${bodyFont.variable} ${displayFont.variable} antialiased`}>
        <div className="min-h-screen">{children}</div>
      </body>
    </html>
  );
}
