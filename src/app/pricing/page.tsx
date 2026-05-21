"use client";

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-[#f5f7f9] dark:bg-zinc-950 text-[#332b50] dark:text-zinc-50 transition-colors duration-300 pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16 mt-8">
          <h1 className="font-bold text-4xl md:text-5xl text-[#332b50] dark:text-zinc-50 mb-6 tracking-tight">
            Simple, transparent pricing.
          </h1>
          <p className="text-[#332b50]/70 dark:text-zinc-400 text-lg leading-relaxed">
            No hidden fees, no setup costs, and absolutely zero maintenance charges. You only pay when you make a successful sale.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          
          {/* Tier 1 */}
          <div className="bg-white dark:bg-zinc-900 rounded-[2rem] p-8 border border-gray-200 dark:border-zinc-800 hover:shadow-xl transition-all flex flex-col">
            <div className="w-14 h-14 bg-teal-100 text-teal-700 dark:bg-teal-900/30 dark:text-teal-400 rounded-full flex items-center justify-center text-xl mb-6">
              <i className="fa-brands fa-google-pay"></i>
            </div>
            <h3 className="font-bold text-2xl mb-2 dark:text-zinc-100">UPI & RuPay</h3>
            <p className="text-[#332b50]/60 dark:text-zinc-400 text-sm mb-6 h-10">Perfect for local retail and everyday micro-transactions.</p>
            <div className="mb-8">
              <span className="text-5xl font-bold dark:text-white">0%</span>
              <span className="text-gray-500 font-medium ml-2">MDR</span>
            </div>
            <ul className="space-y-4 mb-8 flex-1">
              <li className="flex items-center gap-3 text-sm font-medium"><i className="fa-solid fa-check text-teal-600"></i> Free QR Standee</li>
              <li className="flex items-center gap-3 text-sm font-medium"><i className="fa-solid fa-check text-teal-600"></i> Instant Bank Settlement</li>
              <li className="flex items-center gap-3 text-sm font-medium"><i className="fa-solid fa-check text-teal-600"></i> Unlimited Transactions</li>
            </ul>
            <button className="w-full py-4 rounded-full border-2 border-[#332b50] text-[#332b50] dark:border-white dark:text-white font-bold hover:bg-[#332b50] hover:text-white transition-all">
              Get Free QR
            </button>
          </div>

          {/* Tier 2 (Highlighted) */}
          <div className="bg-[#332b50] dark:bg-zinc-800 rounded-[2rem] p-8 border border-[#4a3f75] dark:border-zinc-700 shadow-2xl transform md:-translate-y-4 flex flex-col relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-saffron text-[#332b50] text-xs font-bold px-4 py-1 rounded-bl-xl uppercase tracking-wider">Most Popular</div>
            <div className="w-14 h-14 bg-white/10 text-saffron rounded-full flex items-center justify-center text-xl mb-6">
              <i className="fa-regular fa-credit-card"></i>
            </div>
            <h3 className="font-bold text-2xl mb-2 text-white">Standard Gateway</h3>
            <p className="text-white/60 text-sm mb-6 h-10">For digital businesses, e-commerce, and SaaS platforms.</p>
            <div className="mb-8">
              <span className="text-5xl font-bold text-white">2%</span>
              <span className="text-white/60 font-medium ml-2">per transaction</span>
            </div>
            <ul className="space-y-4 mb-8 flex-1 text-white/90">
              <li className="flex items-center gap-3 text-sm font-medium"><i className="fa-solid fa-check text-saffron"></i> Credit & Debit Cards</li>
              <li className="flex items-center gap-3 text-sm font-medium"><i className="fa-solid fa-check text-saffron"></i> 50+ Netbanking Banks</li>
              <li className="flex items-center gap-3 text-sm font-medium"><i className="fa-solid fa-check text-saffron"></i> Developer APIs & Plugins</li>
              <li className="flex items-center gap-3 text-sm font-medium"><i className="fa-solid fa-check text-saffron"></i> T+1 Settlements</li>
            </ul>
            <button className="w-full py-4 rounded-full bg-saffron text-[#332b50] font-bold hover:bg-yellow-500 transition-all shadow-lg">
              Sign Up Now
            </button>
          </div>

          {/* Tier 3 */}
          <div className="bg-white dark:bg-zinc-900 rounded-[2rem] p-8 border border-gray-200 dark:border-zinc-800 hover:shadow-xl transition-all flex flex-col">
            <div className="w-14 h-14 bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400 rounded-full flex items-center justify-center text-xl mb-6">
              <i className="fa-solid fa-building"></i>
            </div>
            <h3 className="font-bold text-2xl mb-2 dark:text-zinc-100">Enterprise</h3>
            <p className="text-[#332b50]/60 dark:text-zinc-400 text-sm mb-6 h-10">High volume processing for large scale organizations.</p>
            <div className="mb-8">
              <span className="text-4xl font-bold dark:text-white">Custom</span>
            </div>
            <ul className="space-y-4 mb-8 flex-1">
              <li className="flex items-center gap-3 text-sm font-medium"><i className="fa-solid fa-check text-purple-600"></i> Discounted MDR rates</li>
              <li className="flex items-center gap-3 text-sm font-medium"><i className="fa-solid fa-check text-purple-600"></i> Dedicated Account Manager</li>
              <li className="flex items-center gap-3 text-sm font-medium"><i className="fa-solid fa-check text-purple-600"></i> Custom API limits</li>
            </ul>
            <button className="w-full py-4 rounded-full border-2 border-gray-200 text-[#332b50] dark:text-white dark:border-zinc-700 font-bold hover:bg-gray-50 dark:hover:bg-zinc-800 transition-all">
              Contact Sales
            </button>
          </div>

        </div>
      </div>
    </main>
  );
}