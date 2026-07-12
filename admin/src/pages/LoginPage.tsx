import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { LogIn, Loader2, Package, Image as ImageIcon, ShieldCheck, Check } from 'lucide-react';
import { useAuth } from '../lib/auth';
import { AGENCY } from '../lib/brand';

const FEATURES = [
  { icon: Package, text: 'Ürün, kategori ve içerik yönetimi' },
  { icon: ImageIcon, text: 'Medya, SEO ve entegrasyonlar' },
  { icon: ShieldCheck, text: 'Güvenli, rol tabanlı erişim' },
];

export default function LoginPage() {
  const { login, user } = useAuth();
  const nav = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (user) nav('/', { replace: true });
  }, [user, nav]);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      await login(email, password);
      nav('/', { replace: true });
    } catch (err: any) {
      setError(err.message ?? 'Giriş başarısız.');
    } finally {
      setLoading(false);
    }
  };

  const inputCls =
    'w-full h-11 px-3.5 rounded-lg border border-app-border bg-white text-[14px] text-app-ink placeholder-zinc-400 outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100 transition';

  return (
    <div className="min-h-screen flex">
      {/* SOL PANEL — zümrüt yeşili marka alanı */}
      <div className="hidden lg:flex lg:w-[46%] relative overflow-hidden bg-gradient-to-br from-emerald-900 via-emerald-700 to-teal-600 text-white p-12 xl:p-14 flex-col justify-between">
        {/* Işık efektleri */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(255,255,255,0.18),transparent_40%)]" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-white/10 blur-3xl pointer-events-none" />
        <div className="absolute top-1/3 right-0 w-72 h-72 rounded-full bg-teal-300/20 blur-3xl pointer-events-none" />

        {/* Marka */}
        <div className="relative z-10 flex items-center gap-3">
          <span className="w-11 h-11 rounded-xl bg-white/15 border border-white/25 backdrop-blur flex items-center justify-center text-[17px] font-extrabold tracking-tight">
            D2
          </span>
          <div className="leading-none">
            <div className="font-bold text-[16px]">D2 Grup</div>
            <div className="text-[10px] text-white/70 tracking-[0.2em] uppercase mt-1">Yönetim Paneli</div>
          </div>
        </div>

        {/* Başlık + özellikler */}
        <div className="relative z-10 max-w-md">
          <h2 className="text-[30px] xl:text-[34px] font-bold leading-tight mb-4">
            İçeriğinizi tek panelden yönetin.
          </h2>
          <p className="text-white/80 text-[14px] leading-relaxed mb-9">
            Ürünler, kategoriler, teknolojiler, medya ve gelen talepleri kolayca yönetin.
            Yaptığınız değişiklikler anında web sitenize yansır.
          </p>
          <ul className="flex flex-col gap-4">
            {FEATURES.map(({ icon: Icon, text }) => (
              <li key={text} className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-white/15 border border-white/20 flex items-center justify-center shrink-0">
                  <Icon size={15} />
                </span>
                <span className="text-[14px] text-white/90">{text}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Ajans imzası */}
        <a
          href={AGENCY.url}
          target="_blank"
          rel="noreferrer"
          className="relative z-10 flex items-center gap-2.5 group w-fit"
        >
          <span className="text-[11px] text-white/55 group-hover:text-white/80 transition-colors">Tasarım &amp; Geliştirme</span>
          <img
            src={AGENCY.logo}
            alt={AGENCY.name}
            className="h-5 w-auto object-contain brightness-0 invert opacity-75 group-hover:opacity-100 transition-opacity"
          />
        </a>
      </div>

      {/* SAĞ PANEL — giriş formu */}
      <div className="flex-1 flex items-center justify-center p-6 sm:p-10 bg-app-bg">
        <div className="w-full max-w-sm">
          {/* Mobil marka */}
          <div className="lg:hidden flex items-center gap-2.5 mb-8 justify-center">
            <span className="w-10 h-10 rounded-xl bg-app-ink text-white flex items-center justify-center text-[15px] font-extrabold">D2</span>
            <div className="leading-none">
              <div className="font-bold text-[15px] text-app-ink">D2 Grup</div>
              <div className="text-[10px] text-app-muted tracking-[0.18em] uppercase mt-0.5">Yönetim Paneli</div>
            </div>
          </div>

          <div className="mb-7">
            <h1 className="text-[24px] font-bold text-app-ink tracking-tight">Giriş Yap</h1>
            <p className="text-[13px] text-app-muted mt-1.5">Yönetim paneline devam etmek için giriş yapın.</p>
          </div>

          <form onSubmit={submit} className="flex flex-col gap-4">
            {error && (
              <div className="bg-red-50 border border-red-100 text-red-600 text-[12px] rounded-lg px-3.5 py-3">{error}</div>
            )}
            <label className="flex flex-col gap-1.5">
              <span className="text-[12px] font-semibold text-app-ink">E-posta</span>
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="admin@d2grup.com" required autoFocus className={inputCls} />
            </label>
            <label className="flex flex-col gap-1.5">
              <span className="text-[12px] font-semibold text-app-ink">Şifre</span>
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="••••••••" required className={inputCls} />
            </label>
            <button
              type="submit"
              disabled={loading}
              className="mt-1 h-11 w-full inline-flex items-center justify-center gap-2 rounded-lg text-[14px] font-semibold text-white bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 shadow-sm shadow-emerald-600/20 transition-all disabled:opacity-60"
            >
              {loading ? <Loader2 size={16} className="animate-spin" /> : <LogIn size={16} />}
              Giriş Yap
            </button>
          </form>

          <a
            href={AGENCY.url}
            target="_blank"
            rel="noreferrer"
            className="flex lg:hidden items-center justify-center gap-2 group mt-8"
          >
            <span className="text-[11px] text-app-muted">Tasarım &amp; Geliştirme</span>
            <img src={AGENCY.logo} alt={AGENCY.name} className="h-5 w-auto object-contain opacity-70 group-hover:opacity-100 transition-opacity" />
          </a>
        </div>
      </div>
    </div>
  );
}
