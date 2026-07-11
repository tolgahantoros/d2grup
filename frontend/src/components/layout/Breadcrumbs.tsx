import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

export interface Crumb {
  label: string;
  to?: string;
}

interface BreadcrumbsProps {
  items: Crumb[];
  theme?: 'light' | 'dark';
}

export default function Breadcrumbs({ items, theme = 'dark' }: BreadcrumbsProps) {
  const isDark = theme === 'dark';
  const base = isDark ? 'text-white/50' : 'text-zinc-500';
  const link = isDark ? 'hover:text-white' : 'hover:text-zinc-900';
  const current = isDark ? 'text-white' : 'text-zinc-900';

  const crumbs: Crumb[] = [{ label: 'Anasayfa', to: '/' }, ...items];

  return (
    <nav aria-label="breadcrumb" className="flex items-center flex-wrap gap-1.5">
      {crumbs.map((c, i) => {
        const last = i === crumbs.length - 1;
        return (
          <span key={`${c.label}-${i}`} className="flex items-center gap-1.5">
            {c.to && !last ? (
              <Link
                to={c.to}
                className={`font-mono text-[10px] tracking-widest uppercase transition-colors ${base} ${link}`}
              >
                {c.label}
              </Link>
            ) : (
              <span className={`font-mono text-[10px] tracking-widest uppercase ${last ? current : base}`}>
                {c.label}
              </span>
            )}
            {!last && <ChevronRight size={11} className={base} />}
          </span>
        );
      })}
    </nav>
  );
}
