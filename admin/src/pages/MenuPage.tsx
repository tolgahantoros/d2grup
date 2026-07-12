import { useEffect, useState } from 'react';
import { Plus, Trash2, ChevronUp, ChevronDown, Save, Info, Navigation, CornerDownRight, Link2, GripVertical } from 'lucide-react';
import { api } from '../lib/api';
import { useToast } from '../components/Feedback';
import { Button, Card, Input, Toggle, Spinner, PageHeader, Badge } from '../components/ui';

interface Child { label: string; to: string }
interface Item { label: string; to: string; active: boolean; children: Child[] }

const DEFAULT_NAV: Item[] = [
  { label: 'ANASAYFA', to: '/', active: true, children: [] },
  { label: 'KURUMSAL', to: '/kurumsal', active: true, children: [] },
  {
    label: 'ÜRÜNLER',
    to: '/urunler',
    active: true,
    children: [
      { label: 'Tüm Ürünler', to: '/urunler' },
      { label: 'Yüz Teknolojileri', to: '/urunler/kategori/yuz' },
      { label: 'Vücut Teknolojileri', to: '/urunler/kategori/vucut' },
      { label: 'Longevity', to: '/urunler/kategori/longevity' },
      { label: 'Global Markalar', to: '/urunler/kategori/global' },
    ],
  },
  { label: 'TEKNOLOJİLER', to: '/teknolojiler', active: true, children: [] },
  { label: 'MARKALAR', to: '/markalar', active: true, children: [] },
  { label: 'ÇÖZÜMLER', to: '/cozumler', active: true, children: [] },
  { label: 'KOZMETİK', to: '/kozmetik', active: true, children: [] },
  { label: 'İLETİŞİM', to: '/iletisim', active: true, children: [] },
];

