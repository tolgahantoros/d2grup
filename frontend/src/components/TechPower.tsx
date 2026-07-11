import { useState } from 'react';
import { Target, Waves, Snowflake, Activity, Sun, Zap, Info, ShieldCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { TechnologyStrength } from '../types';

const TECHS: TechnologyStrength[] = [
  {
    id: 'lazer',
    title: 'LAZER TEKNOLOJİLERİ',
    iconName: 'Zap',
    description: 'Q-Switch, Alexandrite, Diode ve Nd:YAG lazer teknolojileri ile maksimum seçici fototermoliz gücü, cilt lezyonları, epilasyon ve dövme silme tedavileri.',
  },
  {
    id: 'rf',
    title: 'RF TEKNOLOJİLERİ',
    iconName: 'Waves',
    description: 'Monopolar, bipolar ve fraksiyonel mikroiğneli radyofrekans enerjisi ile dermis tabakasında derin kontrollü koagülasyon ve kollajen sentezi.',
  },
  {
    id: 'hifu',
    title: 'HIFU TEKNOLOJİLERİ',
    iconName: 'Target',
    description: 'Yüksek yoğunluklu odaklanmış ultrason dalgaları (SMAS) ile cerrahi olmayan yüz germe, kaş kaldırma, boyun ve dekolte toparlama.',
  },
  {
    id: 'ipl',
    title: 'IPL TEKNOLOJİLERİ',
    iconName: 'Sun',
    description: 'Yoğun atımlı ışık tedavileri ile vasküler lezyonlar, akne kontrolü, leke giderme ve foto-gençleştirme için geniş spektrumlu filtre filtreleme sistemleri.',
  },
  {
    id: 'ultrason',
    title: 'ULTRASON TEKNOLOJİLERİ',
    iconName: 'Activity',
    description: 'Lokalize adipoz dokuyu hedefleyen mekanik kavitasyonel ultrasonik dalgalar ile ameliyatsız yağ parçalama ve derin lenfatik drenaj.',
  },
  {
    id: 'sogutma',
    title: 'SOĞUTMA TEKNOLOJİLERİ',
    iconName: 'Snowflake',
    description: 'Kontak ve hava soğutma üniteleri ile epidermisi koruyan, seans ağrısını minimize eden patentli sub-zero kriyojenik konfor mekanizmaları.',
  },
];

export default function TechPower() {
  const [selectedTech, setSelectedTech] = useState<TechnologyStrength>(TECHS[0]);

  const renderIcon = (name: string, active: boolean) => {
    const cls = `w-8 h-8 transition-colors duration-300 ${active ? 'text-zinc-950' : 'text-zinc-400 group-hover:text-zinc-700'}`;
    switch (name) {
      case 'Zap': return <Zap className={cls} />;
      case 'Waves': return <Waves className={cls} />;
      case 'Target': return <Target className={cls} />;
      case 'Sun': return <Sun className={cls} />;
      case 'Activity': return <Activity className={cls} />;
      case 'Snowflake': return <Snowflake className={cls} />;
      default: return <Zap className={cls} />;
    }
  };

  return (
    <section id="teknolojiler" className="bg-white border-t border-b border-zinc-100 py-24 px-6 md:px-12 relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 items-start justify-between">
          
          {/* Header left panel */}
          <div className="w-full lg:w-4/12 shrink-0">
            <span className="font-display font-black text-4xl tracking-tight text-zinc-950 uppercase leading-none block mb-6">
              TEKNOLOJİ<br />GÜCÜMÜZ
            </span>
            <p className="text-zinc-500 font-sans text-sm font-light leading-relaxed mb-8 max-w-sm">
              Tüm cihazlarımız, en son bilimsel bulgular ve sıkı mühendislik standartları çerçevesinde geliştirilen patentli teknolojileri barındırır.
            </p>

            {/* Info Drawer displaying details of active select */}
            <div className="bg-zinc-50 p-6 border border-zinc-100 rounded-sm">
              <div className="flex items-center gap-2.5 mb-3">
                <Info size={16} className="text-zinc-500" />
                <span className="font-display font-extrabold text-xs tracking-wider text-zinc-900 uppercase">
                  TEKNOLOJİ DETAYI
                </span>
              </div>
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedTech.id}
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                  transition={{ duration: 0.2 }}
                >
                  <h4 className="font-display font-bold text-sm tracking-wide text-zinc-950 uppercase mb-2">
                    {selectedTech.title}
                  </h4>
                  <p className="font-sans text-zinc-600 text-xs leading-relaxed font-light">
                    {selectedTech.description}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Grid right panel (6 columns grid with dividers) */}
          <div className="w-full lg:w-8/12 grid grid-cols-2 md:grid-cols-3 border border-zinc-100 rounded-sm overflow-hidden bg-zinc-50/30">
            {TECHS.map((tech) => {
              const isSelected = selectedTech.id === tech.id;
              return (
                <button
                  key={tech.id}
                  onClick={() => setSelectedTech(tech)}
                  className={`flex flex-col items-center justify-center p-10 text-center gap-5 transition-all duration-300 border border-zinc-100 group relative outline-none ${
                    isSelected ? 'bg-white shadow-md z-10' : 'hover:bg-white/50'
                  }`}
                >
                  {/* Subtle active status border indicator */}
                  {isSelected && (
                    <div className="absolute inset-x-0 top-0 h-[3px] bg-zinc-950" />
                  )}

                  <div className={`p-4 rounded-full transition-all duration-300 ${
                    isSelected ? 'bg-zinc-100' : 'bg-transparent border border-zinc-200'
                  }`}>
                    {renderIcon(tech.iconName, isSelected)}
                  </div>

                  <span className="font-display font-bold text-[11px] tracking-wider text-zinc-950 uppercase leading-snug">
                    {tech.title.split(' ')[0]} <br />
                    <span className="text-zinc-400 font-semibold text-[10px] tracking-widest">{tech.title.split(' ')[1] || ''}</span>
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
