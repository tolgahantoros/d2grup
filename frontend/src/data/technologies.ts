// ============================================================
// D2 GRUP — Teknoloji güçleri
// ============================================================
import { Technology } from '../types';

export const TECHNOLOGIES: Technology[] = [
  {
    id: 'lazer',
    title: 'LAZER TEKNOLOJİLERİ',
    shortTitle: 'LAZER',
    iconName: 'Zap',
    description:
      'Q-Switch, Alexandrite, Diode ve Nd:YAG lazer teknolojileri ile maksimum seçici fototermoliz gücü; cilt lezyonları, epilasyon ve dövme silme tedavileri.',
    applications: ['Epilasyon', 'Cilt Lezyonları', 'Dövme Silme', 'Fotogençleştirme'],
  },
  {
    id: 'rf',
    title: 'RF TEKNOLOJİLERİ',
    shortTitle: 'RF',
    iconName: 'Waves',
    description:
      'Monopolar, bipolar ve fraksiyonel mikroiğneli radyofrekans enerjisi ile dermis tabakasında derin kontrollü koagülasyon ve kollajen sentezi.',
    applications: ['Cilt Sıkılaştırma', 'Mikroiğneleme', 'Kollajen Sentezi', 'Kontürleme'],
  },
  {
    id: 'hifu',
    title: 'HIFU TEKNOLOJİLERİ',
    shortTitle: 'HIFU',
    iconName: 'Target',
    description:
      'Yüksek yoğunluklu odaklanmış ultrason dalgaları (SMAS) ile cerrahi olmayan yüz germe, kaş kaldırma, boyun ve dekolte toparlama.',
    applications: ['Yüz Germe', 'Kaş Kaldırma', 'Boyun Toparlama', 'SMAS Lifting'],
  },
  {
    id: 'ipl',
    title: 'IPL TEKNOLOJİLERİ',
    shortTitle: 'IPL',
    iconName: 'Sun',
    description:
      'Yoğun atımlı ışık tedavileri ile vasküler lezyonlar, akne kontrolü, leke giderme ve foto-gençleştirme için geniş spektrumlu filtreleme sistemleri.',
    applications: ['Leke Giderme', 'Akne Kontrolü', 'Vasküler Lezyon', 'Foto-gençleştirme'],
  },
  {
    id: 'kalici-ultrason',
    title: 'KALICI ULTRASON TEKNOLOJİLERİ',
    shortTitle: 'KALICI ULTRASON',
    iconName: 'Radio',
    description:
      'Sürekli düşük frekanslı ultrasonik dalgalarla derin dokuya kesintisiz enerji aktarımı; aktif içeriklerin sonoforez ile taşınmasını, mikro-dolaşımı ve kollajen yenilenmesini destekler.',
    applications: ['Sonoforez', 'Derin Nemlendirme', 'Kollajen Yenileme', 'Cilt Bakımı'],
  },
  {
    id: 'mikro-vibrasyon',
    title: 'MİKRO VİBRASYON TEKNOLOJİLERİ',
    shortTitle: 'MİKRO VİBRASYON',
    iconName: 'Vibrate',
    description:
      'Yüksek frekanslı kontrollü mikro-titreşimlerle lenfatik drenajı hızlandıran, kas gevşemesini ve kan dolaşımını artıran nazik doku uyarımı; hassas bölgelerde konforlu uygulama.',
    applications: ['Lenfatik Drenaj', 'Kan Dolaşımı', 'Kas Gevşetme', 'Göz Çevresi'],
  },
  {
    id: 'diyatermi',
    title: 'DİYATERMİ TEKNOLOJİLERİ',
    shortTitle: 'DİYATERMİ',
    iconName: 'Flame',
    description:
      'Yüksek frekanslı elektrik akımıyla dokuda kontrollü içsel ısı üretimi; derin ısınma sayesinde metabolizmayı hızlandırır, kollajen kasılmasını ve doku onarımını tetikler.',
    applications: ['Derin Isıtma', 'Cilt Sıkılaştırma', 'Doku Onarımı', 'Kontürleme'],
  },
  {
    id: 'oksijen',
    title: 'OKSİJEN TEKNOLOJİLERİ',
    shortTitle: 'OKSİJEN',
    iconName: 'Wind',
    description:
      'Basınçlı saf oksijen ve aktif serum infüzyonuyla cildin hücresel oksijenlenmesini artıran teknoloji; canlandırıcı, nemlendirici ve aydınlatıcı etkiyle konforlu bakım deneyimi.',
    applications: ['Oksijen İnfüzyonu', 'Cilt Canlandırma', 'Nemlendirme', 'Aydınlatma'],
  },
  {
    id: 'pemf',
    title: 'PEMF TEKNOLOJİLERİ',
    shortTitle: 'PEMF',
    iconName: 'Magnet',
    description:
      'Atımlı elektromanyetik alan (PEMF) enerjisiyle hücresel yenilenmeyi uyaran, mikro-dolaşımı ve doku iyileşmesini destekleyen; longevity ve bütünsel bakım protokollerine uyumlu teknoloji.',
    applications: ['Hücresel Yenilenme', 'Mikro-dolaşım', 'Doku İyileşmesi', 'Longevity'],
  },
  {
    id: 'ultrason',
    title: 'ULTRASON TEKNOLOJİLERİ',
    shortTitle: 'ULTRASON',
    iconName: 'Activity',
    description:
      'Lokalize adipoz dokuyu hedefleyen mekanik kavitasyonel ultrasonik dalgalar ile ameliyatsız yağ parçalama ve derin lenfatik drenaj.',
    applications: ['Yağ Parçalama', 'Kavitasyon', 'Lenfatik Drenaj', 'Bölgesel İncelme'],
  },
  {
    id: 'sogutma',
    title: 'SOĞUTMA TEKNOLOJİLERİ',
    shortTitle: 'SOĞUTMA',
    iconName: 'Snowflake',
    description:
      'Kontak ve hava soğutma üniteleri ile epidermisi koruyan, seans ağrısını minimize eden patentli sub-zero kriyojenik konfor mekanizmaları.',
    applications: ['Cryolipolysis', 'Kriyojenik Konfor', 'Epidermis Koruma', 'Göz Çevresi'],
  },
  {
    id: 'ems',
    title: 'EMS TEKNOLOJİLERİ',
    shortTitle: 'EMS',
    iconName: 'Dumbbell',
    description:
      'Yüksek yoğunluklu elektromanyetik kas stimülasyonu ile eş zamanlı kas geliştirme, yağ azaltma ve pelvik taban güçlendirme.',
    applications: ['Kas Geliştirme', 'Yağ Azaltma', 'Pelvik Taban', 'Vücut Şekillendirme'],
  },
  {
    id: 'akustik',
    title: 'AKUSTİK DALGA',
    shortTitle: 'AKUSTİK',
    iconName: 'AudioWaveform',
    description:
      'Yüksek enerjili akustik basınç dalgaları (AWT) ile selülit görünümünün azaltılması, doku yeniden yapılandırma ve mikro-dolaşımın artırılması.',
    applications: ['Selülit Tedavisi', 'Doku Yenileme', 'Mikro-dolaşım', 'AWT'],
  },
];

export const getTechnology = (id: string): Technology | undefined =>
  TECHNOLOGIES.find((t) => t.id === id);
