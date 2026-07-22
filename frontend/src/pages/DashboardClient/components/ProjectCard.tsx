import type { Project } from "../types";

type ProjectCardProps = {
  project: Project;
};

const styles = `
  .client-dashboard__project-card {
    position: relative;
    display: flex;
    width: 100%;
    min-width: 0;
    min-height: 330px;
    padding: 34px 30px 28px;
    flex-direction: column;
  }

  .client-dashboard__status {
    position: absolute;
    top: 22px;
    right: 20px;
    max-width: 44%;
    padding: 7px 10px;
    border-radius: 4px;
    overflow: hidden;
    background: rgba(217, 183, 101, 0.12);
    color: var(--dashboard-gold);
    font-size: 10px;
    font-weight: 800;
    letter-spacing: 0.02em;
    text-overflow: ellipsis;
    white-space: nowrap;
    text-transform: uppercase;
  }

  .client-dashboard__project-card h3 {
    max-width: 72%;
    margin: 0;
    overflow-wrap: anywhere;
    color: #ededed;
    font-size: 21px;
    font-weight: 650;
    line-height: 1.3;
  }

  .client-dashboard__project-card > p {
    max-width: 94%;
    margin: 16px 0 0;
    overflow-wrap: anywhere;
    color: #aaa;
    font-size: 14px;
    line-height: 1.52;
  }

  .client-dashboard__project-progress-area {
    margin-top: auto;
    padding-top: 34px;
  }

  .client-dashboard__project-progress-copy {
    display: flex;
    justify-content: space-between;
    gap: 12px;
    color: #aaa;
    font-size: 13px;
  }

  .client-dashboard__project-progress-copy strong {
    color: var(--dashboard-gold-bright);
    font-size: 13px;
  }

  .client-dashboard__project-progress {
    height: 6px;
    margin-top: 10px;
    overflow: hidden;
    border-radius: 99px;
    background: #282828;
  }

  .client-dashboard__project-progress span {
    display: block;
    height: 100%;
    border-radius: inherit;
    background: var(--dashboard-gold-bright);
  }

  .client-dashboard__avatars {
    display: flex;
    margin-top: 34px;
    align-items: center;
  }

  .client-dashboard__avatars > span,
  .client-dashboard__avatars > strong {
    width: 30px;
    height: 30px;
    margin-left: -6px;
    border: 2px solid #141414;
    border-radius: 50%;
    background: #232323;
  }

  .client-dashboard__avatars > span:first-child {
    margin-left: 0;
  }

  .client-dashboard__avatars > strong {
    display: grid;
    place-items: center;
    background: var(--dashboard-gold-bright);
    color: #21190a;
    font-size: 10px;
  }

  @media (max-width: 720px) {
    .client-dashboard__project-card {
      min-height: 310px;
      padding: 28px 22px 24px;
    }

    .client-dashboard__status {
      top: 18px;
      right: 16px;
      padding: 6px 8px;
      font-size: 9px;
    }

    .client-dashboard__project-card h3 {
      max-width: 68%;
      font-size: 18px;
    }

    .client-dashboard__project-card > p {
      font-size: 13px;
    }
  }

  @media (max-width: 560px) {
    .client-dashboard__project-card {
      min-height: 300px;
      padding: 26px 22px 24px;
    }

    .client-dashboard__project-card h3 {
      max-width: 70%;
    }
  }

  @media (max-width: 390px) {
    .client-dashboard__status {
      position: static;
      align-self: flex-start;
      max-width: 100%;
      margin-bottom: 14px;
    }

    .client-dashboard__project-card h3 {
      max-width: 100%;
    }
  }
`;

const ProjectCard = ({ project }: ProjectCardProps) => (
  <>
    <style>{styles}</style>
    <article className="dashboard-card client-dashboard__project-card">
      <span className="client-dashboard__status">{project.status}</span>
      <h3>{project.title}</h3>
      <p>{project.description}</p>

      <div className="client-dashboard__project-progress-area">
        <div className="client-dashboard__project-progress-copy">
          <span>Progress</span>
          <strong>{project.progress}%</strong>
        </div>
        <div className="client-dashboard__project-progress">
          <span style={{ width: `${project.progress}%` }} />
        </div>
      </div>

      <div className="client-dashboard__avatars" aria-label="Anggota proyek">
        <span />
        <span />
        <strong>+{project.extraMembers}</strong>
      </div>
    </article>
  </>
);

export default ProjectCard;
