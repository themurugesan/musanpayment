"use client";

import React, { useState } from "react";

export default function ContactPage() {
  const [formState, setFormState] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Integration ready: Connect to your Node.js/Express API gateway here
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <main className="min-h-screen bg-[#f5f7f9] dark:bg-zinc-950 text-[#332b50] dark:text-zinc-50 py-16 lg:py-24 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-teal-600 dark:text-teal-400 font-bold tracking-wider uppercase text-sm mb-3 block">
            Grievance & Support
          </span>
          <h1 className="font-bold text-4xl md:text-5xl text-[#332b50] dark:text-zinc-100 mb-4 tracking-tight">
            We are here to <span className="text-[#E8A020]">help you.</span>
          </h1>
          <p className="text-[#332b50]/70 dark:text-zinc-400 text-lg leading-relaxed">
            Have questions about transactions, merchant onboarding, or need immediate tech support? Reach out to our teams.
          </p>
        </div>

        {/* Contact Layout Grid */}
        <div className="grid lg:grid-cols-3 gap-8 items-start">
          
          {/* Column 1 & 2: Secure Contact Form */}
          <div className="lg:col-span-2 bg-white dark:bg-zinc-900 p-8 md:p-10 rounded-[2rem] shadow-sm border border-gray-200 dark:border-zinc-800">
            <h2 className="text-2xl font-bold mb-8 text-[#332b50] dark:text-zinc-100 flex items-center gap-3 tracking-tight">
              <div className="w-10 h-10 rounded-full bg-orange-100 dark:bg-orange-900/30 text-[#E8A020] flex items-center justify-center text-lg">
                <i className="fa-regular fa-envelope"></i>
              </div>
              Send a Secure Message
            </h2>
            
            {submitted ? (
              <div className="p-4 mb-6 bg-teal-50 dark:bg-teal-900/20 border border-teal-200 dark:border-teal-800 text-teal-700 dark:text-teal-400 rounded-2xl flex items-start gap-3">
                <i className="fa-solid fa-circle-check text-xl mt-0.5"></i>
                <div>
                  <p className="font-bold">Message Sent Successfully!</p>
                  <p className="text-sm opacity-90 mt-1">Our customer support team will review your query and respond within 24 hours.</p>
                </div>
              </div>
            ) : null}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold mb-2 text-[#332b50]/80 dark:text-zinc-300">Full Name</label>
                  <input 
                    type="text" 
                    required
                    className="w-full px-5 py-4 rounded-xl border border-gray-200 dark:border-zinc-700 bg-[#f5f7f9] dark:bg-zinc-800 text-[#332b50] dark:text-zinc-100 focus:outline-none focus:border-[#E8A020] focus:ring-1 focus:ring-[#E8A020]/30 transition-all"
                    placeholder="Enter your name"
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold mb-2 text-[#332b50]/80 dark:text-zinc-300">Email Address</label>
                  <input 
                    type="email" 
                    required
                    className="w-full px-5 py-4 rounded-xl border border-gray-200 dark:border-zinc-700 bg-[#f5f7f9] dark:bg-zinc-800 text-[#332b50] dark:text-zinc-100 focus:outline-none focus:border-[#E8A020] focus:ring-1 focus:ring-[#E8A020]/30 transition-all"
                    placeholder="name@example.com"
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold mb-2 text-[#332b50]/80 dark:text-zinc-300">Subject</label>
                <input 
                  type="text" 
                  required
                  className="w-full px-5 py-4 rounded-xl border border-gray-200 dark:border-zinc-700 bg-[#f5f7f9] dark:bg-zinc-800 text-[#332b50] dark:text-zinc-100 focus:outline-none focus:border-[#E8A020] focus:ring-1 focus:ring-[#E8A020]/30 transition-all"
                  placeholder="Transaction issue, Merchant query, Account verification..."
                  value={formState.subject}
                  onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                />
              </div>

              <div>
                <label className="block text-sm font-bold mb-2 text-[#332b50]/80 dark:text-zinc-300">Message Details</label>
                <textarea 
                  rows={5}
                  required
                  className="w-full px-5 py-4 rounded-xl border border-gray-200 dark:border-zinc-700 bg-[#f5f7f9] dark:bg-zinc-800 text-[#332b50] dark:text-zinc-100 focus:outline-none focus:border-[#E8A020] focus:ring-1 focus:ring-[#E8A020]/30 transition-all resize-none"
                  placeholder="Describe your concern in detail. Please do NOT include your secret UPI PIN in this form."
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full sm:w-auto px-10 py-4 bg-[#332b50] dark:bg-[#E8A020] text-white dark:text-[#332b50] font-bold rounded-full hover:opacity-90 hover:shadow-lg transition-all"
              >
                Submit Request <i className="fa-solid fa-paper-plane ml-2"></i>
              </button>
            </form>
          </div>

          {/* Column 3: Corporate Info Cards */}
          <div className="space-y-6">
            
            {/* Direct Channels */}
            <div className="bg-white dark:bg-zinc-900 p-8 rounded-[2rem] shadow-sm border border-gray-200 dark:border-zinc-800 space-y-6">
              <h3 className="text-xl font-bold text-[#332b50] dark:text-zinc-100 tracking-tight">Customer Helplines</h3>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 rounded-full flex items-center justify-center flex-shrink-0 text-lg">
                  <i className="fa-solid fa-phone"></i>
                </div>
                <div className="pt-1">
                  <p className="text-xs text-gray-500 dark:text-zinc-400 font-bold uppercase tracking-wider mb-1">Toll-Free Support</p>
                  <p className="font-bold text-[#332b50] dark:text-zinc-100 text-lg">1800-419-7485</p>
                  <p className="text-xs text-[#332b50]/50 dark:text-zinc-500 mt-1">Available 24/7 for fraud reporting</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-teal-100 dark:bg-teal-900/30 text-teal-600 dark:text-teal-400 rounded-full flex items-center justify-center flex-shrink-0 text-lg">
                  <i className="fa-brands fa-whatsapp"></i>
                </div>
                <div className="pt-1">
                  <p className="text-xs text-gray-500 dark:text-zinc-400 font-bold uppercase tracking-wider mb-1">WhatsApp Help Desk</p>
                  <p className="font-bold text-[#332b50] dark:text-zinc-100 text-lg">+91 94423 81750</p>
                  <p className="text-xs text-[#332b50]/50 dark:text-zinc-500 mt-1">Instant automated support</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full flex items-center justify-center flex-shrink-0 text-lg">
                  <i className="fa-regular fa-envelope"></i>
                </div>
                <div className="pt-1">
                  <p className="text-xs text-gray-500 dark:text-zinc-400 font-bold uppercase tracking-wider mb-1">Email Correspondence</p>
                  <p className="font-bold text-[#332b50] dark:text-zinc-100 text-sm md:text-base break-all">support@muthupe.com</p>
                </div>
              </div>
            </div>

            {/* Regional Hub Focus */}
            <div className="bg-[#332b50] dark:bg-[#1a1528] text-white p-8 rounded-[2rem] shadow-sm relative overflow-hidden border border-[#4a3f75] dark:border-zinc-800">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#E8A020]/20 to-transparent rounded-[2rem]"></div>
              <h3 className="text-xl font-bold mb-6 relative z-10 tracking-tight">Regional Office</h3>
              
              <div className="space-y-4 relative z-10 text-sm">
                <div className="flex gap-4">
                  <i className="fa-solid fa-location-dot text-[#E8A020] mt-1 flex-shrink-0 text-lg"></i>
                  <p className="text-white/80 leading-relaxed">
                    <strong className="text-white">MuthuPe Technologies Pvt. Ltd.</strong><br />
                    124/A, Main Road<br />
                    (Opposite New Bus Stand),<br />
                    Kovilpatti, Tamil Nadu — 628501
                  </p>
                </div>
                <div className="flex gap-4 items-center pt-2">
                  <i className="fa-solid fa-building text-teal-400 flex-shrink-0 text-lg"></i>
                  <p className="text-white/80 font-mono text-xs">CIN: U72900TN2026PTC153091</p>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </main>
  );
}