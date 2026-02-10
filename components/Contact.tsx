
import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { Content } from '../types';

interface ContactProps {
  content: Content;
}

export const Contact: React.FC<ContactProps> = ({ content }) => {
  return (
    <footer id="contact" className="bg-slate-900 text-white pt-20 pb-10 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-10 mb-16 border-b border-slate-700 pb-10">
          <div>
            <h2 className="text-3xl rtl:text-4xl font-bold mb-2">{content.sectionTitles.contact}</h2>
            <p className="text-slate-400 rtl:text-lg">Let's build something amazing together.</p>
          </div>
          
          <div className="flex gap-4">
             {/* Social placeholders could go here */}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <a href={`mailto:${content.contact.email}`} className="flex items-center gap-4 p-4 rounded-xl hover:bg-slate-800 transition-colors group">
                <div className="w-12 h-12 bg-slate-800 group-hover:bg-slate-700 rounded-full flex items-center justify-center text-blue-400 transition-colors">
                    <Mail size={24} />
                </div>
                <div>
                    <div className="text-sm rtl:text-base text-slate-400">Email</div>
                    <div className="font-medium text-lg rtl:text-xl">{content.contact.email}</div>
                </div>
            </a>

            <a href={`tel:${content.contact.phone.replace(/\s+/g, '')}`} className="flex items-center gap-4 p-4 rounded-xl hover:bg-slate-800 transition-colors group">
                <div className="w-12 h-12 bg-slate-800 group-hover:bg-slate-700 rounded-full flex items-center justify-center text-green-400 transition-colors">
                    <Phone size={24} />
                </div>
                <div>
                    <div className="text-sm rtl:text-base text-slate-400">Phone</div>
                    {/* Explicitly set dir="ltr" to fix phone number formatting in RTL mode */}
                    <div className="font-medium text-lg rtl:text-xl" dir="ltr">{content.contact.phone}</div>
                </div>
            </a>

             <div className="flex items-center gap-4 p-4 rounded-xl hover:bg-slate-800 transition-colors group cursor-default">
                <div className="w-12 h-12 bg-slate-800 group-hover:bg-slate-700 rounded-full flex items-center justify-center text-red-400 transition-colors">
                    <MapPin size={24} />
                </div>
                <div>
                    <div className="text-sm rtl:text-base text-slate-400">Location</div>
                    <div className="font-medium text-lg rtl:text-xl">{content.contact.address}</div>
                </div>
            </div>
        </div>

        <div className="mt-16 text-center text-slate-500 text-sm rtl:text-base">
            &copy; {new Date().getFullYear()} Yaser Hasan. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
