import { motion } from 'motion/react';
import { Sparkles } from 'lucide-react';

export function TitleSlide() {
  return (
    <div className="w-full h-full flex items-center justify-center px-4 sm:px-8 md:px-12 lg:px-16">
      <div className="max-w-6xl w-full text-center space-y-6 sm:space-y-8 md:space-y-10 lg:space-y-12">
        {/* Logo */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="flex justify-center mb-4 sm:mb-6 md:mb-8"
        >
          <img
            src="https://hireonixai.com/lovable-uploads/a3da2f04-4782-40df-8a03-2192e3f684a3.png"
            alt="HireOnix AI"
            className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 object-contain"
          />
        </motion.div>

        {/* Title */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 mb-2 sm:mb-3 md:mb-4 tracking-tight">
            Campus Ambassador
            <br />
            <span className="bg-gradient-to-r from-[#6DD5ED] to-[#001A72] bg-clip-text text-transparent">
              Program
            </span>
          </h1>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-600 font-light max-w-2xl mx-auto px-4"
        >
          Empowering Students. Building Future Leaders.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="pt-4 sm:pt-6 md:pt-8"
        >
          <a
            href="https://hireonixai.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex px-8 sm:px-10 md:px-12 py-3 sm:py-4 md:py-5 rounded-xl bg-gradient-to-r from-[#6DD5ED] to-[#001A72] text-white font-semibold text-base sm:text-lg transition-all hover:scale-105 hover:shadow-xl"
          >
            <span className="flex items-center gap-2">
              Apply Now
              <Sparkles className="w-4 h-4 sm:w-5 sm:h-5" />
            </span>
          </a>
        </motion.div>
      </div>
    </div>
  );
}