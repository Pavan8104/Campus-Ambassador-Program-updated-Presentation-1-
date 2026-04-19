import { motion } from 'motion/react';
import { TrendingUp, Lightbulb, Award, FileText, Rocket } from 'lucide-react';

export function WhyJoinSlide() {
  const reasons = [
    { icon: TrendingUp, text: 'Leadership skills' },
    { icon: Lightbulb, text: 'Industry exposure' },
    { icon: Award, text: 'Rewards & recognition' },
    { icon: FileText, text: 'Resume building' },
    { icon: Rocket, text: 'Work with a tech startup' }
  ];

  return (
    <div className="w-full h-full flex items-center justify-center px-4 sm:px-8 md:px-12 lg:px-16 py-6 sm:py-8 md:py-10 lg:py-12 overflow-y-auto">
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 lg:gap-20 items-center">
        {/* Left: Big question */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="space-y-4 sm:space-y-6">
            <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-tight">
              <span className="text-slate-900">Why</span>
              <br />
              <span className="bg-gradient-to-r from-[#6DD5ED] to-[#001A72] bg-clip-text text-transparent">
                Join Us?
              </span>
            </h2>

            {/* Decorative element */}
            <div className="w-24 sm:w-28 md:w-32 h-1.5 sm:h-2 bg-gradient-to-r from-[#6DD5ED] to-[#001A72] rounded-full" />
          </div>
        </motion.div>

        {/* Right: Reasons list */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-3 sm:space-y-4 md:space-y-6"
        >
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ x: 30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              className="rounded-2xl sm:rounded-3xl bg-white shadow-xl border border-slate-200 p-4 sm:p-5 md:p-6 hover:shadow-2xl hover:scale-105 transition-all"
            >
              <div className="flex items-center gap-4 sm:gap-5 md:gap-6">
                {/* Icon */}
                <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-xl sm:rounded-2xl bg-gradient-to-br from-[#6DD5ED] to-[#001A72] p-2 sm:p-2.5 md:p-3 flex items-center justify-center flex-shrink-0 shadow-lg">
  <reason.icon size={24} className="text-white" />
                </div>

                {/* Text */}
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-slate-900">{reason.text}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}