export default function MenuPage() {
  const [items, setItems] = useState<Item[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const toast = useToast();

  useEffect(() => {
    api
      .get<any>('/settings/nav')
      .then((v) => {
        const arr = Array.isArray(v) ? v : Array.isArray(v?.items) ? v.items : null;
        setItems(
          arr && arr.length
            ? arr.map((i: any) => ({
                label: i.label ?? '',
                to: i.to ?? '',
                active: i.active !== false,
                children: Array.isArray(i.children) ? i.children.map((c: any) => ({ label: c.label ?? '', to: c.to ?? '' })) : [],
              }))
            : DEFAULT_NAV,
        );
      })
      .catch(() => setItems(DEFAULT_NAV))
      .finally(() => setLoading(false));
  }, []);

  const update = (idx: number, patch: Partial<Item>) => setItems((s) => s.map((it, i) => (i === idx ? { ...it, ...patch } : it)));
  const move = (idx: number, dir: -1 | 1) => {
    const j = idx + dir;
    if (j < 0 || j >= items.length) return;
    setItems((s) => {
      const a = [...s];
      [a[idx], a[j]] = [a[j], a[idx]];
      return a;
    });
  };
  const remove = (idx: number) => setItems((s) => s.filter((_, i) => i !== idx));
  const add = () => setItems((s) => [...s, { label: 'YENİ MENÜ', to: '/', active: true, children: [] }]);

  const addChild = (idx: number) => update(idx, { children: [...items[idx].children, { label: '', to: '' }] });
  const updateChild = (idx: number, ci: number, patch: Partial<Child>) =>
    update(idx, { children: items[idx].children.map((c, i) => (i === ci ? { ...c, ...patch } : c)) });
  const removeChild = (idx: number, ci: number) => update(idx, { children: items[idx].children.filter((_, i) => i !== ci) });

  const save = async () => {
    setSaving(true);
    try {
      await api.put('/settings/nav', items);
      toast('success', 'Menü kaydedildi. Değişiklikler sitede birkaç saniye içinde görünür.');
    } catch (e: any) {
      toast('error', e.message);
    } finally {
      setSaving(false);
    }
  };

  if (loading) return <Spinner />;

  return (
    <>
      <PageHeader
        icon={<Navigation size={20} />}
        title="Menü Yönetimi"
        subtitle="Web sitesinin üst menüsünü düzenleyin, sıralayın ve yeni bağlantılar ekleyin"
        actions={<Button icon={<Save size={15} />} loading={saving} onClick={save}>Kaydet</Button>}
      />

      <div className="flex items-start gap-2.5 bg-emerald-50/60 border border-emerald-100 rounded-xl px-4 py-3 mb-5">
        <Info size={16} className="text-emerald-600 shrink-0 mt-0.5" />
        <p className="text-[12px] text-emerald-900/80 leading-relaxed">
          Sırayı ok tuşlarıyla değiştirin, alt menü (açılır) bağlantıları ekleyin, öğeleri pasife alın.
          <b> Bağlantı</b> alanı site içi yol olmalıdır (ör. <code className="px-1 py-0.5 rounded bg-emerald-100/70 text-emerald-800">/urunler</code>).
        </p>
      </div>

      <div className="flex flex-col gap-3">
        {items.map((it, idx) => (
          <Card key={idx} className={`overflow-hidden transition-opacity ${it.active ? '' : 'opacity-60'}`}>
            {/* Başlık şeridi */}
            <div className="flex items-center gap-3 px-4 py-3 border-b border-app-border bg-zinc-50/40">
              <div className="flex flex-col -my-1">
                <button onClick={() => move(idx, -1)} disabled={idx === 0} className="p-0.5 rounded text-app-muted hover:text-emerald-600 disabled:opacity-25"><ChevronUp size={16} /></button>
                <button onClick={() => move(idx, 1)} disabled={idx === items.length - 1} className="p-0.5 rounded text-app-muted hover:text-emerald-600 disabled:opacity-25"><ChevronDown size={16} /></button>
              </div>
              <span className="w-7 h-7 rounded-lg bg-white border border-app-border text-app-muted flex items-center justify-center shrink-0"><GripVertical size={14} /></span>
              <span className="flex-grow font-bold text-[13px] text-app-ink truncate">{it.label || 'Adsız menü'}</span>
              {it.children.length > 0 && <Badge tone="gray">{it.children.length} alt menü</Badge>}
              <Toggle checked={it.active} onChange={(v) => update(idx, { active: v })} />
              <button onClick={() => remove(idx)} className="p-1.5 rounded-lg text-app-muted hover:bg-red-50 hover:text-red-600 shrink-0" title="Sil"><Trash2 size={15} /></button>
            </div>

            {/* Alanlar */}
            <div className="p-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <label className="flex flex-col gap-1">
                  <span className="text-[11px] font-semibold text-app-muted">Menü Adı</span>
                  <Input value={it.label} onChange={(e) => update(idx, { label: e.target.value })} />
                </label>
                <label className="flex flex-col gap-1">
                  <span className="text-[11px] font-semibold text-app-muted">Bağlantı (yol)</span>
                  <div className="relative">
                    <Link2 size={13} className="absolute left-3 top-1/2 -translate-y-1/2 text-app-muted" />
                    <Input value={it.to} onChange={(e) => update(idx, { to: e.target.value })} placeholder="/ornek" className="pl-8" />
                  </div>
                </label>
              </div>

              {/* Alt menü */}
              {it.children.length > 0 && (
                <div className="mt-4 pl-3 border-l-2 border-emerald-100 flex flex-col gap-2">
                  {it.children.map((c, ci) => (
                    <div key={ci} className="flex items-center gap-2">
                      <CornerDownRight size={14} className="text-emerald-300 shrink-0" />
                      <Input value={c.label} onChange={(e) => updateChild(idx, ci, { label: e.target.value })} placeholder="Alt menü adı" className="max-w-[220px]" />
                      <Input value={c.to} onChange={(e) => updateChild(idx, ci, { to: e.target.value })} placeholder="/yol" />
                      <button onClick={() => removeChild(idx, ci)} className="p-1.5 rounded-lg text-app-muted hover:bg-red-50 hover:text-red-600 shrink-0"><Trash2 size={13} /></button>
                    </div>
                  ))}
                </div>
              )}
              <button onClick={() => addChild(idx)} className="inline-flex items-center gap-1.5 text-[12px] font-semibold text-emerald-600 hover:text-emerald-700 mt-3">
                <Plus size={13} /> Alt menü (açılır) ekle
              </button>
            </div>
          </Card>
        ))}
      </div>

      <div className="mt-4 flex items-center justify-between">
        <Button variant="secondary" icon={<Plus size={15} />} onClick={add}>Menü Öğesi Ekle</Button>
        <Button icon={<Save size={15} />} loading={saving} onClick={save}>Kaydet</Button>
      </div>
    </>
  );
}
