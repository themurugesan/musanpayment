import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google"; // Swapped to match the screenshot's geometric font
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Configuring the new font
const jakarta = Plus_Jakarta_Sans({ 
  subsets: ["latin"], 
  variable: "--font-jakarta",
  weight: ["400", "500", "600", "700"] // Ensuring we have the right weights for headings and body
});

export const metadata: Metadata = {
  title: "MuthuPe — Convenience at your fingertips",
  description: "Send money, pay bills, buy insurance, and manage your wealth in one secure app.",
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      </head>
      {/* Applied the new font variable globally */}
      <body className={`${jakarta.variable} font-sans antialiased overflow-x-hidden text-[#211c42]`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <Navbar />
          <div className="pt-20">
            {children}
          </div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}