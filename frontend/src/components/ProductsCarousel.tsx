import { useState } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight, ShieldCheck, Zap, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { ProductDevice } from '../types';

const DEVICES: ProductDevice[] = [
  {
    id: 'd2-prime',
    name: 'D2 PRIME SYSTEM',
    brand: 'D2 GRUP',
    image: '/src/assets/images/hero_device_1783697684368.jpg',
    description: 'En gelişmiş lazer epilasyon ve cilt yenileme ünitesi, çoklu dalga boyu teknolojisi ile maksimum konfor.',
    features: ['Hızlı Soğutma Başlığı', 'Çoklu Dalga Boyu', 'Yapay Zeka Destekli Dozaj'],
  },
  {
    id: 'excelsior',
    name: 'EXCELSIOR MAX',
    brand: 'LUMENIS',
    image: '/src/assets/images/device_white_tower_1783697766724.jpg',
    description: 'Yüksek yoğunluklu odaklı mikro-termal stimülasyon sistemi ile cilt germe ve kolajen sentezi tetikleme.',
    features: ['Mikro-Odaklı Enerji', 'Cilt Kalınlığı Analizi', 'Sıfır İyileşme Süresi'],
  },
  {
    id: 'neoglow',
    name: 'NEO-GLOW PRO',
    brand: 'SCITON',
    image: '/src/assets/images/device_blue_laser_1783697777904.jpg',
    description: 'Yeni nesil vasküler lezyon ve pigmentasyon tedavi ünitesi, patentli mavi ışık termal stabilizasyon teknolojisi.',
    features: ['Mavi Işık Kryo', 'Akıllı Cilt Tarayıcı', 'Kişiselleştirilmiş Protokoller'],
  },
  {
    id: 'slimcontour',
    name: 'SLIMCONTOUR RF',
    brand: 'FOTONA',
    image: '/src/assets/images/device_slender_gold_1783697791170.jpg',
    description: 'Radyofrekans dalgaları ile ameliyatsız vücut şekillendirme, bölgesel incelme ve selülit eliminasyonu.',
    features: ['Kontrollü Termal Derinlik', 'Vakum Masaj Entegrasyonu', 'Otomatik Isı Sensörü'],
  },
  {
    id: 'dermalscan',
    name: 'DermalScan 3D',
    brand: 'CANDELA',
    image: '/src/assets/images/device_grey_diagnostic_1783697803675.jpg',
    description: 'Üç boyutlu cilt analizi ve yaşlanma simülasyon cihazı, klinik teşhis doğruluğunu iki katına çıkarır.',
    features: ['3D Yüz Haritalama', 'Nem ve Sebum Ölçümü', 'Detaylı İlerleme Raporları'],
  },
];

