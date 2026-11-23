// Meta (Facebook) Pixel yardımcıları.
// Temel kod + alan adı doğrulama etiketi statik index.html <head> içinde yüklenir;
// burada yalnızca SPA'ya özgü olaylar (rota PageView, Contact, Lead, ViewContent) gönderilir.

type Fbq = (...args: unknown[]) => void;

declare global {
  interface Window {
    fbq?: Fbq;
  }
}

export function track(event: string, params?: Record<string, unknown>) {
  if (typeof window === 'undefined' || !window.fbq) return;
  if (params) window.fbq('track', event, params);
  else window.fbq('track', event);
}

// Sitedeki tüm WhatsApp ve tel: linklerini (header, footer, iletişim, CTA, float buton,
// panelden gelen dinamik içerik dahil) tek noktadan yakalar.
let contactListenerInstalled = false;
export function installContactTracking() {
  if (contactListenerInstalled || typeof document === 'undefined') return;
  contactListenerInstalled = true;
  document.addEventListener(
    'click',
    (e) => {
      const target = e.target as Element | null;
      const link = target?.closest?.('a[href]') as HTMLAnchorElement | null;
      if (!link) return;
      const href = (link.getAttribute('href') || '').trim().toLowerCase();
      if (href.startsWith('tel:')) {
        track('Contact', { method: 'phone' });
      } else if (
        href.includes('wa.me/') ||
        href.includes('whatsapp.com/') ||
        href.startsWith('whatsapp:')
      ) {
        track('Contact', { method: 'whatsapp' });
      }
    },
    true,
  );
}
