import { motion } from 'motion/react';
import {
  Wrench,
  GraduationCap,
  PackageCheck,
  Cog,
  Megaphone,
  Landmark,
  MessageSquare,
  MonitorPlay,
  Rocket,
  LifeBuoy,
  type LucideIcon,
} from 'lucide-react';
import PageHeader from '../components/layout/PageHeader';
import SectionHeading from '../components/ui/SectionHeading';
import CtaBanner from '../components/sections/CtaBanner';

interface ServiceItem {
  id: string;
  icon: LucideIcon;
  title: string;
  text: string;
}

const SERVICES: ServiceItem[] = [
  {
    id: 'servis',
    icon: Wrench,
    title: 'TEKNİK SERVİS',
    text: 'Sertifikalı mühendis kadromuzla arıza tespiti, onarım ve periyodik bakım hizmetleri. Hızlı müdahale ağımızla cihazlarınızın kesintisiz çalışmasını güvence altına alıyoruz.',
  },
  {
    id: 'egitim',
    icon: GraduationCap,
    title: 'KLİNİK EĞİTİM',
    text: 'Uygulayıcı ekiplerinize cihaz kullanımı ve tedavi protokolleri konusunda pratik eğitim. Doğru kullanımla hem verimliliği hem hasta memnuniyetini artırıyoruz.',
  },
  {
    id: 'kurulum',
    icon: Cog,
    title: 'KURULUM & DEVREYE ALMA',
    text: 'Cihazlarınızın kliniğinizde profesyonel kurulumu, kalibrasyonu ve devreye alınması. İlk günden itibaren tam performansla çalışmaya hazır teslim ediyoruz.',
  },
  {
    id: 'yedek-parca',
    icon: PackageCheck,
    title: 'YEDEK PARÇA GÜVENCESİ',
    text: 'Orijinal yedek parça tedariki ve stok güvencesi. Uzun ömürlü kullanım için ihtiyaç duyduğunuz parçalara hızlı erişim sağlıyoruz.',
  },
  {
    id: 'pazarlama',
    icon: Megaphone,
    title: 'PAZARLAMA DESTEĞİ',
    text: 'Tanıtım materyalleri, kampanya kurgusu ve dijital içerik desteğiyle cihaz yatırımınızın kliniğinize hasta kazandırmasına yardımcı oluyoruz.',
  },
  {
    id: 'finansman',
    icon: Landmark,
    title: 'FİNANSMAN ÇÖZÜMLERİ',
    text: 'Kliniğinizin nakit akışına uygun ödeme, taksit ve kiralama modelleri. Esnek finansman seçenekleriyle yatırım kararınızı kolaylaştırıyoruz.',
  },
];

interface ProcessStep {
  icon: LucideIcon;
  title: string;
  text: string;
}

const PROCESS: ProcessStep[] = [
  {
    icon: MessageSquare,
    title: 'DANIŞMANLIK',
    text: 'İhtiyaçlarınızı, hedef tedavi alanlarınızı ve bütçenizi analiz ederek kliniğinize en uygun cihaz kurgusunu belirliyoruz.',
  },
  {
    icon: MonitorPlay,
    title: 'DEMO',
    text: 'Seçtiğimiz cihazları canlı demo ve klinik verilerle deneyimlemenizi sağlıyor, kararınızı somut sonuçlarla destekliyoruz.',
  },
  {
    icon: Cog,
    title: 'KURULUM',
    text: 'Cihazın kliniğinizde profesyonel kurulumu, kalibrasyonu ve güvenli devreye alınmasını gerçekleştiriyoruz.',
  },
  {
    icon: Rocket,
    title: 'EĞİTİM',
    text: 'Ekibinize cihaz kullanımı ve tedavi protokolleri üzerine uygulamalı eğitim vererek hızlı adaptasyonu sağlıyoruz.',
  },
  {
    icon: LifeBuoy,
    title: 'SÜREKLİ DESTEK',
    text: 'Kurulum sonrası teknik servis, yedek parça ve pazarlama desteğiyle uzun vadeli iş ortaklığımızı sürdürüyoruz.',
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="ÇÖZÜMLER & HİZMETLER"
        title="HİZMETLERİMİZ"
        description="Cihaz tedarikinin ötesinde; danışmanlıktan kuruluma, klinik eğitimden teknik servise kadar uçtan uca hizmetlerle kliniğinizin yanındayız."
        backgroundImage="assets/renders/device-grey-diagnostic.jpg"
        breadcrumbs={[{ label: 'Çözümler' }]}
      />

      {/* Hizmet kartları */}
      <section className="bg-white py-20 md:py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            eyebrow="NELER SUNUYORUZ"
            title="UÇTAN UCA HİZMET"
            description="Her cihaz yatırımının arkasında, onu değere dönüştüren eksiksiz bir hizmet ekosistemi bulunur."
          />
          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((s, i) => {
              const IconCmp = s.icon;
              return (
                <motion.div
                  key={s.id}
                  id={s.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.5, delay: i * 0.06 }}
                  className="group scroll-mt-32 bg-zinc-50 border border-zinc-100 rounded-sm p-8 flex flex-col h-full transition-colors duration-300 hover:bg-white hover:border-zinc-200"
                >
                  <div className="w-12 h-12 rounded-sm bg-zinc-950 flex items-center justify-center mb-6">
                    <IconCmp className="w-6 h-6 text-white" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-display font-bold text-sm tracking-wide text-zinc-950 uppercase mb-3">
                    {s.title}
                  </h3>
                  <p className="font-sans font-light text-zinc-600 text-sm leading-relaxed">{s.text}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Süreç */}
      <section className="bg-brand-dark py-20 md:py-24 px-6 md:px-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.05),transparent_45%)]" />
        <div className="max-w-7xl mx-auto relative z-10">
          <SectionHeading
            eyebrow="NASIL ÇALIŞIYORUZ"
            title="BEŞ ADIMDA İŞ ORTAKLIĞI"
            description="İlk temastan uzun vadeli desteğe kadar, süreci sizin için şeffaf ve öngörülebilir kılıyoruz."
            theme="dark"
          />
          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {PROCESS.map((step, i) => {
              const IconCmp = step.icon;
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="relative bg-zinc-950/40 backdrop-blur-md border border-white/10 rounded-sm p-6 flex flex-col h-full"
                >
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-display font-black text-4xl tracking-tight text-white/15 leading-none">
                      0{i + 1}
                    </span>
                    <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                      <IconCmp className="w-5 h-5 text-white/90" strokeWidth={1.5} />
                    </div>
                  </div>
                  <h3 className="font-display font-bold text-sm tracking-wide text-white uppercase mb-2">
                    {step.title}
                  </h3>
                  <p className="font-sans font-light text-white/60 text-xs leading-relaxed">{step.text}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <CtaBanner
        eyebrow="D2 GRUP FARKI"
        title={<>KLİNİĞİNİZE ÖZEL<br />ÇÖZÜMÜ BİRLİKTE KURGULAYALIM</>}
        description="İhtiyaçlarınıza uygun cihaz, kurulum ve hizmet paketi için uzman ekibimizden teklif alın."
        primary={{ label: 'TEKLİF AL', to: '/iletisim' }}
        secondary={{ label: 'ÜRÜNLER', to: '/urunler' }}
      />
    </>
  );
}
