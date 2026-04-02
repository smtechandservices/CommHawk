import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CommHawk | Future-Driven Tech Solutions",
  description: "Helping businesses transform their ideas into seamless digital solutions with modern tech and scalability.",
  icons: {
    icon: "/logo-trans.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/geist@1.3.0/dist/fonts/geist-sans/style.css" />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
