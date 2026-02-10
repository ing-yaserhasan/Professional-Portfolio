
import React, { useState, useEffect } from 'react';
import { TRANSLATIONS } from './constants';
import { Language } from './types';
import { LanguageSelector } from './components/LanguageSelector';
import { Hero } from './components/Hero';
import { Experience } from './components/Experience';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';
import { PortfolioPage } from './components/PortfolioPage';
import { ErrorBoundary } from './components/ErrorBoundary';
import { PageLoading } from './components/LoadingSpinner';
import { Menu, X } from 'lucide-react';

const App: React.FC = () => {
  const [currentLang, setCurrentLang] = useState<Language>('en');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('about');
  const [isLoading, setIsLoading] = useState(true);
  
  // Detect if we should show the portfolio page based on URL
  const [page, setPage] = useState<'home' | 'portfolio'>('home');

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get('page') === 'portfolio') {
      setPage('portfolio');
    } else {
      setPage('home');
    }
    
    // Simulate content loading
    const timer = setTimeout(() => setIsLoading(false), 800);
    
    // Handle browser back/forward buttons
    const handlePopState = () => {
      const params = new URLSearchParams(window.location.search);
      if (params.get('page') === 'portfolio') {
        setPage('portfolio');
      } else {
        setPage('home');
      }
    };
    
    window.addEventListener('popstate', handlePopState);
    
    return () => {
      clearTimeout(timer);
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);

  // Initial Language Detection
  useEffect(() => {
    const browserLang = navigator.language.split('-')[0];
    if (['en', 'de', 'ar', 'tr'].includes(browserLang)) {
      setCurrentLang(browserLang as Language);
    } else {
      setCurrentLang('en');
    }
  }, []);

  // Update HTML dir attribute for RTL support (Arabic)
  useEffect(() => {
    document.documentElement.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = currentLang;
  }, [currentLang]);

  // Scroll Spy for Active Section
  useEffect(() => {
    if (page !== 'home') return;

    const handleScroll = () => {
      const sections = ['about', 'experience', 'skills', 'contact'];
      const scrollPosition = window.scrollY + 120; // Offset for header height + buffer

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [page]);

  const content = TRANSLATIONS[currentLang];

  const handleNavClick = () => {
      setIsMenuOpen(false);
  };

  const getLinkClass = (section: string) => {
    const baseClass = "text-sm font-medium transition-colors duration-300";
    const activeClass = "text-blue-600 dark:text-blue-400 font-semibold";
    const inactiveClass = "text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400";
    return `${baseClass} ${activeSection === section ? activeClass : inactiveClass}`;
  };

  // Show loading screen
  if (isLoading) {
    return <PageLoading />;
  }

  if (page === 'portfolio') {
    return (
      <PortfolioPage 
        content={content} 
        currentLang={currentLang} 
        onLanguageChange={setCurrentLang}
        onNavigateHome={() => {
          setPage('home');
          window.history.pushState({}, '', '/');
        }}
      />
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 font-sans transition-colors duration-300 selection:bg-blue-500/20">
      
      {/* Navigation */}
      <nav className="fixed w-full top-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-gray-100 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            
            {/* Brand Name */}
            <div className="flex items-center">
              <span 
                className="text-2xl font-bold bg-gradient-to-r from-[#3b82f6] to-[#14b8a6] bg-clip-text text-transparent cursor-pointer"
                onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
              >
                Yaser Hasan
              </span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8 rtl:space-x-reverse">
              <a href="#about" className={getLinkClass('about')}>
                {content.nav.about}
              </a>
              <a href="#experience" className={getLinkClass('experience')}>
                {content.nav.experience}
              </a>
              <a href="#skills" className={getLinkClass('skills')}>
                {content.nav.skills}
              </a>
              <a href="#contact" className={getLinkClass('contact')}>
                {content.nav.contact}
              </a>
              
              {/* Portfolio Link - Uses onClick for instant navigation */}
              <button
                onClick={() => {
                  setPage('portfolio');
                  window.history.pushState({}, '', '/?page=portfolio');
                }}
                className="text-sm font-bold px-4 py-2 rounded-lg bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-all border border-blue-100 dark:border-blue-800/50"
              >
                {content.nav.portfolio}
              </button>
              
              <div className="h-6 w-px bg-gray-200 dark:bg-slate-700 mx-4"></div>
              
              <LanguageSelector currentLang={currentLang} onLanguageChange={setCurrentLang} />
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center gap-4">
               <LanguageSelector currentLang={currentLang} onLanguageChange={setCurrentLang} />
               <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-800"
               >
                 {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
               </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
            <div className="md:hidden bg-white dark:bg-slate-900 border-b border-gray-100 dark:border-slate-800 absolute w-full shadow-lg">
                <div className="px-4 pt-2 pb-6 space-y-1">
                    <a href="#about" onClick={handleNavClick} className="block px-3 py-3 rounded-md text-base font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-slate-800">
                        {content.nav.about}
                    </a>
                    <a href="#experience" onClick={handleNavClick} className="block px-3 py-3 rounded-md text-base font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-slate-800">
                        {content.nav.experience}
                    </a>
                    <a href="#skills" onClick={handleNavClick} className="block px-3 py-3 rounded-md text-base font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-slate-800">
                        {content.nav.skills}
                    </a>
                    <a href="#contact" onClick={handleNavClick} className="block px-3 py-3 rounded-md text-base font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-slate-800">
                        {content.nav.contact}
                    </a>
                    <button
                      onClick={() => {
                        setPage('portfolio');
                        window.history.pushState({}, '', '/?page=portfolio');
                        setIsMenuOpen(false);
                      }}
                      className="block w-full text-left px-3 py-3 rounded-md text-base font-bold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20"
                    >
                        {content.nav.portfolio}
                    </button>
                </div>
            </div>
        )}
      </nav>

      {/* Main Content */}
      <main>
        <Hero content={content} />
        <Experience content={content} />
        <Skills content={content} />
        <Contact content={content} />
      </main>

    </div>
  );
};

export default App;
