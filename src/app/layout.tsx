import type { Metadata } from "next";
import { Roboto_Flex, Inter } from "next/font/google";
import "./globals.css";

const robotoFlex = Roboto_Flex({
  subsets: ["latin"],
  variable: "--font-roboto",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Alhilal Facility Management",
  description: "Professional maintenance and service website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${robotoFlex.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
