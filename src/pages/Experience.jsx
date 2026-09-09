import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, BookOpen, UserCheck, Sparkles } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      category: 'Soutien scolaire',
      icon: <BookOpen className="w-5 h-5" strokeWidth={1.5} />,
      color: 'pink',
      items: [
        {
          date: "Oct 2025 – Fév 2026",
          title: "Enseignante SVT",
          location: "Ecole Salsabil Hay al mohammadi (CNED)",
          description: "Préparation et animation des cours selon le programme CNED, accompagnement pédagogique, conception d'exercices et évaluation."
        },
        {
          date: "Sep 2024 – Fév 2026",
          title: "Encadrement d'élèves (lycée)",
          location: "Centre petits à petits Agadir Dakhla",
          description: "Encadrement d'élèves selon le programme du système éducatif français."
        },
        {
          date: "Oct 2023 – Juin 2025",
          title: "Soutien scolaire en SVT",
          location: "Centre Cami Agadir Tilila",
          description: "Soutien pour collège/lycée. Préparation des cours, fiches de résumés et séries d'exercices."
        }
      ]
    },
    {
      category: 'Cours Particuliers',
      icon: <UserCheck className="w-5 h-5" strokeWidth={1.5} />,
      color: 'purple',
      items: [
        {
          date: "Avr 2023 – Juin 2026",
          title: "Cours individuels (Math/SVT)",
          location: "Agadir (à domicile)",
          description: "Accompagnement personnalisé d'élèves du collège et du lycée dans les matières scientifiques."
        },
        {
          date: "Jan 2022 – Juin 2022",
          title: "Aide aux devoirs",
          location: "Ouled taima",
          description: "Aide en mathématiques et SVT pour deux élèves de 1er bac."
        }
      ]
    },
    {
      category: 'Autres Expériences',
      icon: <Briefcase className="w-5 h-5" strokeWidth={1.5} />,
      color: 'pink',
      items: [
        {
          date: "Août 2023 – Oct 2023",
          title: "Vente et imprimerie",
          location: "Librairie Al Maarifa, Agadir",
          description: "Vente de fournitures scolaires, imprimerie, saisie des textes sur Word."
        },
        {
          date: "Depuis Juil 2022",
          title: "Préparation & vente de pâtisseries",
          location: "Yasmine Sweets, Ouled taima",
          description: "Crêpes, cookies, hala khachkhach, brownies… Gestion de commandes clients."
        }
      ]
    }
  ];

  return (
    <div className="pt-32 pb-20 min-h-screen relative overflow-hidden">
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-purple-300/20 rounded-full blur-3xl -z-10 mix-blend-multiply"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 text-pink-500 font-medium mb-4">
            <Sparkles className="w-4 h-4" />
            <span className="uppercase tracking-widest text-xs">Mon Parcours</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">Expériences Professionnelles</h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-pink-300 to-purple-300 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {experiences.map((category, catIndex) => (
            <motion.div
              key={catIndex}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: catIndex * 0.15 }}
              className="glass-card rounded-3xl p-8 hover:shadow-xl transition-all"
            >
              {/* Category header */}
              <div className="flex items-center gap-4 mb-8 pb-5 border-b border-white/60">
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${
                  category.color === 'pink'
                    ? 'bg-pink-100 text-pink-500'
                    : 'bg-purple-100 text-purple-500'
                } transition-transform group-hover:scale-110`}>
                  {category.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-800">{category.category}</h3>
              </div>

              <div className="space-y-8">
                {category.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="relative pl-5 border-l-2 border-pink-100 group">
                    <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-gradient-to-br from-pink-400 to-purple-400 border-2 border-white"></div>

                    <span className="text-[10px] font-bold text-pink-500 block mb-1 tracking-widest uppercase">
                      {item.date}
                    </span>
                    <h4 className="font-bold text-slate-800 mb-0.5 group-hover:text-pink-600 transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-xs font-semibold text-purple-400 mb-2 italic">
                      {item.location}
                    </p>
                    <p className="text-sm text-slate-600 leading-relaxed font-light">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
