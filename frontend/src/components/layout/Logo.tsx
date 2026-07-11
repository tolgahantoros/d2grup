import { Link } from 'react-router-dom';

interface LogoProps {
  withWordmark?: boolean;
  className?: string;
  onClick?: () => void;
}

export default function Logo({ withWordmark = false, className = '', onClick }: LogoProps) {
  return (
    <Link to="/" onClick={onClick} className={`flex items-center gap-3 group ${className}`}>
      <div className="relative flex flex-col items-center justify-center border-2 border-white bg-black/40 px-3 py-1.5 rounded-sm transition-transform duration-300 group-hover:scale-105">
        <span className="font-display font-extrabold text-2xl tracking-tighter text-white leading-none">D2</span>
        <span className="font-sans font-medium text-[8px] tracking-[0.3em] text-white/80 leading-none mt-0.5">
          GRUP
        </span>
      </div>
      {withWordmark && (
        <span className="font-display font-black text-lg tracking-tight uppercase text-white">D2 GRUP</span>
      )}
    </Link>
  );
}
