
import React from 'react';
import { Calendar, MapPin, Briefcase } from 'lucide-react';
import { Content } from '../types';

interface ExperienceProps {
  content: Content;
}

export const Experience: React.FC<ExperienceProps> = ({ content }) => {
  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-slate-900/50 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-16 text-slate-900 dark:text-white">
          {content.sectionTitles.experience}
        </h2>

        <div className="relative max-w-4xl mx-auto">
            {/* Vertical Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-slate-700 rtl:right-4 rtl:md:right-1/2 rtl:left-auto"></div>

            <div className="space-y-12">
                {content.experience.map((exp, index) => (
                    <div key={index} className="relative flex flex-col md:flex-row gap-8 md:gap-0 group">
                        {/* Dot on Line */}
                        <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-blue-500 rounded-full border-4 border-white dark:border-slate-900 transform -translate-x-1/2 mt-6 z-10 rtl:right-4 rtl:md:right-1/2 rtl:translate-x-1/2 rtl:left-auto"></div>

                        {/* Content Card - Alternating sides */}
                        <div className={`w-full md:w-1/2 pl-12 md:pl-0 
                            ${index % 2 === 0 
                                ? 'md:pr-12 md:text-right rtl:md:text-left rtl:md:pr-0 rtl:md:pl-12' 
                                : 'md:pl-12 md:ml-auto rtl:md:pl-0 rtl:md:pr-12 rtl:md:ml-0 rtl:md:mr-auto'
                            } rtl:pr-12 rtl:pl-0`}
                        >
                            <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 dark:border-slate-700">
                                <div className={`flex flex-col gap-2 mb-4 ${index % 2 === 0 ? 'md:items-end rtl:md:items-start' : 'items-start'}`}>
                                    <h3 className="text-xl font-bold text-slate-900 dark:text-white text-left rtl:text-right">{exp.role}</h3>
                                    <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-medium">
                                        <Briefcase size={16} />
                                        <span>{exp.company}</span>
                                    </div>
                                    <div className="flex flex-wrap gap-4 text-sm text-slate-500 dark:text-slate-400">
                                        <div className="flex items-center gap-1">
                                            <Calendar size={14} />
                                            <span>{exp.period}</span>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <MapPin size={14} />
                                            <span>{exp.location}</span>
                                        </div>
                                    </div>
                                </div>
                                <ul className="space-y-2">
                                    {exp.description.map((desc, i) => (
                                        <li key={i} className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm relative pl-4 rtl:pl-0 rtl:pr-4 text-left rtl:text-right">
                                            <span className="absolute left-0 top-2 w-1.5 h-1.5 bg-blue-400 rounded-full rtl:right-0 rtl:left-auto"></span>
                                            {desc}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
};
