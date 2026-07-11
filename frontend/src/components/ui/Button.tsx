import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import type { ReactNode } from 'react';

type Variant = 'light' | 'dark' | 'outline' | 'outline-dark';

interface BaseProps {
  variant?: Variant;
  withArrow?: boolean;
  className?: string;
  children: ReactNode;
}

const VARIANTS: Record<Variant, string> = {
  // Koyu zemin üzerinde beyaz buton
  light: 'bg-white text-black hover:bg-zinc-200',
  // Açık zemin üzerinde siyah buton
  dark: 'bg-zinc-950 text-white hover:bg-zinc-800',
  // Koyu zemin üzerinde çerçeveli buton
  outline: 'border border-white/30 text-white hover:bg-white hover:text-black hover:border-white',
  // Açık zemin üzerinde çerçeveli buton
  'outline-dark': 'border border-zinc-300 text-zinc-900 hover:bg-zinc-950 hover:text-white hover:border-zinc-950',
};

const BASE =
  'inline-flex items-center justify-center gap-3 font-semibold text-xs tracking-widest uppercase py-4 px-8 transition-all duration-300 rounded-none';

interface LinkButtonProps extends BaseProps {
  to: string;
}

export function LinkButton({ to, variant = 'light', withArrow, className = '', children }: LinkButtonProps) {
  const external = to.startsWith('http') || to.startsWith('tel:') || to.startsWith('mailto:');
  const cls = `${BASE} ${VARIANTS[variant]} ${className}`;
  if (external) {
    return (
      <a href={to} target={to.startsWith('http') ? '_blank' : undefined} rel="noreferrer" className={cls}>
        {children}
        {withArrow && <ArrowRight size={14} />}
      </a>
    );
  }
  return (
    <Link to={to} className={cls}>
      {children}
      {withArrow && <ArrowRight size={14} />}
    </Link>
  );
}

interface ActionButtonProps extends BaseProps {
  type?: 'button' | 'submit';
  onClick?: () => void;
  disabled?: boolean;
}

export function ActionButton({
  variant = 'light',
  withArrow,
  className = '',
  children,
  type = 'button',
  onClick,
  disabled,
}: ActionButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${BASE} ${VARIANTS[variant]} ${className} disabled:opacity-50 disabled:cursor-not-allowed`}
    >
      {children}
      {withArrow && <ArrowRight size={14} />}
    </button>
  );
}
