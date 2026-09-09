import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, FileText, Languages, Heart, Sparkles } from 'lucide-react';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="pt-32 pb-20 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 text-pink-500 font-medium mb-4">
            <Sparkles className="w-4 h-4" />
            <span className="uppercase tracking-widest text-xs">Découvrez-moi</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">À propos de moi</h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-pink-300 to-purple-300 mx-auto rounded-full"></div>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {/* Atouts */}
          <motion.div variants={itemVariants} className="glass-card rounded-3xl p-8 hover:shadow-lg transition-all group">
            <div className="w-14 h-14 bg-pink-100 rounded-2xl flex items-center justify-center text-pink-500 mb-6 group-hover:scale-110 transition-transform">
              <CheckCircle2 size={28} strokeWidth={1.5} />
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-6">Atouts</h3>
            <ul className="space-y-4">
              {['Autonomie', 'Travail d\'équipe', 'Attention aux détails', 'Pédagogie'].map((item, idx) => (
                <li key={idx} className="flex items-center text-slate-600 font-medium">
                  <span className="w-2 h-2 rounded-full bg-pink-400 mr-3"></span>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Compétences Techniques */}
          <motion.div variants={itemVariants} className="glass-card rounded-3xl p-8 hover:shadow-lg transition-all group">
            <div className="w-14 h-14 bg-purple-100 rounded-2xl flex items-center justify-center text-purple-500 mb-6 group-hover:scale-110 transition-transform">
              <FileText size={28} strokeWidth={1.5} />
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-6">Informatique</h3>
            <div className="space-y-6">
              <div>
                <p className="text-sm font-semibold text-slate-700 mb-2">Traitement de texte</p>
                <div className="w-full bg-slate-100/50 rounded-full h-2">
                  <div className="bg-gradient-to-r from-purple-400 to-pink-400 h-2 rounded-full" style={{ width: '90%' }}></div>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {['Word', 'Excel', 'Powerpoint'].map((skill, idx) => (
                  <span key={idx} className="px-3 py-1.5 bg-white/50 text-slate-600 rounded-lg text-xs font-semibold uppercase tracking-wider border border-white">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Langues */}
          <motion.div variants={itemVariants} className="glass-card rounded-3xl p-8 hover:shadow-lg transition-all group">
            <div className="w-14 h-14 bg-pink-100 rounded-2xl flex items-center justify-center text-pink-500 mb-6 group-hover:scale-110 transition-transform">
              <Languages size={28} strokeWidth={1.5} />
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-6">Langues</h3>
            <ul className="space-y-5">
              {[
                { name: 'Arabe', level: '100%', extra: 'Maternelle' },
                { name: 'Amazighe', level: '90%', extra: 'Standard' },
                { name: 'Français', level: '85%' },
                { name: 'Anglais', level: '70%' }
              ].map((lang, idx) => (
                <li key={idx}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold text-slate-700">{lang.name}</span>
                    {lang.extra && <span className="text-[10px] text-pink-600 font-bold bg-pink-50 px-2 py-0.5 rounded uppercase tracking-wider">{lang.extra}</span>}
                  </div>
                  <div className="w-full bg-slate-100/50 rounded-full h-1.5">
                    <div className="bg-pink-300 h-1.5 rounded-full" style={{ width: lang.level }}></div>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Centres d'intérêt */}
          <motion.div variants={itemVariants} className="glass-card rounded-3xl p-8 hover:shadow-lg transition-all group">
            <div className="w-14 h-14 bg-purple-100 rounded-2xl flex items-center justify-center text-purple-500 mb-6 group-hover:scale-110 transition-transform">
              <Heart size={28} strokeWidth={1.5} />
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-6">Intérêts</h3>
            <ul className="space-y-4">
              {['Caravane humanitaire', 'Karaté', 'Voyage', 'Lecture'].map((item, idx) => (
                <li key={idx} className="flex items-center text-slate-600 font-medium bg-white/40 p-3 rounded-xl border border-white/60">
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
