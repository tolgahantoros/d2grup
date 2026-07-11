import { motion } from 'motion/react';
import type { ReactNode } from 'react';
import { LinkButton } from '../ui/Button';

interface CtaBannerProps {
  eyebrow?: string;
  title: ReactNode;
  description?: string;
  primary?: { label: string; to: string };
  secondary?: { label: string; to: string };
}

// İç sayfaların altında kullanılan koyu, tam genişlik CTA bandı.
export default function CtaBanner({
  eyebrow = 'D2 GRUP FARKI',
  title,
  description,
  primary = { label: 'İLETİŞİME GEÇ', to: '/iletisim' },
  secondary,
}: CtaBannerProps) {
  return (
    <section className="bg-brand-dark py-24 px-6 md:px-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.05),transparent_55%)]" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-white/3 rounded-full blur-[120px] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto text-center relative z-10 flex flex-col items-center"
      >
        <span className="font-display font-bold text-xs tracking-[0.3em] text-white/50 block mb-5 uppercase">
          {eyebrow}
        </span>
        <h2 className="font-display font-black text-3xl md:text-4xl lg:text-5xl tracking-tight text-white uppercase leading-[1.05] mb-6 text-balance">
          {title}
        </h2>
        {description && (
          <p className="font-sans font-light text-white/70 text-sm md:text-base leading-relaxed max-w-2xl mb-10">
            {description}
          </p>
        )}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <LinkButton to={primary.to} variant="light" withArrow>
            {primary.label}
          </LinkButton>
          {secondary && (
            <LinkButton to={secondary.to} variant="outline">
              {secondary.label}
            </LinkButton>
          )}
        </div>
      </motion.div>
    </section>
  );
}
