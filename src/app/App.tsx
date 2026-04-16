import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Users, TrendingUp, Award, Rocket, Target, Gift, Sparkles, QrCode } from 'lucide-react';
import { TitleSlide } from './components/slides/TitleSlide';
import { CompanySummarySlide } from './components/slides/CompanySummarySlide';
import { AboutSlide } from './components/slides/AboutSlide';
import { RolesSlide } from './components/slides/RolesSlide';
import { OpportunitiesSlide } from './components/slides/OpportunitiesSlide';
import { AchievementSlide } from './components/slides/AchievementSlide';
import { RewardsSlide } from './components/slides/RewardsSlide';
import { WhyJoinSlide } from './components/slides/WhyJoinSlide';
import { LeadershipSlide } from './components/slides/LeadershipSlide';
import { LeadingTeamNoteSlide } from './components/slides/LeadingTeamNoteSlide';
import { CTASlide } from './components/slides/CTASlide';

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 11;

  const nextSlide = () => {
    if (currentSlide < totalSlides - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [currentSlide]);

  const slides = [
    <TitleSlide key="title" />,
    <CompanySummarySlide key="summary" />,
    <AboutSlide key="about" />,
    <RolesSlide key="roles" />,
    <OpportunitiesSlide key="opportunities" />,
    <AchievementSlide key="achievement" />,
    <RewardsSlide key="rewards" />,
    <WhyJoinSlide key="why" />,
    <LeadershipSlide key="leadership" />,
    <LeadingTeamNoteSlide key="leadingnote" />,
    <CTASlide key="cta" />
  ];

  return (
    <div className="relative w-full h-screen overflow-hidden bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-[#6DD5ED] to-[#001A72] rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-[#001A72] to-[#6DD5ED] rounded-full blur-3xl" />
      </div>

      {/* Slides container */}
      <div className="relative w-full h-full flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            className="w-full h-full"
          >
            {slides[currentSlide]}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation controls */}
      <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-3 sm:gap-4 md:gap-6 z-50">
        <button
          onClick={prevSlide}
          disabled={currentSlide === 0}
          className="p-2 sm:p-2.5 md:p-3 rounded-full bg-white shadow-lg border border-slate-200 hover:bg-slate-50 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
        >
          <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 text-slate-700" />
        </button>

        {/* Slide indicators */}
        <div className="flex gap-1.5 sm:gap-2">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-1.5 sm:h-2 rounded-full transition-all ${
                index === currentSlide
                  ? 'w-6 sm:w-8 bg-gradient-to-r from-[#6DD5ED] to-[#001A72]'
                  : 'w-1.5 sm:w-2 bg-slate-300 hover:bg-slate-400'
              }`}
            />
          ))}
        </div>

        <button
          onClick={nextSlide}
          disabled={currentSlide === totalSlides - 1}
          className="p-2 sm:p-2.5 md:p-3 rounded-full bg-white shadow-lg border border-slate-200 hover:bg-slate-50 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
        >
          <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-slate-700" />
        </button>
      </div>

      {/* Slide counter */}
      <div className="absolute top-4 sm:top-6 md:top-8 right-4 sm:right-6 md:right-8 text-slate-500 text-xs sm:text-sm font-medium bg-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full shadow-sm">
        {currentSlide + 1} / {totalSlides}
      </div>
    </div>
  );
}