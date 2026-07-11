import { useState } from 'react';
import { Lock, User, ArrowRight, ShieldCheck, FileText, Headphones, Percent } from 'lucide-react';
import PageHeader from '../components/layout/PageHeader';
import { Link } from 'react-router-dom';

export default function DealerLoginPage() {
  const [submitted, setSubmitted] = useState(false);

  const benefits = [
    { icon: Percent, title: 'Bayiye Özel Fiyatlar', desc: 'Ayrıcalıklı fiyatlandırma ve kampanyalara erişim.' },
    { icon: FileText, title: 'Teknik Dokümanlar', desc: 'Kataloglar, kullanım kılavuzları ve sertifikalar.' },
    { icon: Headphones, title: 'Öncelikli Destek', desc: '7/24 teknik servis ve yedek parça önceliği.' },
    { icon: ShieldCheck, title: 'Eğitim & Sertifika', desc: 'Klinik uygulama eğitimleri ve sertifikasyon.' },
  ];

  const inputCls =
    'w-full bg-white/5 border border-white/10 focus:border-white/30 text-white placeholder-white/35 font-sans text-sm pl-11 pr-4 py-3.5 outline-none transition-colors';

  return (
    <>
      <PageHeader
        eyebrow="B2B PORTAL"
        title="BAYİ GİRİŞİ"
        description="D2 Grup iş ortakları için ayrıcalıklı portal. Bayiye özel fiyatlar, teknik dokümanlar ve öncelikli destek."
        breadcrumbs={[{ label: 'Bayi Girişi' }]}
      />

      <section className="bg-brand-dark py-20 px-6 md:px-12 border-b border-white/10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Giriş formu */}
          <div className="bg-zinc-900 border border-white/10 rounded-sm p-8 md:p-10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-3xl pointer-events-none" />
            <div className="relative z-10">
              <span className="font-display font-bold text-xs tracking-[0.25em] text-white/50 block mb-2 uppercase">
                HOŞ GELDİNİZ
              </span>
              <h2 className="font-display font-black text-2xl tracking-tight text-white uppercase mb-8">
                HESABINIZA GİRİŞ YAPIN
              </h2>

              {submitted ? (
                <div className="bg-white/5 border border-white/10 p-6 rounded-sm">
                  <ShieldCheck className="w-8 h-8 text-emerald-400 mb-3" />
                  <p className="font-sans text-white/80 text-sm leading-relaxed">
                    Bu bir demo giriş ekranıdır. Bayi portalı aktivasyonu ve hesap talepleriniz için lütfen{' '}
                    <Link to="/iletisim" className="text-white underline underline-offset-2">
                      iletişim
                    </Link>{' '}
                    sayfamızdan bize ulaşın.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSubmitted(true);
                  }}
                  className="flex flex-col gap-4"
                >
                  <div className="relative">
                    <User size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40" />
                    <input type="text" required placeholder="Kullanıcı adı veya e-posta" className={inputCls} />
                  </div>
                  <div className="relative">
                    <Lock size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40" />
                    <input type="password" required placeholder="Şifre" className={inputCls} />
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <label className="flex items-center gap-2 text-white/60 cursor-pointer">
                      <input type="checkbox" className="accent-white" /> Beni hatırla
                    </label>
                    <a href="#" className="text-white/60 hover:text-white transition-colors">
                      Şifremi unuttum
                    </a>
                  </div>
                  <button
                    type="submit"
                    className="mt-2 flex items-center justify-center gap-3 bg-white text-black font-semibold text-xs tracking-widest uppercase py-4 hover:bg-zinc-200 transition-all duration-300 w-full"
                  >
                    GİRİŞ YAP <ArrowRight size={14} />
                  </button>
                </form>
              )}

              <p className="font-sans text-white/50 text-xs mt-6 text-center">
                Henüz bayimiz değil misiniz?{' '}
                <Link to="/iletisim" className="text-white font-semibold hover:underline underline-offset-2">
                  Bayilik başvurusu yapın
                </Link>
              </p>
            </div>
          </div>

          {/* Avantajlar */}
          <div>
            <span className="font-display font-bold text-xs tracking-[0.3em] text-white/50 block mb-4 uppercase">
              BAYİ AVANTAJLARI
            </span>
            <h2 className="font-display font-black text-3xl tracking-tight text-white uppercase leading-tight mb-8">
              İŞ ORTAKLARIMIZA<br />ÖZEL AYRICALIKLAR
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {benefits.map(({ icon: BIcon, title, desc }) => (
                <div key={title} className="bg-white/5 border border-white/10 p-6 rounded-sm">
                  <BIcon className="w-6 h-6 text-white/80 mb-4" />
                  <h3 className="font-display font-bold text-sm text-white uppercase tracking-wide mb-2">{title}</h3>
                  <p className="font-sans font-light text-white/60 text-xs leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
