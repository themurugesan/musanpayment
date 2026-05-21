import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#332b50] dark:bg-zinc-950 pt-16 pb-8 border-t border-white/10 dark:border-zinc-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          
          {/* Brand & Social Column */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4 group">
              <img src="/favicon.png" alt="MuthuPe Logo" className="w-8 h-8 object-contain transition-transform group-hover:scale-105" />
              <span className="font-bold text-xl text-white tracking-tight">MuthuPe</span>
            </Link>
            <p className="text-white/50 text-sm mb-6 leading-relaxed">
              Bharatiya Payments. Simplified. Based in Chennai, built for the world.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://twitter.com/MuthuPe" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/70 hover:bg-white/10 hover:text-saffron transition-all"
                aria-label="Twitter"
              >
                <i className="fa-brands fa-twitter"></i>
              </a>
              <a 
                href="https://www.linkedin.com/in/muthumurugan" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/70 hover:bg-white/10 hover:text-saffron transition-all"
                aria-label="LinkedIn"
              >
                <i className="fa-brands fa-linkedin"></i>
              </a>
              <a 
                href="https://www.instagram.com/muthupe" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/70 hover:bg-white/10 hover:text-saffron transition-all"
                aria-label="Instagram"
              >
                <i className="fa-brands fa-instagram"></i>
              </a>
            </div>
          </div>

          {/* Spacer for layout balance */}
          <div className="hidden md:block"></div>

          {/* Business Links */}
          <div>
            <h4 className="font-bold text-white mb-6 tracking-tight">Business</h4>
            <ul className="space-y-3 text-sm text-white/60">
              <li><Link href="/gateway" className="hover:text-white transition-colors">Merchant Gateway</Link></li>
              <li><Link href="/pricing" className="hover:text-white transition-colors">Pricing</Link></li>
              <li><Link href="/docs" className="hover:text-white transition-colors">API Documentation</Link></li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-bold text-white mb-6 tracking-tight">Company</h4>
            <ul className="space-y-3 text-sm text-white/60">
              <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact Support</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-xs font-medium">
            © 2026 MuthuPe Technologies. All rights reserved.
          </p>
          <p className="text-white/40 text-xs flex items-center gap-2 font-medium">
            Powered by UPI 
            <span className="bg-white/10 text-white/80 px-2.5 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase ml-1">
              UPI
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}