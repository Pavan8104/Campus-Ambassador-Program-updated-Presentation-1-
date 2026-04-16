import { motion } from 'motion/react';
import { Target, Activity, Zap, Gift, ArrowDown, RefreshCw } from 'lucide-react';

export function AchievementSlide() {
  const steps = [
    { icon: Target, label: 'Set Goals', description: 'Clear targets' },
    { icon: Activity, label: 'Track Performance', description: 'Monitor progress' },
    { icon: Zap, label: 'Earn Points', description: 'Unlock achievements' },
    { icon: Gift, label: 'Get Rewards', description: 'Claim benefits' }
  ];

  return (
    <div className="w-full h-full flex items-center justify-center px-16 py-16">
      <div className="max-w-5xl w-full space-y-8">
        {/* Title */}
        <motion.div
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-5xl font-bold text-slate-900 mb-2">
            Achievement{' '}
            <span className="bg-gradient-to-r from-[#6DD5ED] to-[#001A72] bg-clip-text text-transparent">
              System
            </span>
          </h2>
        </motion.div>

        {/* Vertical flow */}
        <div className="relative space-y-4">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Step card */}
              <motion.div
                initial={{ x: index % 2 === 0 ? -50 : 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
                className="rounded-2xl bg-white shadow-lg border border-slate-200 p-5 hover:shadow-xl hover:scale-105 transition-all"
              >
                <div className="flex items-center gap-5">
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#6DD5ED] to-[#001A72] p-3 flex items-center justify-center flex-shrink-0 shadow-md">
                    <step.icon className="w-7 h-7 text-white" />
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-slate-900 mb-0.5">{step.label}</h3>
                    <p className="text-sm text-slate-600">{step.description}</p>
                  </div>

                  {/* Step number */}
                  <div className="text-4xl font-bold text-slate-200">0{index + 1}</div>
                </div>
              </motion.div>

              {/* Arrow connector (except last item) */}
              {index < steps.length - 1 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.15 }}
                  className="flex justify-center py-1"
                >
                  <ArrowDown className="w-6 h-6 text-[#001A72]" />
                </motion.div>
              )}
            </div>
          ))}
        </div>

        {/* Program duration */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="rounded-2xl bg-gradient-to-r from-[#6DD5ED]/10 to-[#001A72]/10 border-2 border-[#6DD5ED] p-5"
        >
          <div className="flex items-center justify-center gap-3">
            <RefreshCw className="w-6 h-6 text-[#001A72]" />
            <div>
              <h4 className="text-lg font-bold text-slate-900 mb-0.5">3-Month Program</h4>
              <p className="text-sm text-slate-600">Quarterly cycle with fresh opportunities to excel</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
