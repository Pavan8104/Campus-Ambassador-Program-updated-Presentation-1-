import { motion } from 'motion/react';
import {
  MessageCircle,
  Send,
  LayoutDashboard,
  BarChart3,
  Target,
  TrendingUp,
  Trophy,
  Share2,
  BookOpen,
  Megaphone,
  Users,
  Brain,
  Globe,
  Briefcase,
  Flame,
  Sparkles,
  ChevronRight,
  CheckCircle2
} from 'lucide-react';

export function GettingStartedSlide() {
  const communicationChannels = [
    {
      icon: MessageCircle,
      name: 'WhatsApp Group',
      description: 'Instant support & updates',
      color: 'from-green-400 to-green-600'
    },
    {
      icon: Send,
      name: 'Telegram Group',
      description: 'Community & networking',
      color: 'from-blue-400 to-blue-600'
    }
  ];

  const dashboardFeatures = [
    { icon: BarChart3, text: 'Track every referral you make', emoji: '📊' },
    { icon: Target, text: 'Monitor milestones & rewards', emoji: '🎯' },
    { icon: TrendingUp, text: 'Analyze performance & growth', emoji: '📈' },
    { icon: Trophy, text: 'Stay motivated by hitting targets', emoji: '🏆' }
  ];

  const successTips = [
    {
      icon: Flame,
      title: 'Be Consistent',
      description: 'Share Hireonix AI with your network regularly'
    },
    {
      icon: BookOpen,
      title: 'Educate Others',
      description: 'Explain how our platform helps students land better opportunities'
    },
    {
      icon: Megaphone,
      title: 'Leverage Content',
      description: 'Use LinkedIn, Instagram & WhatsApp to spread the word'
    },
    {
      icon: Users,
      title: 'Engage with Us',
      description: 'Stay active in the groups and ask questions'
    },
    {
      icon: Brain,
      title: 'Think Long-Term',
      description: "It's a personal brand-building opportunity"
    }
  ];

  const biggerVision = [
    { icon: Briefcase, text: 'Real-world marketing & leadership experience' },
    { icon: Globe, text: 'Strengthen your resume & personal brand' },
    { icon: Sparkles, text: 'Join an ambitious, growth-driven community' }
  ];

  return (
    <div className="w-full h-full flex items-center justify-center px-4 sm:px-8 md:px-12 lg:px-16 py-4 sm:py-5 md:py-6 overflow-hidden">
      <div className="max-w-7xl w-full space-y-2.5 sm:space-y-3 md:space-y-4">
        {/* Title */}
        <motion.div
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 mb-0.5">
            Your{' '}
            <span className="bg-gradient-to-r from-[#6DD5ED] to-[#001A72] bg-clip-text text-transparent">
              Getting Started
            </span>{' '}
            Guide
          </h2>
          <p className="text-[11px] sm:text-xs md:text-sm text-slate-500 max-w-2xl mx-auto">
            Everything you need for a smooth and successful journey
          </p>
        </motion.div>

        {/* Top Row: Communication + Dashboard */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2.5 sm:gap-3">
          {/* Communication Channels */}
          <motion.div
            initial={{ x: -40, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="rounded-xl sm:rounded-2xl bg-white shadow-xl border border-slate-200 p-2.5 sm:p-3 md:p-4"
          >
            <div className="flex items-center gap-2 mb-1.5 sm:mb-2">
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-gradient-to-br from-[#6DD5ED] to-[#001A72] flex items-center justify-center shadow-lg">
                <Share2 className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
              </div>
              <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                Join Our Channels
              </h3>
            </div>

            <div className="space-y-1.5 sm:space-y-2">
              {communicationChannels.map((channel, index) => (
                <motion.div
                  key={index}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="flex items-center gap-2.5 sm:gap-3 p-2 sm:p-2.5 rounded-lg bg-slate-50 hover:bg-slate-100 transition-colors group cursor-pointer"
                >
                  <div
                    className={`w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-gradient-to-br ${channel.color} flex items-center justify-center shadow-md group-hover:scale-110 transition-transform`}
                  >
                    <channel.icon className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <p className="text-xs sm:text-sm font-semibold text-slate-900">{channel.name}</p>
                    <p className="text-[10px] sm:text-xs text-slate-500">{channel.description}</p>
                  </div>
                  <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-[#001A72] group-hover:translate-x-1 transition-all" />
                </motion.div>
              ))}
            </div>

            {/* Channel benefits */}
            <div className="mt-2 sm:mt-2.5 flex flex-wrap gap-1 sm:gap-1.5">
              {['Quick support', 'Feature updates', 'Networking'].map((tag, i) => (
                <span
                  key={i}
                  className="text-[10px] sm:text-xs px-2 sm:px-3 py-1 rounded-full bg-gradient-to-r from-[#6DD5ED]/10 to-[#001A72]/10 text-[#001A72] font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Partner Dashboard */}
          <motion.div
            initial={{ x: 40, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="rounded-xl sm:rounded-2xl bg-white shadow-xl border border-slate-200 p-2.5 sm:p-3 md:p-4"
          >
            <div className="flex items-center gap-2 mb-1.5 sm:mb-2">
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-gradient-to-br from-[#6DD5ED] to-[#001A72] flex items-center justify-center shadow-lg">
                <LayoutDashboard className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
              </div>
              <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                Your Partner Dashboard
              </h3>
            </div>

            <div className="space-y-1.5 sm:space-y-2">
              {dashboardFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ x: 20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.4, delay: 0.35 + index * 0.08 }}
                  className="flex items-center gap-2.5 p-2 sm:p-2.5 rounded-lg bg-slate-50 hover:bg-slate-100 transition-colors"
                >
                  <span className="text-base sm:text-lg">{feature.emoji}</span>
                  <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-md bg-gradient-to-br from-[#6DD5ED]/20 to-[#001A72]/20 flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#001A72]" />
                  </div>
                  <p className="text-[11px] sm:text-xs md:text-sm font-medium text-slate-700">{feature.text}</p>
                </motion.div>
              ))}
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="mt-2 sm:mt-2.5 text-[10px] sm:text-[11px] text-slate-400 italic text-center"
            >
              Everything you achieve is recorded — so you always know how far you've come.
            </motion.p>
          </motion.div>
        </div>

        {/* Bottom Row: Success Tips + Bigger Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-2.5 sm:gap-3">
          {/* Success Tips — 3 columns */}
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-3 rounded-xl sm:rounded-2xl bg-gradient-to-br from-[#001A72] to-[#003399] shadow-xl p-2.5 sm:p-3 md:p-4 text-white"
          >
            <div className="flex items-center gap-2 mb-1.5 sm:mb-2">
              <Flame className="w-4 h-4 sm:w-5 sm:h-5 text-orange-400" />
              <h3 className="text-sm sm:text-base md:text-lg font-bold">
                How to Stand Out
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 sm:gap-2">
              {successTips.map((tip, index) => (
                <motion.div
                  key={index}
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.08 }}
                  className={`flex items-start gap-2 p-2 sm:p-2.5 rounded-lg bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors ${
                    index === 4 ? 'sm:col-span-2' : ''
                  }`}
                >
                  <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-md bg-white/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <tip.icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
                  </div>
                  <div>
                    <p className="text-[11px] sm:text-xs font-bold text-white">{tip.title}</p>
                    <p className="text-[9px] sm:text-[10px] text-white/70 leading-snug">{tip.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Bigger Vision — 2 columns */}
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="lg:col-span-2 rounded-xl sm:rounded-2xl bg-white shadow-xl border border-slate-200 p-2.5 sm:p-3 md:p-4 flex flex-col"
          >
            <div className="flex items-center gap-2 mb-1.5 sm:mb-2">
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-gradient-to-br from-[#6DD5ED] to-[#001A72] flex items-center justify-center shadow-lg">
                <Globe className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
              </div>
              <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                Bigger Than Referrals
              </h3>
            </div>

            <div className="space-y-1.5 sm:space-y-2 flex-1">
              {biggerVision.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ x: 20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.4, delay: 0.65 + index * 0.1 }}
                  className="flex items-center gap-2.5 p-2 sm:p-2.5 rounded-lg bg-slate-50 hover:bg-slate-100 transition-colors"
                >
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#6DD5ED] flex-shrink-0" />
                  <p className="text-[11px] sm:text-xs md:text-sm font-medium text-slate-700">{item.text}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="mt-2 sm:mt-2.5 pt-2 sm:pt-2.5 border-t border-slate-100"
            >
              <p className="text-[11px] sm:text-xs text-center font-semibold bg-gradient-to-r from-[#6DD5ED] to-[#001A72] bg-clip-text text-transparent">
                Let's build something big together 🚀
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
