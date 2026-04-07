import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const viewport: Viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: {
    default: "CommHawk",
    template: "%s | CommHawk",
  },
  description: "Accelerate your business with CommHawk's premium engineering solutions. We specialize in building scalable, secure, and high-performance digital architectures.",
  applicationName: "CommHawk",
  authors: [{ name: "CommHawk Team" }],
  keywords: ["Software Engineering", "Scalable Systems", "Cloud Native", "AI Integration", "Digital Transformation", "App Development", "Tech Consulting"],
  creator: "CommHawk",
  publisher: "CommHawk",
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
    title: "CommHawk",
    description: "Accelerate your business with CommHawk's premium engineering solutions. Scalable, secure, and high-performance digital architectures.",
    url: "https://commhawk.in",
    siteName: "CommHawk",
    images: [
      {
        url: "/logo.jpeg",
        width: 1200,
        height: 630,
        alt: "CommHawk Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CommHawk",
    description: "Accelerate your business with CommHawk's premium engineering solutions. Scalable, secure, and high-performance digital architectures.",
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
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/geist@1.3.0/dist/fonts/geist-sans/style.css" />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
