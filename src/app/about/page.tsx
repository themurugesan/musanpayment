
export default function AboutPage() {
  const values = [
    {
      icon: "fa-earth-asia",
      color: "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400",
      title: "Built for Bharat",
      desc: "We understand the diverse needs of Indian merchants and consumers. Our platform is designed to be accessible, intuitive, and available in multiple regional languages.",
    },
    {
      icon: "fa-shield-halved",
      color: "bg-teal-100 text-teal-700 dark:bg-teal-900/30 dark:text-teal-400",
      title: "Uncompromising Security",
      desc: "Trust is our primary currency. We employ bank-grade AES-256 encryption and multi-factor authentication to ensure every transaction is completely secure.",
    },
    {
      icon: "fa-rocket",
      color: "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400",
      title: "Lightning Fast",
      desc: "By directly partnering with top UPI sponsor banks and utilizing advanced server routing, we ensure your money moves in milliseconds without pending states.",
    }
  ];

  return (
    <main className="min-h-screen bg-white dark:bg-zinc-950 text-[#332b50] dark:text-zinc-50 transition-colors duration-300 pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Hero Section */}
        <div className="text-center max-w-3xl mx-auto mb-20 mt-8">
          <span className="text-teal-600 font-bold tracking-wider uppercase text-sm mb-4 block">
            Our Story
          </span>
          <h1 className="font-bold text-4xl md:text-6xl text-[#332b50] dark:text-zinc-50 mb-6 tracking-tight">
            Simplifying payments for <br className="hidden md:block" /> a billion Indians.
          </h1>
          <p className="text-[#332b50]/70 dark:text-zinc-400 text-lg leading-relaxed">
            Founded in Chennai, MuthuPe was born out of a simple vision: to make digital payments as seamless and reliable as handing over cash. Today, we are building a robust financial ecosystem that empowers individuals and businesses alike.
          </p>
        </div>

        {/* Mission / Origin Image Block */}
        <div className="bg-[#f5f7f9] dark:bg-zinc-900 rounded-[2rem] p-8 md:p-12 mb-24 border border-gray-200 dark:border-zinc-800 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-purple-200/50 dark:bg-purple-900/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
          <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
            <div>
              <h2 className="font-bold text-3xl md:text-4xl text-[#332b50] dark:text-zinc-100 mb-6 tracking-tight">
                Rooted in Chennai, <br /> Scaling Globally.
              </h2>
              <p className="text-[#332b50]/70 dark:text-zinc-400 leading-relaxed mb-6">
                What started as a small tech initiative in the tech corridors of Tamil Nadu has rapidly evolved into a scalable fintech infrastructure. We realized that while UPI transformed India, there was still a massive gap in merchant experience and payment success rates. 
              </p>
              <p className="text-[#332b50]/70 dark:text-zinc-400 leading-relaxed">
                MuthuPe bridges that gap. we are the underlying rails that local kirana stores, growing SaaS startups, and everyday consumers rely on to power their digital lives.
              </p>
            </div>
            
            {/* Visual Stats Block representing scale */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white dark:bg-zinc-950 p-6 rounded-3xl border border-gray-100 dark:border-zinc-800 text-center shadow-sm">
                <h3 className="font-bold text-3xl text-teal-600 dark:text-teal-400 mb-1">0%</h3>
                <p className="text-sm text-gray-500 font-medium uppercase tracking-wider">MDR Fees</p>
              </div>
              <div className="bg-white dark:bg-zinc-950 p-6 rounded-3xl border border-gray-100 dark:border-zinc-800 text-center shadow-sm">
                <h3 className="font-bold text-3xl text-purple-600 dark:text-purple-400 mb-1">&lt;1s</h3>
                <p className="text-sm text-gray-500 font-medium uppercase tracking-wider">Settlement Time</p>
              </div>
              <div className="bg-white dark:bg-zinc-950 p-6 rounded-3xl border border-gray-100 dark:border-zinc-800 text-center shadow-sm">
                <h3 className="font-bold text-3xl text-orange-500 dark:text-orange-400 mb-1">99.9%</h3>
                <p className="text-sm text-gray-500 font-medium uppercase tracking-wider">Success Rate</p>
              </div>
              <div className="bg-white dark:bg-zinc-950 p-6 rounded-3xl border border-gray-100 dark:border-zinc-800 text-center shadow-sm">
                <h3 className="font-bold text-3xl text-blue-600 dark:text-blue-400 mb-1">24/7</h3>
                <p className="text-sm text-gray-500 font-medium uppercase tracking-wider">Live Support</p>
              </div>
            </div>
          </div>
        </div>

        {/* Our Values Section */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-bold text-3xl md:text-4xl text-[#332b50] dark:text-zinc-100 mb-4 tracking-tight">Our Core Values</h2>
          <p className="text-[#332b50]/70 dark:text-zinc-400">The principles that guide our engineering, design, and customer support everyday.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {values.map((val, i) => (
            <div key={i} className="bg-white dark:bg-zinc-900 p-8 rounded-[2rem] border border-gray-300 dark:border-zinc-700 hover:shadow-lg hover:border-gray-400 transition-all group hover:-translate-y-1">
              <div className={`w-16 h-16 rounded-full flex items-center justify-center text-2xl mb-6 transition-transform group-hover:scale-105 ${val.color}`}>
                <i className={`fa-solid ${val.icon}`}></i>
              </div>
              <h3 className="font-bold text-xl text-[#332b50] dark:text-zinc-100 mb-3">{val.title}</h3>
              <p className="text-[#332b50]/70 dark:text-zinc-400 text-sm leading-relaxed">{val.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </main>
  );
}