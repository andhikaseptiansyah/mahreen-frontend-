import { useState } from "react";
import { Building2, LockKeyhole, Sparkles, UserRound, UsersRound } from "lucide-react";
import Navbar from "../../components/Navbar/Navbar";
import ClosingSection from "../../components/Cloasing-section/cloasing-section";
import Footer from "../../components/Footer/Footer";
import AuthTheme, { AuthProgress } from "../Auth/AuthShell";
import { registrationDraftService } from "../../services/auth/registrationDraftService";
import { navigateToHashRoute } from "../../utils/hashNavigation";
import type { AccountType } from "../../types/auth";

const identityOptions: readonly {
  id: AccountType;
  title: string;
  description: string;
  icon: typeof UserRound;
}[] = [
  {
    id: "individual",
    title: "Individu",
    description: "Akses personal ke seluruh ekosistem, investasi, pembelajaran, dan berita Mahreen.",
    icon: UserRound,
  },
  {
    id: "company",
    title: "Perusahaan",
    description: "Solusi korporasi untuk manajemen portofolio, layanan, dan kemitraan strategis.",
    icon: Building2,
  },
  {
    id: "community",
    title: "Komunitas",
    description: "Ruang kolaboratif untuk organisasi, komunitas, dan kolektif sosial Indonesia.",
    icon: UsersRound,
  },
];

const Daftar = () => {
  const initialDraft = registrationDraftService.load();
  const [selectedIdentity, setSelectedIdentity] = useState<AccountType | "">(
    initialDraft.accountType,
  );

  const handleContinue = () => {
    if (!selectedIdentity) return;
    registrationDraftService.save({ accountType: selectedIdentity });
    navigateToHashRoute("/daftar/informasi-dasar");
  };

  return (
    <>
      <Navbar />
      <AuthTheme>
        <main className="auth-global-page">
          <section className="auth-stage auth-two-column">
            <div>
              <AuthProgress current={1} label="Account Selection" />

              <div className="auth-inline">
                <div>
                  <h1 className="auth-title auth-title--sans">Choose your identity</h1>
                  <p className="auth-lead">
                    Pilih jenis akun yang paling sesuai. Setiap tipe memberikan pengalaman ekosistem yang disesuaikan.
                  </p>
                </div>
                <p className="auth-lead" style={{ margin: 0, fontSize: 12 }}>
                  Sudah memiliki akun? <a className="auth-login-link" href="#/login">Login</a>
                </p>
              </div>

              <div className="auth-identity-grid">
                {identityOptions.map((option) => {
                  const Icon = option.icon;
                  const isSelected = option.id === selectedIdentity;

                  return (
                    <button
                      type="button"
                      key={option.id}
                      className={`auth-choice-card ${isSelected ? "is-selected" : ""}`}
                      onClick={() => setSelectedIdentity(option.id)}
                      aria-pressed={isSelected}
                    >
                      <span className="auth-choice-icon"><Icon size={20} /></span>
                      <h3>{option.title}</h3>
                      <p>{option.description}</p>
                    </button>
                  );
                })}
              </div>

              <div className="auth-actions">
                <a className="auth-button" href="#/">× &nbsp;Batal</a>
                <button
                  className="auth-button auth-button--primary"
                  type="button"
                  disabled={!selectedIdentity}
                  onClick={handleContinue}
                >
                  Lanjut ke Step 2 <span aria-hidden="true">→</span>
                </button>
              </div>
            </div>

            <aside>
              <p className="auth-kicker">Mahreen Unified Account</p>
              <h2 className="auth-display-title">
                One Account.
                <strong>Every Experience.</strong>
              </h2>
              <p className="auth-lead">
                Satu akses mulus menuju seluruh ekosistem digital Mahreen, dari layanan kreatif hingga program komunitas.
              </p>

              <div className="auth-feature-list">
                <div className="auth-feature-box">
                  <span className="auth-feature-icon"><LockKeyhole size={18} /></span>
                  <div><strong>Institutional Security</strong><span>Perlindungan akun berlapis untuk pengalaman yang lebih aman.</span></div>
                </div>
                <div className="auth-feature-box">
                  <span className="auth-feature-icon"><Sparkles size={18} /></span>
                  <div><strong>AI Personalization</strong><span>Preferensi layanan tersimpan dan dapat disesuaikan kapan saja.</span></div>
                </div>
              </div>
            </aside>
          </section>
        </main>
      </AuthTheme>
      <ClosingSection />
      <Footer />
    </>
  );
};

export default Daftar;
