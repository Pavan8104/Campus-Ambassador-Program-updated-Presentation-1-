import { motion } from 'motion/react';
import { Briefcase, Target, Users, Award, Trophy, ArrowRight } from 'lucide-react';

export function OpportunitiesSlide() {
  const opportunities = [
    { icon: Briefcase, label: 'Internships' },
    { icon: Users, label: 'Networking' },
    { icon: Award, label: 'Exposure' },
    { icon: Trophy, label: 'Recognition' }
  ];

  return (
    <div className="w-full h-full flex items-center justify-center px-4 sm:px-8 md:px-12 lg:px-16 py-6 sm:py-8 md:py-10 lg:py-12 overflow-y-auto">
      <div className="max-w-7xl w-full space-y-8 sm:space-y-10 md:space-y-12 lg:space-y-16">
        {/* Title */}
        <motion.div
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-2 sm:mb-3 md:mb-4">
            <span className="bg-gradient-to-r from-[#6DD5ED] to-[#001A72] bg-clip-text text-transparent">
              Opportunities
            </span>{' '}
            Await
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-slate-600 mt-2 sm:mt-3 md:mt-4">Your journey to success starts here</p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Connecting line - hidden on mobile */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-[#6DD5ED] via-[#001A72] to-[#6DD5ED] -translate-y-1/2" />

          {/* Opportunity cards */}
          <div className="relative flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8 md:gap-4">
            {opportunities.map((opportunity, index) => (
              <div key={index} className="flex flex-col items-center gap-4 sm:gap-6 w-full md:w-auto">
                {/* Card */}
                <motion.div
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className="relative w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 rounded-2xl sm:rounded-3xl bg-white shadow-xl border border-slate-200 hover:shadow-2xl hover:scale-110 transition-all flex flex-col items-center justify-center gap-3 sm:gap-4"
                >
                  {/* Icon */}
                  <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br from-[#6DD5ED] to-[#001A72] p-3 sm:p-3.5 md:p-4 flex items-center justify-center shadow-lg">
                    <opportunity.icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
                  </div>

                  {/* Label */}
                  <span className="text-sm sm:text-base text-slate-900 font-semibold">{opportunity.label}</span>
                </motion.div>

                {/* Arrow connector (except last item) - hidden on mobile */}
                {index < opportunities.length - 1 && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                    className="hidden md:block absolute top-1/2 -translate-y-1/2"
                    style={{ left: `${((index + 1) * 100) / opportunities.length}%` }}
                  >
                    <ArrowRight className="w-5 h-5 md:w-6 md:h-6 text-[#001A72]" />
                  </motion.div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom accent */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center"
        >
          <p className="text-slate-500 text-sm sm:text-base md:text-lg">Unlock your potential with every milestone</p>
        </motion.div>
      </div>
    </div>
  );
}