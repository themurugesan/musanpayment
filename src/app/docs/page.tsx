"use client";

export default function DocsPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-zinc-950 text-[#332b50] dark:text-zinc-50 transition-colors duration-300 pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row gap-12 mt-8">
        
        {/* Sidebar Nav (Static for mockup) */}
        <div className="w-full lg:w-64 flex-shrink-0">
          <div className="sticky top-32">
            <h4 className="font-bold text-xs uppercase tracking-widest text-gray-400 mb-4">Getting Started</h4>
            <ul className="space-y-3 border-l-2 border-gray-100 dark:border-zinc-800 pl-4 mb-8">
              <li><a href="#" className="font-bold text-teal-600 dark:text-teal-400 block">Introduction</a></li>
              <li><a href="#" className="text-gray-500 hover:text-[#332b50] dark:hover:text-white transition-colors block">Authentication</a></li>
              <li><a href="#" className="text-gray-500 hover:text-[#332b50] dark:hover:text-white transition-colors block">Errors</a></li>
            </ul>

            <h4 className="font-bold text-xs uppercase tracking-widest text-gray-400 mb-4">Core API</h4>
            <ul className="space-y-3 border-l-2 border-gray-100 dark:border-zinc-800 pl-4">
              <li><a href="#" className="text-gray-500 hover:text-[#332b50] dark:hover:text-white transition-colors block">Orders</a></li>
              <li><a href="#" className="text-gray-500 hover:text-[#332b50] dark:hover:text-white transition-colors block">Payments</a></li>
              <li><a href="#" className="text-gray-500 hover:text-[#332b50] dark:hover:text-white transition-colors block">Refunds</a></li>
              <li><a href="#" className="text-gray-500 hover:text-[#332b50] dark:hover:text-white transition-colors block">Webhooks</a></li>
            </ul>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 max-w-4xl">
          <h1 className="font-bold text-4xl md:text-5xl text-[#332b50] dark:text-zinc-50 mb-6 tracking-tight">
            MuthuPe API Reference
          </h1>
          <p className="text-[#332b50]/70 dark:text-zinc-400 text-lg leading-relaxed mb-10">
            The MuthuPe API is organized around REST. Our API has predictable resource-oriented URLs, accepts form-encoded request bodies, returns JSON-encoded responses, and uses standard HTTP response codes.
          </p>

          <hr className="border-gray-200 dark:border-zinc-800 mb-10" />

          <div className="flex items-center gap-3 mb-6">
            <span className="bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400 px-3 py-1 rounded-md text-xs font-bold tracking-widest">POST</span>
            <code className="font-mono text-[#332b50] dark:text-zinc-300 font-bold bg-[#f5f7f9] dark:bg-zinc-900 px-3 py-1 rounded-md">/v1/orders</code>
          </div>
          <h2 className="font-bold text-2xl mb-4 dark:text-zinc-100">Create an Order</h2>
          <p className="text-[#332b50]/70 dark:text-zinc-400 mb-8 leading-relaxed">
            Creates a new order. Every payment in MuthuPe must be associated with an order. You should create an order on your server before initiating the checkout on the client side.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Parameters */}
            <div>
              <h3 className="font-bold text-lg mb-4 border-b border-gray-100 dark:border-zinc-800 pb-2">Body Parameters</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex gap-2 items-center mb-1">
                    <span className="font-mono font-bold text-sm">amount</span>
                    <span className="text-[10px] text-alertred font-bold uppercase">Required</span>
                  </div>
                  <p className="text-sm text-gray-500">Integer. The amount to be charged in the smallest currency unit (e.g., paise for INR). For ₹500.00, pass <code>50000</code>.</p>
                </div>
                <div>
                  <div className="flex gap-2 items-center mb-1">
                    <span className="font-mono font-bold text-sm">currency</span>
                    <span className="text-[10px] text-alertred font-bold uppercase">Required</span>
                  </div>
                  <p className="text-sm text-gray-500">String. The ISO currency code. Currently only <code>INR</code> is supported.</p>
                </div>
                <div>
                  <div className="flex gap-2 items-center mb-1">
                    <span className="font-mono font-bold text-sm">receipt</span>
                  </div>
                  <p className="text-sm text-gray-500">String. Your internal reference ID for this order. Max 40 characters.</p>
                </div>
              </div>
            </div>

            {/* Code Snippet */}
            <div className="bg-[#0d1117] rounded-[2rem] p-6 shadow-xl border border-gray-800 overflow-hidden text-sm h-max">
              <div className="flex justify-between items-center mb-4 border-b border-gray-800 pb-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <span className="text-xs font-mono text-gray-500">cURL</span>
              </div>
              <pre className="text-gray-300 overflow-x-auto font-mono">
                <code>
                  curl -X POST https://api.muthupe.com/v1/orders \<br/>
                  {"  "}-u <span className="text-yellow-200">mp_live_yourkeyid</span>:<span className="text-yellow-200">yourkeysecret</span> \<br/>
                  {"  "}-H <span className="text-green-400">"Content-type: application/json"</span> \<br/>
                  {"  "}-d <span className="text-purple-400">'{'{'}'</span><br/>
                  {"    "}<span className="text-blue-400">"amount"</span>: 50000,<br/>
                  {"    "}<span className="text-blue-400">"currency"</span>: <span className="text-green-400">"INR"</span>,<br/>
                  {"    "}<span className="text-blue-400">"receipt"</span>: <span className="text-green-400">"rcptid_11"</span><br/>
                  {"  "}<span className="text-purple-400">'{'}'}'</span>
                </code>
              </pre>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}