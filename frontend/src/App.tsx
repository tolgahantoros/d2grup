import { useState } from 'react';
import { Play, X, ShieldAlert, Sparkles, Trophy, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import Header from './components/Header';
import Hero from './components/Hero';
import TechCards from './components/TechCards';
import ProductsCarousel from './components/ProductsCarousel';
import TechPower from './components/TechPower';
import CosmeticsBrands from './components/CosmeticsBrands';
import Footer from './components/Footer';

export default function App() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  // Smooth scroll helper for relative anchors
  const handleScrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-brand-dark text-white font-sans antialiased overflow-x-hidden">
      {/* Premium custom overlay scrollbar background */}
      <div className="fixed inset-0 pointer-events-none border-[12px] border-brand-dark z-50 hidden xl:block" />

      {/* Main Header Component */}
      <Header />

      {/* Main Page Sections */}
      <main>
        {/* Hero Section */}
        <div id="home">
          <Hero />
        </div>

        {/* Video / Intro Section (Optional interactive preview for "VİDEOYU İZLE") */}
        <section id="tanitim-videosu" className="bg-zinc-50 text-zinc-950 py-24 px-6 md:px-12 relative overflow-hidden border-b border-zinc-200">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(0,0,0,0.015),transparent_40%)]" />
          
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 relative z-10">
            {/* Text panel left */}
            <div className="flex-1 text-left max-w-xl">
              <div className="flex items-center gap-2 mb-4">
                <Trophy className="w-4 h-4 text-zinc-500" />
                <span className="font-mono text-[9px] font-bold tracking-widest text-zinc-500 uppercase">
                  D2 GRUP KLİNİK SİMÜLASYONU
                </span>
              </div>
              <h2 className="font-display font-black text-4xl md:text-5xl tracking-tight text-zinc-950 uppercase leading-none mb-6">
                TEKNOLOJİ VE BİLİMİN <br />KUSURSUZ UYUMU.
              </h2>
              <p className="font-sans font-light text-zinc-600 text-sm leading-relaxed mb-8">
                En yeni nesil medikal estetik sistemlerimizle tanışın. Kliniklerimizin başarısını artıran, hastalarınıza en güvenli ve en konforlu deneyimi sunan teknolojilerimizi video tanıtımımızdan izleyin.
              </p>

              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-4.5 h-4.5 text-zinc-800 shrink-0" />
                  <span className="text-zinc-800 font-medium font-sans text-xs uppercase tracking-wider">FDA ONAYLI PATENTLİ SİSTEMLER</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-4.5 h-4.5 text-zinc-800 shrink-0" />
                  <span className="text-zinc-800 font-medium font-sans text-xs uppercase tracking-wider">MÜKEMMEL SERVİS VE YEDEK PARÇA GARANTİSİ</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-4.5 h-4.5 text-zinc-800 shrink-0" />
                  <span className="text-zinc-800 font-medium font-sans text-xs uppercase tracking-wider">MEDİKAL UYGULAMA VE KLİNİK EĞİTİMLERİ</span>
                </div>
              </div>
            </div>

            {/* Video Interactive Thumbnail on right */}
            <div className="flex-1 w-full max-w-xl">
              <div
                onClick={() => setIsVideoModalOpen(true)}
                className="relative aspect-video rounded-xl overflow-hidden cursor-pointer group shadow-2xl shadow-zinc-300"
              >
                {/* Simulated background frame */}
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/35 transition-colors duration-300 z-10" />
                <img
                  src="/src/assets/images/hero_device_1783697684368.jpg"
                  alt="D2 Grup Video Tanıtımı"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-750 group-hover:scale-103"
                />

                {/* Big pulse play button */}
                <div className="absolute inset-0 flex items-center justify-center z-20">
                  <div className="w-16 h-16 rounded-full bg-white text-black flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 relative">
                    <div className="absolute inset-0 rounded-full bg-white/35 animate-ping" />
                    <Play size={20} className="fill-black ml-1 text-black" />
                  </div>
                </div>

                {/* Info badge */}
                <div className="absolute bottom-4 left-4 z-20 bg-zinc-950 text-white font-mono text-[9px] tracking-widest font-bold uppercase px-3 py-1.5 rounded-none">
                  SÜRE: 2:45 DAKİKA
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3 Categories Section (Yüz, Vücut, Longevity) */}
        <TechCards />

        {/* Product Carousel Slider Section */}
        <ProductsCarousel />

        {/* 6 Grid Technology strengths Section */}
        <TechPower />

        {/* Skincare Cosmetics & World Leading Partners Section */}
        <CosmeticsBrands />
      </main>

      {/* Footer Component */}
      <Footer />

      {/* Interactive Cinematic Video Modal */}
      <AnimatePresence>
        {isVideoModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-6 md:p-12"
          >
            {/* Modal Container */}
            <motion.div
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              className="w-full max-w-4xl aspect-video bg-zinc-950 border border-white/10 rounded-lg overflow-hidden shadow-2xl relative"
            >
              <button
                onClick={() => setIsVideoModalOpen(false)}
                className="absolute top-4 right-4 z-30 text-white bg-black/55 hover:bg-black p-2.5 rounded-full hover:scale-105 transition-all outline-none"
                aria-label="Kapat"
              >
                <X size={20} />
              </button>

              {/* YouTube loop embedding the sleek product presentation */}
              <iframe
                title="D2 Grup Tanıtım Videosu"
                className="w-full h-full border-none"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
