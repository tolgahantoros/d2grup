import { motion } from 'motion/react';
import {
  MapPin,
  Phone,
  MessageCircle,
  Mail,
  Clock,
  Instagram,
  Wrench,
  Briefcase,
  GraduationCap,
  type LucideIcon,
} from 'lucide-react';
import PageHeader from '../components/layout/PageHeader';
import ContactForm from '../components/sections/ContactForm';
import CtaBanner from '../components/sections/CtaBanner';
import { SITE } from '../data/site';

// İletişim bilgi kartları — koyu zeminde ikonlu satırlar
const CONTACT_CARDS = [
  {
    icon: MapPin,
    label: SITE.addressTitle,
    value: SITE.address,
    href: undefined as string | undefined,
  },
  {
    icon: Phone,
    label: 'TELEFON',
    value: SITE.phone,
    href: SITE.phoneHref,
  },
  {
    icon: MessageCircle,
    label: 'WHATSAPP',
    value: SITE.whatsapp,
    href: SITE.whatsappHref,
  },
  {
    icon: Mail,
    label: 'E-POSTA',
    value: SITE.email,
    href: SITE.emailHref,
  },
  {
    icon: Clock,
    label: 'ÇALIŞMA SAATLERİ',
    value: SITE.workingHours,
    href: undefined,
  },
];

// Departman hatları — her departman için ikon eşlemesi
const DEPT_ICONS: Record<string, LucideIcon> = {
  satis: Briefcase,
  'teknik-destek': Wrench,
  egitim: GraduationCap,
};

// Sosyal medya — D2 Grup ekosistemindeki Instagram hesapları
const INSTAGRAM_ACCOUNTS = SITE.instagramAccounts;

