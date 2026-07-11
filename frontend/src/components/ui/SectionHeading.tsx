import { motion } from 'motion/react';
import type { ReactNode } from 'react';

interface SectionHeadingProps {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: 'left' | 'center';
  theme?: 'light' | 'dark'; // light = koyu metin (açık zemin), dark = beyaz metin (koyu zemin)
  className?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  theme = 'light',
  className = '',
}: SectionHeadingProps) {
  const isDark = theme === 'dark';
  const alignCls = align === 'center' ? 'items-center text-center mx-auto' : 'items-start text-left';
  const maxW = align === 'center' ? 'max-w-2xl' : 'max-w-xl';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5 }}
      className={`flex flex-col ${alignCls} ${className}`}
    >
      {eyebrow && (
        <span
          className={`font-display font-bold text-xs tracking-[0.3em] uppercase block mb-4 ${
            isDark ? 'text-white/50' : 'text-zinc-500'
          }`}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={`font-display font-black text-3xl md:text-4xl lg:text-5xl tracking-tight uppercase leading-[1.05] ${
          isDark ? 'text-white' : 'text-zinc-950'
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`font-sans font-light text-sm leading-relaxed mt-6 ${maxW} ${
            isDark ? 'text-white/70' : 'text-zinc-600'
          }`}
        >
          {description}
        </p>
      )}
    </motion.div>
  );
}
