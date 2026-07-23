// Görsel/asset yollarını uygulamanın temel yoluna (base) göre mutlaklaştırır.
// Böylece BrowserRouter ile derin sayfalarda (ör. /urunler/kategori/vucut)
// göreli 'assets/...' yolları kırılmaz. Mutlak URL / data / blob dokunulmaz.
export function asset(p?: string): string {
  if (!p) return '';
  if (/^(https?:)?\/\//.test(p) || p.startsWith('data:') || p.startsWith('blob:')) return p;
  const base = import.meta.env.BASE_URL || '/';
  const url = `${base}${p.replace(/^\/+/, '')}`;
  // Ürün görselleri sabit adlıdır; içerik güncellendiğinde (ör. optimizasyon) CDN/tarayıcı
  // önbelleğini kırmak için sürüm parametresi eklenir. İçerik değiştiğinde bu sayı artırılır.
  if (p.includes('assets/products/')) return `${url}?v=2`;
  return url;
}
