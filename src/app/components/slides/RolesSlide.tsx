import { motion } from 'motion/react';
import { Megaphone, Calendar, UserPlus, Building2 } from 'lucide-react';

export function RolesSlide() {
  const roles = [
    {
      icon: Megaphone,
      title: 'Promote',
      description: 'Promote company on campus',
      color: 'from-[#6DD5ED] to-[#001A72]'
    },
    {
      icon: Calendar,
      title: 'Organize',
      description: 'Organize events & workshops',
      color: 'from-[#001A72] to-[#6DD5ED]'
    },
    {
      icon: UserPlus,
      title: 'Onboard',
      description: 'Onboard students',
      color: 'from-[#6DD5ED] to-[#001A72]'
    },
    {
      icon: Building2,
      title: 'Represent',
      description: 'Represent the company',
      color: 'from-[#001A72] to-[#6DD5ED]'
    }
  ];

  return (
    <div className="w-full h-full flex items-center justify-center px-4 sm:px-8 md:px-12 lg:px-16 py-6 sm:py-8 md:py-10 lg:py-12 overflow-y-auto">
      <div className="max-w-7xl w-full space-y-8 sm:space-y-10 md:space-y-12 lg:space-y-16">
        {/* Title */}
        <motion.div
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-2 sm:mb-3 md:mb-4">
            Roles &{' '}
            <span className="bg-gradient-to-r from-[#6DD5ED] to-[#001A72] bg-clip-text text-transparent">
              Responsibilities
            </span>
          </h2>
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
          {roles.map((role, index) => (
            <motion.div
              key={index}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="rounded-2xl sm:rounded-3xl bg-white shadow-xl border border-slate-200 p-6 sm:p-8 md:p-10 hover:shadow-2xl hover:scale-105 transition-all"
            >
              <div className="space-y-4 sm:space-y-5 md:space-y-6">
                {/* Icon */}
                <div className={`w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br ${role.color} p-3 sm:p-3.5 md:p-4 flex items-center justify-center shadow-lg`}>
                  <role.icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
                </div>

                {/* Text */}
                <div>
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 mb-1 sm:mb-2">{role.title}</h3>
                  <p className="text-sm sm:text-base md:text-lg text-slate-600">{role.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}