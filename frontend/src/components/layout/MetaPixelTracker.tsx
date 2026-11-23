import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { installContactTracking, track } from '../../lib/metaPixel';

// SPA rota değişimlerinde PageView gönderir (ilk yükleme index.html'deki temel kodla gider).
// Ayrıca WhatsApp / telefon tıklamaları için global dinleyiciyi kurar.
export default function MetaPixelTracker() {
  const { pathname } = useLocation();
  const lastPath = useRef(pathname);

  useEffect(() => {
    installContactTracking();
  }, []);

  useEffect(() => {
    if (lastPath.current === pathname) return; // ilk yükleme (ve aynı yol) hariç
    lastPath.current = pathname;
    track('PageView');
  }, [pathname]);

  return null;
}
