import React, { useEffect, useState } from 'react';
import { Content } from '../types';
import { 
  ExternalLink, 
  Rocket, 
  Code, 
  Database, 
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
}

export const PortfolioPage: React.FC<PortfolioPageProps> = ({ content }) => {
  const [activeTimeline, setActiveTimeline] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Timeline Data (10 years journey)
  const timeline = [
    {
      year: '2015',
      title: content.portfolioPage?.timeline?.[0]?.title || 'البداية مع Blogger',
      desc: content.portfolioPage?.timeline?.[0]?.desc || 'صفحات هبوط وتجربة أولى مع AdSense',
      icon: <Globe size={20} />
    },
    {
      year: '2017',
      title: content.portfolioPage?.timeline?.[1]?.title || 'التجارة الإلكترونية',
      desc: content.portfolioPage?.timeline?.[1]?.desc || 'بناء متاجر WooCommerce وإدارة المحتوى',
      icon: <ShoppingCart size={20} />
    },
    {
      year: '2019',
      title: content.portfolioPage?.timeline?.[2]?.title || 'التسويق الرقمي',
      desc: content.portfolioPage?.timeline?.[2]?.desc || 'Media Buying وحملات Google Ads احترافية',
      icon: <Megaphone size={20} />
    },
    {
      year: '2021',
      title: content.portfolioPage?.timeline?.[3]?.title || 'النشر على Google Play',
      desc: content.portfolioPage?.timeline?.[3]?.desc || 'تطبيقات Webview مع AdMob Monetization',
      icon: <Smartphone size={20} />
    },
    {
      year: '2024',
      title: content.portfolioPage?.timeline?.[4]?.title || 'الذكاء الاصطناعي',
      desc: content.portfolioPage?.timeline?.[4]?.desc || 'تطوير حلول AI باستخدام Google AI Studio',
      icon: <Brain size={20} />
    }
  ];

  // Tech Stack Icons
  const techStack = [
    { name: 'Google Play', icon: <Play size={32} />, color: 'text-green-500' },
    { name: 'AdSense', icon: <DollarSign size={32} />, color: 'text-blue-500' },
    { name: 'WooCommerce', icon: <ShoppingCart size={32} />, color: 'text-purple-500' },
    { name: 'AI Studio', icon: <Brain size={32} />, color: 'text-teal-500' },
    { name: 'WordPress', icon: <Globe size={32} />, color: 'text-slate-600' },
    { name: 'Google Ads', icon: <Target size={32} />, color: 'text-orange-500' }
  ];

  // Main Categories with detailed info
  const categories = [
    {
      title: content.portfolioPage?.categories?.[0]?.title || 'الاستثمار الرقمي والـ Monetization',
      desc: content.portfolioPage?.categories?.[0]?.desc || 'خبرة متقدمة في تحقيق الدخل من التطبيقات والمواقع',
      icon: <TrendingUp size={32} />,
      color: 'from-blue-600 to-cyan-500',
      skills: ['AdMob Integration', 'AdSense Optimization', 'Revenue Analytics', 'User Acquisition'],
      projects: '12+ مشروع مُدر للدخل'
    },
    {
      title: content.portfolioPage?.categories?.[1]?.title || 'التجارة الإلكترونية والويب',
      desc: content.portfolioPage?.categories?.[1]?.desc || 'بناء منصات تجارية متكاملة باستخدام أحدث التقنيات',
      icon: <ShoppingCart size={32} />,
      color: 'from-purple-600 to-pink-500',
      skills: ['WooCommerce', 'WordPress', 'Payment Gateways', 'Landing Pages'],
      projects: '8+ متجر إلكتروني'
    },
    {
      title: content.portfolioPage?.categories?.[2]?.title || 'تطوير التطبيقات والذكاء الاصطناعي',
      desc: content.portfolioPage?.categories?.[2]?.desc || 'تطبيقات ذكية على Google Play مع دمج AI',
      icon: <Brain size={32} />,
      color: 'from-teal-600 to-green-500',
      skills: ['React Native', 'Google AI Studio', 'Webview Apps', 'Play Console'],
      projects: '6+ تطبيق منشور'
    },
    {
      title: content.portfolioPage?.categories?.[3]?.title || 'التسويق الرقمي وإدارة العلامات التجارية',
      desc: content.portfolioPage?.categories?.[3]?.desc || 'حملات إعلانية عالية الأداء وإدارة ROI',
      icon: <Megaphone size={32} />,
      color: 'from-orange-600 to-red-500',
      skills: ['Media Buying', 'Google Ads', 'FB Ads', 'Brand Identity'],
      projects: '20+ حملة ناجحة'
    }
  ];

  // Expertise Table Data
  const expertiseTable = [
    {
      domain: content.portfolioPage?.expertiseTable?.[0]?.domain || 'تطوير الويب',
      value: content.portfolioPage?.expertiseTable?.[0]?.value || 'بناء منصات سريعة وقابلة للتحويل',
      tools: 'WordPress, WooCommerce, Blogger'
    },
    {
      domain: content.portfolioPage?.expertiseTable?.[1]?.domain || 'إدارة الإعلانات',
      value: content.portfolioPage?.expertiseTable?.[1]?.value || 'جلب عملاء وتحقيق مبيعات',
      tools: 'Google Ads, FB Ads, Media Buying'
    },
    {
      domain: content.portfolioPage?.expertiseTable?.[2]?.domain || 'النشر الرقمي',
      value: content.portfolioPage?.expertiseTable?.[2]?.value || 'فهم اقتصاديات التطبيقات',
      tools: 'Google Play Console, AdMob, AdSense'
    },
    {
      domain: content.portfolioPage?.expertiseTable?.[3]?.domain || 'الذكاء الاصطناعي',
      value: content.portfolioPage?.expertiseTable?.[3]?.value || 'أتمتة الحلول التقنية الحديثة',
      tools: 'Google AI Studio, Web-App dev'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 selection:bg-blue-500/30">
      
      {/* Header / Navigation Bar */}
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
            <a 
              href="/" 
              className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all"
            >
              <ArrowLeft size={18} className="rtl:rotate-180" />
              {content.nav?.home || 'Home'}
            </a>
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
                {content.portfolioPage?.badge || '10+ سنوات من الخبرة'}
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-slate-900 dark:text-white mb-8 leading-tight rtl:font-cairo">
              <span className="bg-gradient-to-r from-blue-600 via-teal-500 to-blue-600 bg-clip-text text-transparent">
                {content.portfolioPage?.title || 'مهندس حلول رقمية'}
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 max-w-4xl mx-auto leading-relaxed mb-12 rtl:font-cairo">
              {content.portfolioPage?.description || 'متخصص في دمج التكنولوجيا بالأعمال لبناء منصات رقمية مُدرة للدخل'}
            </p>

            {/* Stats Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {[
                { number: '12+', label: content.portfolioPage?.stats?.[0] || 'مشروع مُدر للدخل', icon: <DollarSign size={24} /> },
                { number: '8+', label: content.portfolioPage?.stats?.[1] || 'متجر إلكتروني', icon: <ShoppingCart size={24} /> },
                { number: '6+', label: content.portfolioPage?.stats?.[2] || 'تطبيق منشور', icon: <Smartphone size={24} /> },
                { number: '20+', label: content.portfolioPage?.stats?.[3] || 'حملة ناجحة', icon: <Target size={24} /> }
              ].map((stat, idx) => (
                <div 
                  key={idx}
                  className="p-6 bg-white/60 dark:bg-slate-900/60 backdrop-blur-xl rounded-2xl border border-slate-200 dark:border-slate-800 hover:scale-105 transition-transform duration-300"
                >
                  <div className="flex justify-center mb-2 text-blue-600 dark:text-blue-400">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-black text-slate-900 dark:text-white mb-1">
                    {stat.number}
                  </div>
                  <div className="text-xs text-slate-600 dark:text-slate-400 rtl:font-cairo">
                    {stat.label}
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
                {content.portfolioPage?.timelineTitle || 'الرحلة المهنية'}
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white rtl:font-cairo">
              {content.portfolioPage?.timelineHeading || '10 سنوات من التطور المستمر'}
            </h2>
          </div>

          {/* Timeline Desktop */}
          <div className="hidden md:block relative">
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-teal-500 to-blue-600 rounded-full -translate-y-1/2"></div>
            
            <div className="relative flex justify-between items-center">
              {timeline.map((item, idx) => (
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
                    {item.icon}
                  </div>
                  
                  <div className={`text-2xl font-black mb-2 transition-colors ${
                    activeTimeline === idx 
                      ? 'text-blue-600 dark:text-blue-400' 
                      : 'text-slate-400 dark:text-slate-600'
                  }`}>
                    {item.year}
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
            {timeline.map((item, idx) => (
              <div 
                key={idx}
                className="flex gap-4 p-6 bg-slate-50 dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700"
              >
                <div className="w-16 h-16 flex-shrink-0 bg-gradient-to-br from-blue-600 to-teal-500 rounded-xl flex items-center justify-center text-white">
                  {item.icon}
                </div>
                <div className="flex-1">
                  <div className="text-lg font-black text-blue-600 dark:text-blue-400 mb-1">
                    {item.year}
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
              {content.portfolioPage?.categoriesTitle || 'مجالات الخبرة'}
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white rtl:font-cairo">
            {content.portfolioPage?.categoriesHeading || 'حلول متكاملة من الفكرة إلى الربح'}
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {categories.map((cat, idx) => (
            <div 
              key={idx} 
              className="group relative p-8 bg-white dark:bg-slate-900 rounded-[2.5rem] border border-slate-200 dark:border-slate-800 shadow-lg hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 hover:-translate-y-2 overflow-hidden"
            >
              {/* Background Gradient */}
              <div className={`absolute top-0 right-0 w-40 h-40 bg-gradient-to-br ${cat.color} opacity-5 rounded-full blur-3xl group-hover:opacity-10 transition-opacity duration-500`}></div>
              
              {/* Icon Background */}
              <div className="absolute top-0 left-0 rtl:left-auto rtl:right-0 p-8 opacity-5 group-hover:scale-110 transition-transform duration-500">
                {cat.icon}
              </div>
              
              {/* Icon */}
              <div className={`relative w-20 h-20 bg-gradient-to-br ${cat.color} rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg`}>
                {cat.icon}
              </div>
              
              {/* Title */}
              <h3 className="text-2xl font-bold mb-3 text-slate-900 dark:text-white rtl:font-cairo">
                {cat.title}
              </h3>
              
              {/* Description */}
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6 rtl:font-cairo">
                {cat.desc}
              </p>

              {/* Skills Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {cat.skills.map((skill, sidx) => (
                  <span 
                    key={sidx}
                    className="px-3 py-1.5 text-xs font-bold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-lg"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* Projects Count */}
              <div className="flex items-center justify-between pt-6 border-t border-slate-200 dark:border-slate-800">
                <span className="text-sm font-bold text-slate-900 dark:text-white rtl:font-cairo">
                  {cat.projects}
                </span>
                <div className="flex items-center gap-2 text-sm font-bold bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span>{content.portfolioPage?.viewProjects || 'عرض المشاريع'}</span>
                  <ExternalLink size={14} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Expertise Table Section */}
      <section className="py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white overflow-hidden relative">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-500 rounded-full blur-[120px]"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-4 rounded-full bg-white/10 backdrop-blur-xl border border-white/20">
              <BarChart3 size={16} />
              <span className="text-sm font-bold">
                {content.portfolioPage?.expertiseTitle || 'جدول الخبرات'}
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black mb-6 rtl:font-cairo">
              {content.portfolioPage?.expertiseHeading || 'نظرة شاملة على المهارات'}
            </h2>
          </div>

          {/* Table */}
          <div className="overflow-hidden rounded-3xl border border-white/10 backdrop-blur-xl bg-white/5">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-white/10 border-b border-white/10">
                  <tr>
                    <th className="px-6 py-4 text-right rtl:text-right font-bold text-sm">
                      {content.portfolioPage?.tableHeaders?.[0] || 'الخبرة'}
                    </th>
                    <th className="px-6 py-4 text-right rtl:text-right font-bold text-sm">
                      {content.portfolioPage?.tableHeaders?.[1] || 'القيمة المضافة'}
                    </th>
                    <th className="px-6 py-4 text-right rtl:text-right font-bold text-sm">
                      {content.portfolioPage?.tableHeaders?.[2] || 'الأدوات المستخدمة'}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {expertiseTable.map((row, idx) => (
                    <tr 
                      key={idx}
                      className="border-b border-white/5 hover:bg-white/5 transition-colors"
                    >
                      <td className="px-6 py-5 font-bold rtl:font-cairo">
                        {row.domain}
                      </td>
                      <td className="px-6 py-5 text-slate-300 rtl:font-cairo">
                        {row.value}
                      </td>
                      <td className="px-6 py-5">
                        <div className="flex flex-wrap gap-2">
                          {row.tools.split(', ').map((tool, tidx) => (
                            <span 
                              key={tidx}
                              className="px-3 py-1 text-xs font-bold bg-white/10 rounded-lg"
                            >
                              {tool}
                            </span>
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
              {content.portfolioPage?.techStackTitle || 'الأدوات التقنية'}
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white rtl:font-cairo">
            {content.portfolioPage?.techStackHeading || 'التكنولوجيا التي أعمل بها'}
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
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-full h-full" style={{
              backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
              backgroundSize: '30px 30px'
            }}></div>
          </div>

          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-5 py-2 mb-6 rounded-full bg-white/20 backdrop-blur-xl border border-white/30">
              <Rocket size={16} />
              <span className="text-sm font-bold">
                {content.portfolioPage?.ctaBadge || 'جاهز للعمل'}
              </span>
            </div>

            <h2 className="text-4xl md:text-6xl font-black mb-6 rtl:font-cairo">
              {content.portfolioPage?.ctaTitle || 'لنبني مشروعك القادم معاً'}
            </h2>

            <p className="text-xl text-white/90 max-w-2xl mx-auto mb-10 rtl:font-cairo">
              {content.portfolioPage?.ctaDesc || 'من الفكرة إلى التنفيذ، ومن الإطلاق إلى تحقيق الأرباح'}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/#contact"
                className="px-8 py-4 bg-white text-blue-600 rounded-2xl font-bold hover:bg-slate-100 transition-all duration-300 hover:scale-105 shadow-xl flex items-center justify-center gap-2"
              >
                <Users size={20} />
                {content.portfolioPage?.ctaButton || 'ابدأ المشروع'}
              </a>
              <a 
                href="/#about"
                className="px-8 py-4 bg-white/10 backdrop-blur-xl border border-white/30 text-white rounded-2xl font-bold hover:bg-white/20 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <ExternalLink size={20} />
                {content.portfolioPage?.ctaSecondary || 'المزيد عني'}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-teal-500 rounded-xl flex items-center justify-center">
                <Code size={20} className="text-white" />
              </div>
              <span className="font-bold text-slate-900 dark:text-white">
                Yaser Hasan
              </span>
            </div>

            <div className="text-sm text-slate-500 dark:text-slate-400 rtl:font-cairo">
              © {new Date().getFullYear()} {content.portfolioPage?.footer || 'جميع الحقوق محفوظة'}
            </div>

            <div className="flex gap-4">
              {techStack.slice(0, 4).map((tech, idx) => (
                <div 
                  key={idx}
                  className={`${tech.color} opacity-50 hover:opacity-100 transition-opacity cursor-pointer`}
                >
                  {React.cloneElement(tech.icon, { size: 20 })}
                </div>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
