import { useState } from 'react';
import { User, Lock, LogOut, Check, Settings } from 'lucide-react';
import { api } from '../lib/api';
import { useAuth } from '../lib/auth';
import { useToast } from '../components/Feedback';
import { Button, Input, Field, Badge, PageHeader, SectionCard } from '../components/ui';

export default function AccountPage() {
  const { user, logout } = useAuth();
  const toast = useToast();

  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [newPasswordConfirm, setNewPasswordConfirm] = useState('');
  const [saving, setSaving] = useState(false);

  const submitPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!currentPassword.trim()) {
      toast('error', 'Mevcut şifrenizi girin.');
      return;
    }
    if (newPassword.length < 6) {
      toast('error', 'Yeni şifre en az 6 karakter olmalıdır.');
      return;
    }
    if (newPassword !== newPasswordConfirm) {
      toast('error', 'Yeni şifreler eşleşmiyor.');
      return;
    }
    setSaving(true);
    try {
      await api.post('/auth/change-password', { currentPassword, newPassword });
      toast('success', 'Şifreniz güncellendi.');
      setCurrentPassword('');
      setNewPassword('');
      setNewPasswordConfirm('');
    } catch (err) {
      toast('error', (err as Error).message);
    } finally {
      setSaving(false);
    }
  };

  return (
    <>
      <PageHeader icon={<Settings size={20} />} title="Hesap Ayarları" subtitle="Profil bilgilerinizi ve şifrenizi yönetin" />

      <div className="flex flex-col gap-6 max-w-3xl">
        {/* Profil */}
        <SectionCard icon={<User size={18} />} title="Profil" description="Hesap kimlik bilgileriniz">
          <div className="bg-zinc-50/60 border border-app-border rounded-xl p-3 flex flex-col divide-y divide-app-border">
            <div className="flex items-center justify-between py-2.5">
              <span className="text-[12px] font-semibold text-app-muted">Ad Soyad</span>
              <span className="text-[13px] text-app-ink">{user?.name || '—'}</span>
            </div>
            <div className="flex items-center justify-between py-2.5">
              <span className="text-[12px] font-semibold text-app-muted">E-posta</span>
              <span className="text-[13px] text-app-ink">{user?.email}</span>
            </div>
            <div className="flex items-center justify-between py-2.5">
              <span className="text-[12px] font-semibold text-app-muted">Rol</span>
              {user?.role === 'ADMIN' ? <Badge tone="indigo">Yönetici</Badge> : <Badge tone="gray">Editör</Badge>}
            </div>
          </div>
        </SectionCard>

        {/* Şifre değiştir */}
        <SectionCard icon={<Lock size={18} />} title="Şifre Değiştir" description="Güvenliğiniz için güçlü bir şifre seçin">
          <form onSubmit={submitPassword} className="flex flex-col gap-4">
            <Field label="Mevcut Şifre" required>
              <Input
                type="password"
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
                placeholder="••••••••"
                autoComplete="current-password"
              />
            </Field>
            <Field label="Yeni Şifre" required hint="En az 6 karakter.">
              <Input
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                placeholder="••••••••"
                autoComplete="new-password"
              />
            </Field>
            <Field label="Yeni Şifre (Tekrar)" required>
              <Input
                type="password"
                value={newPasswordConfirm}
                onChange={(e) => setNewPasswordConfirm(e.target.value)}
                placeholder="••••••••"
                autoComplete="new-password"
              />
            </Field>
            <div>
              <Button type="submit" loading={saving} icon={<Check size={15} />}>
                Şifreyi Güncelle
              </Button>
            </div>
          </form>
        </SectionCard>

        {/* Oturum */}
        <SectionCard icon={<LogOut size={18} />} title="Oturum" description="Bu cihazdaki oturum yönetimi">
          <div className="bg-zinc-50/60 border border-app-border rounded-xl p-4 flex items-center justify-between gap-4 flex-wrap">
            <p className="text-[13px] text-app-muted">Bu cihazdaki oturumunuzu sonlandırın.</p>
            <Button variant="danger" icon={<LogOut size={15} />} onClick={logout}>
              Çıkış Yap
            </Button>
          </div>
        </SectionCard>
      </div>
    </>
  );
}
