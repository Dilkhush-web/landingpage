import React from 'react';
import { 
  TrendingUp, 
  Globe, 
  Share2, 
  Sparkles, 
  BarChart3,
  Calendar,
  MessageSquare,
  CheckCircle2
} from 'lucide-react';

export default function Home() {
  // Apni Calendly link aur WhatsApp number yahan update kar lena:
  const calendlyLink = "https://calendly.com/your-calendly-username"; 
  const whatsappNumber = "919876543210"; 
  const whatsappMessage = encodeURIComponent("Hello! I want to get a quote for my agency landing page & growth funnel.");

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-slate-900 font-sans selection:bg-blue-600 selection:text-white">
      
      {/* 1. HERO SECTION (Unique, Agency-Style, Simple & Clean Light Theme) */}
      <section className="relative pt-28 pb-20 px-6 max-w-5xl mx-auto text-center overflow-hidden">
        {/* Subtle background glow/blob for agency look */}
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[350px] md:w-[500px] h-[350px] md:h-[500px] bg-gradient-to-tr from-blue-200/40 via-red-100/40 to-amber-100/30 rounded-full blur-3xl -z-10 pointer-events-none"></div>

        <div className="inline-flex items-center gap-2 bg-white text-blue-600 text-xs font-bold px-4 py-2 rounded-full uppercase tracking-wider mb-6 border border-slate-200 shadow-sm">
          <Sparkles className="w-4 h-4 text-red-500" /> AfterUs Global Growth Engine
        </div>
        
        <h1 className="text-4xl md:text-6xl font-black tracking-tight text-slate-900 mb-6 leading-[1.15]">
          Scale Your Brand With High-Converting <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-red-600">Meta Ads & Funnels</span>
        </h1>
        
        <p className="text-base md:text-lg text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
          Stop wasting ad budget on slow pages. We build lightning-fast landing pages, master Meta Ads, and scale your brand with complete digital ecosystems.
        </p>

        {/* Hero Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a 
            href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`} 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white text-base font-bold px-8 py-4 rounded-xl transition shadow-lg shadow-blue-600/20 flex items-center justify-center gap-2"
          >
            <MessageSquare className="w-5 h-5" /> Get Quote (WhatsApp)
          </a>
          
          <a 
            href={calendlyLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full sm:w-auto bg-red-600 hover:bg-red-700 text-white text-base font-bold px-8 py-4 rounded-xl transition shadow-lg shadow-red-600/20 flex items-center justify-center gap-2"
          >
            <Calendar className="w-5 h-5" /> Book Free Consultation
          </a>
        </div>

        {/* Trust badges below buttons */}
        <div className="mt-10 flex items-center justify-center gap-6 text-xs font-semibold text-slate-500">
          <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-600" /> High ROAS Focus</span>
          <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-600" /> Lightning Fast Delivery</span>
        </div>
      </section>

      {/* 2. SECOND SECTION - SIMPLE ACTION BANNER */}
      <section className="py-10 bg-white border-y border-slate-200 px-6 my-6">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div>
            <h2 className="text-xl md:text-2xl font-black text-slate-900 mb-1">Ready to multiply your revenue this month?</h2>
            <p className="text-slate-500 text-sm">Connect with our growth experts instantly or schedule a free call.</p>
          </div>
          <div className="flex items-center gap-3 flex-wrap justify-center">
            <a 
              href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`} 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-slate-100 hover:bg-slate-200 text-slate-900 font-bold px-5 py-2.5 rounded-xl transition text-sm"
            >
              Get Quote
            </a>
            <a 
              href={calendlyLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-red-600 hover:bg-red-700 text-white font-bold px-5 py-2.5 rounded-xl transition text-sm shadow-md"
            >
              Book Free Call
            </a>
          </div>
        </div>
      </section>

      {/* 3. THIRD SECTION - META ADS REVIEWS / 6 IMAGES BOX */}
      <section className="py-20 px-6 max-w-5xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-blue-600 font-bold text-xs uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-full border border-blue-100">Proven Results</span>
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 mt-3 mb-4">Real Meta Ads Performance & Metrics</h2>
          <p className="text-slate-600 text-sm">Check out our campaign performance snapshots and ROAS achievements.</p>
        </div>
        
        {/* 6 Image / Result Boxes */}
        <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-6">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div key={item} className="bg-white rounded-2xl border border-slate-200 hover:border-blue-500 shadow-sm hover:shadow-lg transition p-4 flex flex-col justify-between group">
              <div className="h-48 bg-[#FAF8F5] rounded-xl border border-dashed border-slate-300 flex flex-col items-center justify-center text-slate-400 group-hover:bg-blue-50/40 transition relative overflow-hidden">
                <BarChart3 className="w-10 h-10 text-blue-600 mb-2 group-hover:scale-110 transition" />
                <span className="text-xs font-bold text-slate-700">Meta Ads Proof Image #{item}</span>
                <span className="text-[11px] text-red-600 font-semibold mt-1">ROAS: 5.2x | CPL: ₹38</span>
              </div>
              <div className="mt-4 flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">Campaign Overview #{item}</h4>
                  <p className="text-xs text-slate-500">High-converting scaling funnel</p>
                </div>
                <span className="bg-emerald-50 text-emerald-700 font-bold text-xs px-2.5 py-1 rounded-md border border-emerald-100">Verified</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. FOURTH SECTION - COMPLETE GROWTH FUNNEL */}
      <section className="py-20 px-6 bg-white border-y border-slate-200">
        <div className="max-w-5xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-red-600 font-bold text-xs uppercase tracking-widest bg-red-50 px-3 py-1 rounded-full border border-red-100">Holistic Scaling</span>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mt-3 mb-4">We Build A Complete Growth Funnel</h2>
            <p className="text-slate-600 text-sm">We don't just stop at Meta Ads. We handle your entire digital presence.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#FAF8F5] p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-6 font-bold text-xl">
                <TrendingUp className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">1. Meta Ads Management</h3>
              <p className="text-slate-600 text-sm leading-relaxed">Targeted ad campaigns designed to lower your cost-per-acquisition and bring high-intent buyers.</p>
            </div>
            
            <div className="bg-[#FAF8F5] p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition">
              <div className="w-12 h-12 bg-red-100 text-red-600 rounded-xl flex items-center justify-center mb-6 font-bold text-xl">
                <Globe className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">2. High-Converting Websites</h3>
              <p className="text-slate-600 text-sm leading-relaxed">Lightning-fast, mobile-optimized landing pages built strictly to convert traffic into paying customers.</p>
            </div>

            <div className="bg-[#FAF8F5] p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-6 font-bold text-xl">
                <Share2 className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">3. Social Media Management</h3>
              <p className="text-slate-600 text-sm leading-relaxed">Build strong brand trust and authority with consistent, premium content management.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. FINAL CTA SECTION */}
      <section className="py-24 px-6 text-center max-w-4xl mx-auto">
        <div className="bg-white border border-slate-200 p-10 md:p-14 rounded-3xl shadow-xl shadow-slate-200/50">
          <span className="text-blue-600 font-bold text-xs uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-full border border-blue-100">Get Started Today</span>
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 mt-3 mb-4">Ready To Scale Your Brand?</h2>
          <p className="text-slate-600 mb-8 max-w-xl mx-auto text-sm leading-relaxed">
            Choose your preferred way to connect. Get a quick quote on WhatsApp or book a free consultation call.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`} 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white text-base font-bold px-8 py-4 rounded-xl transition shadow-lg shadow-blue-600/20 flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-5 h-5" /> Get Quote (WhatsApp)
            </a>
            
            <a 
              href={calendlyLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-red-600 hover:bg-red-700 text-white text-base font-bold px-8 py-4 rounded-xl transition shadow-lg shadow-red-600/20 flex items-center justify-center gap-2"
            >
              <Calendar className="w-5 h-5" /> Book Free Consultation
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-8 border-t border-slate-200 text-center text-slate-500 text-xs bg-white">
        <p>&copy; 2026 AfterUs Global. All rights reserved.</p>
      </footer>

    </div>
  );
}