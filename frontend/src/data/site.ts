// ============================================================
// D2 GRUP — Site geneli sabitler: kurum bilgisi, navigasyon, iletişim
// ============================================================
import { NavMenuItem } from '../types';

export const SITE = {
  name: 'D2 GRUP',
  legalName: 'D2 Grup Medikal Tic. Ltd. Şti.',
  tagline: 'Medikal Estetik ve Güzellik Teknolojilerinde Lider',
  description:
    "D2 Grup Medikal, dünyanın en ileri teknolojiye sahip estetik ve güzellik cihazlarını Türkiye ile buluşturan lider distribütör. Yetkin teknik servis ve klinik eğitim desteğiyle kliniklerinize değer katıyoruz.",
  foundedYear: 2004,
  phone: '0533 048 27 71',
  phoneHref: 'tel:+905330482771',
  whatsapp: '0533 048 27 71',
  whatsappHref: 'https://wa.me/905330482771',
  email: 'website@frozenconcept.com',
  emailHref: 'mailto:website@frozenconcept.com',
  addressTitle: 'GENEL MERKEZ',
  address: 'Merkez Mah. Begonvil Sk. NEF03 No: 1/1, Kağıthane, İstanbul',
  workingHours: 'Hafta içi 09:00 – 18:00',
  // Resmi firma / vergi bilgileri
  authorizedPerson: 'Fuat Dinçyılmaz',
  taxNo: '2650663897',
  taxOffice: 'Kağıthane',
  city: 'İstanbul',
  district: 'Kağıthane',
  country: 'Türkiye',
  social: {
    instagram: 'https://instagram.com/',
    linkedin: 'https://linkedin.com/',
    youtube: 'https://youtube.com/',
    twitter: 'https://twitter.com/',
  },
  // Online mağaza (e-ticaret) yönlendirmesi — header'daki birincil aksiyon.
  // Panelden düzenlenebilir (Ayarlar › İletişim › Online Mağaza).
  store: {
    enabled: true,
    label: 'ONLINE MAĞAZA',
    url: 'https://www.frozenconcept.com',
  },
};

// Ana navigasyon — açılır menülü çoklu sayfa yapısı
export const NAV: NavMenuItem[] = [
  { label: 'ANASAYFA', to: '/' },
  { label: 'KURUMSAL', to: '/kurumsal' },
  {
    label: 'ÜRÜNLER',
    to: '/urunler',
    children: [
      { label: 'Tüm Ürünler', to: '/urunler' },
      { label: 'Yüz Teknolojileri', to: '/urunler/kategori/yuz' },
      { label: 'Vücut Teknolojileri', to: '/urunler/kategori/vucut' },
      { label: 'Longevity', to: '/urunler/kategori/longevity' },
      { label: 'Global Markalar', to: '/urunler/kategori/global' },
    ],
  },
  { label: 'TEKNOLOJİLER', to: '/teknolojiler' },
  { label: 'MARKALAR', to: '/markalar' },
  { label: 'ÇÖZÜMLER', to: '/cozumler' },
  { label: 'KOZMETİK', to: '/kozmetik' },
  { label: 'İLETİŞİM', to: '/iletisim' },
];

// Footer bağlantı grupları
export const FOOTER_LINKS = {
  kurumsal: {
    title: 'KURUMSAL',
    links: [
      { label: 'Hakkımızda', to: '/kurumsal' },
      { label: 'Çözümler & Hizmetler', to: '/cozumler' },
      { label: 'Teknolojiler', to: '/teknolojiler' },
      { label: 'Markalar', to: '/markalar' },
      { label: 'İletişim', to: '/iletisim' },
    ],
  },
  urunler: {
    title: 'ÜRÜNLER',
    links: [
      { label: 'Tüm Ürünler', to: '/urunler' },
      { label: 'Yüz Teknolojileri', to: '/urunler/kategori/yuz' },
      { label: 'Vücut Teknolojileri', to: '/urunler/kategori/vucut' },
      { label: 'Longevity', to: '/urunler/kategori/longevity' },
      { label: 'Kozmetik Ürünler', to: '/kozmetik' },
    ],
  },
  destek: {
    title: 'DESTEK',
    links: [
      { label: 'Sıkça Sorulan Sorular', to: '/sss' },
      { label: 'Bayi Girişi', to: '/bayi-girisi' },
      { label: 'Teknik Servis', to: '/cozumler#servis' },
      { label: 'İletişim', to: '/iletisim' },
    ],
  },
  yasal: {
    title: 'YASAL',
    links: [
      { label: 'Gizlilik Politikası', to: '/gizlilik' },
      { label: 'Kullanım Koşulları', to: '/kullanim-kosullari' },
      { label: 'KVKK Aydınlatma Metni', to: '/kvkk' },
      { label: 'Çerez Politikası', to: '/cerez-politikasi' },
    ],
  },
};

// Genel istatistikler (hero + kurumsal)
export const STATS = [
  { value: '20+', label: 'YILLIK DENEYİM', iconName: 'Award' },
  { value: '50+', label: 'GLOBAL MARKA', iconName: 'Gem' },
  { value: '150+', label: 'UZMAN EKİP', iconName: 'Users' },
  { value: '2000+', label: 'KURUMSAL PARTNER', iconName: 'Building2' },
  { value: '25+', label: 'ÜLKEYE İHRACAT', iconName: 'Globe' },
];
