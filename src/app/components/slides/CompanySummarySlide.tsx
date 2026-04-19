import { motion } from 'motion/react';
import { Briefcase, GraduationCap, Zap, Users, Target, TrendingUp } from 'lucide-react';

export function CompanySummarySlide() {
  const highlights = [
    {
      icon: GraduationCap,
      title: 'For Students',
      description: 'AI resume builder, interview prep, skill tests & job matching'
    },
    {
      icon: Briefcase,
      title: 'For Employers',
      description: 'AI-powered hiring, candidate screening & automated interviews'
    },
    {
      icon: Zap,
      title: 'AI-Powered',
      description: 'Cutting-edge AI technology for smarter hiring decisions'
    },
    {
      icon: Target,
      title: 'ATS Optimization',
      description: 'Beat applicant tracking systems with optimized resumes'
    },
    {
      icon: Users,
      title: 'Campus Hiring',
      description: 'Bridging the gap between universities and employers'
    },
    {
      icon: TrendingUp,
      title: 'Fast Growth',
      description: 'Join a rapidly scaling tech startup ecosystem'
    }
  ];

  return (
    <div className="w-full h-full flex items-center justify-center px-4 sm:px-8 md:px-12 lg:px-16 py-6 sm:py-8 md:py-10 lg:py-12 overflow-y-auto">
      <div className="max-w-7xl w-full space-y-6 sm:space-y-8 md:space-y-10 lg:space-y-12">
        {/* Title & Description */}
        <motion.div
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-2 sm:space-y-3 md:space-y-4"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-2 sm:mb-3 md:mb-4">
            About{' '}
            <span className="bg-gradient-to-r from-[#6DD5ED] to-[#001A72] bg-clip-text text-transparent">
              HireOnix AI
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-600 max-w-4xl mx-auto px-4">
            AI Infrastructure for University-to-Employer Hiring
          </p>
          <p className="text-sm sm:text-base md:text-lg text-slate-500 max-w-3xl mx-auto px-4">
            All-in-one platform combining AI resume building, job matching, interview preparation, and intelligent hiring solutions
          </p>
        </motion.div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="rounded-xl sm:rounded-2xl bg-white shadow-lg border border-slate-200 p-4 sm:p-5 md:p-6 hover:shadow-xl hover:scale-105 transition-all"
            >
              <div className="space-y-2 sm:space-y-3">
                {/* Icon */}
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-[#6DD5ED] to-[#001A72] p-2 sm:p-3 flex items-center justify-center shadow-md">
                  <item.icon size={20} className="text-white" />
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-1">{item.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{item.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row justify-center gap-6 sm:gap-8 md:gap-12 pt-2 sm:pt-4"
        >
          <div className="text-center">
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#6DD5ED] to-[#001A72] bg-clip-text text-transparent">
              All-in-One
            </div>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">Platform</p>
          </div>
          <div className="hidden sm:block w-px bg-slate-300" />
          <div className="text-center">
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#6DD5ED] to-[#001A72] bg-clip-text text-transparent">
              AI-Powered
            </div>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">Technology</p>
          </div>
          <div className="hidden sm:block w-px bg-slate-300" />
          <div className="text-center">
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#6DD5ED] to-[#001A72] bg-clip-text text-transparent">
              Fast Growth
            </div>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">Startup</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}