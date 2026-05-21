import Link from "next/link";

export default function ServicesPage() {
  // Added specific pastel color mappings for each service to match the reference UI
  const services = [
    { icon: "fa-qrcode", title: "Scan & Pay", color: "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400" },
    { icon: "fa-mobile-screen-button", title: "Mobile Recharge", color: "bg-pink-100 text-pink-700 dark:bg-pink-900/30 dark:text-pink-400" },
    { icon: "fa-bolt", title: "Electricity", color: "bg-teal-100 text-teal-700 dark:bg-teal-900/30 dark:text-teal-400" },
    { icon: "fa-car", title: "FASTag Recharge", color: "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400" },
    { icon: "fa-credit-card", title: "Credit Card Payment", color: "bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-400" },
    { icon: "fa-satellite-dish", title: "DTH", color: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400" },
    { icon: "fa-building-columns", title: "Bank Transfer", color: "bg-rose-100 text-rose-700 dark:bg-rose-900/30 dark:text-rose-400" },
    { icon: "fa-house-chimney-user", title: "Rent Payment", color: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400" },
    { icon: "fa-droplet", title: "Water", color: "bg-cyan-100 text-cyan-700 dark:bg-cyan-900/30 dark:text-cyan-400" },
    { icon: "fa-wifi", title: "Broadband/Landline", color: "bg-sky-100 text-sky-700 dark:bg-sky-900/30 dark:text-sky-400" },
  ];

  return (
    <main className="py-24 bg-white dark:bg-zinc-950 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-teal font-bold tracking-wider uppercase text-sm mb-3 block">
            One App For Everything
          </span>
          <h2 className="font-bold text-4xl md:text-5xl text-[#332b50] dark:text-zinc-50 mb-6 tracking-tight">
            Convenience <br className="hidden md:block" />
            at your fingertips
          </h2>
          <p className="text-[#332b50]/60 dark:text-zinc-400 text-lg">
            From scanning local shop QRs to paying your rent and credit card bills, MuthuPe handles your daily financial life effortlessly.
          </p>
        </div>

        {/* Pill-Shaped Organic Flex Layout */}
        <div className="flex flex-wrap justify-center items-center gap-4 max-w-5xl mx-auto">
          {services.map((svc, i) => (
            <Link 
              key={i} 
              href="#" 
              className="group flex items-center gap-4 border border-gray-300 dark:border-zinc-700 rounded-full py-2 pr-8 pl-2 hover:shadow-md hover:border-gray-400 dark:hover:border-zinc-500 transition-all bg-white dark:bg-zinc-900"
            >
              {/* Circular Pastel Icon */}
              <div className={`w-14 h-14 rounded-full flex items-center justify-center text-xl transition-transform group-hover:scale-105 ${svc.color}`}>
                <i className={`fa-solid ${svc.icon}`}></i>
              </div>
              
              {/* Text Label */}
              <span className="font-semibold text-[#332b50] dark:text-zinc-200 text-sm md:text-base whitespace-nowrap">
                {svc.title}
              </span>
            </Link>
          ))}
        </div>

      </div>
    </main>
  );
}