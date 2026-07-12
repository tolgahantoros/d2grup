import { useState } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import {
  LayoutDashboard, Home, Building2, Package, FolderTree, Cpu, Award, Sparkles, HelpCircle,
  Scale, Mail, Handshake, Image, Search, Users, Settings, LogOut, Menu, Phone, Navigation,
  ExternalLink, Bell,
} from 'lucide-react';
import { useAuth } from '../lib/auth';
import { AGENCY } from '../lib/brand';

const SITE_URL = 'https://d2.kcreativesunum.net';

interface NavItem { to: string; label: string; icon: typeof Home; adminOnly?: boolean }
interface NavGroup { title: string; items: NavItem[] }

const NAV: NavGroup[] = [
  { title: 'GENEL', items: [{ to: '/', label: 'Dashboard', icon: LayoutDashboard }] },
  {
    title: 'İÇERİK',
    items: [
      { to: '/anasayfa', label: 'Ana Sayfa', icon: Home },
      { to: '/menu', label: 'Menü Yönetimi', icon: Navigation },
      { to: '/kurumsal', label: 'Kurumsal', icon: Building2 },
      { to: '/urunler', label: 'Ürünler', icon: Package },
      { to: '/kategoriler', label: 'Kategoriler', icon: FolderTree },
      { to: '/teknolojiler', label: 'Teknolojiler', icon: Cpu },
      { to: '/markalar', label: 'Markalar', icon: Award },
      { to: '/kozmetik', label: 'Kozmetik', icon: Sparkles },
      { to: '/sss', label: 'Sıkça Sorulan Sorular', icon: HelpCircle },
      { to: '/iletisim', label: 'İletişim Bilgileri', icon: Phone },
      { to: '/yasal', label: 'Yasal Metinler', icon: Scale },
    ],
  },
  {
    title: 'TALEPLER',
    items: [
      { to: '/mesajlar', label: 'İletişim Mesajları', icon: Mail },
      { to: '/bayi-basvurulari', label: 'Bayi Başvuruları', icon: Handshake },
    ],
  },
  {
    title: 'SİSTEM',
    items: [
      { to: '/medya', label: 'Medya', icon: Image },
      { to: '/seo', label: 'SEO & Entegrasyonlar', icon: Search },
      { to: '/kullanicilar', label: 'Kullanıcılar', icon: Users, adminOnly: true },
      { to: '/ayarlar', label: 'Hesap Ayarları', icon: Settings },
    ],
  },
];

const TITLES: Record<string, string> = Object.fromEntries(NAV.flatMap((g) => g.items.map((i) => [i.to, i.label])));

