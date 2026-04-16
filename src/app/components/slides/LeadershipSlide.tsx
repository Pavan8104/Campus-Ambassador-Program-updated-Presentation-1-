import { motion } from 'motion/react';
import { Linkedin } from 'lucide-react';

export function LeadershipSlide() {
  const leaders = [
    {
      name: 'Tushar Sharma',
      role: 'Chief Technology Officer',
      image: '/src/imports/PHOTO-2026-04-13-15-13-01.jpg',
      description: 'Technology architect & AI innovator',
      linkedin: 'https://www.linkedin.com/in/tusharsharma06/'
    },
    {
      name: 'Rahul Sharma',
      role: 'Chief Marketing Officer',
      image: '/src/imports/PHOTO-2026-04-13-15-13-01-1.jpg',
      description: 'Strategic marketing & growth expert',
      linkedin: 'https://www.linkedin.com/in/rahulsharmamat/'
    },
    {
      name: 'Kunal Chawla',
      role: 'Chief Executive Officer',
      image: '/src/imports/PHOTO-2026-04-13-15-13-01-2.jpg',
      description: 'Visionary leader driving innovation in AI-powered hiring',
      linkedin: 'https://www.linkedin.com/in/imkunalchawla/'
    }
  ];

  return (
    <div className="w-full h-full flex items-center justify-center px-4 sm:px-8 md:px-12 lg:px-16 py-6 sm:py-8 md:py-10 lg:py-12 overflow-y-auto">
      <div className="max-w-7xl w-full space-y-6 sm:space-y-8 md:space-y-10 lg:space-y-12">
        {/* Title */}
        <motion.div
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-2 sm:mb-3 md:mb-4">
            Meet Our{' '}
            <span className="bg-gradient-to-r from-[#6DD5ED] to-[#001A72] bg-clip-text text-transparent">
              Leadership
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-slate-600">Guiding HireOnix AI's vision and innovation</p>
        </motion.div>

        {/* Leadership cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {leaders.map((leader, index) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
              className="group rounded-2xl sm:rounded-3xl bg-white shadow-xl border border-slate-200 overflow-hidden hover:shadow-2xl hover:scale-105 transition-all"
            >
              {/* Image */}
              <div className="relative h-64 sm:h-72 md:h-80 overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200">
                <img
                  src={leader.image}
                  alt={leader.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              {/* Content */}
              <div className="p-4 sm:p-5 md:p-6 space-y-2 sm:space-y-3">
                <div>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900">{leader.name}</h3>
                  <p className="text-xs sm:text-sm font-medium bg-gradient-to-r from-[#6DD5ED] to-[#001A72] bg-clip-text text-transparent">
                    {leader.role}
                  </p>
                </div>
                <p className="text-xs sm:text-sm text-slate-600">{leader.description}</p>

                {/* Social icons */}
                <div className="flex gap-2 sm:gap-3 pt-1 sm:pt-2">
                  <a 
                    href={leader.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-slate-100 hover:bg-gradient-to-r hover:from-[#6DD5ED] hover:to-[#001A72] flex items-center justify-center transition-all group/btn"
                  >
                    <Linkedin className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-slate-600 group-hover/btn:text-white" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}