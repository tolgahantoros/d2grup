import { Link } from 'react-router-dom';
import logoUrl from '../../assets/d2-logo.png';

interface LogoProps {
  withWordmark?: boolean;
  className?: string;
  onClick?: () => void;
}

export default function Logo({ withWordmark = false, className = '', onClick }: LogoProps) {
  return (
    <Link to="/" onClick={onClick} className={`inline-flex items-center group ${className}`} aria-label="D2 Grup">
      <img
        src={logoUrl}
        alt="D2 Grup"
        className={`${withWordmark ? 'h-14 md:h-16' : 'h-10 md:h-12'} w-auto object-contain transition-transform duration-300 group-hover:scale-105 drop-shadow-[0_0_20px_rgba(32,178,170,0.25)]`}
      />
    </Link>
  );
}
