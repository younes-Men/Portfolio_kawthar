import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Sparkles, MapPin } from 'lucide-react';

const Education = () => {
  const educationData = [
    {
      degree: 'Doctorat en médecine',
      status: '(en cours)',
      date: 'Depuis septembre 2021',
      institution: 'Faculté Ibn Zohr Agadir, Morocco',
      icon: <Award className="text-pink-500 w-5 h-5 sm:w-6 sm:h-6" />,
      color: 'pink'
    },
    {
      degree: 'Baccalauréat sciences physiques',
      status: 'mention très bien',
      date: 'De septembre 2020 à juillet 2021',
      institution: 'Lycée ouled teima',
      icon: <GraduationCap className="text-purple-500 w-5 h-5 sm:w-6 sm:h-6" />,
      color: 'purple'
    }
  ];

  return (
    <div className="pt-28 sm:pt-32 pb-16 sm:pb-20 min-h-screen relative overflow-hidden">
      {/* Background soft blobs */}
      <div className="absolute top-1/4 left-0 w-64 sm:w-96 h-64 sm:h-96 bg-pink-300/20 rounded-full blur-3xl -z-10 mix-blend-multiply"></div>
      <div className="absolute bottom-1/4 right-0 w-64 sm:w-96 h-64 sm:h-96 bg-purple-300/15 rounded-full blur-3xl -z-10 mix-blend-multiply"></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16 sm:mb-24"
        >
          <div className="inline-flex items-center gap-2 text-pink-500 font-medium mb-4">
            <Sparkles className="w-4 h-4" />
            <span className="uppercase tracking-widest text-xs">Mon Cursus</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-800 mb-6">Diplômes et Formations</h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-pink-300 to-purple-300 mx-auto rounded-full"></div>
        </motion.div>

        <div className="relative">
          {/* Vertical Soft Line - mobile: left side, desktop: center */}
          <div className="absolute left-6 sm:left-8 md:left-1/2 top-0 bottom-0 w-0.5 sm:w-1 bg-gradient-to-b from-pink-200 via-purple-200 to-transparent md:-translate-x-1/2 rounded-full"></div>

          <div className="space-y-12 sm:space-y-16">
            {educationData.map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative"
              >
                {/* Timeline Icon - mobile: left side, desktop: center */}
                <div className="absolute left-6 sm:left-8 md:left-1/2 w-10 h-10 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl glass-card flex items-center justify-center -translate-x-1/2 md:-translate-x-1/2 z-10 shadow-lg">
                  {item.icon}
                </div>

                {/* Content Box - mobile: always right of timeline, desktop: alternating */}
                <div className={`
                  ml-14 sm:ml-20 
                  md:ml-0 md:w-1/2 
                  ${index % 2 === 0 
                    ? 'md:ml-auto md:pl-12 lg:pl-16' 
                    : 'md:mr-auto md:pr-12 lg:pr-16'
                  }
                `}>
                  <div className="glass-card p-5 sm:p-8 rounded-2xl sm:rounded-3xl hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                    <span className={`inline-block px-3 sm:px-4 py-1 sm:py-1.5 rounded-full text-xs font-bold mb-3 sm:mb-4 tracking-wider sm:tracking-widest uppercase ${
                      item.color === 'pink' 
                        ? 'bg-pink-100 text-pink-600' 
                        : 'bg-purple-100 text-purple-600'
                    }`}>
                      {item.date}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-800 mb-1 sm:mb-2 group-hover:text-pink-600 transition-colors">
                      {item.degree}
                    </h3>
                    <p className={`font-semibold text-sm mb-3 sm:mb-4 ${
                      item.color === 'pink' ? 'text-pink-500' : 'text-purple-500'
                    }`}>
                      {item.status}
                    </p>
                    <div className="flex items-center gap-2 text-slate-600 font-medium text-xs sm:text-sm bg-white/40 p-2.5 sm:p-3 rounded-lg sm:rounded-xl">
                      <MapPin className="w-4 h-4 text-slate-400 flex-shrink-0" />
                      {item.institution}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
