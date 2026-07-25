import { Link } from 'react-router-dom';
import { Play, ArrowRight } from 'lucide-react';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import { STATS } from '../../data/site';
import Icon from '../ui/Icon';
import { asset } from '../../lib/asset';

// Hero ürün görseli — arka planı temizlenmiş, saydam (yalnızca cihazın görünen kısmı).
const HERO_PRODUCT = 'assets/renders/hero-frozen-face-prox.webp';

// Volumetrik his için ince partiküller (sabit konumlar — CLS/rasgelelik yok)
const PARTICLES = [
  { x: '12%', y: '22%', s: 4, d: 0 },
  { x: '82%', y: '30%', s: 3, d: 1.6 },
  { x: '68%', y: '68%', s: 5, d: 0.8 },
  { x: '24%', y: '74%', s: 3, d: 2.4 },
  { x: '90%', y: '58%', s: 4, d: 1.2 },
  { x: '40%', y: '16%', s: 2, d: 3.1 },
];

interface HeroProps {
  onPlayVideo?: () => void;
}

export default function Hero({ onPlayVideo }: HeroProps) {
  // Mouse parallax — çok hafif, premium ve sakin.
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 55, damping: 18, mass: 0.6 });
  const sy = useSpring(my, { stiffness: 55, damping: 18, mass: 0.6 });
  const prodX = useTransform(sx, (v) => v * 20);
  const prodY = useTransform(sy, (v) => v * 16);
  const glowX = useTransform(sx, (v) => v * -26);
  const glowY = useTransform(sy, (v) => v * -20);

  const onMove = (e: React.MouseEvent<HTMLElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  };
  const onLeave = () => {
    mx.set(0);
    my.set(0);
  };

  return (
    <section
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className="relative min-h-screen bg-brand-dark pt-32 pb-16 flex flex-col justify-between overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_35%,rgba(255,255,255,0.05),transparent_45%)]" />
      <div className="absolute top-1/4 right-[18%] w-[520px] h-[520px] bg-cyan-400/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full flex-grow flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 relative z-10">
        {/* Metin (sol) */}
        <div className="flex-1 text-left xl:pl-8 max-w-2xl order-2 lg:order-1">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-display font-bold text-xs tracking-[0.3em] text-white/60 block mb-4 uppercase"
          >
            TEKNOLOJİ. GÜVEN. SONUÇ.
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display font-black text-5xl md:text-6xl lg:text-7xl xl:text-8xl tracking-tight text-white uppercase leading-[0.95] mb-6"
          >
            TEKNOLOJİDE <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/95 to-white/60">
              LİDER.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base text-white/70 max-w-md font-sans font-light leading-relaxed mb-10"
          >
            D2 Grup, dünyanın en ileri teknolojiye sahip estetik ve güzellik cihazlarını Türkiye ile buluşturur.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap items-center gap-6"
          >
            <Link
              to="/urunler"
              className="flex items-center gap-3 bg-brand-teal text-white font-semibold text-xs tracking-widest uppercase py-4 px-8 hover:bg-brand-teal-dark transition-all duration-300"
            >
              ÜRÜNLERİ KEŞFET <ArrowRight size={14} />
            </Link>

            <button
              onClick={onPlayVideo}
              className="flex items-center gap-3 group text-white/90 hover:text-white transition-colors duration-300"
            >
              <div className="w-11 h-11 rounded-full border border-white/30 flex items-center justify-center group-hover:border-white group-hover:bg-white/5 transition-all">
                <Play size={12} className="fill-white ml-0.5" />
              </div>
              <span className="font-semibold text-xs tracking-widest uppercase">VİDEOYU İZLE</span>
            </button>
          </motion.div>
        </div>

        {/* Premium ürün sunumu (sağ) */}
        <div className="flex-1 relative w-full flex flex-col items-center justify-center order-1 lg:order-2 min-h-[420px] sm:min-h-[500px] lg:min-h-[560px]">
          {/* Arka plan efektleri — parallax ile hafif ters yönde hareket eder */}
          <motion.div
            aria-hidden
            style={{ x: glowX, y: glowY }}
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
          >
            {/* Dönen ince halka */}
            <div className="absolute w-[300px] h-[300px] sm:w-[420px] sm:h-[420px] rounded-full border border-cyan-300/15 animate-[spin_120s_linear_infinite]">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-cyan-300 shadow-[0_0_12px_rgba(56,189,248,0.9)]" />
              <div className="absolute inset-3 rounded-full border border-dashed border-white/5" />
            </div>
            {/* Nefes alan cyan glow */}
            <motion.div
              animate={{ opacity: [0.45, 0.8, 0.45], scale: [0.96, 1.06, 0.96] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute w-[260px] h-[260px] sm:w-[380px] sm:h-[380px] rounded-full bg-[radial-gradient(circle,rgba(56,189,248,0.32),rgba(45,212,191,0.10)_45%,transparent_70%)] blur-[40px]"
            />
          </motion.div>

          {/* İnce partiküller */}
          <div aria-hidden className="absolute inset-0 pointer-events-none overflow-hidden">
            {PARTICLES.map((p, i) => (
              <motion.span
                key={i}
                className="absolute rounded-full bg-cyan-200/60"
                style={{ left: p.x, top: p.y, width: p.s, height: p.s }}
                animate={{ y: [0, -26, 0], opacity: [0, 0.7, 0] }}
                transition={{ duration: 7 + p.d, repeat: Infinity, ease: 'easeInOut', delay: p.d }}
              />
            ))}
          </div>

          {/* Ürün — fade-in + yumuşak floating; içeride parallax translate */}
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.94 }}
            animate={{ opacity: 1, y: [24, 0, -12, 0], scale: 1 }}
            transition={{
              opacity: { duration: 1, ease: 'easeOut' },
              scale: { duration: 1, ease: 'easeOut' },
              y: { duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 1 },
            }}
            className="relative z-10 flex flex-col items-center"
          >
            <motion.img
              style={{ x: prodX, y: prodY }}
              src={asset(HERO_PRODUCT)}
              alt="Frozen Face Pro-X — cryo-lifting ve oksijen başlığı"
              width={1349}
              height={1502}
              loading="eager"
              fetchPriority="high"
              decoding="async"
              className="w-[240px] sm:w-[330px] lg:w-[400px] xl:w-[460px] h-auto drop-shadow-[0_30px_45px_rgba(0,0,0,0.55)]"
            />
            {/* Cam hissi veren yumuşak yansıma */}
            <div className="relative w-[240px] sm:w-[330px] lg:w-[400px] xl:w-[460px] -mt-2 h-16 sm:h-20 overflow-hidden pointer-events-none">
              <img
                src={asset(HERO_PRODUCT)}
                alt=""
                aria-hidden
                className="w-full -scale-y-100 opacity-20 blur-[2px] [mask-image:linear-gradient(to_bottom,rgba(0,0,0,0.5),transparent)]"
              />
            </div>
            {/* Hafif sis */}
            <div aria-hidden className="absolute -bottom-2 w-[120%] h-24 bg-[radial-gradient(ellipse_at_center,rgba(56,189,248,0.10),transparent_70%)] blur-2xl" />
          </motion.div>

          {/* Seri etiketi — CRYO-LIFTING VE OKSİJENİN / SENKRONİZE GÜCÜ */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="relative z-10 mt-4 text-center"
          >
            <span className="font-mono text-[10px] tracking-[0.35em] text-cyan-300/70 uppercase block mb-2">
              Frozen Face Pro-X
            </span>
            <h2 className="font-display font-black text-lg sm:text-xl tracking-tight text-white uppercase leading-tight">
              CRYO-LIFTING VE OKSİJENİN
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-200 via-white to-cyan-200/70">
                SENKRONİZE GÜCÜ
              </span>
            </h2>
          </motion.div>
        </div>
      </div>

      {/* İstatistik bandı */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full mt-10 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 bg-zinc-950/40 backdrop-blur-md border border-white/10 p-8 md:px-10 rounded-sm relative overflow-hidden"
        >
          <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          {STATS.map((stat) => (
            <div key={stat.label} className="flex flex-col gap-2.5 items-start relative">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                  <Icon name={stat.iconName} className="w-5 h-5 text-white/90" />
                </div>
                <span className="font-display font-extrabold text-2xl md:text-3xl tracking-tight text-white">
                  {stat.value}
                </span>
              </div>
              <span className="font-sans font-bold text-[10px] tracking-wider text-white/50 uppercase leading-snug">
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
