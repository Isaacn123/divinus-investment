import "../styles/index.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "DIVINUS Investment Group - Building Generational Wealth for African Families",
  description: "Building Generational Wealth for African Families Through Smart Digital Investments. FinTech Solutions, AI-Powered Insights, Capital Markets, and Financial Literacy.",
  keywords: ["investment", "wealth management", "FinTech", "Africa", "digital investment", "financial literacy", "capital markets"],
  authors: [{ name: "DIVINUS Investment Group" }],
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    title: "DIVINUS Investment Group - Building Generational Wealth",
    description: "Building Generational Wealth for African Families Through Smart Digital Investments",
    url: "https://divinusinvestment.com",
    siteName: "DIVINUS Investment Group",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "DIVINUS Investment Group Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DIVINUS Investment Group - Building Generational Wealth",
    description: "Building Generational Wealth for African Families Through Smart Digital Investments",
    images: ["/logo.png"],
    creator: "@divinusgroup",
  },
  robots: {
    index: true,
    follow: true,
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
  },
  themeColor: "#2563eb",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}