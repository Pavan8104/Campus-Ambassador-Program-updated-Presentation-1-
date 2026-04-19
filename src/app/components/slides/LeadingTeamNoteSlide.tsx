import { motion } from 'motion/react';
import { Linkedin } from 'lucide-react';

export function LeadingTeamNoteSlide() {
  return (
    <div className="w-full h-full flex items-center justify-center px-4 sm:px-8 md:px-12 lg:px-16 py-4 sm:py-6 md:py-8 overflow-hidden">
      <div className="max-w-5xl w-full space-y-3 sm:space-y-4 md:space-y-5">
        {/* Title */}
        <motion.div
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-[#6DD5ED] to-[#001A72] bg-clip-text text-transparent mb-1">
            Leadership Note
          </h2>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-2xl sm:rounded-3xl shadow-xl border border-slate-200 p-4 sm:p-5 md:p-6 space-y-2 sm:space-y-3"
        >
          <div className="space-y-2 sm:space-y-2.5 text-slate-700 text-xs sm:text-sm md:text-base leading-relaxed">
            <p>
              At Hireonix AI, this journey didn't start with a business idea — it started with a <span className="font-semibold text-[#001A72]">frustration</span>.
            </p>
            
            <p>
              The frustration of seeing talented individuals go unnoticed. The frustration of watching opportunities slip away, not because of lack of skill, but because the system wasn't built to truly understand people.
            </p>
            
            <p className="font-medium">
              We've been there. We've felt that gap.
            </p>
            
            <p className="text-sm sm:text-base md:text-lg font-semibold bg-gradient-to-r from-[#6DD5ED] to-[#001A72] bg-clip-text text-transparent">
              Hireonix AI was born from a simple belief — that everyone deserves a fair shot.
            </p>
            
            <p>
              We are building more than just a platform. We are building a <span className="font-semibold">movement</span> where skills matter more than keywords, where potential is recognized beyond resumes, and where technology actually works for humans, not against them.
            </p>
            
            <p>
              Every feature we create, every line of code we write, carries one purpose — to make hiring more human, more transparent, and more empowering.
            </p>
            
            <p className="font-medium italic text-slate-900">
              This is just the beginning. The road ahead is long, but the vision is clear: to reshape the future of hiring for millions around the world.
            </p>
          </div>

          {/* Program Lead */}
          <div className="pt-2 sm:pt-3 border-t border-slate-200">
            <p className="text-slate-600 text-[11px] sm:text-xs md:text-sm mb-2">This program is led with passion and purpose by</p>
            <div className="flex items-center gap-3 sm:gap-4 bg-gradient-to-r from-slate-50 to-white p-2.5 sm:p-3 md:p-4 rounded-xl sm:rounded-2xl border border-slate-200">
              <div className="flex-1">
                <h4 className="text-base sm:text-lg md:text-xl font-bold text-slate-900">Pavan Sharma</h4>
                <p className="text-[11px] sm:text-xs md:text-sm text-slate-600 font-medium">Program Lead</p>
              </div>
              <a
                href="https://www.linkedin.com/in/pavan-sharma-1645ab276"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 sm:p-3 rounded-full bg-slate-100 hover:bg-gradient-to-r hover:from-[#6DD5ED] hover:to-[#001A72] transition-all group flex-shrink-0"
              >
                <Linkedin className="w-4 h-4 sm:w-5 sm:h-5 text-slate-600 group-hover:text-white" />
              </a>
            </div>
          </div>

          {/* Closing */}
          <div className="text-center pt-2 sm:pt-3">
            <p className="text-base sm:text-lg md:text-xl font-bold bg-gradient-to-r from-[#6DD5ED] to-[#001A72] bg-clip-text text-transparent">
              Let's build the future of work — together.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}