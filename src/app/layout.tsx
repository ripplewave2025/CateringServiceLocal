import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Darjeeling & Sikkim Catering",
  description: "Exquisite catering services for Darjeeling, Sikkim, Siliguri, and neighboring areas.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="bg-white shadow-md p-4 sticky top-0 z-50">
          <nav className="container mx-auto flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold text-gray-800">
              Darjeeling & Sikkim Catering
            </Link>
            <ul className="flex space-x-6">
              <li>
                <Link href="/menu" className="text-gray-600 hover:text-gray-900 font-medium">
                  Menu
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-600 hover:text-gray-900 font-medium">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-600 hover:text-gray-900 font-medium">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-gray-900 font-medium">
                  Contact Us
                </Link>
              </li>
            </ul>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
