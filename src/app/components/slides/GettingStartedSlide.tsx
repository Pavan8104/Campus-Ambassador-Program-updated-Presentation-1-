import { motion } from 'motion/react';
import {
  MessageCircle,
  Send,
  Share2,
  ChevronRight,
  Flame,
  Megaphone,
  Users,
  Brain,
  Globe,
  CheckCircle2,
  LayoutDashboard
} from 'lucide-react';

export function GettingStartedSlide() {
  const communicationChannels = [
    {
      icon: MessageCircle,
      name: 'WhatsApp Group',
      description: 'Instant support & updates',
      color: 'from-green-400 to-green-600',
      link: 'https://chat.whatsapp.com/HxtxOa6IA7n9rR9VEZxDoY?mode=gi_t'
    },
    {
      icon: Send,
      name: 'Telegram Group',
      description: 'Community & networking',
      color: 'from-blue-400 to-blue-600',
      link: 'https://t.me/+e7orMlJJAsUyMjE1'
    }
  ];

  const dashboardFeatures = [
    { text: 'Track every referral you make using your referall link', emoji: '📊' },
    { text: 'Monitor milestones & rewards', emoji: '🎯' },
    { text: 'Analyze performance & growth', emoji: '📈' },
    { text: 'Stay motivated by hitting targets', emoji: '🏆' }
  ];

  const successTips = [
    {
      icon: Flame,
      title: 'Be Consistent',
      description: 'Share Hireonix AI with your network regularly'
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
    { icon: Globe, text: 'Strengthen your resume & personal brand' },
    { icon: CheckCircle2, text: 'Join an ambitious, growth-driven community' }
  ];

  return (
    <div className="w-full min-h-screen flex items-start justify-center px-4 sm:px-6 md:px-8 lg:px-12 py-6 sm:py-8 overflow-y-auto">
      <div className="max-w-6xl w-full space-y-2 sm:space-y-3 md:space-y-4 p-4 sm:p-6 md:p-8 flex flex-col">

        {/* Title */}
        <motion.div
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center flex-shrink-0"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-1 sm:mb-2 leading-tight">
            Your{' '}
            <span className="bg-gradient-to-r from-[#6DD5ED] to-[#001A72] bg-clip-text text-transparent">
              Getting Started
            </span>{' '}
            Guide
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">
            Everything you need for a smooth and successful journey
          </p>
        </motion.div>

        {/* Top Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-4 lg:gap-6">

          {/* Communication Channels */}
          <motion.div
            initial={{ x: -40, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="rounded-xl sm:rounded-2xl bg-white shadow-xl border border-slate-200 p-3 sm:p-4 md:p-5 flex flex-col"
          >
            <div className="flex items-center gap-2 mb-2 sm:mb-3">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-gradient-to-br from-[#6DD5ED] to-[#001A72] flex items-center justify-center shadow-lg">
                <Share2 className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                Join Our Channels
              </h3>
            </div>

            <div className="space-y-2 sm:space-y-2.5">
              {communicationChannels.map((channel, index) => (
                <a
                  key={index}
                  href={channel.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <motion.div
                    className="flex items-center gap-3 p-3 rounded-lg bg-slate-50 hover:bg-slate-100 transition-colors cursor-pointer"
                  >
                    <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${channel.color} flex items-center justify-center`}>
                      <channel.icon size={20} className="text-white" />
                    </div>

                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-semibold text-slate-900 break-words">
                        {channel.name}
                      </p>
                      <p className="text-xs text-slate-500 break-words">
                        {channel.description}
                      </p>
                    </div>

                    <ChevronRight className="w-5 h-5 text-slate-400" />
                  </motion.div>
                </a>
              ))}
            </div>

            <div className="flex flex-wrap gap-1.5 pt-3">
              {['Quick support', 'Feature updates', 'Networking'].map((tag, i) => (
                <span
                  key={i}
                  className="text-xs px-2 py-1 rounded-full bg-gradient-to-r from-[#6DD5ED]/10 to-[#001A72]/10 text-[#001A72] font-medium"
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
            className="rounded-xl sm:rounded-2xl bg-white shadow-xl border border-slate-200 p-3 sm:p-4 md:p-5 flex flex-col"
          >
            <div className="flex items-center gap-2 mb-2 sm:mb-3">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-gradient-to-br from-[#6DD5ED] to-[#001A72] flex items-center justify-center shadow-lg">
                <LayoutDashboard className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                Your Partner Dashboard
              </h3>
            </div>

            <div className="space-y-2 sm:space-y-2.5">
              {dashboardFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-3 p-3 rounded-lg bg-slate-50"
                >
                  <span className="text-xl sm:text-2xl">{feature.emoji}</span>
                  <p className="text-xs sm:text-sm font-medium text-slate-700 break-words">
                    {feature.text}
                  </p>
                </motion.div>
              ))}
            </div>

            <p className="mt-3 sm:mt-4 text-xs sm:text-sm text-slate-400 italic text-center pt-2">
              Everything you achieve is recorded — so you always know how far you've come.
            </p>
          </motion.div>
        </div>

        {/* Bottom Row */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-3 sm:gap-4">

          {/* Success Tips */}
          <motion.div className="lg:col-span-3 rounded-xl sm:rounded-2xl bg-gradient-to-br from-[#001A72] to-[#003399] shadow-xl p-3 sm:p-4 md:p-5 text-white flex flex-col">
            <div className="flex items-center gap-2 mb-2 sm:mb-3">
              <Flame className="w-5 h-5 text-orange-400" />
              <h3 className="text-sm sm:text-base md:text-lg font-bold">
                How to Stand Out
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-2.5">
              {successTips.map((tip, index) => (
                <div
                  key={index}
                  className={`flex items-start gap-2 p-3 rounded-lg bg-white/10 ${index === 3 ? 'sm:col-span-2' : ''}`}
                >
                  <div className="w-8 h-8 rounded-md bg-white/20 flex items-center justify-center">
                    <tip.icon size={16} className="text-white" />
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm font-bold break-words">{tip.title}</p>
                    <p className="text-[10px] sm:text-xs text-white/80 break-words">{tip.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Bigger Vision */}
          <motion.div className="lg:col-span-2 rounded-xl sm:rounded-2xl bg-white shadow-xl border border-slate-200 p-3 sm:p-4 md:p-5 flex flex-col">
            <div className="flex items-center gap-2 mb-2 sm:mb-3">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-gradient-to-br from-[#6DD5ED] to-[#001A72] flex items-center justify-center shadow-lg">
                <Globe className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                Bigger Than Referrals
              </h3>
            </div>

            <div className="space-y-2 sm:space-y-2.5">
              {biggerVision.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2.5 p-3 rounded-lg bg-slate-50"
                >
                  <CheckCircle2 className="w-5 h-5 text-[#6DD5ED]" />
                  <p className="text-xs sm:text-sm font-medium text-slate-700 break-words">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-3 pt-2 border-t border-slate-100">
              <p className="text-xs sm:text-sm text-center font-semibold bg-gradient-to-r from-[#6DD5ED] to-[#001A72] bg-clip-text text-transparent">
                Let's build something big together 🚀
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}