export default function Layout({ children }: { children: React.ReactNode }) {
  const { user, logout } = useAuth();
  const { pathname } = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const pageTitle = TITLES[pathname] ?? 'Yönetim Paneli';
  const initial = (user?.name ?? user?.email ?? '?').slice(0, 1).toUpperCase();

  const SidebarContent = (
    <div className="flex flex-col h-full text-white">
      {/* Marka */}
      <div className="h-16 flex items-center gap-3 px-5 shrink-0 border-b border-white/5">
        <span className="flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-br from-emerald-400 to-teal-500 text-[#07120d] text-[14px] font-black tracking-tight shadow-lg shadow-emerald-500/25">
          D2
        </span>
        <div className="leading-none">
          <span className="text-[14px] font-bold text-white">D2 Grup</span>
          <span className="block text-[9px] text-emerald-300/60 tracking-[0.2em] mt-1 uppercase">Yönetim Paneli</span>
        </div>
      </div>

      {/* Nav */}
      <nav className="flex-grow overflow-y-auto py-4 px-3">
        {NAV.map((group) => (
          <div key={group.title} className="mb-5">
            <span className="px-3 text-[9.5px] font-bold tracking-[0.14em] text-white/30">{group.title}</span>
            <div className="mt-2 flex flex-col gap-1">
              {group.items
                .filter((it) => !it.adminOnly || user?.role === 'ADMIN')
                .map((it) => {
                  const Icon = it.icon;
                  return (
                    <NavLink
                      key={it.to}
                      to={it.to}
                      end={it.to === '/'}
                      onClick={() => setMobileOpen(false)}
                      className={({ isActive }) =>
                        `relative flex items-center gap-2.5 pl-3.5 pr-2.5 h-9 rounded-[10px] text-[13px] transition-all ${
                          isActive
                            ? 'bg-emerald-400/15 text-white font-semibold shadow-[inset_0_0_0_1px_rgba(52,211,153,0.15)]'
                            : 'text-white/55 hover:bg-white/[0.06] hover:text-white font-medium'
                        }`
                      }
                    >
                      {({ isActive }) => (
                        <>
                          {isActive && <span className="absolute left-0 top-1.5 bottom-1.5 w-[3px] rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.6)]" />}
                          <Icon size={16} className={`shrink-0 ${isActive ? 'text-emerald-400' : 'text-white/45'}`} />
                          {it.label}
                        </>
                      )}
                    </NavLink>
                  );
                })}
            </div>
          </div>
        ))}
      </nav>

      {/* User */}
      <div className="border-t border-white/5 p-3 shrink-0">
        <div className="flex items-center gap-2.5 px-2 py-1.5">
          <span className="w-8 h-8 rounded-full bg-gradient-to-br from-emerald-400 to-teal-500 text-[#07120d] flex items-center justify-center text-[13px] font-bold shrink-0">
            {initial}
          </span>
          <div className="leading-tight flex-grow min-w-0">
            <span className="block text-[12px] font-semibold text-white truncate">{user?.name ?? 'Yönetici'}</span>
            <span className="block text-[10px] text-white/40 truncate">{user?.role === 'ADMIN' ? 'Yönetici' : 'Editör'}</span>
          </div>
          <button onClick={logout} title="Çıkış yap" className="text-white/50 hover:text-red-400 p-1.5 rounded-lg hover:bg-white/5">
            <LogOut size={16} />
          </button>
        </div>
      </div>
    </div>
  );

  const sidebarBg = 'bg-gradient-to-b from-[#0f1e18] via-[#0b1712] to-[#08110d]';

  return (
    <div className="min-h-screen flex bg-app-bg">
      {/* Desktop sidebar (koyu) */}
      <aside className={`hidden lg:flex w-64 shrink-0 sticky top-0 h-screen z-20 ${sidebarBg}`}>{SidebarContent}</aside>

      {/* Mobile sidebar */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 z-50 flex">
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setMobileOpen(false)} />
          <aside className={`relative w-64 h-full shadow-2xl ${sidebarBg}`}>{SidebarContent}</aside>
        </div>
      )}

      {/* Main */}
      <div className="flex-grow min-w-0 flex flex-col">
        {/* Topbar */}
        <header className="h-16 bg-white/85 backdrop-blur-md border-b border-app-border flex items-center justify-between gap-3 px-4 md:px-8 sticky top-0 z-30">
          <div className="flex items-center gap-3 min-w-0">
            <button onClick={() => setMobileOpen(true)} className="lg:hidden text-app-ink p-1.5 -ml-1.5 rounded-lg hover:bg-zinc-100">
              <Menu size={20} />
            </button>
            <div className="min-w-0">
              <div className="text-[10px] text-app-muted uppercase tracking-[0.12em] hidden sm:block leading-none mb-1">D2 Grup Yönetim</div>
              <h2 className="text-[15px] font-bold text-app-ink truncate leading-none">{pageTitle}</h2>
            </div>
          </div>
          <div className="flex items-center gap-2">
            {/* Arama (dekoratif kısayol görünümü) */}
            <div className="hidden md:flex items-center gap-2 h-9 px-3 rounded-[10px] border border-app-border bg-zinc-50/70 text-app-muted min-w-[180px]">
              <Search size={14} />
              <input placeholder="Ara..." className="bg-transparent outline-none text-[12px] w-full placeholder-app-muted" />
            </div>
            <Link to="/mesajlar" title="Bildirimler" className="relative w-9 h-9 rounded-[10px] border border-app-border bg-white flex items-center justify-center text-app-muted hover:text-app-ink hover:bg-zinc-50 transition-colors">
              <Bell size={16} />
              <span className="absolute top-2 right-2 w-1.5 h-1.5 rounded-full bg-emerald-500" />
            </Link>
            <a
              href={SITE_URL}
              target="_blank"
              rel="noreferrer"
              className="hidden sm:inline-flex items-center gap-2 h-9 px-3 rounded-[10px] text-[12px] font-semibold border border-app-border bg-white text-app-ink hover:bg-zinc-50 shadow-sm shadow-zinc-900/[0.03] transition-colors"
            >
              Siteyi Görüntüle <ExternalLink size={13} />
            </a>
            <Link to="/ayarlar" title="Hesap Ayarları" className="w-9 h-9 rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 text-white flex items-center justify-center text-[13px] font-bold hover:opacity-90 transition-opacity shrink-0">
              {initial}
            </Link>
          </div>
        </header>

        <main className="flex-grow px-5 py-6 md:px-8 md:py-8 max-w-6xl w-full mx-auto">{children}</main>

        {/* Ajans imzası */}
        <footer className="border-t border-app-border py-5 px-6">
          <a href={AGENCY.url} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2.5 group w-fit mx-auto">
            <span className="text-[11px] text-app-muted">Tasarım &amp; Geliştirme</span>
            <img src={AGENCY.logo} alt={AGENCY.name} className="h-6 w-auto object-contain opacity-70 group-hover:opacity-100 transition-opacity" />
          </a>
        </footer>
      </div>
    </div>
  );
}
