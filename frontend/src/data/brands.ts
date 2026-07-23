// ============================================================
// D2 GRUP — Markalar (her cihaz kendi markasında)
// ============================================================
import { Brand } from '../types';

export const BRANDS: Brand[] = [
  {
    id: 'd2-frozen',
    name: 'FROZEN',
    logo: 'FROZEN®',
    tagline: 'D2 Grup İmzası',
    origin: 'Türkiye',
    description:
      'D2 Grup’un amiral gemisi serisi. Radyofrekans, ultrasound, elektroporasyon ve soğutma temelli teknolojilerle yüz, göz çevresi ve vücut için geliştirilen medikal estetik platformları.',
    focus: ['RF', 'Ultrasound', 'Cryo', 'Elektroporasyon'],
  },
  {
    id: 'caci',
    name: 'CACI',
    logo: 'CACI®',
    tagline: 'The Original Non-Surgical Face Lift',
    origin: 'İngiltere',
    description:
      'Mikroakım tabanlı yüz bakım teknolojisinde dünya çapında referans kabul edilen İngiliz marka. S.P.E.D. destekli mikroakım ile yüz kaslarını yeniden eğiterek cerrahisiz sıkılaşma sağlar.',
    focus: ['Mikroakım', 'Yüz Gençleştirme', 'LED'],
  },
  {
    id: 'ross',
    name: "RÖS'S",
    logo: "RÖS'S",
    tagline: 'Estetica — Since 1978',
    origin: 'İspanya',
    description:
      '1978’den bu yana estetik teknolojileri üreten İspanyol marka. ROLL kompresyon masajı ile 448 kHz kapasitif-rezistif sistemik diatermiyi birleştiren endoaktivasyon teknolojisiyle tanınır.',
    focus: ['Diatermi', 'ROLL Masaj', '448 kHz'],
  },
  {
    id: 'eximia',
    name: 'Eximia',
    logo: 'Eximia',
    tagline: 'Total Body Contouring',
    origin: 'İtalya',
    description:
      'İtalyan menşeili total vücut şekillendirme markası. Lazer, vakum terapi ve radyofrekansı kişiye özel protokollerle birleştiren çok teknolojili sistemler geliştirir.',
    focus: ['RF', 'Lazer', 'Vücut Şekillendirme'],
  },
  {
    id: 'bubble-up',
    name: 'Bubble Up',
    logo: 'Bubble Up',
    tagline: 'Compression Micro-Vibration',
    origin: 'İthal',
    description:
      'Sıkıştırıcı mikrovibrasyon teknolojisiyle çalışan cilt ve vücut bakım markası. Silikon küreli dönen başlıklarıyla selülit, vücut şekillendirme ve lenfatik drenajda etkili çözümler sunar.',
    focus: ['Mikrovibrasyon', 'Selülit', 'Lenfatik Drenaj'],
  },
  {
    id: 'face-up',
    name: 'Face Up',
    logo: 'Face Up',
    tagline: 'Yüz Gençleştirme',
    origin: 'İthal',
    description:
      'Yüz kaslarını çalıştırarak cildi sıkılaştıran ve kollajen üretimini destekleyen; bölgeye özel aplikatörlerle çalışan yüz gençleştirme markası.',
    focus: ['Kas Uyarımı', 'Yüz Gençleştirme'],
  },
  {
    id: 'twin-body',
    name: 'Twin Body',
    logo: 'Twin Body',
    tagline: 'HIFEM Body Sculpting',
    origin: 'İthal',
    description:
      'Yüksek yoğunluklu elektromanyetik (HIFEM/EMS) enerjiyle kas güçlendiren ve yağ yakımını destekleyen; çift aplikatörlü vücut şekillendirme markası.',
    focus: ['HIFEM', 'EMS', 'Kas & Yağ'],
  },
  {
    id: 'ultrawave',
    name: 'UltraWave',
    logo: 'UltraWave',
    tagline: 'Ameliyatsız Lipoliz',
    origin: 'İthal',
    description:
      'Radyofrekans, ultrason (kavitasyon), vakum ve kızılötesi ışığı tek platformda birleştiren ameliyatsız bölgesel incelme ve vücut şekillendirme markası.',
    focus: ['Kavitasyon', 'RF', 'Vakum'],
  },
  {
    id: 'emchair',
    name: 'EMChair',
    logo: 'EMChair',
    tagline: 'Pelvik Taban Sağlığı',
    origin: 'İthal',
    description:
      'Non-invaziv elektromanyetik stimülasyonla pelvik taban kaslarını güçlendiren; idrar kaçırma ve pelvik sağlık odaklı marka.',
    focus: ['Pelvik Taban', 'EMS', 'İnkontinans'],
  },
  {
    id: 'infinite-young',
    name: 'Infinite Young',
    logo: 'Infinite Young',
    tagline: '4 Katman Gençleştirme',
    origin: 'İthal',
    description:
      'Cildin epidermis, dermis, SMAS ve kas katmanlarına ayrı ayrı etki eden plazma-iyon, radyofrekans, odaklı ultrason ve elektroporasyon teknolojilerini birleştiren longevity markası.',
    focus: ['RF', 'Odaklı Ultrason', 'Plazma & İyon'],
  },
  {
    id: 'capsule-cabin',
    name: 'Capsule Cabin',
    logo: 'Capsule Cabin',
    tagline: 'LED Wellness Spa',
    origin: 'İthal',
    description:
      'LED ışık terapili wellness spa kapsülü markası.',
    focus: ['LED Terapi', 'Wellness'],
  },
];

export const getBrand = (id: string): Brand | undefined =>
  BRANDS.find((b) => b.id === id);
