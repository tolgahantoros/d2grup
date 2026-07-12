import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Package, FolderTree, Cpu, Award, Sparkles, HelpCircle, Mail, Handshake, Plus, ArrowRight,
  Clock, ExternalLink, Star, CheckCircle2, Image as ImageIcon, Home, LayoutGrid, ArrowUpRight,
} from 'lucide-react';
import { api } from '../lib/api';
import { useAuth } from '../lib/auth';
import { Card, Spinner, Badge } from '../components/ui';

const SITE_URL = 'https://d2.kcreativesunum.net';

interface Dash {
  counts: { products: number; activeProducts: number; featured: number; categories: number; technologies: number; brands: number; cosmetics: number; faq: number };
  byCategory: { title: string; subtitle: string; count: number }[];
  contact: { total: number; unread: number };
  dealers: { total: number; unread: number };
  recent: { id: number; entity: string; action: string; title: string | null; user: string | null; createdAt: string }[];
}

const ENTITY_LABEL: Record<string, string> = {
  product: 'Ürün', category: 'Kategori', technology: 'Teknoloji', brand: 'Marka', faq: 'SSS',
  cosmetic: 'Kozmetik', legal: 'Yasal', setting: 'Ayar', seo: 'SEO',
};
const ACTION_TONE: Record<string, 'green' | 'indigo' | 'red'> = { create: 'green', update: 'indigo', delete: 'red' };
const ACTION_LABEL: Record<string, string> = { create: 'eklendi', update: 'güncellendi', delete: 'silindi' };

const DONUT_COLORS = ['#10b981', '#0ea5e9', '#8b5cf6', '#f59e0b', '#f43f5e', '#14b8a6'];

// Bağımlılıksız SVG donut grafik
function Donut({ segments, total }: { segments: { label: string; value: number; color: string }[]; total: number }) {
  const size = 168, thickness = 22, r = (size - thickness) / 2, c = 2 * Math.PI * r;
  const t = total || 1;
  let off = 0;
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="shrink-0">
      <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="#eef1f4" strokeWidth={thickness} />
      <g transform={`rotate(-90 ${size / 2} ${size / 2})`}>
        {segments.map((s, i) => {
          const len = (s.value / t) * c;
          const seg = (
            <circle key={i} cx={size / 2} cy={size / 2} r={r} fill="none" stroke={s.color} strokeWidth={thickness}
              strokeDasharray={`${len} ${c - len}`} strokeDashoffset={-off} />
          );
          off += len;
          return seg;
        })}
      </g>
      <text x="50%" y="47%" textAnchor="middle" style={{ fontSize: 30, fontWeight: 700, fill: '#1a1d21' }}>{total}</text>
      <text x="50%" y="60%" textAnchor="middle" style={{ fontSize: 11, fill: '#6b7280' }}>Toplam Ürün</text>
    </svg>
  );
}

