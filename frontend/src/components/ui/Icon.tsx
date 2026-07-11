import {
  Award,
  Gem,
  Users,
  Building2,
  Globe,
  Zap,
  Waves,
  Target,
  Sun,
  Activity,
  Snowflake,
  Dumbbell,
  AudioWaveform,
  ShieldCheck,
  Headphones,
  HeartHandshake,
  type LucideProps,
} from 'lucide-react';
import type { ComponentType } from 'react';

// Veri dosyalarındaki iconName string'lerini lucide bileşenlerine eşler.
const ICONS: Record<string, ComponentType<LucideProps>> = {
  Award,
  Gem,
  Users,
  Building2,
  Globe,
  Zap,
  Waves,
  Target,
  Sun,
  Activity,
  Snowflake,
  Dumbbell,
  AudioWaveform,
  ShieldCheck,
  Headphones,
  HeartHandshake,
};

interface IconProps extends LucideProps {
  name: string;
}

export default function Icon({ name, ...props }: IconProps) {
  const Cmp = ICONS[name] ?? Zap;
  return <Cmp {...props} />;
}
