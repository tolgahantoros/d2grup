import { useState } from 'react';
import Hero from '../components/home/Hero';
import IntroVideo from '../components/home/IntroVideo';
import CategoryCards from '../components/home/CategoryCards';
import FeaturedProducts from '../components/home/FeaturedProducts';
import TechPower from '../components/home/TechPower';
import CosmeticsBrands from '../components/home/CosmeticsBrands';
import CtaBanner from '../components/sections/CtaBanner';
import VideoModal from '../components/ui/VideoModal';

export default function HomePage() {
  const [videoOpen, setVideoOpen] = useState(false);

  return (
    <>
      <Hero onPlayVideo={() => setVideoOpen(true)} />
      <IntroVideo onPlay={() => setVideoOpen(true)} />
      <CategoryCards />
      <FeaturedProducts />
      <TechPower />
      <CosmeticsBrands />
      <CtaBanner
        eyebrow="KLİNİĞİNİZE DEĞER KATIN"
        title={<>GELECEĞİN ESTETİK<br />TEKNOLOJİLERİ İLE TANIŞIN</>}
        description="Cihaz demoları, klinik veriler ve size özel finansman modelleri için uzman ekibimizle iletişime geçin."
        primary={{ label: 'İLETİŞİME GEÇ', to: '/iletisim' }}
        secondary={{ label: 'ÜRÜNLERİ KEŞFET', to: '/urunler' }}
      />
      <VideoModal open={videoOpen} onClose={() => setVideoOpen(false)} />
    </>
  );
}
