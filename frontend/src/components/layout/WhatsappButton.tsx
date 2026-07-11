import { MessageCircle } from 'lucide-react';
import { SITE } from '../../data/site';

// Sağ altta sabit WhatsApp iletişim butonu
export default function WhatsappButton() {
  return (
    <a
      href={SITE.whatsappHref}
      target="_blank"
      rel="noreferrer"
      aria-label="WhatsApp ile iletişim"
      className="fixed bottom-6 right-6 z-40 flex items-center justify-center w-14 h-14 rounded-full bg-emerald-500 text-white shadow-lg shadow-emerald-500/30 hover:bg-emerald-600 hover:scale-105 transition-all duration-300"
    >
      <MessageCircle size={24} className="fill-white/10" />
      <span className="absolute inset-0 rounded-full bg-emerald-400/40 animate-ping -z-10" />
    </a>
  );
}
