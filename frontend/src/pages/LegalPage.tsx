import { Navigate } from 'react-router-dom';
import { Clock } from 'lucide-react';
import PageHeader from '../components/layout/PageHeader';
import CtaBanner from '../components/sections/CtaBanner';
import { LEGAL_DOCS } from '../data/legal';

interface LegalPageProps {
  docKey: string;
}

export default function LegalPage({ docKey }: LegalPageProps) {
  const doc = LEGAL_DOCS[docKey];
  if (!doc) return <Navigate to="/" replace />;

  return (
    <>
      <PageHeader
        eyebrow={doc.eyebrow}
        title={doc.title}
        breadcrumbs={[{ label: doc.title }]}
      />

      <section className="bg-white py-20 px-6 md:px-12">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-2 mb-8 text-zinc-400">
            <Clock size={14} />
            <span className="font-mono text-[10px] tracking-widest uppercase">Son güncelleme: {doc.updated}</span>
          </div>

          <p className="font-sans font-light text-zinc-600 text-base leading-relaxed mb-12 pb-12 border-b border-zinc-100">
            {doc.intro}
          </p>

          <div className="flex flex-col gap-10">
            {doc.sections.map((section) => (
              <div key={section.heading}>
                <h2 className="font-display font-bold text-lg tracking-tight text-zinc-950 uppercase mb-4">
                  {section.heading}
                </h2>
                <div className="flex flex-col gap-3">
                  {section.body.map((p, i) => (
                    <p key={i} className="font-sans font-light text-zinc-600 text-sm leading-relaxed">
                      {p}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner
        eyebrow="SORULARINIZ MI VAR?"
        title={<>YASAL KONULARDA<br />BİZE ULAŞIN</>}
        description="Gizlilik, kişisel veriler ve kullanım koşulları hakkındaki sorularınız için ekibimizle iletişime geçebilirsiniz."
        primary={{ label: 'İLETİŞİME GEÇ', to: '/iletisim' }}
      />
    </>
  );
}
