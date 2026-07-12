import { useEffect, useState } from 'react';
import { Save, Plus, Trash2, Building2, FileText, Image as ImageIcon, BarChart3, Search } from 'lucide-react';
import { api } from '../lib/api';
import { useToast } from '../components/Feedback';
import { Button, Input, Textarea, Field, Spinner, PageHeader, SectionCard } from '../components/ui';
import { ImageField } from '../components/fields';

interface StatItem { value: string; label: string; iconName: string }
interface AboutSettings {
  eyebrow: string;
  title: string;
  description: string;
  story: string;
  heroImage: string;
  stats: StatItem[];
  seoTitle: string;
  seoDescription: string;
}

const STAT_ICONS = ['Award', 'Gem', 'Users', 'Building2', 'Globe'];

const DEFAULTS: AboutSettings = {
  eyebrow: '', title: '', description: '', story: '', heroImage: '', stats: [], seoTitle: '', seoDescription: '',
};

export default function AboutSettingsPage() {
  const toast = useToast();
  const [state, setState] = useState<AboutSettings | null>(null);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const data = await api.get<Partial<AboutSettings>>('/settings/about');
        setState({ ...DEFAULTS, ...data, stats: data?.stats ?? [] });
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
      await api.put('/settings/about', state);
      toast('success', 'Kaydedildi.');
    } catch (e: any) {
      toast('error', e.message ?? 'Kaydedilemedi.');
    } finally {
      setSaving(false);
    }
  };

  if (!state) return <Spinner />;

  const set = (k: keyof AboutSettings, v: string) => setState((s) => (s ? { ...s, [k]: v } : s));
  const setStat = (i: number, k: keyof StatItem, v: string) =>
    setState((s) => (s ? { ...s, stats: s.stats.map((x, j) => (j === i ? { ...x, [k]: v } : x)) } : s));
  const addStat = () => setState((s) => (s ? { ...s, stats: [...s.stats, { value: '', label: '', iconName: STAT_ICONS[0] }] } : s));
  const removeStat = (i: number) => setState((s) => (s ? { ...s, stats: s.stats.filter((_, j) => j !== i) } : s));

  const selectCls = 'h-9 px-2.5 rounded-[10px] border border-app-border bg-white text-[13px] text-app-ink outline-none focus:border-emerald-400 focus:ring-4 focus:ring-emerald-500/10 transition shrink-0';

  return (
    <div>
      <PageHeader
        icon={<Building2 size={20} />}
        title="Kurumsal İçerik"
        subtitle="Hakkımızda sayfasının başlık, görsel, istatistik ve SEO içeriğini yönetin"
        actions={<Button icon={<Save size={15} />} loading={saving} onClick={save}>Kaydet</Button>}
      />

      <div className="flex flex-col gap-5 max-w-3xl">
        <SectionCard icon={<FileText size={16} />} title="Başlık Bilgileri" description="Sayfanın üst başlık ve tanıtım metinleri">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Field label="Üst Etiket (Eyebrow)">
              <Input value={state.eyebrow} onChange={(e) => set('eyebrow', e.target.value)} placeholder="KURUMSAL" />
            </Field>
            <Field label="Başlık">
              <Input value={state.title} onChange={(e) => set('title', e.target.value)} placeholder="BİZ KİMİZ" />
            </Field>
            <div className="sm:col-span-2">
              <Field label="Açıklama"><Textarea rows={3} value={state.description} onChange={(e) => set('description', e.target.value)} /></Field>
            </div>
            <div className="sm:col-span-2">
              <Field label="Hikayemiz"><Textarea rows={5} value={state.story} onChange={(e) => set('story', e.target.value)} /></Field>
            </div>
          </div>
        </SectionCard>

        <SectionCard icon={<ImageIcon size={16} />} title="Görsel" description="Kurumsal sayfada kullanılan hero görseli">
          <Field label="Hero Görseli">
            <ImageField value={state.heroImage} onChange={(v) => set('heroImage', v)} />
          </Field>
        </SectionCard>

        <SectionCard
          icon={<BarChart3 size={16} />}
          title="İstatistikler"
          description="Sayfadaki sayısal vurgular (ör. 20+ Yıllık Deneyim)"
          actions={<Button variant="secondary" icon={<Plus size={14} />} onClick={addStat} className="h-8">Ekle</Button>}
        >
          {state.stats.length === 0 ? (
            <p className="text-[13px] text-app-muted text-center py-4">Henüz istatistik yok. "Ekle" ile başlayın.</p>
          ) : (
            <div className="flex flex-col gap-2.5">
              {state.stats.map((stat, i) => (
                <div key={i} className="flex items-center gap-2 bg-zinc-50/60 border border-app-border rounded-xl p-2">
                  <Input value={stat.value} onChange={(e) => setStat(i, 'value', e.target.value)} placeholder="25+" className="w-24" />
                  <Input value={stat.label} onChange={(e) => setStat(i, 'label', e.target.value)} placeholder="Etiket (ör. Yıllık Deneyim)" />
                  <select value={stat.iconName} onChange={(e) => setStat(i, 'iconName', e.target.value)} className={selectCls}>
                    {STAT_ICONS.map((ic) => <option key={ic} value={ic}>{ic}</option>)}
                  </select>
                  <button type="button" onClick={() => removeStat(i)} className="text-app-muted hover:text-red-500 p-1.5 shrink-0"><Trash2 size={14} /></button>
                </div>
              ))}
            </div>
          )}
        </SectionCard>

        <SectionCard icon={<Search size={16} />} title="SEO" description="Arama motorları için başlık ve açıklama">
          <div className="grid grid-cols-1 gap-4">
            <Field label="SEO Başlığı"><Input value={state.seoTitle} onChange={(e) => set('seoTitle', e.target.value)} /></Field>
            <Field label="SEO Açıklaması"><Textarea rows={3} value={state.seoDescription} onChange={(e) => set('seoDescription', e.target.value)} /></Field>
          </div>
        </SectionCard>

        <div className="flex justify-end">
          <Button icon={<Save size={15} />} loading={saving} onClick={save}>Kaydet</Button>
        </div>
      </div>
    </div>
  );
}
