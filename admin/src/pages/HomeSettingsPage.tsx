import { useEffect, useState } from 'react';
import { Save, Info, Plus, Trash2, Home, Megaphone, BarChart3, Play, Eye, MousePointerClick } from 'lucide-react';
import { api } from '../lib/api';
import { useToast } from '../components/Feedback';
import { Button, Input, Textarea, Field, Toggle, Spinner, PageHeader, SectionCard } from '../components/ui';
import { ImageField, StringListField } from '../components/fields';

// ---------------------------------------------------------- Tipler
interface StatItem {
  value: string;
  label: string;
  iconName: string;
}
interface HomeSettings {
  hero: {
    eyebrow: string;
    titleLine1: string;
    titleLine2: string;
    description: string;
    image: string;
    primaryCtaLabel: string;
    primaryCtaTo: string;
  };
  stats: StatItem[];
  video: {
    eyebrow: string;
    title: string;
    description: string;
    points: string[];
    youtubeId: string;
    duration: string;
  };
  sections: {
    video: boolean;
    categories: boolean;
    featured: boolean;
    technologies: boolean;
    cosmetics: boolean;
    cta: boolean;
  };
  cta: {
    eyebrow: string;
    title: string;
    description: string;
  };
}

const STAT_ICONS = ['Award', 'Gem', 'Users', 'Building2', 'Globe'];

const DEFAULTS: HomeSettings = {
  hero: { eyebrow: '', titleLine1: '', titleLine2: '', description: '', image: '', primaryCtaLabel: '', primaryCtaTo: '' },
  stats: [],
  video: { eyebrow: '', title: '', description: '', points: [], youtubeId: '', duration: '' },
  sections: { video: true, categories: true, featured: true, technologies: true, cosmetics: true, cta: true },
  cta: { eyebrow: '', title: '', description: '' },
};

const SECTION_LABELS: { key: keyof HomeSettings['sections']; label: string }[] = [
  { key: 'video', label: 'Tanıtım Videosu' },
  { key: 'categories', label: 'Kategoriler' },
  { key: 'featured', label: 'Öne Çıkanlar' },
  { key: 'technologies', label: 'Teknolojiler' },
  { key: 'cosmetics', label: 'Kozmetik' },
  { key: 'cta', label: 'Alt CTA' },
];

