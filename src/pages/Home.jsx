import React from 'react';
import { motion } from 'framer-motion';
import { Download, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="relative pt-32 pb-20 md:pt-40 md:pb-32 min-h-screen flex items-center overflow-hidden">
      
      {/* Decorative background elements */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-pink-200/40 rounded-full blur-3xl -z-10 animate-pulse"></div>
      <div className="absolute bottom-20 left-10 w-72 h-72 bg-purple-200/40 rounded-full blur-3xl -z-10 animate-pulse" style={{ animationDelay: '2s' }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative w-full">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex-1 text-center md:text-left"
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-white/60 backdrop-blur-sm text-pink-600 px-4 py-2 rounded-full text-sm font-medium mb-6 border border-pink-100 shadow-sm"
            >
              <Sparkles className="w-4 h-4" />
              <span>Étudiante en Médecine & Enseignante</span>
            </motion.div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 text-slate-800 tracking-tight">
              Bonjour, je suis <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">
                Kawthar BOUKSIM.
              </span>
            </h1>
            
            <p className="text-slate-600 mb-10 text-lg md:text-xl max-w-xl mx-auto md:mx-0 leading-relaxed font-light">
              Etudiante en 5ème année médecine à la faculté Ibn Zohr d'Agadir et enseignante passionnée.
              Sérieuse, dotée d'un bon sens relationnel et soucieuse d'effectuer un travail parfait dans les moindres détails.
            </p>
            
            <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center md:justify-start">
              <a 
                href="/cv.pdf"
                download="CV_Kawthar_BOUKSIM.pdf"
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-bold tracking-wide rounded-full text-white bg-gradient-to-r from-pink-500 to-pink-400 hover:from-pink-600 hover:to-pink-500 transition-all shadow-lg shadow-pink-500/25 hover:shadow-pink-500/40 hover:-translate-y-1"
              >
                <Download className="w-5 h-5 group-hover:animate-bounce" />
                Télécharger le CV
              </a>
              <Link 
                to="/about"
                className="inline-flex items-center justify-center px-8 py-4 text-sm font-bold tracking-wide rounded-full text-pink-600 glass hover:bg-white/80 transition-all hover:-translate-y-1"
              >
                En savoir plus
              </Link>
            </div>
          </motion.div>

          {/* Minimalist Image / Avatar Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 w-full max-w-[12rem] md:max-w-md mx-auto relative"
          >
            <div className="relative aspect-square md:aspect-[4/5] glass-card rounded-full md:rounded-[2.5rem] overflow-hidden flex items-center justify-center group shadow-xl md:shadow-none">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-100/20 to-purple-100/20 mix-blend-overlay z-10"></div>
              <img
                src="/ChatGPT Image 9 sept. 2026, 04_44_41.png"
                alt="Kawthar BOUKSIM"
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            
            {/* Soft decorative ring */}
            <div className="absolute -inset-3 md:-inset-4 border border-pink-200/50 rounded-full md:rounded-[3rem] -z-10"></div>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default Home;
