"use client";

import { useTheme } from "next-themes";
import { Moon, Sun, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => setMounted(true), []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Features", href: "/features" },
    { name: "Business", href: "/business" },
    { name: "About", href: "/about" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/90 dark:bg-zinc-950/90 backdrop-blur-md border-b border-gray-200 dark:border-zinc-800 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <img 
              src="/favicon.png" 
              alt="MuthuPe Logo" 
              className="w-10 h-10 object-contain transition-transform group-hover:scale-105"
            />
            <span className="font-bold text-2xl tracking-tight leading-none text-[#332b50] dark:text-zinc-50">
              MuthuPe
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 font-medium text-[#332b50]/70 dark:text-zinc-300 text-sm">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href} 
                className={`${
                  pathname === link.href 
                    ? 'text-[#332b50] dark:text-white font-bold' 
                    : 'hover:text-[#332b50] dark:hover:text-white'
                } transition-colors`}
              >
                {link.name}
              </Link>
            ))}
            
            {mounted && (
              <button
                onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
                className="p-2 rounded-full bg-[#f5f7f9] dark:bg-zinc-900 hover:bg-gray-200 dark:hover:bg-zinc-800 transition-colors text-[#332b50] dark:text-zinc-300"
                aria-label="Toggle Dark Mode"
              >
                {resolvedTheme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
              </button>
            )}

            <Link 
              href="#download" 
              className="bg-[#332b50] dark:bg-white text-white dark:text-[#332b50] px-6 py-2.5 rounded-full hover:bg-[#332b50]/90 dark:hover:bg-gray-100 hover:shadow-md transition-all font-semibold tracking-wide"
            >
              Download App
            </Link>
          </div>

          {/* Mobile Controls */}
          <div className="md:hidden flex items-center gap-4">
            {mounted && (
              <button 
                onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")} 
                className="p-2 text-[#332b50] dark:text-zinc-300"
              >
                {resolvedTheme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            )}
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="text-[#332b50] dark:text-zinc-50 p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-zinc-950 border-t border-gray-100 dark:border-zinc-900 absolute w-full shadow-xl">
          <div className="px-4 pt-4 pb-6 space-y-2 font-medium flex flex-col text-[#332b50]/80 dark:text-zinc-300">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-3 rounded-xl transition-colors ${
                  pathname === link.href 
                    ? 'bg-[#f5f7f9] dark:bg-zinc-900 text-[#332b50] dark:text-white font-bold' 
                    : 'hover:bg-[#f5f7f9] dark:hover:bg-zinc-900 hover:text-[#332b50] dark:hover:text-white'
                }`}
              >
                {link.name}
              </Link>
            ))}
            
            <Link 
              href="#download"
              onClick={() => setIsOpen(false)}
              className="block mt-4 text-center bg-[#332b50] dark:bg-white text-white dark:text-[#332b50] px-4 py-3 rounded-full font-bold shadow-md"
            >
              Download App
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}