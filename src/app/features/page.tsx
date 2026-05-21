export default function FeaturesPage() {
  // Mapped to the new pastel color palette to match the exact aesthetic
  const features = [
    { 
      icon: "fa-bolt", 
      color: "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400", 
      title: "Lightning Fast UPI", 
      desc: "Powered by NPCI infrastructure, our server routing guarantees that your money reaches the receiver in milliseconds, without fail." 
    },
    { 
      icon: "fa-file-invoice-dollar", 
      color: "bg-teal-100 text-teal-700 dark:bg-teal-900/30 dark:text-teal-400", 
      title: "Smart Auto-Pay", 
      desc: "Never pay late fees again. Set up mandates for your recurring bills and SIPs. We'll remind you before any deduction." 
    },
    { 
      icon: "fa-shield-halved", 
      color: "bg-pink-100 text-pink-700 dark:bg-pink-900/30 dark:text-pink-400", 
      title: "Bank-grade Security", 
      desc: "Your financial data is protected by AES-256 bit encryption and multi-factor authentication protocols. We never store your UPI PIN." 
    }
  ];

  return (
    <main className="py-24 bg-white dark:bg-zinc-950 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="text-teal font-bold tracking-wider uppercase text-sm mb-3 block">
            Enterprise Infrastructure
          </span>
          <h2 className="font-bold text-4xl md:text-5xl text-[#332b50] dark:text-zinc-50 mb-6 tracking-tight">
            Security & Speed <br className="hidden md:block" />
            built right in.
          </h2>
          <p className="text-[#332b50]/70 dark:text-zinc-400 text-lg">
            We don&apos;t compromise on your data or your money. MuthuPe is engineered to be the safest platform in Bharat.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((ft, i) => (
            <div 
              key={i} 
              className="bg-white dark:bg-zinc-900 p-8 rounded-[2rem] border border-gray-300 dark:border-zinc-700 hover:shadow-lg hover:border-gray-400 dark:hover:border-zinc-500 transition-all group"
            >
              {/* Circular Pastel Icon */}
              <div className={`w-16 h-16 rounded-full flex items-center justify-center text-2xl mb-8 transition-transform group-hover:scale-105 ${ft.color}`}>
                <i className={`fa-solid ${ft.icon}`}></i>
              </div>
              
              {/* Text Content */}
              <h3 className="font-bold text-2xl text-[#332b50] dark:text-zinc-100 mb-4 tracking-tight">
                {ft.title}
              </h3>
              <p className="text-[#332b50]/70 dark:text-zinc-400 leading-relaxed">
                {ft.desc}
              </p>
            </div>
          ))}
        </div>
        
      </div>
    </main>
  );
}