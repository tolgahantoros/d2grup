import { motion } from 'motion/react';
import PageHeader from '../components/layout/PageHeader';
import SectionHeading from '../components/ui/SectionHeading';
import CtaBanner from '../components/sections/CtaBanner';
import { LinkButton } from '../components/ui/Button';
import Icon from '../components/ui/Icon';
import { TECHNOLOGIES } from '../data/technologies';

export default function TechnologiesPage() {
  return (
    <>
      <PageHeader
        eyebrow="TEKNOLOJİ GÜCÜMÜZ"
        title="TEKNOLOJİLER"
        description="Lazerden radyofrekansa, HIFU'dan kriyojenik soğutmaya; D2 Grup portföyünü ayakta tutan patentli enerji temelli teknolojiler. Her platform, kanıtlanmış klinik protokoller ve ölçülebilir sonuçlar için tasarlanır."
        breadcrumbs={[{ label: 'Teknolojiler' }]}
        backgroundImage="/assets/renders/device-blue-laser.jpg"
      />

      {/* Teknoloji ikonları özet grid'i */}
      <section className="bg-white py-16 px-6 md:px-12 border-b border-zinc-100">
        <div className="max-w-7xl mx-auto">
          <p className="font-mono text-[11px] tracking-[0.3em] text-zinc-500 uppercase mb-8">
            8 TEMEL TEKNOLOJİ AİLESİ
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
            {TECHNOLOGIES.map((tech, i) => (
              <motion.div
                key={tech.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.4, delay: i * 0.04 }}
                className="flex flex-col items-center justify-center gap-3 bg-zinc-50 border border-zinc-100 p-5 rounded-sm hover:border-zinc-300 transition-colors"
              >
                <Icon name={tech.iconName} size={26} strokeWidth={1.5} className="text-zinc-900" />
                <span className="font-display font-bold text-[10px] tracking-[0.15em] text-zinc-600 uppercase text-center leading-tight">
                  {tech.shortTitle}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Teknolojiler — zebra satır düzeni */}
      <section className="bg-zinc-50 py-20 md:py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            eyebrow="ENERJİ TEMELLİ PLATFORMLAR"
            title={<>KLİNİK SONUÇ<br />ODAKLI TEKNOLOJİLER</>}
            description="Her teknoloji ailesi, endikasyona özel uygulama alanları ve güvenlik profiliyle birlikte değerlendirilir. Doğru cihaz seçimi için teknoloji altyapısını tanımak ilk adımdır."
          />

          <div className="mt-14 flex flex-col gap-6">
            {TECHNOLOGIES.map((tech, i) => {
              const isEven = i % 2 === 0;
              return (
                <motion.article
                  key={tech.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.5 }}
                  className={`grid md:grid-cols-12 gap-6 md:gap-10 items-center border rounded-sm p-8 md:p-10 ${
                    isEven
                      ? 'bg-white border-zinc-200'
                      : 'bg-brand-dark border-white/10 text-white'
                  }`}
                >
                  {/* Numara + ikon */}
                  <div className="md:col-span-3 flex items-center gap-5">
                    <span
                      className={`font-display font-black text-4xl md:text-5xl tracking-tight leading-none ${
                        isEven ? 'text-zinc-200' : 'text-white/20'
                      }`}
                    >
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span
                      className={`w-16 h-16 shrink-0 rounded-sm border flex items-center justify-center ${
                        isEven ? 'border-zinc-200 bg-zinc-50' : 'border-white/15 bg-white/5'
                      }`}
                    >
                      <Icon
                        name={tech.iconName}
                        size={30}
                        strokeWidth={1.5}
                        className={isEven ? 'text-zinc-900' : 'text-white'}
                      />
                    </span>
                  </div>

                  {/* Başlık + açıklama */}
                  <div className="md:col-span-5">
                    <h3
                      className={`font-display font-black text-2xl md:text-3xl tracking-tight uppercase leading-[1.05] mb-4 ${
                        isEven ? 'text-zinc-950' : 'text-white'
                      }`}
                    >
                      {tech.title}
                    </h3>
                    <p
                      className={`font-sans font-light text-sm leading-relaxed ${
                        isEven ? 'text-zinc-600' : 'text-white/70'
                      }`}
                    >
                      {tech.description}
                    </p>
                  </div>

                  {/* Uygulama çipleri */}
                  <div className="md:col-span-4">
                    <span
                      className={`font-mono text-[10px] tracking-[0.25em] uppercase block mb-4 ${
                        isEven ? 'text-zinc-400' : 'text-white/40'
                      }`}
                    >
                      UYGULAMA ALANLARI
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {tech.applications.map((app) => (
                        <span
                          key={app}
                          className={`font-display font-bold text-[11px] tracking-wider uppercase px-3 py-2 rounded-sm border ${
                            isEven
                              ? 'border-zinc-200 text-zinc-700 bg-zinc-50'
                              : 'border-white/15 text-white/80 bg-white/5'
                          }`}
                        >
                          {app}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Ürünlere yönlendirme bandı */}
      <section className="bg-white py-20 md:py-24 px-6 md:px-12 border-t border-zinc-100">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <SectionHeading
            eyebrow="TEKNOLOJİDEN CİHAZA"
            title={<>DOĞRU TEKNOLOJİ,<br />DOĞRU PLATFORM</>}
            description="Kliniğinizin ihtiyaç duyduğu endikasyonlara göre bu teknolojileri barındıran cihazları keşfedin. Uzman ekibimiz teknoloji seçiminden kuruluma kadar yanınızda."
          />
          <div className="flex flex-col items-start gap-6 md:items-end">
            <div className="flex flex-wrap gap-4 md:justify-end">
              <LinkButton to="/urunler" variant="dark" withArrow>
                ÜRÜNLERİ İNCELE
              </LinkButton>
              <LinkButton to="/iletisim" variant="outline-dark">
                DANIŞMANLIK AL
              </LinkButton>
            </div>
            <p className="font-mono text-[11px] tracking-[0.25em] text-zinc-400 uppercase">
              8 TEKNOLOJİ · TEK PARTNER
            </p>
          </div>
        </div>
      </section>

      <CtaBanner
        eyebrow="TEKNOLOJİ DANIŞMANLIĞI"
        title={<>KLİNİĞİNİZE UYGUN<br />TEKNOLOJİYİ BELİRLEYELİM</>}
        description="Hedeflediğiniz tedavi protokolleri ve hasta profiline en uygun teknoloji altyapısını birlikte planlayalım."
        primary={{ label: 'DANIŞMANLIK AL', to: '/iletisim' }}
        secondary={{ label: 'ÜRÜNLER', to: '/urunler' }}
      />
    </>
  );
}