export default function ProductsCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % DEVICES.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + DEVICES.length) % DEVICES.length);
  };

  const activeDevice = DEVICES[activeIndex];

  return (
    <section id="urunler" className="bg-zinc-50 py-24 px-6 md:px-12 relative overflow-hidden border-t border-zinc-100">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(0,0,0,0.02),transparent_40%)]" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-start lg:items-center">
          
          {/* Left Text Panel */}
          <div className="w-full lg:w-5/12 flex flex-col justify-between">
            <div>
              <span className="font-display font-bold text-xs tracking-[0.3em] text-zinc-500 block mb-3 uppercase">
                PREMIUM TEKNOLOJİLER
              </span>
              <h2 className="font-display font-black text-4xl md:text-5xl tracking-tight text-zinc-950 uppercase leading-[1.05] mb-6">
                EN İLERİ TEKNOLOJİLER,<br />EN ETKİLİ SONUÇLAR.
              </h2>
              <p className="font-sans font-light text-zinc-600 text-sm leading-relaxed mb-8 max-w-sm">
                Alanında lider markaların gelişmiş cihazları ile kliniklerinize ve hastalarınıza değer katın. Benzersiz klinik başarılar için tasarlandı.
              </p>
            </div>

            {/* Active Device Details Card */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeDevice.id}
                initial={{ opacity: 0, x: -15 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 15 }}
                transition={{ duration: 0.4 }}
                className="bg-white border border-zinc-100 p-8 rounded-sm shadow-sm max-w-sm mb-10"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-[10px] font-bold tracking-widest text-zinc-400 uppercase">
                    {activeDevice.brand}
                  </span>
                  <span className="bg-zinc-100 text-zinc-800 text-[9px] font-bold tracking-widest px-2.5 py-1 rounded-none uppercase">
                    AKTİF
                  </span>
                </div>
                <h3 className="font-display font-extrabold text-xl tracking-tight text-zinc-950 uppercase mb-3">
                  {activeDevice.name}
                </h3>
                <p className="text-zinc-600 font-sans text-xs font-light leading-relaxed mb-6">
                  {activeDevice.description}
                </p>

                <div className="flex flex-col gap-2.5">
                  {activeDevice.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-2.5 text-zinc-800">
                      {i === 0 && <ShieldCheck className="w-4 h-4 text-zinc-600 shrink-0" />}
                      {i === 1 && <Zap className="w-4 h-4 text-zinc-600 shrink-0" />}
                      {i === 2 && <Sparkles className="w-4 h-4 text-zinc-600 shrink-0" />}
                      <span className="text-xs font-medium font-sans">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="flex items-center gap-6">
              <a
                href="#tum-urunler"
                className="flex items-center gap-3 bg-zinc-950 text-white font-semibold text-xs tracking-widest uppercase py-4 px-8 hover:bg-zinc-800 transition-all duration-300"
              >
                TÜM CİHAZLAR <ArrowRight size={14} />
              </a>

              {/* Controls */}
              <div className="flex items-center gap-2">
                <button
                  onClick={prevSlide}
                  className="w-11 h-11 rounded-full border border-zinc-200 flex items-center justify-center text-zinc-800 hover:bg-zinc-100 hover:border-zinc-300 transition-all duration-200"
                  aria-label="Previous product"
                >
                  <ChevronLeft size={16} />
                </button>
                <button
                  onClick={nextSlide}
                  className="w-11 h-11 rounded-full border border-zinc-200 flex items-center justify-center text-zinc-800 hover:bg-zinc-100 hover:border-zinc-300 transition-all duration-200"
                  aria-label="Next product"
                >
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>
          </div>

          {/* Right Interactive Carousel Slider */}
          <div className="w-full lg:w-7/12 flex flex-col items-center justify-center relative min-h-[480px]">
            {/* White/grey floor shadow/stage design representing the "light curved stage" */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-[120%] h-48 bg-gradient-to-t from-zinc-200/50 to-transparent blur-3xl rounded-full pointer-events-none" />
            <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-zinc-200 to-transparent pointer-events-none" />

            {/* Slider Container */}
            <div className="w-full flex items-center justify-center gap-6 relative px-12">
              <AnimatePresence mode="popLayout">
                {DEVICES.map((device, index) => {
                  const isCenter = index === activeIndex;
                  const isLeft = index === (activeIndex - 1 + DEVICES.length) % DEVICES.length;
                  const isRight = index === (activeIndex + 1) % DEVICES.length;
                  
                  // Hide items that are not active, left, or right
                  if (!isCenter && !isLeft && !isRight) return null;

                  return (
                    <motion.div
                      key={device.id}
                      onClick={() => setActiveIndex(index)}
                      initial={{
                        scale: isCenter ? 0.9 : 0.75,
                        opacity: 0,
                        x: isLeft ? -120 : isRight ? 120 : 0,
                        zIndex: isCenter ? 20 : 10,
                      }}
                      animate={{
                        scale: isCenter ? 1.05 : 0.85,
                        opacity: isCenter ? 1 : 0.45,
                        x: isLeft ? -100 : isRight ? 100 : 0,
                        zIndex: isCenter ? 20 : 10,
                      }}
                      exit={{
                        scale: 0.7,
                        opacity: 0,
                        x: isLeft ? -150 : isRight ? 150 : 0,
                      }}
                      transition={{ type: 'spring', stiffness: 260, damping: 25 }}
                      className={`cursor-pointer w-[240px] md:w-[280px] shrink-0 flex flex-col items-center relative transition-shadow duration-300 ${
                        isCenter ? 'pointer-events-auto' : 'pointer-events-auto hover:opacity-75'
                      }`}
                    >
                      {/* Product Base Glow Ring if active */}
                      {isCenter && (
                        <div className="absolute bottom-12 w-48 h-4 bg-radial from-black/10 to-transparent blur-md pointer-events-none" />
                      )}

                      {/* Device Image Wrapper */}
                      <div
                        className={`w-full aspect-[3/4] bg-white rounded-xl overflow-hidden p-6 border transition-all duration-500 flex items-center justify-center ${
                          isCenter
                            ? 'border-zinc-200/80 shadow-xl shadow-zinc-200/50 scale-100'
                            : 'border-zinc-100 shadow-sm scale-95'
                        }`}
                      >
                        <img
                          src={device.image}
                          alt={device.name}
                          referrerPolicy="no-referrer"
                          className="max-h-full max-w-full object-contain mix-blend-multiply"
                        />
                      </div>

                      {/* Floating Name Overlay for center card */}
                      {isCenter && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="mt-6 text-center"
                        >
                          <span className="font-mono text-[9px] font-bold tracking-[0.25em] text-zinc-400 block mb-1">
                            {device.brand}
                          </span>
                          <span className="font-display font-extrabold text-sm tracking-widest text-zinc-950 uppercase">
                            {device.name}
                          </span>
                        </motion.div>
                      )}
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
