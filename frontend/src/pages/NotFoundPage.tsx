import { LinkButton } from '../components/ui/Button';

export default function NotFoundPage() {
  return (
    <section className="relative min-h-[80vh] bg-brand-dark flex items-center justify-center px-6 pt-32 pb-20 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(255,255,255,0.06),transparent_50%)]" />
      <div className="relative z-10 text-center max-w-xl">
        <span className="font-display font-black text-8xl md:text-9xl tracking-tighter text-white/10 block leading-none mb-2">
          404
        </span>
        <span className="font-display font-bold text-xs tracking-[0.3em] text-white/50 block mb-5 uppercase">
          SAYFA BULUNAMADI
        </span>
        <h1 className="font-display font-black text-3xl md:text-4xl tracking-tight text-white uppercase leading-tight mb-6">
          ARADIĞINIZ SAYFAYA<br />ULAŞILAMADI
        </h1>
        <p className="font-sans font-light text-white/60 text-sm leading-relaxed mb-10 max-w-md mx-auto">
          Aradığınız sayfa taşınmış, adı değişmiş veya geçici olarak kullanım dışı olabilir. Anasayfaya dönebilir ya da
          ürünlerimizi keşfedebilirsiniz.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <LinkButton to="/" variant="light" withArrow>
            ANASAYFAYA DÖN
          </LinkButton>
          <LinkButton to="/urunler" variant="outline">
            ÜRÜNLERİ KEŞFET
          </LinkButton>
        </div>
      </div>
    </section>
  );
}
