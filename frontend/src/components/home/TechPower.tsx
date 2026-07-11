import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Info, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { TECHNOLOGIES } from '../../data/technologies';
import Icon from '../ui/Icon';

export default function TechPower() {
  // Ana sayfada ilk 6 teknoloji
  const techs = TECHNOLOGIES.slice(0, 6);
  const [selected, setSelected] = useState(techs[0]);

  return (
    <section className="bg-white border-t border-b border-zinc-100 py-24 px-6 md:px-12 relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 items-start justify-between">
          {/* Sol panel */}
          <div className="w-full lg:w-4/12 shrink-0">
            <span className="font-display font-black text-4xl tracking-tight text-zinc-950 uppercase leading-none block mb-6">
              TEKNOLOJİ
              <br />
              GÜCÜMÜZ
            </span>
            <p className="text-zinc-500 font-sans text-sm font-light leading-relaxed mb-8 max-w-sm">
              Tüm cihazlarımız, en son bilimsel bulgular ve sıkı mühendislik standartları çerçevesinde geliştirilen
              patentli teknolojileri barındırır.
            </p>

            <div className="bg-zinc-50 p-6 border border-zinc-100 rounded-sm mb-6">
              <div className="flex items-center gap-2.5 mb-3">
                <Info size={16} className="text-zinc-500" />
                <span className="font-display font-extrabold text-xs tracking-wider text-zinc-900 uppercase">
                  TEKNOLOJİ DETAYI
                </span>
              </div>
              <AnimatePresence mode="wait">
                <motion.div
                  key={selected.id}
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                  transition={{ duration: 0.2 }}
                >
                  <h4 className="font-display font-bold text-sm tracking-wide text-zinc-950 uppercase mb-2">
                    {selected.title}
                  </h4>
                  <p className="font-sans text-zinc-600 text-xs leading-relaxed font-light">{selected.description}</p>
                </motion.div>
              </AnimatePresence>
            </div>

            <Link
              to="/teknolojiler"
              className="inline-flex items-center gap-2 font-display font-bold text-[11px] tracking-widest text-zinc-950 hover:text-zinc-600 uppercase transition-colors"
            >
              TÜM TEKNOLOJİLER <ArrowRight size={13} />
            </Link>
          </div>

          {/* Grid */}
          <div className="w-full lg:w-8/12 grid grid-cols-2 md:grid-cols-3 border border-zinc-100 rounded-sm overflow-hidden bg-zinc-50/30">
            {techs.map((tech) => {
              const isSelected = selected.id === tech.id;
              return (
                <button
                  key={tech.id}
                  onClick={() => setSelected(tech)}
                  className={`flex flex-col items-center justify-center p-10 text-center gap-5 transition-all duration-300 border border-zinc-100 group relative outline-none ${
                    isSelected ? 'bg-white shadow-md z-10' : 'hover:bg-white/50'
                  }`}
                >
                  {isSelected && <div className="absolute inset-x-0 top-0 h-[3px] bg-zinc-950" />}
                  <div
                    className={`p-4 rounded-full transition-all duration-300 ${
                      isSelected ? 'bg-zinc-100' : 'bg-transparent border border-zinc-200'
                    }`}
                  >
                    <Icon
                      name={tech.iconName}
                      className={`w-8 h-8 transition-colors duration-300 ${
                        isSelected ? 'text-zinc-950' : 'text-zinc-400 group-hover:text-zinc-700'
                      }`}
                    />
                  </div>
                  <span className="font-display font-bold text-[11px] tracking-wider text-zinc-950 uppercase leading-snug">
                    {tech.shortTitle}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
