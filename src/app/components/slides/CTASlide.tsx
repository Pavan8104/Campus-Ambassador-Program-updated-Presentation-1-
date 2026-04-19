import { motion } from 'motion/react';
import { Rocket, Globe, ArrowRight, Phone } from 'lucide-react';

export function CTASlide() {
  return (
    <div className="w-full h-full flex items-start md:items-center justify-center px-3 sm:px-6 md:px-12 lg:px-16 py-3 sm:py-4 md:py-6 overflow-y-auto md:overflow-hidden scrollbar-hide">
      <div className="max-w-5xl w-full text-center space-y-3 sm:space-y-4 md:space-y-8">
        {/* Main heading */}
        <motion.div
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="space-y-2 sm:space-y-3 md:space-y-4"
        >
          <div className="flex justify-center">
            <motion.div
              animate={{
                y: [0, -10, 0]
              }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            >
              <Rocket className="w-8 h-8 sm:w-10 sm:h-10 md:w-14 md:h-14 lg:w-16 lg:h-16 text-[#001A72]" />
            </motion.div>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
            Join the
            <br />
            <span className="bg-gradient-to-r from-[#6DD5ED] to-[#001A72] bg-clip-text text-transparent">
              Movement
            </span>
          </h2>

          <p className="text-xs sm:text-sm md:text-lg lg:text-xl text-slate-600 max-w-2xl mx-auto px-4">
            Start your journey today and become a leader of tomorrow
          </p>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <a
            href="https://hireonixai.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex px-6 sm:px-8 md:px-12 py-2.5 sm:py-3 md:py-5 rounded-lg sm:rounded-xl bg-gradient-to-r from-[#6DD5ED] to-[#001A72] text-white font-bold text-sm sm:text-base md:text-xl transition-all hover:scale-110 hover:shadow-2xl"
          >
            <span className="flex items-center gap-2 sm:gap-3">
              Apply Now
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 group-hover:translate-x-2 transition-transform" />
            </span>
          </a>
        </motion.div>

        {/* QR Code and website section */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-col md:flex-row items-center justify-center gap-4 sm:gap-5 md:gap-8"
        >
          {/* QR Code placeholder */}
          <div className="rounded-lg sm:rounded-xl md:rounded-2xl bg-white shadow-xl border border-slate-200 p-3 sm:p-4 md:p-6">
            <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 rounded-lg sm:rounded-xl md:rounded-2xl bg-white flex items-center justify-center">
              <img
                src="/src/imports/Screenshot_2026-04-15_at_7.41.22 PM.png"
                alt="QR Code to apply"
                className="w-full h-full object-contain"
              />
            </div>
            <p className="text-slate-600 text-[10px] sm:text-[11px] md:text-xs mt-1.5 sm:mt-2 md:mt-3 text-center font-medium">Scan to apply</p>
          </div>

          {/* Divider */}
          <div className="hidden md:block h-24 w-px bg-gradient-to-b from-transparent via-slate-300 to-transparent" />

          {/* Website and Contact */}
          <div className="space-y-2 sm:space-y-3 md:space-y-4">
            <div className="space-y-1 sm:space-y-2 md:space-y-4">
              <div className="flex items-center gap-2 sm:gap-3 justify-center md:justify-start">
                <Globe className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-[#001A72]" />
                <span className="text-slate-500 text-xs sm:text-sm md:text-lg">Visit us at</span>
              </div>
              <a
                href="https://hireonixai.com"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-lg sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-[#6DD5ED] to-[#001A72] bg-clip-text text-transparent hover:scale-105 transition-transform"
              >
                hireonixai.com
              </a>
            </div>

            <div className="space-y-1 sm:space-y-2 md:space-y-4">
              <div className="flex items-center gap-2 sm:gap-3 justify-center md:justify-start">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-[#001A72]" />
                <span className="text-slate-500 text-xs sm:text-sm md:text-lg">Contact us</span>
              </div>
              <a
                href="tel:+919548708068"
                className="block text-base sm:text-xl md:text-2xl font-bold bg-gradient-to-r from-[#6DD5ED] to-[#001A72] bg-clip-text text-transparent hover:scale-105 transition-transform"
              >
                +91-9548708068
              </a>
            </div>
          </div>
        </motion.div>

        {/* Bottom tagline */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="pt-2 sm:pt-3"
        >
          <p className="text-slate-400 text-[10px] sm:text-xs md:text-sm tracking-wider uppercase">
            Empowered by HireOnix AI
          </p>
        </motion.div>
      </div>
    </div>
  );
}