export default function DashboardPage() {
  const { user } = useAuth();
  const [data, setData] = useState<Dash | null>(null);

  useEffect(() => {
    api.get<Dash>('/dashboard').then(setData).catch(() => {});
  }, []);

  if (!data) return <Spinner />;

  const today = new Date().toLocaleDateString('tr-TR', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });

  const stats = [
    { label: 'Ürün', value: data.counts.products, icon: Package, to: '/urunler', c: 'emerald', sub: `${data.counts.featured} öne çıkan` },
    { label: 'Kategori', value: data.counts.categories, icon: FolderTree, to: '/kategoriler', c: 'sky' },
    { label: 'Teknoloji', value: data.counts.technologies, icon: Cpu, to: '/teknolojiler', c: 'violet' },
    { label: 'Marka', value: data.counts.brands, icon: Award, to: '/markalar', c: 'amber' },
    { label: 'Kozmetik', value: data.counts.cosmetics, icon: Sparkles, to: '/kozmetik', c: 'rose' },
    { label: 'SSS', value: data.counts.faq, icon: HelpCircle, to: '/sss', c: 'teal' },
  ];
  const COL: Record<string, string> = {
    emerald: 'from-emerald-50 to-emerald-100/50 text-emerald-600 ring-emerald-600/10',
    sky: 'from-sky-50 to-sky-100/50 text-sky-600 ring-sky-600/10',
    violet: 'from-violet-50 to-violet-100/50 text-violet-600 ring-violet-600/10',
    amber: 'from-amber-50 to-amber-100/50 text-amber-600 ring-amber-600/10',
    rose: 'from-rose-50 to-rose-100/50 text-rose-600 ring-rose-600/10',
    teal: 'from-teal-50 to-teal-100/50 text-teal-600 ring-teal-600/10',
  };

  const donutTotal = data.byCategory.reduce((s, x) => s + x.count, 0);
  const segments = data.byCategory.map((c, i) => ({ label: `${c.title}`, value: c.count, color: DONUT_COLORS[i % DONUT_COLORS.length] }));

  const quick = [
    { label: 'Yeni ürün ekle', to: '/urunler', icon: Plus },
    { label: 'Ana sayfayı düzenle', to: '/anasayfa', icon: Home },
    { label: 'Medya yükle', to: '/medya', icon: ImageIcon },
    { label: 'İçerik kategorileri', to: '/kategoriler', icon: LayoutGrid },
  ];

  return (
    <>
      {/* Karşılama banner */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-emerald-800 via-emerald-700 to-teal-600 text-white p-6 md:p-7 mb-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_18%,rgba(255,255,255,0.16),transparent_42%)]" />
        <div className="absolute -bottom-20 -right-10 w-72 h-72 rounded-full bg-white/10 blur-3xl pointer-events-none" />
        <div className="absolute top-6 right-40 w-40 h-40 rounded-full bg-teal-300/20 blur-3xl pointer-events-none" />
        <div className="relative flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-[22px] md:text-[25px] font-bold tracking-tight">Hoş geldiniz, {user?.name ?? 'Yönetici'} 👋</h1>
            <p className="text-white/75 text-[13px] mt-1.5 capitalize">{today}</p>
          </div>
          <div className="flex items-center gap-2">
            <a href={SITE_URL} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 h-9 px-3.5 rounded-[10px] text-[13px] font-semibold bg-white/15 border border-white/20 text-white hover:bg-white/25 backdrop-blur transition-colors">
              Siteyi Görüntüle <ExternalLink size={14} />
            </a>
            <Link to="/urunler" className="inline-flex items-center gap-2 h-9 px-3.5 rounded-[10px] text-[13px] font-semibold bg-white text-emerald-700 hover:bg-emerald-50 transition-colors shadow-sm">
              <Plus size={15} /> Yeni Ürün
            </Link>
          </div>
        </div>
      </div>

      {/* Renkli istatistik kartları */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mb-5">
        {stats.map((s) => {
          const Icon = s.icon;
          return (
            <Link key={s.label} to={s.to} className="group">
              <Card className="p-4 h-full transition-all group-hover:-translate-y-0.5 group-hover:shadow-[0_10px_28px_rgba(16,24,40,0.08)]">
                <div className="flex items-center justify-between mb-3.5">
                  <span className={`w-9 h-9 rounded-xl bg-gradient-to-br ring-1 flex items-center justify-center ${COL[s.c]}`}>
                    <Icon size={16} />
                  </span>
                  <ArrowUpRight size={14} className="text-zinc-300 group-hover:text-app-ink transition-colors" />
                </div>
                <div className="text-[26px] font-bold text-app-ink leading-none tracking-tight">{s.value}</div>
                <div className="text-[12px] text-app-muted mt-1.5">{s.label}</div>
                {s.sub && (
                  <div className="text-[10px] text-amber-600 mt-2 flex items-center gap-1">
                    <Star size={9} className="fill-amber-500 text-amber-500" />{s.sub}
                  </div>
                )}
              </Card>
            </Link>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-4">
        {/* Donut: içerik dağılımı */}
        <Card className="lg:col-span-2 p-5">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-[14px] font-bold text-app-ink">İçerik Dağılımı</h2>
            <span className="text-[11px] text-app-muted">{data.counts.activeProducts}/{data.counts.products} ürün aktif</span>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <Donut segments={segments} total={donutTotal} />
            <div className="flex-grow w-full flex flex-col gap-2.5">
              {data.byCategory.map((c, i) => {
                const pct = donutTotal ? Math.round((c.count / donutTotal) * 100) : 0;
                return (
                  <div key={c.title} className="flex items-center gap-3">
                    <span className="w-2.5 h-2.5 rounded-full shrink-0" style={{ background: DONUT_COLORS[i % DONUT_COLORS.length] }} />
                    <span className="text-[12px] font-medium text-app-ink flex-grow truncate">{c.title} <span className="text-app-muted font-normal">{c.subtitle}</span></span>
                    <span className="text-[12px] text-app-muted">{pct}%</span>
                    <span className="text-[12px] font-bold text-app-ink w-6 text-right">{c.count}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </Card>

        {/* Talepler */}
        <div className="flex flex-col gap-4">
          <Link to="/mesajlar">
            <Card className="p-4 transition-all hover:-translate-y-0.5 hover:shadow-[0_10px_28px_rgba(16,24,40,0.08)]">
              <div className="flex items-center justify-between">
                <span className="w-9 h-9 rounded-xl bg-gradient-to-br from-sky-50 to-sky-100/50 ring-1 ring-sky-600/10 text-sky-600 flex items-center justify-center"><Mail size={16} /></span>
                {data.contact.unread > 0 && <Badge tone="red">{data.contact.unread} yeni</Badge>}
              </div>
              <div className="text-[24px] font-bold text-app-ink mt-3 leading-none">{data.contact.total}</div>
              <div className="text-[12px] text-app-muted mt-1.5">İletişim Mesajları</div>
            </Card>
          </Link>
          <Link to="/bayi-basvurulari">
            <Card className="p-4 transition-all hover:-translate-y-0.5 hover:shadow-[0_10px_28px_rgba(16,24,40,0.08)]">
              <div className="flex items-center justify-between">
                <span className="w-9 h-9 rounded-xl bg-gradient-to-br from-violet-50 to-violet-100/50 ring-1 ring-violet-600/10 text-violet-600 flex items-center justify-center"><Handshake size={16} /></span>
                {data.dealers.unread > 0 && <Badge tone="red">{data.dealers.unread} yeni</Badge>}
              </div>
              <div className="text-[24px] font-bold text-app-ink mt-3 leading-none">{data.dealers.total}</div>
              <div className="text-[12px] text-app-muted mt-1.5">Bayi Başvuruları</div>
            </Card>
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Son işlemler */}
        <Card className="lg:col-span-2 p-5">
          <div className="flex items-center gap-2 mb-4"><Clock size={15} className="text-app-muted" /><h2 className="text-[14px] font-bold text-app-ink">Son Düzenlenen İçerikler</h2></div>
          {data.recent.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-10 text-center">
              <CheckCircle2 size={26} className="text-zinc-300 mb-2" />
              <p className="text-[13px] text-app-muted">Henüz bir işlem yapılmadı.</p>
              <p className="text-[11px] text-app-muted mt-0.5">İçerik ekleyip düzenledikçe burada görünecek.</p>
            </div>
          ) : (
            <div className="flex flex-col divide-y divide-app-border">
              {data.recent.map((r) => (
                <div key={r.id} className="flex items-center justify-between py-2.5 text-[13px] gap-3">
                  <span className="flex items-center gap-2 min-w-0">
                    <Badge tone={ACTION_TONE[r.action] ?? 'gray'}>{ENTITY_LABEL[r.entity] ?? r.entity}</Badge>
                    <span className="text-app-ink truncate"><span className="font-medium">{r.title ?? '—'}</span> {ACTION_LABEL[r.action] ?? r.action}</span>
                  </span>
                  <span className="text-app-muted text-[11px] shrink-0">{new Date(r.createdAt).toLocaleString('tr-TR', { day: '2-digit', month: 'short', hour: '2-digit', minute: '2-digit' })}</span>
                </div>
              ))}
            </div>
          )}
        </Card>

        {/* Hızlı işlemler */}
        <Card className="p-5">
          <h2 className="text-[14px] font-bold text-app-ink mb-4">Hızlı İşlemler</h2>
          <div className="flex flex-col gap-1">
            {quick.map((q) => {
              const Icon = q.icon;
              return (
                <Link key={q.label} to={q.to} className="flex items-center gap-2.5 px-2.5 h-10 rounded-[10px] text-[13px] font-medium text-app-ink hover:bg-zinc-50 transition-colors group">
                  <span className="w-7 h-7 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center"><Icon size={14} /></span>
                  {q.label}
                  <ArrowRight size={14} className="ml-auto text-zinc-300 group-hover:text-emerald-500 transition-colors" />
                </Link>
              );
            })}
          </div>
        </Card>
      </div>
    </>
  );
}
