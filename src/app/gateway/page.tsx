"use client";

import Link from "next/link";

export default function GatewayPage() {
  const integrationPartners = [
    { name: "Shopify", icon: "fa-shopify", color: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400" },
    { name: "WooCommerce", icon: "fa-wordpress", color: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400" },
    { name: "Magento", icon: "fa-magento", color: "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400" },
    { name: "Custom API", icon: "fa-code", color: "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400" }
  ];

  return (
    <main className="min-h-screen bg-white dark:bg-zinc-950 text-[#332b50] dark:text-zinc-50 transition-colors duration-300 pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Hero Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24 mt-8">
          <div>
            <span className="text-teal-600 font-bold tracking-wider uppercase text-sm mb-4 block">
              Online Payment Gateway
            </span>
            <h1 className="font-bold text-4xl md:text-6xl text-[#332b50] dark:text-zinc-50 mb-6 tracking-tight">
              The highest converting checkout in Bharat.
            </h1>
            <p className="text-[#332b50]/70 dark:text-zinc-400 text-lg leading-relaxed mb-8">
              Give your customers a buttery-smooth checkout experience. Accept UPI, Credit Cards, Netbanking, and Wallets with industry-leading success rates and intelligent dynamic routing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-4 bg-saffron text-[#332b50] font-bold rounded-full hover:bg-yellow-500 transition-all shadow-sm">
                Create Live Account
              </button>
              <button className="px-8 py-4 bg-[#f5f7f9] dark:bg-zinc-900 text-[#332b50] dark:text-white font-bold rounded-full border border-gray-200 dark:border-zinc-800 hover:border-gray-400 transition-all">
                Test Sandbox
              </button>
            </div>
          </div>

          {/* Checkout Mockup */}
          <div className="relative mx-auto w-full max-w-sm transition-transform duration-500 hover:-translate-y-2">
            <div className="bg-white dark:bg-zinc-900 rounded-[2rem] p-6 shadow-2xl border border-gray-100 dark:border-zinc-800">
              <div className="text-center mb-6 border-b border-gray-100 dark:border-zinc-800 pb-4">
                <img src="/favicon.png" alt="Logo" className="w-8 h-8 mx-auto mb-2" />
                <p className="text-sm text-gray-500 font-medium">Acme Corp Checkout</p>
                <h3 className="font-bold text-2xl text-[#332b50] dark:text-white">₹ 1,499.00</h3>
              </div>
              
              <div className="space-y-3 mb-6">
                <div className="border-2 border-teal-500 bg-teal-50 dark:bg-teal-900/20 rounded-xl p-4 flex justify-between items-center cursor-pointer">
                  <div className="flex items-center gap-3">
                    <i className="fa-brands fa-google-pay text-2xl"></i>
                    <span className="font-bold text-[#332b50] dark:text-zinc-100">UPI / GPay</span>
                  </div>
                  <i className="fa-solid fa-circle-check text-teal-600"></i>
                </div>
                <div className="border border-gray-200 dark:border-zinc-800 rounded-xl p-4 flex justify-between items-center cursor-pointer hover:bg-gray-50 dark:hover:bg-zinc-800/50">
                  <div className="flex items-center gap-3">
                    <i className="fa-regular fa-credit-card text-xl text-gray-500"></i>
                    <span className="font-medium text-[#332b50] dark:text-zinc-100">Cards</span>
                  </div>
                </div>
                <div className="border border-gray-200 dark:border-zinc-800 rounded-xl p-4 flex justify-between items-center cursor-pointer hover:bg-gray-50 dark:hover:bg-zinc-800/50">
                  <div className="flex items-center gap-3">
                    <i className="fa-solid fa-building-columns text-xl text-gray-500"></i>
                    <span className="font-medium text-[#332b50] dark:text-zinc-100">Netbanking</span>
                  </div>
                </div>
              </div>
              
              <button className="w-full py-4 bg-[#332b50] text-white font-bold rounded-xl shadow-md">
                Pay Securely
              </button>
              <p className="text-center text-[10px] text-gray-400 mt-4 uppercase tracking-widest"><i className="fa-solid fa-lock mr-1"></i> Secured by MuthuPe</p>
            </div>
          </div>
        </div>

        {/* Integrations */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="font-bold text-3xl text-[#332b50] dark:text-zinc-100 mb-4 tracking-tight">Plug and play integrations</h2>
          <p className="text-[#332b50]/70 dark:text-zinc-400">No code? No problem. Go live in minutes with our pre-built plugins.</p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-24">
          {integrationPartners.map((partner, i) => (
            <div key={i} className="flex items-center gap-3 bg-[#f5f7f9] dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-full py-2 pr-6 pl-2 hover:shadow-md transition-all">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center text-lg ${partner.color}`}>
                <i className={`fa-brands ${partner.icon}`}></i>
              </div>
              <span className="font-bold text-[#332b50] dark:text-zinc-200 text-sm">{partner.name}</span>
            </div>
          ))}
        </div>

      </div>
    </main>
  );
}