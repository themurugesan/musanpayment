"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import Link from "next/link";

export default function Home() {
  const mountRef = useRef<HTMLDivElement>(null);

  // ThreeJS implementation wrapped in Next.js friendly useEffect
  useEffect(() => {
    if (!mountRef.current) return;
    
    const container = mountRef.current;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    
    renderer.setSize(window.innerWidth, container.offsetHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    container.appendChild(renderer.domElement);

    const particlesCount = window.innerWidth < 768 ? 100 : 300;
    const posArray = new Float32Array(particlesCount * 3);
    for (let i = 0; i < particlesCount * 3; i++) posArray[i] = (Math.random() - 0.5) * 15;
    
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.BufferAttribute(posArray, 3));
    
    const material = new THREE.PointsMaterial({ size: 0.04, color: 0xe8a020, transparent: true, opacity: 0.8, blending: THREE.AdditiveBlending });
    const particlesMesh = new THREE.Points(geometry, material);
    scene.add(particlesMesh);
    
    camera.position.z = 4;
    let mouseX = 0, mouseY = 0;
    
    const onMouseMove = (event: MouseEvent) => {
      mouseX = event.clientX - (window.innerWidth / 2);
      mouseY = event.clientY - (window.innerHeight / 2);
    };
    document.addEventListener("mousemove", onMouseMove);

    const clock = new THREE.Clock();
    let frameId: number;

    const animate = () => {
      frameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();
      
      const targetX = mouseX * 0.001;
      const targetY = mouseY * 0.001;
      
      particlesMesh.rotation.y += 0.001;
      particlesMesh.rotation.x += 0.0005;
      particlesMesh.rotation.y += 0.05 * (targetX - particlesMesh.rotation.y);
      particlesMesh.rotation.x += 0.05 * (targetY - particlesMesh.rotation.x);
      particlesMesh.position.y = Math.sin(elapsedTime * 0.5) * 0.1;
      
      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / container.offsetHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, container.offsetHeight);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(frameId);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <main className="bg-white dark:bg-zinc-950 transition-colors duration-300">
      {/* Hero Section with 3D Background */}
      <section className="relative pt-12 pb-20 lg:pt-28 lg:pb-32 overflow-hidden bg-[#332b50] dark:bg-[#1a1528]">
        <div ref={mountRef} className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none opacity-50 dark:opacity-100"></div>
        
        {/* Glow Effects */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none opacity-50">
          <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-saffron/30 blur-[120px]"></div>
          <div className="absolute top-40 -left-20 w-72 h-72 rounded-full bg-teal/30 blur-[120px]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pointer-events-none">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            
            {/* Hero Copy */}
            <div className="text-center lg:text-left pointer-events-auto">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-saffron text-xs font-bold uppercase tracking-widest mb-6 border border-white/20 backdrop-blur-sm">
                <span className="w-2 h-2 rounded-full bg-saffron animate-pulse"></span>
                Made for Bharat
              </div>
              <h1 className="font-bold text-5xl md:text-6xl lg:text-7xl text-white leading-tight mb-6 tracking-tight">
                Bharatiya Payments.<br />
                <span className="text-gradient">Simplified.</span>
              </h1>
              <p className="text-lg text-white/80 mb-10 max-w-xl mx-auto lg:mx-0 font-medium leading-relaxed">
                Send money, pay bills, buy insurance, and manage your wealth in one secure app. Built on India&apos;s UPI, designed for everyone..
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button className="flex items-center justify-center gap-3 px-8 py-4 bg-saffron text-[#332b50] font-bold rounded-full hover:bg-yellow-500 hover:shadow-[0_0_20px_rgba(232,160,32,0.4)] transition-all">
                  <i className="fa-brands fa-google-play text-xl"></i> Play Store
                </button>
                <button className="flex items-center justify-center gap-3 px-8 py-4 bg-white/10 text-white font-bold rounded-full border border-white/20 hover:bg-white/20 backdrop-blur-md transition-all">
                  <i className="fa-brands fa-apple text-xl"></i> App Store
                </button>
              </div>
            </div>

            {/* Production Ready Phone Mockup UI */}
            <div className="relative mx-auto w-[280px] sm:w-[320px] pointer-events-auto transition-transform duration-500 hover:scale-[1.02]">
              <div className="relative bg-[#332b50] border-[8px] border-white/20 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden aspect-[9/19] flex flex-col">
                <div className="bg-[#f5f7f9] dark:bg-zinc-900 h-full flex flex-col">
                  
                  {/* Phone Header */}
                  <div className="bg-[#332b50] dark:bg-zinc-950 h-32 rounded-b-[2rem] p-4 flex flex-col justify-between shadow-sm border-b border-white/5">
                    <div className="flex justify-between items-center">
                      <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-white text-xs">
                        <i className="fa-regular fa-user"></i>
                      </div>
                      <div className="flex gap-2">
                        <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center text-white text-[10px]"><i className="fa-solid fa-qrcode"></i></div>
                        <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center text-white text-[10px]"><i className="fa-regular fa-bell"></i></div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <img src="/favicon.png" alt="MuthuPe Logo" className="w-6 h-6 object-contain" />
                      <span className="text-white font-bold text-lg tracking-tight">MuthuPe</span>
                    </div>
                  </div>

                  {/* Phone Body */}
                  <div className="p-4 space-y-4 flex-1">
                    {/* Top Actions - Using Pastels */}
                    <div className="bg-white dark:bg-zinc-950 p-3 rounded-xl shadow-sm grid grid-cols-4 gap-2 dark:border dark:border-zinc-800">
                      <div className="h-10 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center text-purple-700 dark:text-purple-400 text-sm"><i className="fa-solid fa-qrcode"></i></div>
                      <div className="h-10 bg-[#f5f7f9] dark:bg-zinc-800 rounded-lg flex items-center justify-center text-[#332b50]/50 dark:text-zinc-400 text-sm"><i className="fa-regular fa-address-book"></i></div>
                      <div className="h-10 bg-[#f5f7f9] dark:bg-zinc-800 rounded-lg flex items-center justify-center text-[#332b50]/50 dark:text-zinc-400 text-sm"><i className="fa-solid fa-building-columns"></i></div>
                      <div className="h-10 bg-[#f5f7f9] dark:bg-zinc-800 rounded-lg flex items-center justify-center text-[#332b50]/50 dark:text-zinc-400 text-sm"><i className="fa-solid fa-plus"></i></div>
                    </div>
                    
                    {/* Digital Card Banner */}
                    <div className="h-20 bg-gradient-to-r from-[#332b50] to-[#4a3f75] dark:from-zinc-800 dark:to-zinc-700 rounded-xl relative overflow-hidden shadow-sm">
                      <div className="absolute top-2 left-2 w-16 h-4 bg-white/20 rounded"></div>
                      <div className="absolute bottom-2 left-2 w-24 h-2 bg-white/10 rounded"></div>
                      <div className="absolute bottom-2 right-2 w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-white/50 text-[10px]"><i className="fa-brands fa-cc-visa"></i></div>
                    </div>
                    
                    {/* Services Skeleton */}
                    <div className="bg-white dark:bg-zinc-950 p-3 rounded-xl shadow-sm h-32 dark:border dark:border-zinc-800 flex flex-col justify-between">
                      <div className="w-24 h-4 bg-gray-200 dark:bg-zinc-800 rounded"></div>
                      <div className="grid grid-cols-4 gap-2">
                        <div className="h-8 bg-gray-100 dark:bg-zinc-800 rounded-full"></div>
                        <div className="h-8 bg-gray-100 dark:bg-zinc-800 rounded-full"></div>
                        <div className="h-8 bg-gray-100 dark:bg-zinc-800 rounded-full"></div>
                        <div className="h-8 bg-gray-100 dark:bg-zinc-800 rounded-full"></div>
                      </div>
                      <div className="grid grid-cols-4 gap-2">
                        <div className="h-8 bg-gray-100 dark:bg-zinc-800 rounded-full"></div>
                        <div className="h-8 bg-gray-100 dark:bg-zinc-800 rounded-full"></div>
                        <div className="h-8 bg-gray-100 dark:bg-zinc-800 rounded-full"></div>
                        <div className="h-8 bg-gray-100 dark:bg-zinc-800 rounded-full"></div>
                      </div>
                    </div>
                  </div>

                  {/* Phone Bottom Nav */}
                  <div className="h-16 bg-white dark:bg-zinc-950 border-t border-gray-200 dark:border-zinc-800 flex justify-around items-center px-2 z-10">
                    <div className="w-6 h-6 bg-[#332b50]/80 dark:bg-zinc-200 rounded flex items-center justify-center text-white dark:text-[#332b50] text-[10px]"><i className="fa-solid fa-house"></i></div>
                    <div className="w-6 h-6 bg-gray-200 dark:bg-zinc-800 rounded"></div>
                    
                    {/* Floating Action Button */}
                    <div className="w-10 h-10 bg-[#332b50] dark:bg-saffron rounded-full -mt-6 border-2 border-[#f5f7f9] dark:border-zinc-900 shadow-lg flex items-center justify-center">
                      <div className="w-4 h-4 bg-white dark:bg-[#332b50] rounded-sm flex items-center justify-center text-[10px]"><i className="fa-solid fa-qrcode text-[#332b50] dark:text-white"></i></div>
                    </div>
                    
                    <div className="w-6 h-6 bg-gray-200 dark:bg-zinc-800 rounded"></div>
                    <div className="w-6 h-6 bg-gray-200 dark:bg-zinc-800 rounded"></div>
                  </div>
                </div>
              </div>

              {/* Floating Success Popover */}
              <div className="absolute -bottom-6 -left-10 bg-white dark:bg-zinc-900 p-4 rounded-2xl shadow-xl flex items-center gap-3 border border-gray-100 dark:border-zinc-800 z-20">
                <div className="w-10 h-10 bg-teal-100 text-teal-700 flex items-center justify-center rounded-full text-xl">
                  <i className="fa-solid fa-check"></i>
                </div>
                <div>
                  <p className="font-bold text-[#332b50] dark:text-zinc-50 text-sm">₹ 2,450</p>
                  <p className="text-xs text-[#332b50]/60 dark:text-zinc-400 font-medium">Payment Successful</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-[#332b50] dark:bg-zinc-950 border-t border-white/10 py-10 relative z-20 shadow-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="p-4"><h3 className="font-bold text-3xl text-saffron mb-1 tracking-tight">50M+</h3><p className="text-white/70 text-sm">Active Users</p></div>
            <div className="p-4"><h3 className="font-bold text-3xl text-saffron mb-1 tracking-tight">99.9%</h3><p className="text-white/70 text-sm">Uptime Guarantee</p></div>
            <div className="p-4"><h3 className="font-bold text-3xl text-saffron mb-1 tracking-tight">Zero</h3><p className="text-white/70 text-sm">Hidden Fees</p></div>
            <div className="p-4"><h3 className="font-bold text-3xl text-saffron mb-1 tracking-tight">24/7</h3><p className="text-white/70 text-sm">Customer Support</p></div>
          </div>
        </div>
      </section>

      {/* Setup Section */}
      <section className="py-24 bg-white dark:bg-zinc-950 text-[#332b50] dark:text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-16 items-center">
           <div>
             <h2 className="font-bold text-3xl md:text-5xl mb-6 text-[#332b50] dark:text-zinc-100 tracking-tight">Setup in seconds.</h2>
             <p className="text-[#332b50]/70 dark:text-zinc-400 mb-10 text-lg">Linking your bank account and sending your first payment is incredibly simple.</p>
             
             <div className="space-y-8">
                {/* Step 1 */}
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-saffron rounded-full flex items-center justify-center text-[#332b50] font-bold text-xl flex-shrink-0">1</div>
                  <div>
                    <h4 className="font-bold text-xl mb-1 text-[#332b50] dark:text-zinc-100">Download & Register</h4>
                    <p className="text-[#332b50]/60 dark:text-zinc-400 text-sm leading-relaxed">Download MuthuPe and verify your mobile number linked to your bank.</p>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-saffron rounded-full flex items-center justify-center text-[#332b50] font-bold text-xl flex-shrink-0">2</div>
                  <div>
                    <h4 className="font-bold text-xl mb-1 text-[#332b50] dark:text-zinc-100">Link Bank Account</h4>
                    <p className="text-[#332b50]/60 dark:text-zinc-400 text-sm leading-relaxed">Select your bank from the list. We securely fetch your account details.</p>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-saffron rounded-full flex items-center justify-center text-[#332b50] font-bold text-xl flex-shrink-0">3</div>
                  <div>
                    <h4 className="font-bold text-xl mb-1 text-[#332b50] dark:text-zinc-100">Set UPI PIN & Pay</h4>
                    <p className="text-[#332b50]/60 dark:text-zinc-400 text-sm leading-relaxed">Create a secure 4 or 6 digit PIN. You are now ready to make lightning fast payments.</p>
                  </div>
                </div>
             </div>

           </div>

           {/* QR Code Block */}
           <div className="relative bg-[#f5f7f9] dark:bg-zinc-900 rounded-[2rem] p-8 border border-gray-100 dark:border-zinc-800 aspect-square flex items-center justify-center">
             <div className="absolute inset-0 bg-gradient-to-tr from-saffron/20 to-transparent rounded-[2rem]"></div>
             <img src="https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=DownloadMuthuPeApp" alt="QR Code" className="w-48 h-48 rounded-2xl shadow-2xl z-10 dark:invert" />
             <div className="absolute bottom-10 text-center w-full z-20">
               <p className="text-saffron font-bold uppercase tracking-widest text-sm bg-white/80 dark:bg-zinc-900/80 inline-block px-6 py-2 rounded-full backdrop-blur-sm shadow-sm">
                 Scan to Download
               </p>
             </div>
           </div>
        </div>
      </section>
    </main>
  );
}