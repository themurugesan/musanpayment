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
    <main className="min-h-screen bg-warmgray dark:bg-zinc-950 text-navy dark:text-zinc-50 py-16 lg:py-24 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-teal font-bold tracking-wider uppercase text-sm mb-2 block">
            Grievance & Support
          </span>
          <h1 className="font-syne font-bold text-4xl md:text-5xl text-navy dark:text-zinc-100 mb-4">
            We are here to <span className="text-gradient">help you.</span>
          </h1>
          <p className="font-inter text-navy/60 dark:text-zinc-400 text-lg">
            Have questions about transactions, merchant onboarding, or need immediate tech support? Reach out to our teams.
          </p>
        </div>

        {/* Contact Layout Grid */}
        <div className="grid lg:grid-cols-3 gap-8 items-start">
          
          {/* Column 1 & 2: Secure Contact Form */}
          <div className="lg:col-span-2 bg-white dark:bg-zinc-900 p-8 rounded-3xl shadow-sm border border-gray-100 dark:border-zinc-800">
            <h2 className="font-syne text-2xl font-bold mb-6 text-navy dark:text-zinc-100 flex items-center gap-2">
              <i className="fa-regular fa-envelope text-saffron"></i> Send a Secure Message
            </h2>
            
            {submitted ? (
              <div className="p-4 mb-6 bg-teal/10 border border-teal text-teal rounded-xl flex items-center gap-3">
                <i className="fa-solid fa-circle-check text-xl"></i>
                <div>
                  <p className="font-bold">Message Sent Successfully!</p>
                  <p className="text-sm opacity-90">Our customer support team will review your query and respond within 24 hours.</p>
                </div>
              </div>
            ) : null}

            <form onSubmit={handleSubmit} className="space-y-6 font-dm">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold mb-2 text-navy/80 dark:text-zinc-300">Full Name</label>
                  <input 
                    type="text" 
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-zinc-700 bg-warmgray dark:bg-zinc-800 text-navy dark:text-zinc-100 focus:outline-none focus:border-saffron transition-colors"
                    placeholder="Enter your name"
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2 text-navy/80 dark:text-zinc-300">Email Address</label>
                  <input 
                    type="email" 
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-zinc-700 bg-warmgray dark:bg-zinc-800 text-navy dark:text-zinc-100 focus:outline-none focus:border-saffron transition-colors"
                    placeholder="name@example.com"
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2 text-navy/80 dark:text-zinc-300">Subject</label>
                <input 
                  type="text" 
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-zinc-700 bg-warmgray dark:bg-zinc-800 text-navy dark:text-zinc-100 focus:outline-none focus:border-saffron transition-colors"
                  placeholder="Transaction issue, Merchant query, Account verification..."
                  value={formState.subject}
                  onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2 text-navy/80 dark:text-zinc-300">Message Details</label>
                <textarea 
                  rows={5}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-zinc-700 bg-warmgray dark:bg-zinc-800 text-navy dark:text-zinc-100 focus:outline-none focus:border-saffron transition-colors resize-none"
                  placeholder="Describe your concern in detail. Please do NOT include your secret UPI PIN in this form."
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full sm:w-auto px-8 py-4 bg-navy dark:bg-saffron text-white dark:text-navy font-bold rounded-2xl hover:bg-navy/90 dark:hover:bg-saffron/90 hover:shadow-lg transition-all"
              >
                Submit Request <i className="fa-solid fa-paper-plane ml-2"></i>
              </button>
            </form>
          </div>

          {/* Column 3: Corporate Info Cards */}
          <div className="space-y-6">
            
            {/* Direct Channels */}
            <div className="bg-white dark:bg-zinc-900 p-6 rounded-3xl shadow-sm border border-gray-100 dark:border-zinc-800 space-y-6">
              <h3 className="font-syne text-xl font-bold text-navy dark:text-zinc-100">Customer Helplines</h3>
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-saffron/10 text-saffron rounded-xl flex items-center justify-center flex-shrink-0 text-lg">
                  <i className="fa-solid fa-phone"></i>
                </div>
                <div>
                  <p className="text-xs text-gray-500 dark:text-zinc-400 font-medium uppercase tracking-wider">Toll-Free Support</p>
                  <p className="font-dm font-bold text-navy dark:text-zinc-100">1800-419-7485</p>
                  <p className="text-xs text-navy/40 dark:text-zinc-500">Available 24/7 for fraud reporting</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-teal/10 text-teal rounded-xl flex items-center justify-center flex-shrink-0 text-lg">
                  <i className="fa-brands fa-whatsapp"></i>
                </div>
                <div>
                  <p className="text-xs text-gray-500 dark:text-zinc-400 font-medium uppercase tracking-wider">WhatsApp Help Desk</p>
                  <p className="font-dm font-bold text-navy dark:text-zinc-100">+91 94423 81750</p>
                  <p className="text-xs text-navy/40 dark:text-zinc-500">Instant response automated support</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-alertred/10 text-alertred rounded-xl flex items-center justify-center flex-shrink-0 text-lg">
                  <i className="fa-regular fa-envelope"></i>
                </div>
                <div>
                  <p className="text-xs text-gray-500 dark:text-zinc-400 font-medium uppercase tracking-wider">Email Correspondence</p>
                  <p className="font-dm font-bold text-navy dark:text-zinc-100">support@muthupe.com</p>
                </div>
              </div>
            </div>

            {/* Regional Hub Focus */}
            <div className="bg-navy text-white p-6 rounded-3xl shadow-sm relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-tr from-saffron/10 to-transparent rounded-3xl"></div>
              <h3 className="font-syne text-xl font-bold mb-4 relative z-10">Regional Office</h3>
              
              <div className="space-y-4 relative z-10 font-inter text-sm">
                <div className="flex gap-3">
                  <i className="fa-solid fa-location-dot text-saffron mt-1 flex-shrink-0"></i>
                  <p className="text-white/80 leading-relaxed">
                    <strong>MuthuPe Technologies Pvt. Ltd.</strong><br />
                    124/A, Main Road (Opposite New Bus Stand),<br />
                    Kovilpatti, Tamil Nadu — 628501
                  </p>
                </div>
                <div className="flex gap-3 items-center">
                  <i className="fa-solid fa-building text-teal flex-shrink-0"></i>
                  <p className="text-white/80">CIN: U72900TN2026PTC153091</p>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </main>
  );
}