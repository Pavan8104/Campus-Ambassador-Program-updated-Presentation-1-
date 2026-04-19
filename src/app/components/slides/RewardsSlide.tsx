import { motion } from 'motion/react';
import { Award, Youtube, ShoppingCart, Video, Crown } from 'lucide-react';

export function RewardsSlide() {
  const rewards = [
    {
      points: 30,
      title: 'Internship Certificate',
      bonus: 'Tokens',
      icon: Award,
      color: 'from-slate-400 to-slate-600'
    },
    {
      points: 60,
      title: 'YouTube Premium',
      bonus: 'Tokens',
      icon: Youtube,
      color: 'from-blue-400 to-blue-600'
    },
    {
      points: 100,
      title: 'Amazon Voucher',
      bonus: 'Tokens',
      icon: ShoppingCart,
      color: 'from-purple-400 to-purple-600'
    },
    {
      points: 150,
      title: 'Mentorship Webinar',
      bonus: 'Tokens',
      icon: Video,
      color: 'from-[#6DD5ED] to-cyan-600'
    },
    {
      points: 210,
      title: '1:1 Mentorship',
      bonus: 'Exclusive Gifts',
      icon: Crown,
      color: 'from-[#6DD5ED] to-[#001A72]',
      featured: true
    }
  ];

  return (
    <div className="w-full h-full flex items-center justify-center px-4 sm:px-8 md:px-12 lg:px-16 py-6 sm:py-8 md:py-10 lg:py-12 overflow-y-auto">
      <div className="max-w-7xl w-full space-y-6 sm:space-y-8 md:space-y-12 lg:space-y-16">
        {/* Title */}
        <motion.div
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-2 sm:mb-3 md:mb-4">
            Rewards &{' '}
            <span className="bg-gradient-to-r from-[#6DD5ED] to-[#001A72] bg-clip-text text-transparent">
              Benefits
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-slate-600 mt-2 sm:mt-3 md:mt-4">Unlock exclusive rewards as you grow</p>
        </motion.div>

        {/* Rewards grid */}
        <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-5 md:gap-6">
          {rewards.map((reward, index) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className={`relative rounded-2xl sm:rounded-3xl bg-white shadow-xl border-2 p-4 sm:p-5 md:p-6 hover:scale-105 transition-all ${
                reward.featured ? 'border-[#6DD5ED] shadow-2xl' : 'border-slate-200'
              }`}
            >
              {/* Featured badge */}
              {reward.featured && (
                <div className="absolute -top-2 sm:-top-3 -right-2 sm:-right-3 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-[#6DD5ED] to-[#001A72] flex items-center justify-center shadow-lg">
                  <Crown className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
              )}

              {/* Content */}
              <div className="space-y-3 sm:space-y-4">
                {/* Icon */}
                <div className={`w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-xl sm:rounded-2xl bg-gradient-to-br ${reward.color} p-2 sm:p-2.5 md:p-3 flex items-center justify-center shadow-lg`}>
                  <reward.icon size={24} className="text-white" />
                </div>

                {/* Points */}
                <div className="space-y-0.5 sm:space-y-1">
                  <div className={`text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r ${reward.color} bg-clip-text text-transparent`}>
                    {reward.points}
                  </div>
                  <div className="text-xs text-slate-500">points</div>
                </div>

                {/* Title */}
                <div>
                  <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900 mb-1 leading-tight">{reward.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-600">+ {reward.bonus}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom accent */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center"
        >
          <p className="text-slate-600 text-sm sm:text-base md:text-lg">Highest tier unlocks premium mentorship and exclusive perks</p>
        </motion.div>
      </div>
    </div>
  );
}