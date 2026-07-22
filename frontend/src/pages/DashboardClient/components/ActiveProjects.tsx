import { useState } from "react";
import { projects } from "../../../data/dashboardData";
import ProjectCard from "./ProjectCard";
import SectionHeader from "./SectionHeader";

const styles = `
  .client-dashboard__projects-block {
    min-width: 0;
  }

  .client-dashboard__project-grid {
    display: grid;
    min-width: 0;
    grid-template-columns: repeat(2, minmax(310px, 350px));
    gap: 22px;
    align-items: stretch;
  }

  .client-dashboard__projects-action {
    padding: 0;
    border: 0;
    background: transparent;
    color: var(--dashboard-gold);
    cursor: pointer;
    font: inherit;
    font-size: 12px;
    font-weight: 750;
    line-height: 1.3;
  }

  .client-dashboard__projects-action:hover {
    color: var(--dashboard-gold-bright);
  }

  @media (max-width: 1280px) {
    .client-dashboard__project-grid {
      grid-template-columns: repeat(2, minmax(280px, 1fr));
    }
  }

  @media (max-width: 720px) {
    .client-dashboard__project-grid {
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 16px;
    }
  }

  @media (max-width: 560px) {
    .client-dashboard__project-grid {
      grid-template-columns: 1fr;
    }
  }
`;

const ActiveProjects = () => {
  const [showAllProjects, setShowAllProjects] = useState(false);
  const hasMoreThanTwoProjects = projects.length > 2;
  const visibleProjects = showAllProjects ? projects : projects.slice(0, 2);

  return (
    <>
      <style>{styles}</style>
      <section className="client-dashboard__projects-block">
        <SectionHeader title="Active Projects">
          {hasMoreThanTwoProjects ? (
            <button
              type="button"
              className="client-dashboard__projects-action"
              aria-expanded={showAllProjects}
              onClick={() => setShowAllProjects((currentValue) => !currentValue)}
            >
              {showAllProjects ? "Show Less" : "View All"}
            </button>
          ) : null}
        </SectionHeader>

        <div className="client-dashboard__project-grid">
          {visibleProjects.map((project) => (
            <ProjectCard project={project} key={project.title} />
          ))}
        </div>
      </section>
    </>
  );
};

export default ActiveProjects;
