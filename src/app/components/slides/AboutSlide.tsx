import { motion } from 'motion/react';
import { Users, Briefcase, TrendingUp, Star } from 'lucide-react';

export function AboutSlide() {
  const benefits = [
    'Leadership opportunity for students',
    'Real-world experience in marketing & networking',
    'Work with a fast-growing tech ecosystem',
    'Build personal brand'
  ];

  return (
    <div className="w-full h-full flex items-center justify-center px-4 sm:px-8 md:px-12 lg:px-16 py-6 sm:py-8 md:py-10 lg:py-12 overflow-y-auto">
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 items-center">
        {/* Left: Content */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="space-y-4 sm:space-y-6 md:space-y-8"
        >
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-2 sm:mb-3 md:mb-4">
              About the
              <br />
              <span className="bg-gradient-to-r from-[#6DD5ED] to-[#001A72] bg-clip-text text-transparent">
                Program
              </span>
            </h2>
          </div>

          <div className="space-y-3 sm:space-y-4 md:space-y-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ x: -30, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className="flex items-start gap-3 sm:gap-4"
              >
                <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#6DD5ED] to-[#001A72] mt-1.5 sm:mt-2 flex-shrink-0" />
                <p className="text-base sm:text-lg md:text-xl text-slate-700 leading-relaxed">{benefit}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right: Visual illustration */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative h-64 sm:h-80 md:h-96"
        >
          {/* Card with icons */}
          <div className="relative h-full rounded-2xl sm:rounded-3xl bg-white shadow-xl border border-slate-200 p-6 sm:p-8 md:p-10 lg:p-12">
            {/* Icon grid */}
            <div className="grid grid-cols-2 gap-4 sm:gap-5 md:gap-6 h-full">
              {[
                { icon: Users, label: 'Community', delay: 0.3 },
                { icon: Briefcase, label: 'Experience', delay: 0.4 },
                { icon: TrendingUp, label: 'Growth', delay: 0.5 },
                { icon: Star, label: 'Recognition', delay: 0.6 }
              ].map(({ icon: Icon, label, delay }, index) => (
                <motion.div
                  key={index}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.6, delay }}
                  className="flex flex-col items-center justify-center gap-2 sm:gap-3 md:gap-4 rounded-xl sm:rounded-2xl bg-gradient-to-br from-slate-50 to-slate-100 border border-slate-200 hover:shadow-lg hover:scale-105 transition-all"
                >
                  <Icon className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-[#001A72]" />
                  <span className="text-xs sm:text-sm md:text-base text-slate-700 font-medium">{label}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}