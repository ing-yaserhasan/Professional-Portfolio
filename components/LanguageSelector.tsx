import React, { useState, useRef, useEffect } from 'react';
import { Globe, ChevronDown } from 'lucide-react';
import { Language } from '../types';

interface LanguageSelectorProps {
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
}

const languages: { code: Language; label: string; countryCode: string }[] = [
  { code: 'en', label: 'English', countryCode: 'gb' },
  { code: 'de', label: 'Deutsch', countryCode: 'at' },
  { code: 'ar', label: 'العربية', countryCode: 'sa' },
  { code: 'tr', label: 'Türkçe', countryCode: 'tr' },
];

export const LanguageSelector: React.FC<LanguageSelectorProps> = ({ currentLang, onLanguageChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const currentLangObj = languages.find(l => l.code === currentLang) || languages[0];

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-3 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 dark:bg-slate-800 dark:hover:bg-slate-700 transition-colors border border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <Globe size={18} className="text-gray-600 dark:text-gray-300 rtl:ml-2" />
        
        <div className="flex items-center gap-2 rtl:space-x-reverse">
             <img 
                src={`https://flagcdn.com/w40/${currentLangObj.countryCode}.png`}
                srcSet={`https://flagcdn.com/w80/${currentLangObj.countryCode}.png 2x`}
                width="20"
                height="20"
                alt={currentLangObj.label}
                className="w-5 h-5 rounded-full object-cover border border-gray-200 dark:border-slate-600"
            />
            <span className="text-sm font-medium text-gray-700 dark:text-gray-200 hidden sm:inline">
              {currentLangObj.label}
            </span>
            <span className="text-sm font-medium text-gray-700 dark:text-gray-200 sm:hidden">
              {currentLangObj.code.toUpperCase()}
            </span>
        </div>

        <ChevronDown size={14} className={`text-gray-500 transition-transform ${isOpen ? 'rotate-180' : ''} rtl:mr-2`} />
      </button>

      {isOpen && (
        <div className={`absolute top-full mt-2 w-48 rounded-xl shadow-xl bg-white dark:bg-slate-800 ring-1 ring-black ring-opacity-5 z-50 ${currentLang === 'ar' ? 'left-0' : 'right-0'}`}>
          <div className="py-2">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => {
                  onLanguageChange(lang.code);
                  setIsOpen(false);
                }}
                className={`flex items-center w-full px-4 py-3 text-sm text-left gap-3 transition-colors
                  ${currentLang === lang.code 
                    ? 'bg-blue-50 text-blue-700 dark:bg-slate-700 dark:text-blue-300' 
                    : 'text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-slate-700'
                  }`}
              >
                <div className="shrink-0">
                    <img 
                        src={`https://flagcdn.com/w40/${lang.countryCode}.png`}
                        srcSet={`https://flagcdn.com/w80/${lang.countryCode}.png 2x`}
                        width="24"
                        height="24"
                        alt={lang.label}
                        className="w-6 h-6 rounded-full object-cover border border-gray-200 dark:border-slate-600 shadow-sm"
                    />
                </div>
                <div className="flex flex-col">
                     <span className="font-medium">{lang.label}</span>
                     <span className="text-xs text-slate-400 font-mono uppercase">{lang.code}</span>
                </div>
                {currentLang === lang.code && (
                    <div className="ml-auto rtl:mr-auto rtl:ml-0 w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                )}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};