export default function HomeSettingsPage() {
  const toast = useToast();
  const [state, setState] = useState<HomeSettings | null>(null);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const data = await api.get<Partial<HomeSettings>>('/settings/home');
        setState({
          ...DEFAULTS,
          ...data,
          hero: { ...DEFAULTS.hero, ...(data?.hero ?? {}) },
          video: { ...DEFAULTS.video, ...(data?.video ?? {}) },
          sections: { ...DEFAULTS.sections, ...(data?.sections ?? {}) },
          cta: { ...DEFAULTS.cta, ...(data?.cta ?? {}) },
          stats: data?.stats ?? [],
        });
      } catch (e: any) {
        toast('error', e.message ?? 'Yüklenemedi.');
        setState(DEFAULTS);
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const save = async () => {
    if (!state) return;
    setSaving(true);
    try {
      await api.put('/settings/home', state);
      toast('success', 'Kaydedildi.');
    } catch (e: any) {
      toast('error', e.message ?? 'Kaydedilemedi.');
    } finally {
      setSaving(false);
    }
  };

  if (!state) return <Spinner />;

  // immutably güncelleyen yardımcılar
  const setHero = (k: keyof HomeSettings['hero'], v: string) =>
    setState((s) => (s ? { ...s, hero: { ...s.hero, [k]: v } } : s));
  const setVideo = (k: keyof HomeSettings['video'], v: string | string[]) =>
    setState((s) => (s ? { ...s, video: { ...s.video, [k]: v } } : s));
  const setCta = (k: keyof HomeSettings['cta'], v: string) =>
    setState((s) => (s ? { ...s, cta: { ...s.cta, [k]: v } } : s));
  const setSection = (k: keyof HomeSettings['sections'], v: boolean) =>
    setState((s) => (s ? { ...s, sections: { ...s.sections, [k]: v } } : s));

  const setStat = (i: number, k: keyof StatItem, v: string) =>
    setState((s) => (s ? { ...s, stats: s.stats.map((x, j) => (j === i ? { ...x, [k]: v } : x)) } : s));
  const addStat = () =>
    setState((s) => (s ? { ...s, stats: [...s.stats, { value: '', label: '', iconName: STAT_ICONS[0] }] } : s));
  const removeStat = (i: number) =>
    setState((s) => (s ? { ...s, stats: s.stats.filter((_, j) => j !== i) } : s));

  return (
    <div>
      <PageHeader
        icon={<Home size={20} />}
        title="Ana Sayfa Ayarları"
        subtitle="Ana sayfadaki bölümlerin içerik ve görünürlüğünü yönetin"
        actions={
          <Button icon={<Save size={15} />} loading={saving} onClick={save}>
            Kaydet
          </Button>
        }
      />

      <div className="max-w-3xl">
        <div className="flex items-start gap-2.5 rounded-xl border border-emerald-100 bg-emerald-50/60 px-4 py-3 mb-6">
          <Info size={16} className="text-emerald-600 shrink-0 mt-0.5" />
          <p className="text-[12px] text-app-muted leading-snug">
            Öne çıkan ürünler, kategoriler, teknolojiler ve markalar kendi modüllerinden yönetilir. (Ürünler
            modülündeki &apos;Öne çıkan&apos; bayrağı ile.)
          </p>
        </div>

        <div className="flex flex-col gap-5">
          {/* Hero */}
          <SectionCard icon={<Megaphone size={16} />} title="Hero (Üst Bölüm)" description="Ana sayfanın en üst tanıtım alanı">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <Field label="Üst Etiket (Eyebrow)">
                <Input value={state.hero.eyebrow} onChange={(e) => setHero('eyebrow', e.target.value)} />
              </Field>
              <Field label="Başlık — 1. Satır">
                <Input value={state.hero.titleLine1} onChange={(e) => setHero('titleLine1', e.target.value)} />
              </Field>
              <Field label="Başlık — 2. Satır">
                <Input value={state.hero.titleLine2} onChange={(e) => setHero('titleLine2', e.target.value)} />
              </Field>
              <div className="sm:col-span-2">
                <Field label="Açıklama">
                  <Textarea rows={3} value={state.hero.description} onChange={(e) => setHero('description', e.target.value)} />
                </Field>
              </div>
              <div className="sm:col-span-2">
                <Field label="Görsel">
                  <ImageField value={state.hero.image} onChange={(v) => setHero('image', v)} />
                </Field>
              </div>
              <Field label="Buton Metni">
                <Input value={state.hero.primaryCtaLabel} onChange={(e) => setHero('primaryCtaLabel', e.target.value)} />
              </Field>
              <Field label="Buton Bağlantısı" hint="Örn: /urunler">
                <Input value={state.hero.primaryCtaTo} onChange={(e) => setHero('primaryCtaTo', e.target.value)} />
              </Field>
            </div>
          </SectionCard>

          {/* İstatistikler */}
          <SectionCard icon={<BarChart3 size={16} />} title="İstatistikler" description="Hero altında gösterilen sayısal vurgular">
            <div className="flex flex-col gap-2.5">
              {state.stats.map((stat, i) => (
                <div key={i} className="flex items-center gap-2 bg-zinc-50/60 border border-app-border rounded-xl p-2">
                  <Input
                    value={stat.value}
                    onChange={(e) => setStat(i, 'value', e.target.value)}
                    placeholder="Değer (örn: 25+)"
                    className="w-32"
                  />
                  <Input
                    value={stat.label}
                    onChange={(e) => setStat(i, 'label', e.target.value)}
                    placeholder="Etiket"
                  />
                  <select
                    value={stat.iconName}
                    onChange={(e) => setStat(i, 'iconName', e.target.value)}
                    className="h-9 px-2.5 rounded-[10px] border border-app-border bg-white text-[13px] text-app-ink outline-none focus:border-emerald-400 focus:ring-4 focus:ring-emerald-500/10 transition shrink-0"
                  >
                    {STAT_ICONS.map((ic) => (
                      <option key={ic} value={ic}>
                        {ic}
                      </option>
                    ))}
                  </select>
                  <button
                    type="button"
                    onClick={() => removeStat(i)}
                    className="text-app-muted hover:text-red-500 p-1.5 shrink-0"
                  >
                    <Trash2 size={14} />
                  </button>
                </div>
              ))}
              <button
                type="button"
                onClick={addStat}
                className="self-start inline-flex items-center gap-1.5 text-[12px] font-semibold text-emerald-600 hover:text-emerald-700 mt-1"
              >
                <Plus size={14} /> İstatistik ekle
              </button>
            </div>
          </SectionCard>

          {/* Tanıtım Videosu */}
          <SectionCard icon={<Play size={16} />} title="Tanıtım Videosu" description="Ana sayfada gösterilen video bölümü">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <Field label="Üst Etiket (Eyebrow)">
                <Input value={state.video.eyebrow} onChange={(e) => setVideo('eyebrow', e.target.value)} />
              </Field>
              <Field label="Başlık">
                <Input value={state.video.title} onChange={(e) => setVideo('title', e.target.value)} />
              </Field>
              <div className="sm:col-span-2">
                <Field label="Açıklama">
                  <Textarea rows={3} value={state.video.description} onChange={(e) => setVideo('description', e.target.value)} />
                </Field>
              </div>
              <div className="sm:col-span-2">
                <Field label="Maddeler">
                  <StringListField
                    value={state.video.points}
                    onChange={(v) => setVideo('points', v)}
                    placeholder="Öne çıkan madde"
                  />
                </Field>
              </div>
              <Field label="YouTube ID" hint="Örn: dQw4w9WgXcQ">
                <Input value={state.video.youtubeId} onChange={(e) => setVideo('youtubeId', e.target.value)} />
              </Field>
              <Field label="Süre" hint="Örn: 2:45">
                <Input value={state.video.duration} onChange={(e) => setVideo('duration', e.target.value)} />
              </Field>
            </div>
          </SectionCard>

          {/* Bölüm Görünürlüğü */}
          <SectionCard icon={<Eye size={16} />} title="Bölüm Görünürlüğü" description="Ana sayfada gösterilecek bölümleri seçin">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {SECTION_LABELS.map(({ key, label }) => (
                <div key={key} className="bg-zinc-50/60 border border-app-border rounded-xl px-3 py-2.5">
                  <Toggle
                    checked={state.sections[key]}
                    onChange={(v) => setSection(key, v)}
                    label={label}
                  />
                </div>
              ))}
            </div>
          </SectionCard>

          {/* Alt CTA */}
          <SectionCard icon={<MousePointerClick size={16} />} title="Alt CTA" description="Sayfa altındaki harekete geçirici alan">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <Field label="Üst Etiket (Eyebrow)">
                <Input value={state.cta.eyebrow} onChange={(e) => setCta('eyebrow', e.target.value)} />
              </Field>
              <Field label="Başlık">
                <Input value={state.cta.title} onChange={(e) => setCta('title', e.target.value)} />
              </Field>
              <div className="sm:col-span-2">
                <Field label="Açıklama">
                  <Textarea rows={3} value={state.cta.description} onChange={(e) => setCta('description', e.target.value)} />
                </Field>
              </div>
            </div>
          </SectionCard>

          <div>
            <Button icon={<Save size={15} />} loading={saving} onClick={save}>
              Kaydet
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
