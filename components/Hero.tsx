
import React from 'react';
import { Download, Mail } from 'lucide-react';
import { Content } from '../types';

interface HeroProps {
  content: Content;
}

export const Hero: React.FC<HeroProps> = ({ content }) => {
  return (
    <section id="about" className="relative pt-32 pb-16 md:pt-48 md:pb-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-visible scroll-mt-20">
      
      {/* Background decoration elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl -z-10 pointer-events-none">
          <div className="absolute top-20 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-teal-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
        {/* Text Content Container */}
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left rtl:md:text-right space-y-6 z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-700 dark:bg-blue-900/20 dark:text-blue-300 font-medium text-sm border border-blue-100 dark:border-blue-800 self-center md:self-start rtl:font-cairo">
            <span className="w-2 h-2 rounded-full bg-blue-600 dark:bg-blue-400"></span>
            {content.hero.role}
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white leading-[1.15] tracking-tight w-full rtl:font-cairo">
            {content.hero.greeting}
          </h1>
          
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl rtl:font-cairo">
            {content.hero.summary}
          </p>
          
          <div className="flex flex-wrap gap-4 pt-6 justify-center md:justify-start">
            <a href="mailto:ing.yaserhasan@gmail.com" className="flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl transition-all hover:shadow-lg hover:shadow-blue-500/25 font-semibold text-lg group rtl:font-cairo">
              <Mail className="w-5 h-5 ltr:mr-2 rtl:ml-2 group-hover:scale-110 transition-transform" />
              {content.hero.contactMe}
            </a>
            <button className="flex items-center px-8 py-4 bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 text-slate-700 dark:text-white rounded-xl hover:bg-gray-50 dark:hover:bg-slate-700 transition-colors font-semibold text-lg shadow-sm rtl:font-cairo">
              <Download className="w-5 h-5 ltr:mr-2 rtl:ml-2" />
              {content.hero.downloadCv}
            </button>
          </div>
        </div>

        {/* Image Content Container */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end rtl:md:justify-start relative z-10">
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-[22rem] md:h-[22rem] lg:w-[26rem] lg:h-[26rem] transition-all duration-500">
                {/* Decorative gradients behind image */}
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-teal-400 rounded-[2.5rem] rotate-6 opacity-20 blur-xl animate-pulse-slow"></div>
                <div className="absolute inset-0 bg-gradient-to-bl from-indigo-600 to-blue-500 rounded-[2.5rem] -rotate-6 opacity-20 blur-xl"></div>
                
                {/* Image Container */}
                <div className="relative w-full h-full rounded-[2rem] shadow-2xl overflow-hidden border-4 border-white dark:border-slate-800 ring-1 ring-black/5 dark:ring-white/10 group">
                    <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors duration-300 z-10"></div>
                    <img 
                      src="/profile.webp" 
                      alt="Yaser Hasan" 
                      className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700 ease-out"
                      loading="eager"
                    />
                </div>
                
                {/* Professional Badge */}
                <div className="absolute -bottom-6 -right-6 rtl:right-auto rtl:-left-6 z-20">
                  <div className="bg-white/95 dark:bg-slate-800/95 backdrop-blur-md p-3 sm:p-4 rounded-2xl shadow-xl border border-white/20 ring-1 ring-black/5 flex items-center gap-3 sm:gap-4 transform hover:-translate-y-1 transition-transform duration-300">
                    <div className="relative flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                    </div>
                    <div className="rtl:font-cairo">
                        <div className="text-[10px] uppercase tracking-wider text-slate-500 dark:text-slate-400 font-bold">Status</div>
                        <div className="font-bold text-slate-900 dark:text-white text-xs sm:text-sm whitespace-nowrap">Open for Work</div>
                    </div>
                  </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};
