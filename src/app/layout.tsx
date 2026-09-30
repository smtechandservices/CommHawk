import type { Metadata, Viewport } from "next";
import { Geist, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

const geist = Geist({ subsets: ["latin"], variable: "--font-geist" });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space-grotesk" });

export const viewport: Viewport = {
  themeColor: "#FAFAFA",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: {
    default: "CommHawk Technologies Pvt. Ltd.",
    template: "%s | CommHawk Technologies Pvt. Ltd.",
  },
  description: "Accelerate your business with premium engineering solutions from CommHawk Technologies Pvt. Ltd. We specialize in building scalable, secure, and high-performance digital architectures.",
  applicationName: "CommHawk Technologies Pvt. Ltd.",
  authors: [{ name: "CommHawk Technologies Pvt. Ltd." }],
  keywords: ["Software Engineering", "Scalable Systems", "Cloud Native", "AI Integration", "Digital Transformation", "App Development", "Tech Consulting"],
  creator: "CommHawk Technologies Pvt. Ltd.",
  publisher: "CommHawk Technologies Pvt. Ltd.",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://commhawk.in"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "CommHawk Technologies Pvt. Ltd.",
    description: "Accelerate your business with premium engineering solutions from CommHawk Technologies Pvt. Ltd. Scalable, secure, and high-performance digital architectures.",
    url: "https://commhawk.in",
    siteName: "CommHawk Technologies Pvt. Ltd.",
    images: [
      {
        url: "/logo.jpeg",
        width: 1200,
        height: 630,
        alt: "CommHawk Technologies Pvt. Ltd. logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CommHawk Technologies Pvt. Ltd.",
    description: "Accelerate your business with premium engineering solutions from CommHawk Technologies Pvt. Ltd. Scalable, secure, and high-performance digital architectures.",
    creator: "@commhawk",
    images: ["/logo.jpeg"],
  },
  icons: {
    icon: "/logo.jpeg",
    shortcut: "/logo.jpeg",
    apple: "/logo.jpeg",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geist.variable} ${spaceGrotesk.variable}`}>
      <body className="antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
