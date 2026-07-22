import { useMemo, useState, type FormEvent } from "react";
import { Eye, EyeOff, LockKeyhole, Network, ShieldCheck, X } from "lucide-react";
import Navbar from "../../components/Navbar/Navbar";
import ClosingSection from "../../components/Cloasing-section/cloasing-section";
import Footer from "../../components/Footer/Footer";
import loginVisual from "../../assets/TanyaMahreen/Home/bground-tanyamahreen.png";
import { useAuth } from "../../hooks/useAuth";
import { navigateToHashRoute } from "../../utils/hashNavigation";
import AuthTheme from "../Auth/AuthShell";

type LoginProps = Readonly<{
  redirectTo?: string | null;
  registered?: boolean;
  initialEmail?: string | null;
  authRequired?: boolean;
}>;

const Login = ({
  redirectTo = null,
  initialEmail = null,
  authRequired = false,
}: LoginProps) => {
  const [email, setEmail] = useState(initialEmail ?? "");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { login, dataSourceMode } = useAuth();
  const targetAfterLogin = useMemo(() => redirectTo ?? "/", [redirectTo]);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      await login({ email, password, remember });
      navigateToHashRoute(targetAfterLogin);
    } catch (caughtError) {
      setError(
        caughtError instanceof Error
          ? caughtError.message
          : "Akun tidak dapat diproses. Silakan coba kembali.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const fillDemoAccount = () => {
    setEmail("demo@mahreen.id");
    setPassword("Mahreen123!");
    setError("");
  };

  return (
    <>
      <Navbar />
      <AuthTheme>
        <main className="auth-global-page auth-login-reference-page">
          <section className="auth-login-reference-shell">
            <div className="auth-login-reference-panel">
              <header className="auth-login-reference-header">
                <div className="auth-brand">Mahreen Indonesia</div>
                <button
                  className="auth-login-close"
                  type="button"
                  onClick={() => navigateToHashRoute("/")}
                  aria-label="Tutup halaman login"
                >
                  <X size={18} />
                </button>
              </header>

              <div className="auth-login-reference-form-wrap">
                <div className="auth-login-reference-heading">
                  <h1>Masuk ke Akun</h1>
                  <p>Satu akun untuk seluruh ekosistem Mahreen.</p>
                </div>

                {authRequired && (
                  <div className="auth-login-required-banner" role="status">
                    <LockKeyhole size={18} />
                    <div>
                      <strong>Login diperlukan.</strong>
                      <span>
                        Masuk terlebih dahulu untuk melanjutkan proses kontribusi atau pembayaran.
                      </span>
                    </div>
                  </div>
                )}

                <form className="auth-login-reference-form" onSubmit={handleSubmit}>
                  <label className="auth-field">
                    <span className="auth-label">Alamat Email</span>
                    <input
                      className="auth-input"
                      type="email"
                      value={email}
                      onChange={(event) => setEmail(event.target.value)}
                      placeholder="email@perusahaan.com"
                      autoComplete="email"
                      required
                    />
                  </label>

                  <label className="auth-field">
                    <span className="auth-inline">
                      <span className="auth-label">Kata Sandi</span>
                      <a className="auth-login-link" href="#/lupa-sandi">
                        Lupa Sandi?
                      </a>
                    </span>
                    <span className="auth-password-wrap">
                      <input
                        className="auth-input"
                        type={showPassword ? "text" : "password"}
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                        placeholder="••••••••"
                        autoComplete="current-password"
                        required
                      />
                      <button
                        className="auth-icon-button"
                        type="button"
                        onClick={() => setShowPassword((current) => !current)}
                        aria-label={showPassword ? "Sembunyikan kata sandi" : "Tampilkan kata sandi"}
                      >
                        {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                      </button>
                    </span>
                  </label>

                  <label className="auth-remember">
                    <input
                      type="checkbox"
                      checked={remember}
                      onChange={(event) => setRemember(event.target.checked)}
                    />
                    Tetap masuk selama 30 hari
                  </label>

                  {error && <p className="auth-error">{error}</p>}

                  <button
                    className="auth-button auth-button--primary auth-login-reference-submit"
                    type="submit"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Memproses..." : "Masuk"}
                  </button>
                </form>

                <p className="auth-demo auth-login-reference-demo">
                  Mode <strong>{dataSourceMode}</strong>. Untuk pengujian lokal, gunakan akun yang
                  baru didaftarkan atau{" "}
                  <button type="button" onClick={fillDemoAccount}>
                    isi akun demo
                  </button>
                  .
                </p>
              </div>

              <footer className="auth-login-reference-footer">
                <p>
                  Belum terdaftar?{" "}
                  <a className="auth-login-link" href="#/daftar">
                    Daftar sekarang
                  </a>
                </p>
                <div>
                  <a href="#/syarat-ketentuan">Syarat &amp; Ketentuan</a>
                  <a href="#/kebijakan-privasi">Privasi</a>
                </div>
              </footer>
            </div>

            <aside className="auth-login-reference-visual">
              <img src={loginVisual} alt="Ruang kerja eksklusif Mahreen Indonesia" />
              <div className="auth-login-reference-overlay" />

              <div className="auth-login-reference-copy">
                <h2>
                  One Account.
                  <strong>Every Experience.</strong>
                </h2>

                <div className="auth-login-reference-benefits">
                  <div className="auth-login-reference-benefit">
                    <span className="auth-feature-icon">
                      <Network size={19} />
                    </span>
                    <div>
                      <strong>Unified Access</strong>
                      <span>
                        Akses terpadu ke layanan, program, dan seluruh pengalaman digital Mahreen.
                      </span>
                    </div>
                  </div>

                  <div className="auth-login-reference-benefit">
                    <span className="auth-feature-icon">
                      <ShieldCheck size={19} />
                    </span>
                    <div>
                      <strong>Enterprise Security</strong>
                      <span>
                        Sistem autentikasi terpusat dengan pengalaman penggunaan yang konsisten.
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="auth-login-reference-signature">
                <span />
                Excellence Defined
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

export default Login;
