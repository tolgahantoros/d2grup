import React from 'react';
import { Phone, Mail, MapPin, Instagram, Linkedin, Twitter, ArrowRight, ShieldCheck, Headphones, HeartHandshake } from 'lucide-react';
import { motion } from 'motion/react';

export default function Footer() {
  const bottomStats = [
    {
      value: '2500+',
      label: 'Mutlu Partner',
      description: 'Türkiye genelinde medikal estetik klinikleri, hastaneler ve güzellik merkezleri.',
      icon: <HeartHandshake className="w-5 h-5 text-white/50" />,
    },
    {
      value: '7/24',
      label: 'Teknik Destek',
      description: 'Uzman mühendis kadromuzla kesintisiz servis, bakım ve parça güvencesi.',
      icon: <Headphones className="w-5 h-5 text-white/50" />,
    },
    {
      value: '%100',
      label: 'Müşteri Memnuniyeti',
      description: 'Eğitim, uygulama desteği ve pazarlama çözümleri ile sürekli yanınızdayız.',
      icon: <ShieldCheck className="w-5 h-5 text-white/50" />,
    },
  ];

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Mesajınız başarıyla gönderildi. En kısa sürede sizinle iletişime geçeceğiz.');
  };

  return (
    <footer id="iletisim" className="bg-brand-dark text-white relative">
      {/* Background radial overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_90%,rgba(255,255,255,0.03),transparent_50%)] pointer-events-none" />

      {/* Top Banner: Three Core Metrics (Dark background strip) */}
      <div className="border-b border-white/10 py-16 px-6 md:px-12 relative z-10 bg-black/40">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          {bottomStats.map((stat, i) => (
            <div
              key={stat.label}
              className={`flex flex-col gap-3 items-start text-left ${
                i > 0 ? 'md:border-l md:border-white/10 md:pl-10' : ''
              }`}
            >
              <div className="flex items-center gap-3">
                <div className="p-2 bg-white/5 rounded-full border border-white/10">
                  {stat.icon}
                </div>
                <span className="font-display font-black text-3xl md:text-4xl tracking-tight text-white leading-none">
                  {stat.value}
                </span>
              </div>
              <div>
                <span className="font-display font-bold text-xs tracking-wider text-white block mb-1">
                  {stat.label}
                </span>
                <span className="font-sans text-[11px] text-white/60 leading-relaxed max-w-xs block font-light">
                  {stat.description}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Main Footer Info & Interactive Contact Form Block */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-20 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 justify-between items-start">
          
          {/* Left panel: Company Bio + Contact Info */}
          <div className="w-full lg:w-5/12 flex flex-col justify-between self-stretch">
            <div>
              {/* Logo block */}
              <div className="flex items-center gap-3 mb-8">
                <div className="flex flex-col items-center justify-center border-2 border-white bg-black/40 px-3 py-1.5 rounded-sm">
                  <span className="font-display font-extrabold text-xl tracking-tighter text-white leading-none">D2</span>
                  <span className="font-sans font-medium text-[7px] tracking-[0.3em] text-white/80 leading-none mt-0.5">GRUP</span>
                </div>
                <span className="font-display font-black text-lg tracking-tight uppercase">D2 GRUP</span>
              </div>

              <p className="font-sans font-light text-white/70 text-xs leading-relaxed max-w-md mb-10">
                Türkiye’nin lider medikal estetik ve kozmetik teknolojileri distribütörü. Dünyanın en saygın markalarını, yetkin teknik servis ve klinik eğitim desteği ile buluşturuyoruz.
              </p>

              {/* Contact Details */}
              <div className="flex flex-col gap-5 mb-10">
                <div className="flex items-start gap-4">
                  <MapPin className="w-4 h-4 text-white/60 shrink-0 mt-0.5" />
                  <div className="text-left">
                    <span className="font-display font-bold text-xs tracking-wider block mb-1">GENEL MERKEZ</span>
                    <span className="font-sans text-white/60 text-xs font-light leading-relaxed block max-w-xs">
                      Barbaros Mah. Begonya Sok. Nida Kule Batı Ataşehir, İstanbul, Türkiye
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone className="w-4 h-4 text-white/60 shrink-0 mt-0.5" />
                  <div className="text-left">
                    <span className="font-display font-bold text-xs tracking-wider block mb-1">MÜŞTERİ HATTI</span>
                    <span className="font-sans text-white/60 text-xs font-light block">
                      +90 (216) 555 44 33
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Mail className="w-4 h-4 text-white/60 shrink-0 mt-0.5" />
                  <div className="text-left">
                    <span className="font-display font-bold text-xs tracking-wider block mb-1">E-POSTA</span>
                    <span className="font-sans text-white/60 text-xs font-light block">
                      info@d2grup.com
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links & Copyright */}
            <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
              <span className="font-sans text-[11px] text-white/50 font-light">
                © {new Date().getFullYear()} D2 GRUP. Tüm hakları saklıdır.
              </span>
              <div className="flex items-center gap-4">
                <a href="#instagram" aria-label="Instagram" className="w-8 h-8 rounded-full border border-white/15 flex items-center justify-center text-white/70 hover:text-white hover:border-white/40 hover:bg-white/5 transition-all">
                  <Instagram size={14} />
                </a>
                <a href="#linkedin" aria-label="LinkedIn" className="w-8 h-8 rounded-full border border-white/15 flex items-center justify-center text-white/70 hover:text-white hover:border-white/40 hover:bg-white/5 transition-all">
                  <Linkedin size={14} />
                </a>
                <a href="#twitter" aria-label="Twitter" className="w-8 h-8 rounded-full border border-white/15 flex items-center justify-center text-white/70 hover:text-white hover:border-white/40 hover:bg-white/5 transition-all">
                  <Twitter size={14} />
                </a>
              </div>
            </div>
          </div>

          {/* Right panel: Modern Contact Form CTA box representing the perspective building container */}
          <div className="w-full lg:w-6/12 bg-zinc-900 border border-white/10 p-8 md:p-10 rounded-sm relative overflow-hidden flex flex-col justify-between">
            {/* Ambient indicator lights */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/2 rounded-full blur-2xl pointer-events-none" />

            <div className="relative z-10 text-left mb-8">
              <span className="font-display font-bold text-xs tracking-[0.25em] text-white/50 block mb-2 uppercase">
                BİZE ULAŞIN
              </span>
              <h3 className="font-display font-black text-2xl md:text-3xl tracking-tight text-white uppercase leading-tight mb-4">
                Siz de kliniğinize değer katmak için bizimle iletişime geçin.
              </h3>
              <p className="font-sans text-white/60 text-xs font-light leading-relaxed max-w-md">
                Ekiplerimiz, cihaz demoları, klinik veriler ve özel finansman modellerimizle ilgili detaylı bilgilendirmeyi en kısa sürede tarafınıza iletecektir.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleContactSubmit} className="relative z-10 flex flex-col gap-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5 text-left">
                  <label htmlFor="form-name" className="font-mono text-[9px] tracking-widest text-white/50 uppercase font-bold">
                    AD SOYAD *
                  </label>
                  <input
                    id="form-name"
                    type="text"
                    required
                    placeholder="Örn. Kemal Keskin"
                    className="bg-white/5 border border-white/10 focus:border-white/30 text-white placeholder-white/35 font-sans text-xs p-3.5 outline-none rounded-none transition-colors"
                  />
                </div>
                <div className="flex flex-col gap-1.5 text-left">
                  <label htmlFor="form-phone" className="font-mono text-[9px] tracking-widest text-white/50 uppercase font-bold">
                    TELEFON NUMARASI *
                  </label>
                  <input
                    id="form-phone"
                    type="tel"
                    required
                    placeholder="Örn. +90 (555) 123 4567"
                    className="bg-white/5 border border-white/10 focus:border-white/30 text-white placeholder-white/35 font-sans text-xs p-3.5 outline-none rounded-none transition-colors"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1.5 text-left">
                <label htmlFor="form-email" className="font-mono text-[9px] tracking-widest text-white/50 uppercase font-bold">
                  E-POSTA ADRESİ *
                </label>
                <input
                  id="form-email"
                  type="email"
                  required
                  placeholder="name@example.com"
                  className="bg-white/5 border border-white/10 focus:border-white/30 text-white placeholder-white/35 font-sans text-xs p-3.5 outline-none rounded-none transition-colors w-full"
                />
              </div>

              <div className="flex flex-col gap-1.5 text-left">
                <label htmlFor="form-message" className="font-mono text-[9px] tracking-widest text-white/50 uppercase font-bold">
                  MESAJINIZ
                </label>
                <textarea
                  id="form-message"
                  rows={4}
                  placeholder="Lütfen mesajınızı veya ilgilendiğiniz cihazları belirtin..."
                  className="bg-white/5 border border-white/10 focus:border-white/30 text-white placeholder-white/35 font-sans text-xs p-3.5 outline-none rounded-none transition-colors resize-none w-full"
                />
              </div>

              <button
                type="submit"
                className="mt-2 flex items-center justify-center gap-3 bg-white text-black font-semibold text-xs tracking-widest uppercase py-4 hover:bg-zinc-200 transition-all duration-300 w-full rounded-none"
              >
                İLETİŞİME GEÇ <ArrowRight size={14} />
              </button>
            </form>
          </div>

        </div>
      </div>
    </footer>
  );
}
