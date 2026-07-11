# D2 GRUP — Kurumsal Web Sitesi (Frontend)

Medikal estetik ve güzellik teknolojileri distribütörü **D2 Grup** için geliştirilen
çok sayfalı (multi-page) kurumsal web sitesi.

## Teknoloji

- **React 19** + **TypeScript**
- **Vite** (geliştirme & derleme)
- **Tailwind CSS v4** (utility-first, tema token'ları `src/index.css`)
- **react-router-dom v7** (sayfa yönlendirme)
- **motion** (animasyonlar) + **lucide-react** (ikonlar)

## Çalıştırma

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # üretim derlemesi -> dist/
npm run preview  # derlemeyi önizle
npm run lint     # tsc --noEmit (tip kontrolü)
```

## Proje Yapısı

```
src/
├─ App.tsx                # Router (BrowserRouter + tüm route tanımları)
├─ main.tsx               # Giriş noktası
├─ index.css              # Tailwind + tema token'ları (font, renk)
├─ types.ts               # Merkezi TypeScript tipleri
├─ data/                  # İçerik verisi (kod ile UI ayrık)
│  ├─ site.ts             #   kurum bilgisi, navigasyon, footer, istatistik
│  ├─ products.ts         #   ürün kataloğu (18 ürün) + yardımcılar
│  ├─ categories.ts       #   ürün kategorileri
│  ├─ technologies.ts     #   teknolojiler (lazer, RF, HIFU, IPL, ...)
│  ├─ brands.ts           #   partner markalar
│  ├─ faq.ts              #   sıkça sorulan sorular
│  └─ legal.ts            #   gizlilik / kullanım / KVKK / çerez metinleri
├─ components/
│  ├─ layout/             # Header, Footer, Layout, PageHeader, Breadcrumbs, ...
│  ├─ home/               # Anasayfa bölümleri (Hero, kategoriler, carousel, ...)
│  ├─ sections/           # ContactForm, CtaBanner (sayfalar arası ortak bloklar)
│  └─ ui/                 # Button, ProductCard, SectionHeading, Icon, VideoModal
└─ pages/                 # Her route için bir sayfa bileşeni

public/assets/            # Görseller (renders/, products/, products/frozen-eyes/)
```

## Sayfalar

Anasayfa · Kurumsal · Çözümler · Teknolojiler · Markalar · Kozmetik ·
Ürünler (filtre/arama/sıralama) · Ürün Kategorisi · Ürün Detay · İletişim ·
SSS · Bayi Girişi · Gizlilik · Kullanım Koşulları · KVKK · Çerez Politikası · 404

## Notlar

- Tüm görseller `public/assets/` altındadır; kodda `/assets/...` mutlak yolu ile
  çağrılır (hem dev hem build'de çalışır).
- İletişim ve bayi giriş formları şu an istemci tarafında çalışır (onay mesajı
  gösterir); gerçek gönderim için bir backend endpoint'ine kolayca bağlanabilir.
- Ürün, kategori, teknoloji ve marka içerikleri `src/data/` altından yönetilir;
  yeni ürün eklemek için `data/products.ts` dosyasına kayıt eklemek yeterlidir.
