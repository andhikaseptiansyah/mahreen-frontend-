import ClosingSection from "../../components/Cloasing-section/cloasing-section";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import { useAuth } from "../../hooks/useAuth";
import ActiveProjects from "./components/ActiveProjects";
import ConsultationBanner from "./components/ConsultationBanner";
import DashboardHeader from "./components/DashboardHeader";
import MetricCards from "./components/MetricCards";
import NewsroomSection from "./components/NewsroomSection";
import OngoingOrder from "./components/OngoingOrder";
import ProfileCompletionCard from "./components/ProfileCompletionCard";
import RecentActivity from "./components/RecentActivity";
import UpcomingSchedule from "./components/UpcomingSchedule";
import WebinarInvite from "./components/WebinarInvite";

const styles = `
  .client-dashboard-page {
    width: 100%;
    min-width: 0;
    overflow-x: hidden;
    background: #000;
  }

  .client-dashboard {
    --dashboard-gold: #d9b765;
    --dashboard-gold-bright: #e8c779;
    --dashboard-card: #141414;
    --dashboard-border: #242424;
    --dashboard-muted: #8e8e8e;
    min-height: 100svh;
    padding: 118px clamp(20px, 2.7vw, 42px) 82px;
    background: #000;
    color: #f2f2f2;
    font-family: Inter, "Segoe UI", Arial, sans-serif;
  }

  .client-dashboard *,
  .client-dashboard *::before,
  .client-dashboard *::after {
    box-sizing: border-box;
  }

  .client-dashboard a,
  .client-dashboard button {
    -webkit-tap-highlight-color: transparent;
  }

  .client-dashboard a:focus-visible,
  .client-dashboard button:focus-visible {
    outline: 1px solid var(--dashboard-gold-bright);
    outline-offset: 3px;
  }

  .client-dashboard__shell {
    width: min(1440px, 100%);
    min-width: 0;
    margin: 0 auto;
  }

  .client-dashboard__stack {
    display: grid;
    gap: 44px;
  }

  .dashboard-card {
    min-width: 0;
    border: 1px solid var(--dashboard-border);
    border-radius: 17px;
    overflow: hidden;
    background: var(--dashboard-card);
  }

  .client-dashboard__overview,
  .client-dashboard__work-grid,
  .client-dashboard__content-grid {
    display: grid;
    min-width: 0;
    align-items: start;
  }

  .client-dashboard__overview {
    grid-template-columns: minmax(280px, 0.48fr) minmax(0, 1fr);
    gap: 16px;
  }

  .client-dashboard__work-grid {
    grid-template-columns: minmax(0, 1.85fr) minmax(300px, 0.85fr);
    gap: 34px;
  }

  .client-dashboard__content-grid {
    grid-template-columns: minmax(0, 1.85fr) minmax(300px, 0.85fr);
    gap: 34px;
  }

  .client-dashboard__overview > *,
  .client-dashboard__work-grid > *,
  .client-dashboard__content-grid > * {
    min-width: 0;
  }

  .client-dashboard__closing,
  .client-dashboard__footer {
    width: 100%;
    min-width: 0;
    background: #000;
  }

  @media (max-width: 1120px) {
    .client-dashboard__overview,
    .client-dashboard__work-grid,
    .client-dashboard__content-grid {
      grid-template-columns: 1fr;
      gap: 30px;
    }
  }

  @media (max-width: 760px) {
    .client-dashboard {
      padding: 102px 14px 62px;
    }

    .client-dashboard__stack {
      gap: 32px;
    }

    .dashboard-card {
      border-radius: 15px;
    }
  }

  @media (max-width: 420px) {
    .client-dashboard {
      padding-right: 11px;
      padding-left: 11px;
    }

    .client-dashboard__stack {
      gap: 28px;
    }
  }
`;

const DashboardClient = () => {
  const { user } = useAuth();

  if (!user) return null;

  const displayName = user.nickname || user.fullName;
  const memberYear = new Date(user.createdAt).getFullYear() || new Date().getFullYear();

  return (
    <div className="client-dashboard-page">
      <style>{styles}</style>
      <Navbar />

      <main className="client-dashboard">
        <div className="client-dashboard__shell">
          <div className="client-dashboard__stack">
            <DashboardHeader
              displayName={displayName}
              memberId={user.id}
              memberYear={memberYear}
            />

            <section className="client-dashboard__overview" aria-label="Ringkasan akun">
              <ProfileCompletionCard />
              <MetricCards />
            </section>

            <ConsultationBanner />

            <section className="client-dashboard__work-grid">
              <ActiveProjects />
              <RecentActivity />
            </section>

            <OngoingOrder />

            <section className="client-dashboard__content-grid">
              <NewsroomSection />
              <WebinarInvite />
            </section>

            <UpcomingSchedule />
          </div>
        </div>
      </main>

      <div className="client-dashboard__closing">
        <ClosingSection />
      </div>

      <div className="client-dashboard__footer">
        <Footer />
      </div>
    </div>
  );
};

export default DashboardClient;
