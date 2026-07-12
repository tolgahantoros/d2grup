import { useEffect, useState } from 'react';
import { Save, Plus, Trash2, FileText, Scale } from 'lucide-react';
import { api } from '../lib/api';
import { useToast } from '../components/Feedback';
import { Button, Card, Input, Textarea, Field, Spinner, PageHeader, EmptyState, SectionCard } from '../components/ui';
import { StringListField } from '../components/fields';

// ---------------------------------------------------------- Tipler
interface LegalSection {
  heading: string;
  body: string[];
}
interface LegalDoc {
  id: number;
  key: string;
  title: string;
  eyebrow: string;
  updated: string;
  intro: string;
  sections: LegalSection[];
}

export default function LegalPage() {
  const toast = useToast();
  const [docs, setDocs] = useState<LegalDoc[] | null>(null);
  const [activeKey, setActiveKey] = useState<string>('');
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const data = await api.get<LegalDoc[]>('/legal');
        const list = data.map((d) => ({
          ...d,
          eyebrow: d.eyebrow || 'YASAL',
          sections: (d.sections ?? []).map((s) => ({ heading: s.heading, body: s.body ?? [] })),
        }));
        setDocs(list);
        setActiveKey(list[0]?.key ?? '');
      } catch (e: any) {
        toast('error', e.message ?? 'Yasal metinler yüklenemedi.');
        setDocs([]);
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!docs) return <Spinner />;

  const active = docs.find((d) => d.key === activeKey);

  // İmmutable güncelleme yardımcıları (seçili doküman üzerinde)
  const patchActive = (patch: Partial<LegalDoc>) =>
    setDocs((list) => (list ? list.map((d) => (d.key === activeKey ? { ...d, ...patch } : d)) : list));

  const setField = (k: 'title' | 'eyebrow' | 'updated' | 'intro', v: string) => patchActive({ [k]: v });

  const setSections = (fn: (secs: LegalSection[]) => LegalSection[]) =>
    setDocs((list) => (list ? list.map((d) => (d.key === activeKey ? { ...d, sections: fn(d.sections) } : d)) : list));

  const setSectionHeading = (i: number, v: string) =>
    setSections((secs) => secs.map((s, j) => (j === i ? { ...s, heading: v } : s)));
  const setSectionBody = (i: number, v: string[]) =>
    setSections((secs) => secs.map((s, j) => (j === i ? { ...s, body: v } : s)));
  const addSection = () => setSections((secs) => [...secs, { heading: '', body: [] }]);
  const removeSection = (i: number) => setSections((secs) => secs.filter((_, j) => j !== i));

  const save = async () => {
    if (!active) return;
    setSaving(true);
    try {
      await api.put('/legal/' + active.key, {
        title: active.title,
        eyebrow: active.eyebrow,
        updated: active.updated,
        intro: active.intro,
        sections: active.sections,
      });
      toast('success', 'Doküman kaydedildi.');
    } catch (e: any) {
      toast('error', e.message ?? 'Kaydedilemedi.');
    } finally {
      setSaving(false);
    }
  };

  return (
    <div>
      <PageHeader
        icon={<Scale size={20} />}
        title="Yasal Metinler"
        subtitle="Gizlilik, kullanım koşulları, KVKK ve çerez metinlerini yönetin"
        actions={
          active && (
            <Button icon={<Save size={15} />} loading={saving} onClick={save}>
              Kaydet
            </Button>
          )
        }
      />

      {docs.length === 0 ? (
        <EmptyState title="Yasal metin bulunamadı" hint="Henüz tanımlı bir doküman yok." />
      ) : (
        <div className="flex flex-col md:flex-row gap-6">
          {/* Sol: doküman sekmeleri */}
          <div className="md:w-56 shrink-0">
            <Card className="p-2 flex md:flex-col gap-1 overflow-x-auto">
              {docs.map((d) => {
                const isActive = d.key === activeKey;
                return (
                  <button
                    key={d.key}
                    type="button"
                    onClick={() => setActiveKey(d.key)}
                    className={`flex items-center gap-2 px-3 py-2.5 rounded-xl text-[13px] font-semibold text-left whitespace-nowrap transition-all ${
                      isActive
                        ? 'bg-emerald-600 text-white shadow-sm shadow-emerald-900/15'
                        : 'text-app-muted hover:bg-emerald-50/60 hover:text-emerald-700'
                    }`}
                  >
                    <FileText size={15} className="shrink-0" />
                    {d.title || d.key}
                  </button>
                );
              })}
            </Card>
          </div>

          {/* Sağ: seçili doküman editörü */}
          {active && (
            <div className="flex-grow flex flex-col gap-6 max-w-3xl">
              <SectionCard icon={<FileText size={18} />} title="Doküman Bilgileri" description="Başlık, etiket ve giriş metni">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="sm:col-span-2">
                    <Field label="Başlık">
                      <Input value={active.title} onChange={(e) => setField('title', e.target.value)} />
                    </Field>
                  </div>
                  <Field label="Üst Etiket (Eyebrow)">
                    <Input value={active.eyebrow} onChange={(e) => setField('eyebrow', e.target.value)} placeholder="YASAL" />
                  </Field>
                  <Field label="Güncelleme Tarihi">
                    <Input value={active.updated} onChange={(e) => setField('updated', e.target.value)} placeholder="11 Temmuz 2026" />
                  </Field>
                  <div className="sm:col-span-2">
                    <Field label="Giriş Metni">
                      <Textarea rows={4} value={active.intro} onChange={(e) => setField('intro', e.target.value)} />
                    </Field>
                  </div>
                </div>
              </SectionCard>

              <SectionCard
                icon={<FileText size={18} />}
                title="Bölümler"
                description="Her bölüm bir başlık ve bir veya daha fazla paragraftan oluşur"
              >
                <div className="flex flex-col gap-4">
                  {active.sections.length === 0 && (
                    <p className="text-[12px] text-app-muted">Henüz bölüm eklenmedi.</p>
                  )}
                  {active.sections.map((sec, i) => (
                    <div key={i} className="bg-zinc-50/60 border border-app-border rounded-xl p-4 flex flex-col gap-3">
                      <div className="flex items-center gap-2">
                        <span className="w-6 h-6 rounded-lg bg-emerald-50 text-emerald-600 text-[11px] font-bold flex items-center justify-center shrink-0">
                          {i + 1}
                        </span>
                        <Input
                          value={sec.heading}
                          onChange={(e) => setSectionHeading(i, e.target.value)}
                          placeholder="Bölüm başlığı"
                        />
                        <button
                          type="button"
                          onClick={() => removeSection(i)}
                          className="text-app-muted hover:text-red-500 p-1.5 shrink-0"
                          title="Bölümü sil"
                        >
                          <Trash2 size={14} />
                        </button>
                      </div>
                      <Field label="Paragraflar">
                        <StringListField
                          value={sec.body}
                          onChange={(v) => setSectionBody(i, v)}
                          placeholder="Paragraf metni"
                        />
                      </Field>
                    </div>
                  ))}
                  <button
                    type="button"
                    onClick={addSection}
                    className="self-start inline-flex items-center gap-1.5 text-[12px] font-semibold text-emerald-600 hover:text-emerald-700 mt-1"
                  >
                    <Plus size={14} /> Bölüm ekle
                  </button>
                </div>
              </SectionCard>

              <div>
                <Button icon={<Save size={15} />} loading={saving} onClick={save}>
                  Kaydet
                </Button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
