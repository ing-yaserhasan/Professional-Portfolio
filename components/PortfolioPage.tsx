
import React, { useEffect, useState } from 'react';
import { Content, Language } from '../types';
import { LanguageSelector } from './LanguageSelector';
import { 
  ExternalLink, 
  Rocket, 
  Code, 
  ArrowLeft,
  TrendingUp,
  ShoppingCart,
  Brain,
  Megaphone,
  Calendar,
  DollarSign,
  Globe,
  Smartphone,
  BarChart3,
  Zap,
  Award,
  Target,
  Users,
  Play
} from 'lucide-react';

interface PortfolioPageProps {
  content: Content;
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
  onNavigateHome?: () => void;
}

export const PortfolioPage: React.FC<PortfolioPageProps> = ({ content, currentLang, onLanguageChange, onNavigateHome }) => {
  const [activeTimeline, setActiveTimeline] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Timeline Icons Mapping
  const timelineIcons = [<Globe size={20} />, <ShoppingCart size={20} />, <Megaphone size={20} />, <Smartphone size={20} />, <Brain size={20} />];

  // Tech Stack Icons Mapping
  const techStack = [
    { name: 'Google Play', icon: <Play size={32} />, color: 'text-green-500' },
    { name: 'AdSense', icon: <DollarSign size={32} />, color: 'text-blue-500' },
    { name: 'WooCommerce', icon: <ShoppingCart size={32} />, color: 'text-purple-500' },
    { name: 'AI Studio', icon: <Brain size={32} />, color: 'text-teal-500' },
    { name: 'WordPress', icon: <Globe size={32} />, color: 'text-slate-600' },
    { name: 'Google Ads', icon: <Target size={32} />, color: 'text-orange-500' }
  ];

  // Category Icons Mapping
  const categoryIcons = [<TrendingUp size={32} />, <ShoppingCart size={32} />, <Brain size={32} />, <Megaphone size={32} />];
  const categoryColors = ['from-blue-600 to-cyan-500', 'from-purple-600 to-pink-500', 'from-teal-600 to-green-500', 'from-orange-600 to-red-500'];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 selection:bg-blue-500/30">
      
      {/* Header / Navigation Bar with Language Selector */}
      <nav className="fixed w-full top-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-teal-500 rounded-xl flex items-center justify-center">
                <Code size={20} className="text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">
                Yaser Hasan
              </span>
            </div>
            
            <div className="flex items-center gap-4">
              <LanguageSelector currentLang={currentLang} onLanguageChange={onLanguageChange} />
              <button
                onClick={() => {
                  if (onNavigateHome) {
                    onNavigateHome();
                  } else {
                    window.location.href = '/';
                  }
                }}
                className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all cursor-pointer"
              >
                <ArrowLeft size={18} className="rtl:rotate-180" />
                {content.nav.home}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative pt-40 pb-24 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
          <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[140px]"></div>
          <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-teal-500/10 rounded-full blur-[140px]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-5 py-2 mb-8 rounded-full bg-gradient-to-r from-blue-100 to-teal-100 dark:from-blue-900/30 dark:to-teal-900/30 border border-blue-200 dark:border-blue-800">
              <Award size={16} className="text-blue-600 dark:text-blue-400" />
              <span className="text-blue-600 dark:text-blue-400 text-sm font-bold tracking-wide">
                {content.portfolioPage.badge}
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-slate-900 dark:text-white mb-8 leading-tight rtl:font-cairo">
              <span className="bg-gradient-to-r from-blue-600 via-teal-500 to-blue-600 bg-clip-text text-transparent">
                {content.portfolioPage.title}
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 max-w-4xl mx-auto leading-relaxed mb-12 rtl:font-cairo">
              {content.portfolioPage.description}
            </p>

            {/* Stats Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {content.portfolioPage.stats.map((stat, idx) => (
                <div 
                  key={idx}
                  className="p-4 md:p-6 bg-white/60 dark:bg-slate-900/60 backdrop-blur-xl rounded-2xl border border-slate-200 dark:border-slate-800 hover:scale-105 transition-transform duration-300 shadow-sm min-h-[140px] flex flex-col items-center justify-center"
                >
                  <div className="flex justify-center mb-2 text-blue-600 dark:text-blue-400">
                    {[<DollarSign size={24}/>, <ShoppingCart size={24}/>, <Smartphone size={24}/>, <Target size={24}/>][idx]}
                  </div>
                  <div className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white mb-1">
                    {stat.split(' ')[0]}
                  </div>
                  <div className="text-[10px] md:text-xs text-slate-600 dark:text-slate-400 rtl:font-cairo text-center leading-tight px-1 break-words hyphens-auto" style={{ wordBreak: 'break-word' }}>
                    {stat.split(' ').slice(1).join(' ')}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </header>

      {/* Timeline Section */}
      <section className="py-24 bg-white dark:bg-slate-900 border-y border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-4 rounded-full bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800">
              <Calendar size={16} className="text-blue-600 dark:text-blue-400" />
              <span className="text-blue-600 dark:text-blue-400 text-sm font-bold">
                {content.portfolioPage.timelineTitle}
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white rtl:font-cairo">
              {content.portfolioPage.timelineHeading}
            </h2>
          </div>

          {/* Timeline Desktop */}
          <div className="hidden md:block relative">
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-teal-500 to-blue-600 rounded-full -translate-y-1/2"></div>
            
            <div className="relative flex justify-between items-center">
              {content.portfolioPage.timeline.map((item, idx) => (
                <div 
                  key={idx}
                  className="flex flex-col items-center cursor-pointer group"
                  onClick={() => setActiveTimeline(idx)}
                >
                  <div className={`w-20 h-20 rounded-2xl flex items-center justify-center mb-4 transition-all duration-500 ${
                    activeTimeline === idx 
                      ? 'bg-gradient-to-br from-blue-600 to-teal-500 text-white scale-110 shadow-xl shadow-blue-500/30' 
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 group-hover:scale-105'
                  }`}>
                    {timelineIcons[idx]}
                  </div>
                  
                  <div className={`text-2xl font-black mb-2 transition-colors ${
                    activeTimeline === idx 
                      ? 'text-blue-600 dark:text-blue-400' 
                      : 'text-slate-400 dark:text-slate-600'
                  }`}>
                    {[2015, 2017, 2019, 2021, 2024][idx]}
                  </div>
                  
                  <div className={`text-center max-w-[180px] transition-all duration-500 ${
                    activeTimeline === idx ? 'opacity-100' : 'opacity-0'
                  }`}>
                    <h3 className="font-bold text-slate-900 dark:text-white mb-1 rtl:font-cairo">
                      {item.title}
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400 rtl:font-cairo">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Timeline Mobile */}
          <div className="md:hidden space-y-6">
            {content.portfolioPage.timeline.map((item, idx) => (
              <div 
                key={idx}
                className="flex gap-4 p-6 bg-slate-50 dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700"
              >
                <div className="w-16 h-16 flex-shrink-0 bg-gradient-to-br from-blue-600 to-teal-500 rounded-xl flex items-center justify-center text-white">
                  {timelineIcons[idx]}
                </div>
                <div className="flex-1">
                  <div className="text-lg font-black text-blue-600 dark:text-blue-400 mb-1">
                    {[2015, 2017, 2019, 2021, 2024][idx]}
                  </div>
                  <h3 className="font-bold text-slate-900 dark:text-white mb-2 rtl:font-cairo">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 rtl:font-cairo">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Categories Section */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-4 rounded-full bg-teal-50 dark:bg-teal-900/20 border border-teal-200 dark:border-teal-800">
            <Zap size={16} className="text-teal-600 dark:text-teal-400" />
            <span className="text-teal-600 dark:text-teal-400 text-sm font-bold">
              {content.portfolioPage.categoriesTitle}
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white rtl:font-cairo">
            {content.portfolioPage.categoriesHeading}
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {content.portfolioPage.categories.map((cat, idx) => (
            <div 
              key={idx} 
              className="group relative p-8 bg-white dark:bg-slate-900 rounded-[2.5rem] border border-slate-200 dark:border-slate-800 shadow-lg hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 hover:-translate-y-2 overflow-hidden"
            >
              <div className={`absolute top-0 right-0 w-40 h-40 bg-gradient-to-br ${categoryColors[idx]} opacity-5 rounded-full blur-3xl group-hover:opacity-10 transition-opacity duration-500`}></div>
              
              <div className={`relative w-20 h-20 bg-gradient-to-br ${categoryColors[idx]} rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg`}>
                {categoryIcons[idx]}
              </div>
              
              <h3 className="text-2xl font-bold mb-3 text-slate-900 dark:text-white rtl:font-cairo">
                {cat.title}
              </h3>
              
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6 rtl:font-cairo">
                {cat.desc}
              </p>

              <div className="flex items-center justify-between pt-6 border-t border-slate-200 dark:border-slate-800">
                <span className="text-sm font-bold text-slate-900 dark:text-white rtl:font-cairo">
                  {idx === 0 ? '12+' : idx === 1 ? '8+' : idx === 2 ? '6+' : '20+'} {content.portfolioPage.stats[idx].split(' ').slice(1).join(' ')}
                </span>
                <div className="flex items-center gap-2 text-sm font-bold bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span>{content.portfolioPage.viewProjects}</span>
                  <ExternalLink size={14} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Expertise Table Section */}
      <section className="py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white overflow-hidden relative">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-500 rounded-full blur-[120px]"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-4 rounded-full bg-white/10 backdrop-blur-xl border border-white/20">
              <BarChart3 size={16} />
              <span className="text-sm font-bold">
                {content.portfolioPage.expertiseTitle}
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black mb-6 rtl:font-cairo">
              {content.portfolioPage.expertiseHeading}
            </h2>
          </div>

          <div className="overflow-hidden rounded-3xl border border-white/10 backdrop-blur-xl bg-white/5">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-white/10 border-b border-white/10">
                  <tr>
                    {content.portfolioPage.tableHeaders.map((header, i) => (
                      <th key={i} className="px-6 py-4 text-left rtl:text-right font-bold text-sm">
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {content.portfolioPage.expertiseTable.map((row, idx) => (
                    <tr key={idx} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                      <td className="px-6 py-5 font-bold rtl:font-cairo">{row.domain}</td>
                      <td className="px-6 py-5 text-slate-300 rtl:font-cairo">{row.value}</td>
                      <td className="px-6 py-5">
                        <div className="flex flex-wrap gap-2">
                          {row.tools.split(', ').map((tool, tidx) => (
                            <span key={tidx} className="px-3 py-1 text-xs font-bold bg-white/10 rounded-lg">{tool}</span>
                          ))}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-4 rounded-full bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800">
            <Code size={16} className="text-purple-600 dark:text-purple-400" />
            <span className="text-purple-600 dark:text-purple-400 text-sm font-bold">
              {content.portfolioPage.techStackTitle}
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white rtl:font-cairo">
            {content.portfolioPage.techStackHeading}
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {techStack.map((tech, idx) => (
            <div 
              key={idx}
              className="group p-8 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-blue-500 dark:hover:border-blue-500 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-500/10 flex flex-col items-center justify-center gap-3"
            >
              <div className={`${tech.color} group-hover:scale-110 transition-transform duration-300`}>
                {tech.icon}
              </div>
              <span className="text-sm font-bold text-slate-700 dark:text-slate-300 text-center">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[3rem] bg-gradient-to-br from-blue-600 via-teal-600 to-blue-600 p-12 md:p-20 text-center text-white">
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-5 py-2 mb-6 rounded-full bg-white/20 backdrop-blur-xl border border-white/30">
              <Rocket size={16} />
              <span className="text-sm font-bold">{content.portfolioPage.ctaBadge}</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black mb-6 rtl:font-cairo">{content.portfolioPage.ctaTitle}</h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto mb-10 rtl:font-cairo">{content.portfolioPage.ctaDesc}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/#contact" className="px-8 py-4 bg-white text-blue-600 rounded-2xl font-bold hover:bg-slate-100 transition-all duration-300 hover:scale-105 shadow-xl flex items-center justify-center gap-2">
                <Users size={20} /> {content.portfolioPage.ctaButton}
              </a>
              <a href="/#about" className="px-8 py-4 bg-white/10 backdrop-blur-xl border border-white/30 text-white rounded-2xl font-bold hover:bg-white/20 transition-all duration-300 flex items-center justify-center gap-2">
                <ExternalLink size={20} /> {content.portfolioPage.ctaSecondary}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-sm text-slate-500 dark:text-slate-400 rtl:font-cairo">
            © {new Date().getFullYear()} {content.portfolioPage.footer}
          </div>
        </div>
      </footer>
    </div>
  );
};
