type SectionHeaderProps = {
  title: string;
  actionLabel?: string;
  actionHref?: string;
  children?: React.ReactNode;
  className?: string;
};

const styles = `
  .client-dashboard__section-heading {
    display: flex;
    min-width: 0;
    min-height: 24px;
    margin-bottom: 17px;
    align-items: center;
    justify-content: space-between;
    gap: 12px 18px;
  }

  .client-dashboard__section-heading h2 {
    min-width: 0;
    margin: 0;
    overflow-wrap: anywhere;
    color: #a9a9a9;
    font-size: 13px;
    font-weight: 500;
  }

  .client-dashboard__section-heading > a {
    flex: 0 0 auto;
    color: var(--dashboard-gold);
    font-size: 11px;
    font-weight: 750;
  }

  @media (max-width: 420px) {
    .client-dashboard__section-heading {
      align-items: flex-start;
      flex-wrap: wrap;
    }
  }
`;

const SectionHeader = ({
  title,
  actionLabel,
  actionHref,
  children,
  className = "",
}: SectionHeaderProps) => (
  <>
    <style>{styles}</style>
    <div className={`client-dashboard__section-heading ${className}`.trim()}>
      <h2>{title}</h2>
      {actionLabel && actionHref ? <a href={actionHref}>{actionLabel}</a> : children}
    </div>
  </>
);

export default SectionHeader;
