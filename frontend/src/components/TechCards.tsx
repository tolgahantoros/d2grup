import { ArrowRight, ChevronRight } from 'lucide-react';
import { motion } from 'motion/react';

const FACE_IMAGE = '/src/assets/images/face_tech_1783697696804.jpg';
const BODY_IMAGE = '/src/assets/images/body_tech_1783697746167.jpg';
const LONGEVITY_IMAGE = '/src/assets/images/longevity_tech_1783697716744.jpg';

export default function TechCards() {
  const categories = [
    {
      id: 'yuz',
      title: 'YÜZ',
      subtitle: 'TEKNOLOJİLERİ',
      image: FACE_IMAGE,
      href: '#yuz-teknolojileri',
    },
    {
      id: 'vucut',
      title: 'VÜCUT',
      subtitle: 'TEKNOLOJİLERİ',
      image: BODY_IMAGE,
      href: '#vucut-teknolojileri',
    },
    {
      id: 'longevity',
      title: 'LONGEVITY',
      subtitle: 'TEKNOLOJİLERİ',
      image: LONGEVITY_IMAGE,
      href: '#longevity-teknolojileri',
    },
  ];

  return (
    <section id="kategoriler" className="bg-white text-zinc-900 py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Brand Philosophy / Introduction Card */}
          <div className="bg-zinc-50 p-10 flex flex-col justify-between border border-zinc-100 min-h-[420px] lg:min-h-auto">
            <div>
              <span className="font-display font-black text-3xl md:text-4xl tracking-tight text-zinc-950 uppercase leading-none block mb-6">
                ÜÇ TEKNOLOJİ,<br />ÜÇ DOKUNUŞ.
              </span>
              <p className="text-zinc-600 font-sans text-sm font-light leading-relaxed mb-8 max-w-xs">
                Yüz, vücut ve longevity alanlarında en ileri teknolojilerle medikal estetik standartlarında fark yaratıyoruz.
              </p>
            </div>

            <a
              href="#teknolojiler"
              className="inline-flex items-center gap-3 font-display font-extrabold text-[11px] tracking-widest text-zinc-950 hover:text-zinc-700 transition-colors uppercase group"
            >
              DETAYLARI KEŞFET
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
              >
                <ArrowRight size={14} />
              </motion.span>
            </a>
          </div>

          {/* Technology Portrait Cards */}
          {categories.map((category) => (
            <a
              key={category.id}
              href={category.href}
              className="relative group block overflow-hidden aspect-[3/4] shadow-md hover:shadow-xl transition-all duration-500 rounded-sm"
            >
              {/* Background Image */}
              <div className="absolute inset-0 bg-black/40 z-10 group-hover:bg-black/30 transition-all duration-500" />
              <img
                src={category.image}
                alt={`${category.title} ${category.subtitle}`}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Bottom Card Content */}
              <div className="absolute bottom-0 left-0 right-0 p-8 z-20 flex flex-col justify-end">
                <div className="text-left mb-6">
                  <span className="font-display font-black text-2xl tracking-tight text-white block uppercase leading-tight">
                    {category.title}
                  </span>
                  <span className="font-display font-semibold text-sm tracking-widest text-white/80 block uppercase">
                    {category.subtitle}
                  </span>
                </div>

                {/* Arrow CTA circle */}
                <div className="w-10 h-10 rounded-full border border-white/45 flex items-center justify-center text-white group-hover:bg-white group-hover:text-black group-hover:border-white transition-all duration-300">
                  <ChevronRight size={16} />
                </div>
              </div>
            </a>
          ))}

        </div>
      </div>
    </section>
  );
}
