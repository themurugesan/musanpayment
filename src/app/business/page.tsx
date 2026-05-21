/* eslint-disable @next/next/no-img-element */
"use client";

import Link from "next/link";

export default function BusinessPage() {
  // Updated to use the soft pastel palette matching the new aesthetic
  const businessFeatures = [
    {
      icon: "fa-percent",
      color: "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400",
      title: "0% MDR on UPI",
      desc: "Keep 100% of your earnings. We charge absolutely zero merchant discount rate on all UPI payments.",
    },
    {
      icon: "fa-bolt-lightning",
      color: "bg-teal-100 text-teal-700 dark:bg-teal-900/30 dark:text-teal-400",
      title: "Instant Settlements",
      desc: "No more waiting for T+1 days. Your money hits your linked bank account instantly, keeping your cash flow healthy.",
    },
    {
      icon: "fa-chart-pie",
      color: "bg-pink-100 text-pink-700 dark:bg-pink-900/30 dark:text-pink-400",
      title: "Smart Analytics",
      desc: "Track daily sales, compare weekly footfall, and download GST-ready reports directly from your merchant dashboard.",
    },
    {
      icon: "fa-headset",
      color: "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400",
      title: "Priority Support",
      desc: "Business shouldn't stop. Get access to our dedicated 24/7 merchant helpline to resolve issues in minutes.",
    },
  ];

  return (
    <main className="min-h-screen bg-white dark:bg-zinc-950 text-[#332b50] dark:text-zinc-50 transition-colors duration-300">
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-24 lg:pt-32 lg:pb-32 overflow-hidden bg-[#332b50] dark:bg-[#1a1528]">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none opacity-40">
          <div className="absolute -top-40 right-10 w-96 h-96 rounded-full bg-[#E8A020]/30 blur-[120px]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-[#E8A020] text-xs font-bold uppercase tracking-widest mb-6 border border-white/20 backdrop-blur-sm">
                For Merchants & Startups
              </div>
              <h1 className="font-bold text-5xl md:text-6xl text-white leading-tight mb-6 tracking-tight">
                Powering the <br />
                <span className="text-gradient">Businesses of Bharat.</span>
              </h1>
              <p className="text-lg text-white/80 mb-10 max-w-xl mx-auto lg:mx-0 font-medium leading-relaxed">
                Whether you run a local retail shop in Kovilpatti or a scalable SaaS platform, MuthuPe Business provides the infrastructure to collect payments seamlessly.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button className="px-8 py-4 bg-[#E8A020] text-[#332b50] font-bold rounded-full hover:bg-yellow-500 hover:shadow-[0_0_20px_rgba(232,160,32,0.4)] transition-all">
                  Get Business QR
                </button>
                <button className="px-8 py-4 bg-white/10 text-white font-bold rounded-full border border-white/20 hover:bg-white/20 backdrop-blur-md transition-all">
                  Contact Sales
                </button>
              </div>
            </div>

            {/* Merchant Dashboard / POS Mockup */}
            <div className="relative mx-auto w-full max-w-md lg:max-w-lg transition-transform duration-500 hover:-translate-y-2">
              <div className="bg-white dark:bg-zinc-900 rounded-[2rem] p-6 shadow-[0_20px_50px_rgba(0,0,0,0.3)] border border-gray-100 dark:border-zinc-800">
                <div className="flex justify-between items-center mb-8 border-b border-gray-100 dark:border-zinc-800 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-purple-100 text-purple-700 rounded-full flex items-center justify-center font-bold text-lg"><i className="fa-solid fa-store"></i></div>
                    <div>
                      <h3 className="font-bold text-[#332b50] dark:text-zinc-100">Sri Murugan Stores</h3>
                      <p className="text-xs text-gray-500 dark:text-zinc-400">Merchant ID: MP-8942</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-gray-500 dark:text-zinc-400">Today&apos;s Sales</p>
                    <p className="font-bold text-teal-600 dark:text-teal-400 text-xl">₹ 14,250</p>
                  </div>
                </div>

                {/* Mock QR Standee embedded in dashboard */}
                <div className="bg-[#f5f7f9] dark:bg-zinc-950 rounded-2xl p-6 text-center border border-gray-200 dark:border-zinc-800 mb-6 relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-2 bg-[#332b50] dark:bg-[#E8A020]"></div>
                  <h4 className="font-bold text-[#332b50] dark:text-zinc-100 mb-4 mt-2">Scan & Pay</h4>
                  <div className="bg-white p-4 inline-block rounded-xl shadow-sm mb-2 border border-gray-100 dark:border-zinc-800">
                    <img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=MuthuPeMerchantPayment" alt="Merchant QR" className="w-32 h-32" />
                  </div>
                  <p className="text-xs font-bold text-[#332b50]/60 dark:text-zinc-400 tracking-widest uppercase">Accepted Here</p>
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-[#f5f7f9] dark:bg-zinc-950 rounded-xl">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-white dark:bg-zinc-800 rounded-full flex items-center justify-center shadow-sm"><i className="fa-solid fa-arrow-down text-teal-600 text-xs"></i></div>
                      <p className="text-sm font-semibold text-[#332b50] dark:text-zinc-200">Received from Rahul</p>
                    </div>
                    <p className="text-sm font-bold text-[#332b50] dark:text-white">+ ₹ 450</p>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-[#f5f7f9] dark:bg-zinc-950 rounded-xl">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-white dark:bg-zinc-800 rounded-full flex items-center justify-center shadow-sm"><i className="fa-solid fa-arrow-down text-teal-600 text-xs"></i></div>
                      <p className="text-sm font-semibold text-[#332b50] dark:text-zinc-200">Received from Priya</p>
                    </div>
                    <p className="text-sm font-bold text-[#332b50] dark:text-white">+ ₹ 1,200</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-[#f5f7f9] dark:bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-bold text-3xl md:text-4xl text-[#332b50] dark:text-zinc-100 mb-4 tracking-tight">Why choose MuthuPe Business?</h2>
            <p className="text-[#332b50]/70 dark:text-zinc-400">Built for scale, designed for simplicity. We eliminate the friction in digital payments so you can focus on your customers.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {businessFeatures.map((ft, i) => (
              <div key={i} className="bg-white dark:bg-zinc-900 p-8 rounded-[2rem] border border-gray-300 dark:border-zinc-700 hover:shadow-lg hover:border-gray-400 transition-all group hover:-translate-y-1">
                <div className={`w-16 h-16 rounded-full flex items-center justify-center text-2xl mb-6 transition-transform group-hover:scale-105 ${ft.color}`}>
                  <i className={`fa-solid ${ft.icon}`}></i>
                </div>
                <h3 className="font-bold text-xl text-[#332b50] dark:text-zinc-100 mb-3">{ft.title}</h3>
                <p className="text-[#332b50]/70 dark:text-zinc-400 text-sm leading-relaxed">{ft.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Developer / Gateway Section */}
      <section className="py-24 bg-white dark:bg-zinc-900 border-t border-gray-200 dark:border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Code Snippet Concept */}
            <div className="order-2 lg:order-1 bg-[#0d1117] rounded-[2rem] p-6 shadow-2xl border border-gray-800 overflow-hidden font-mono text-sm">
              <div className="flex items-center gap-2 mb-4 border-b border-gray-800 pb-4">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <span className="text-gray-500 ml-2 text-xs">server.js (Node.js)</span>
              </div>
              <pre className="text-gray-300 overflow-x-auto">
                <code>
  <span className="text-pink-400">import</span> {"{ MuthuPe }"} <span className="text-pink-400">from</span> <span className="text-green-400">&apos;muthupe-node&apos;</span>;<br/><br/>
  <span className="text-blue-400">const</span> muthupe = <span className="text-pink-400">new</span> MuthuPe({"{"}<br/>
  {"  "}key_id: process.env.<span className="text-yellow-200">MUTHUPE_KEY_ID</span>,<br/>
  {"  "}key_secret: process.env.<span className="text-yellow-200">MUTHUPE_SECRET</span><br/>
  {"}"});<br/><br/>
  <span className="text-gray-500">{"// Create an order for your SaaS app"}</span><br/>
  app.<span className="text-blue-400">post</span>(<span className="text-green-400">&apos;/create-order&apos;</span>, <span className="text-pink-400">async</span> (req, res) {"=> {"}<br/>
  {"  "}<span className="text-blue-400">const</span> order = <span className="text-pink-400">await</span> muthupe.orders.<span className="text-yellow-200">create</span>({"{"}<br/>
  {"    "}amount: <span className="text-purple-400">50000</span>, <span className="text-gray-500">{"// ₹500.00"}</span><br/>
  {"    "}currency: <span className="text-green-400">&quot;INR&quot;</span>,<br/>
  {"    "}receipt: <span className="text-green-400">&quot;order_rcptid_11&quot;</span><br/>
  {"  }"});<br/>
  {"  "}res.<span className="text-yellow-200">json</span>(order);<br/>
  {"}"});
</code>
              </pre>
            </div>

            <div className="order-1 lg:order-2 text-center lg:text-left">
              <span className="text-teal-600 font-bold tracking-wider uppercase text-sm mb-2 block">Payment Gateway</span>
              <h2 className="font-bold text-4xl md:text-5xl text-[#332b50] dark:text-zinc-100 mb-6 tracking-tight">Built for SaaS & E-Commerce.</h2>
              <p className="text-[#332b50]/70 dark:text-zinc-400 text-lg mb-8 leading-relaxed">
                Building a bike taxi app, a course platform, or an independent SaaS? Integrate MuthuPe Gateway with simple, well-documented REST APIs. We provide seamless SDKs for React, Node.js, and more.
              </p>
              
              <ul className="space-y-4 mb-8 text-left max-w-md mx-auto lg:mx-0">
                <li className="flex items-center gap-3 text-[#332b50] dark:text-zinc-200 font-medium">
                  <div className="w-6 h-6 rounded-full bg-teal-100 text-teal-700 flex items-center justify-center text-xs"><i className="fa-solid fa-check"></i></div>
                  Highest success rate routing
                </li>
                <li className="flex items-center gap-3 text-[#332b50] dark:text-zinc-200 font-medium">
                  <div className="w-6 h-6 rounded-full bg-teal-100 text-teal-700 flex items-center justify-center text-xs"><i className="fa-solid fa-check"></i></div>
                  Support for UPI Intent & Webhooks
                </li>
                <li className="flex items-center gap-3 text-[#332b50] dark:text-zinc-200 font-medium">
                  <div className="w-6 h-6 rounded-full bg-teal-100 text-teal-700 flex items-center justify-center text-xs"><i className="fa-solid fa-check"></i></div>
                  Custom checkout themes
                </li>
              </ul>

              <Link href="#" className="inline-flex items-center gap-2 text-[#332b50] dark:text-white font-bold hover:text-teal-600 dark:hover:text-teal-400 transition-colors">
                Read API Documentation <i className="fa-solid fa-arrow-right"></i>
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#332b50]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-bold text-3xl md:text-4xl text-white mb-6 tracking-tight">Ready to upgrade your business payments?</h2>
          <p className="text-white/70 mb-10 text-lg max-w-2xl mx-auto">
            Join thousands of merchants growing their business with zero MDR and instant settlements. Setup takes less than 5 minutes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-[#E8A020] text-[#332b50] font-bold rounded-full hover:bg-yellow-500 transition-all">
              Download Business App
            </button>
          </div>
        </div>
      </section>

    </main>
  );
}