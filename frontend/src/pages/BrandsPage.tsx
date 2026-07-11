import { motion } from 'motion/react';
import { MapPin } from 'lucide-react';
import PageHeader from '../components/layout/PageHeader';
import SectionHeading from '../components/ui/SectionHeading';
import CtaBanner from '../components/sections/CtaBanner';
import { LinkButton } from '../components/ui/Button';
import { BRANDS } from '../data/brands';

export default function BrandsPage() {
  return (
    <>
      <PageHeader
        eyebrow="GLOBAL ORTAKLARIMIZ"
        title="MARKALAR"
        description="Dünyanın lider medikal estetik üreticileriyle kurduğumuz uzun soluklu iş ortaklıkları. Yerli imzamız FROZEN'dan Lumenis, Fotona ve InMode'a; her marka kanıtlanmış teknoloji ve global güven demektir."
        breadcrumbs={[{ label: 'Markalar' }]}
        backgroundImage="/assets/renders/device-white-tower.jpg"
      />

      {/* Marka wordmark şeridi (logo garisi) */}
      <section className="bg-brand-dark py-14 px-6 md:px-12 border-b border-white/10 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <p className="font-mono text-[11px] tracking-[0.3em] text-white/40 uppercase mb-8 text-center">
            GÜVENİLEN GLOBAL MARKALAR
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6 md:gap-x-16">
            {BRANDS.map((brand, i) => (
              <motion.span
                key={brand.id}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="font-display font-black text-xl md:text-2xl tracking-tight uppercase text-white/40 hover:text-white transition-colors"
              >
                {brand.logo}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      {/* Markalar — zengin satır kartları */}
      <section className="bg-zinc-50 py-20 md:py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            eyebrow="PORTFÖY ORTAKLARI"
            title={<>DÜNYA LİDERLERİNİN<br />TÜRKİYE ADRESİ</>}
            description="Her marka, kendi uzmanlık alanında referans kabul edilen teknolojiler geliştirir. D2 Grup, bu markaları yetkin teknik servis ve klinik eğitim desteğiyle Türkiye'ye taşır."
          />

          <div className="mt-14 flex flex-col gap-6">
            {BRANDS.map((brand, i) => (
              <motion.article
                key={brand.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.5 }}
                className="grid md:grid-cols-12 gap-6 md:gap-10 items-center bg-white border border-zinc-200 rounded-sm p-8 md:p-10 hover:border-zinc-300 transition-colors"
              >
                {/* Wordmark + menşe */}
                <div className="md:col-span-4 md:border-r md:border-zinc-100 md:pr-8">
                  <span className="font-display font-black text-3xl md:text-4xl tracking-tight uppercase text-zinc-950 leading-none block">
                    {brand.logo}
                  </span>
                  <span className="font-sans font-light text-sm text-zinc-500 italic block mt-3">
                    {brand.tagline}
                  </span>
                  <span className="inline-flex items-center gap-2 mt-5 font-mono text-[11px] tracking-[0.2em] uppercase text-zinc-400">
                    <MapPin size={13} strokeWidth={1.5} />
                    {brand.origin}
                  </span>
                </div>

                {/* Açıklama + odak */}
                <div className="md:col-span-8">
                  <div className="flex items-baseline gap-3 mb-4">
                    <span className="font-display font-black text-xs tracking-[0.25em] text-zinc-300 uppercase">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <h3 className="font-display font-black text-xl md:text-2xl tracking-tight uppercase text-zinc-950 leading-tight">
                      {brand.name}
                    </h3>
                  </div>
                  <p className="font-sans font-light text-sm text-zinc-600 leading-relaxed mb-6">
                    {brand.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {brand.focus.map((f) => (
                      <span
                        key={f}
                        className="font-display font-bold text-[11px] tracking-wider uppercase px-3 py-2 rounded-sm border border-zinc-200 text-zinc-700 bg-zinc-50"
                      >
                        {f}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Global ürünlere yönlendirme */}
      <section className="bg-brand-dark py-20 md:py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <SectionHeading
            theme="dark"
            eyebrow="GLOBAL PORTFÖY"
            title={<>LİDER MARKALARIN<br />CİHAZLARINI KEŞFEDİN</>}
            description="Portföyümüzdeki tüm global marka cihazlarını tek çatı altında inceleyin; teknoloji, endikasyon ve klinik uygunluk açısından karşılaştırın."
          />
          <div className="flex flex-col items-start gap-6 md:items-end">
            <div className="flex flex-wrap gap-4 md:justify-end">
              <LinkButton to="/urunler/kategori/global" variant="light" withArrow>
                GLOBAL ÜRÜNLER
              </LinkButton>
              <LinkButton to="/iletisim" variant="outline">
                İLETİŞİME GEÇ
              </LinkButton>
            </div>
            <p className="font-mono text-[11px] tracking-[0.25em] text-white/40 uppercase">
              7 MARKA · TEK DİSTRİBÜTÖR
            </p>
          </div>
        </div>
      </section>

      <CtaBanner
        eyebrow="MARKA İŞ ORTAKLIĞI"
        title={<>GLOBAL GÜÇLE<br />KLİNİĞİNİZİ BÜYÜTÜN</>}
        description="Dünya lideri markaların cihazları ve D2 Grup'un teknik servis güvencesiyle tanışmak için bizimle iletişime geçin."
        primary={{ label: 'İLETİŞİME GEÇ', to: '/iletisim' }}
        secondary={{ label: 'GLOBAL ÜRÜNLER', to: '/urunler/kategori/global' }}
      />
    </>
  );
}