export default function ContactPage() {
  const mapSrc = `https://maps.google.com/maps?q=${encodeURIComponent(
    SITE.address,
  )}&t=&z=14&ie=UTF8&iwloc=&output=embed`;

  return (
    <div className="bg-brand-dark">
      <PageHeader
        eyebrow="BİZE ULAŞIN"
        title="İLETİŞİM"
        description="Cihaz demosu, klinik danışmanlık veya bayilik başvurusu için ekibimizle iletişime geçin. Talebinizi en kısa sürede yanıtlıyoruz."
        breadcrumbs={[{ label: 'İletişim' }]}
      />

      {/* Ana iletişim bölümü: sol bilgi kartları + sağ form */}
      <section className="bg-brand-dark py-20 md:py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* SOL: iletişim bilgileri */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5 }}
            className="flex flex-col"
          >
            <span className="font-display font-bold text-xs tracking-[0.3em] text-white/50 block mb-4 uppercase">
              İLETİŞİM BİLGİLERİ
            </span>
            <h2 className="font-display font-black text-3xl md:text-4xl tracking-tight text-white uppercase leading-[1.05] mb-8">
              Doğrudan bize ulaşın
            </h2>

            <div className="flex flex-col gap-4">
              {CONTACT_CARDS.map((card, i) => {
                const CardIcon = card.icon;
                const inner = (
                  <div className="flex items-start gap-4 bg-white/[0.03] border border-white/10 p-5 rounded-sm transition-colors hover:border-white/20">
                    <span className="shrink-0 flex items-center justify-center w-11 h-11 bg-white/5 border border-white/10 rounded-sm">
                      <CardIcon className="w-5 h-5 text-white/80" />
                    </span>
                    <span className="flex flex-col gap-1 min-w-0">
                      <span className="font-mono text-[10px] tracking-widest text-white/40 uppercase font-bold">
                        {card.label}
                      </span>
                      <span className="font-sans font-light text-white text-sm leading-relaxed break-words">
                        {card.value}
                      </span>
                    </span>
                  </div>
                );

                return (
                  <motion.div
                    key={card.label}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-40px' }}
                    transition={{ duration: 0.4, delay: i * 0.05 }}
                  >
                    {card.href ? (
                      <a
                        href={card.href}
                        target={card.href.startsWith('http') ? '_blank' : undefined}
                        rel="noreferrer"
                        className="block"
                      >
                        {inner}
                      </a>
                    ) : (
                      inner
                    )}
                  </motion.div>
                );
              })}
            </div>

            {/* Sosyal medya — Instagram hesapları */}
            <div className="mt-10">
              <span className="font-mono text-[10px] tracking-widest text-white/40 uppercase font-bold block mb-4">
                BİZİ TAKİP EDİN
              </span>
              <div className="flex flex-col gap-3">
                {INSTAGRAM_ACCOUNTS.map((acc) => {
                  const inner = (
                    <div className="flex items-center gap-3 bg-white/[0.03] border border-white/10 p-4 rounded-sm transition-colors hover:border-white/20">
                      <span className="shrink-0 flex items-center justify-center w-10 h-10 bg-white/5 border border-white/10 rounded-sm">
                        <Instagram className="w-5 h-5 text-white/80" />
                      </span>
                      <span className="flex flex-col gap-0.5 min-w-0">
                        <span className="font-sans font-light text-white text-sm leading-tight">{acc.label}</span>
                        <span className="font-mono text-[10px] tracking-widest text-white/40 uppercase">
                          Instagram
                        </span>
                      </span>
                    </div>
                  );
                  return acc.href ? (
                    <a key={acc.id} href={acc.href} target="_blank" rel="noreferrer" className="block">
                      {inner}
                    </a>
                  ) : (
                    <div key={acc.id}>{inner}</div>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* SAĞ: hazır iletişim formu */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <ContactForm />
          </motion.div>
        </div>
      </section>

      {/* Departman hatları — Teknik Destek / Satış / Eğitim */}
      <section className="bg-brand-dark pb-20 md:pb-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <span className="font-display font-bold text-xs tracking-[0.3em] text-white/50 block mb-4 uppercase">
            DEPARTMAN HATLARI
          </span>
          <h2 className="font-display font-black text-2xl md:text-3xl tracking-tight text-white uppercase leading-[1.05] mb-8">
            Doğru birime doğrudan ulaşın
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {SITE.departments.map((dept, i) => {
              const DeptIcon = DEPT_ICONS[dept.id] ?? Phone;
              const inner = (
                <div className="flex flex-col gap-4 h-full bg-white/[0.03] border border-white/10 p-6 rounded-sm transition-colors hover:border-white/20">
                  <span className="shrink-0 flex items-center justify-center w-11 h-11 bg-white/5 border border-white/10 rounded-sm">
                    <DeptIcon className="w-5 h-5 text-white/80" />
                  </span>
                  <div className="flex flex-col gap-1 min-w-0">
                    <span className="font-display font-bold text-sm tracking-wide text-white uppercase">
                      {dept.label}
                    </span>
                    {dept.contactName && (
                      <span className="font-sans font-light text-white/60 text-xs">
                        İlgili: {dept.contactName}
                      </span>
                    )}
                    <span className="font-sans font-light text-white text-sm mt-1 break-words">
                      {dept.phone || 'Numara yakında eklenecek'}
                    </span>
                  </div>
                </div>
              );
              return (
                <motion.div
                  key={dept.id}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                >
                  {dept.phoneHref ? (
                    <a href={dept.phoneHref} className="block h-full">
                      {inner}
                    </a>
                  ) : (
                    inner
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Harita */}
      <section className="bg-brand-dark pb-20 md:pb-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <span className="font-display font-bold text-xs tracking-[0.3em] text-white/50 block mb-4 uppercase">
            KONUM
          </span>
          <div className="rounded-sm overflow-hidden border border-white/10">
            <iframe
              src={mapSrc}
              title={`${SITE.name} — ${SITE.addressTitle} konumu`}
              className="w-full h-[400px] border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      <CtaBanner
        eyebrow="D2 GRUP FARKI"
        title="Kliniğinize değer katmaya hazır mısınız?"
        description="Cihaz portföyümüz, finansman modellerimiz ve teknik servis güvencemiz hakkında detaylı bilgi almak için bize ulaşın."
        primary={{ label: 'WHATSAPP HATTI', to: SITE.whatsappHref }}
        secondary={{ label: 'BAYİ GİRİŞİ', to: '/bayi-girisi' }}
      />
    </div>
  );
}
