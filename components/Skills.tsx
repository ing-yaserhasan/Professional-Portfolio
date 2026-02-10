import React from 'react';
import { CheckCircle2, Languages, Code2, Palette, PenTool } from 'lucide-react';
import { Content } from '../types';

interface SkillsProps {
  content: Content;
}

const getIconForCategory = (cat: string) => {
  if (cat.toLowerCase().includes('cms') || cat.toLowerCase().includes('web')) return <Code2 className="text-blue-500" />;
  if (cat.toLowerCase().includes('design')) return <Palette className="text-purple-500" />;
  return <PenTool className="text-teal-500" />;
};

export const Skills: React.FC<SkillsProps> = ({ content }) => {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-20">
      {/* Technical Skills */}
      <h2 className="text-3xl font-bold text-center mb-16 text-slate-900 dark:text-white">
        {content.sectionTitles.skills}
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
        {content.skills.map((skillGroup, idx) => (
          <div key={idx} className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-slate-700 hover:border-blue-200 dark:hover:border-blue-800 transition-colors">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-gray-50 dark:bg-slate-700 rounded-lg">
                {getIconForCategory(skillGroup.category)}
              </div>
              <h3 className="font-bold text-lg text-slate-900 dark:text-white">{skillGroup.category}</h3>
            </div>
            <ul className="space-y-3">
              {skillGroup.items.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-slate-600 dark:text-slate-300 text-sm">
                  <CheckCircle2 size={16} className="text-green-500 mt-0.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Languages & Hobbies */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Languages */}
        <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-8 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-10">
                <Languages size={120} />
            </div>
            <h3 className="text-2xl font-bold mb-8 relative z-10">{content.sectionTitles.languages}</h3>
            <div className="space-y-6 relative z-10">
                {content.languages.map((lang, idx) => (
                    <div key={idx} className="flex items-center justify-between border-b border-blue-500/30 pb-3 last:border-0">
                        <span className="font-medium text-lg">{lang.language}</span>
                        <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-semibold">{lang.level}</span>
                    </div>
                ))}
            </div>
        </div>

        {/* Hobbies */}
        <div className="bg-gray-50 dark:bg-slate-800 rounded-2xl p-8 border border-gray-200 dark:border-slate-700 flex flex-col justify-center">
             <h3 className="text-2xl font-bold mb-8 text-slate-900 dark:text-white">{content.sectionTitles.hobbies}</h3>
             <div className="flex flex-wrap gap-3">
                {content.hobbies.map((hobby, idx) => (
                    <span key={idx} className="px-4 py-2 bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-200 rounded-lg shadow-sm font-medium border border-gray-100 dark:border-slate-600">
                        {hobby}
                    </span>
                ))}
             </div>
        </div>
      </div>
    </section>
  );
};