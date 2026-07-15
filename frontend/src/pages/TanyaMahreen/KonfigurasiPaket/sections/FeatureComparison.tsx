type TierId = "professional" | "business" | "enterprise";

type FeatureRow = {
  label: string;
  professional: string | boolean;
  business: string | boolean;
  enterprise: string | boolean;
};

const features: FeatureRow[] = [
  {
    label: "Mobile Responsiveness",
    professional: true,
    business: true,
    enterprise: true,
  },
  {
    label: "Visual Design Style",
    professional: "Standard",
    business: "Custom Luxury",
    enterprise: "Bespoke Artisan",
  },
  {
    label: "Content Writing",
    professional: false,
    business: "Up to 3 Pages",
    enterprise: true,
  },
  {
    label: "Dynamic Components",
    professional: false,
    business: true,
    enterprise: true,
  },
  {
    label: "Custom Code Access",
    professional: false,
    business: false,
    enterprise: true,
  },
];

const featureComparisonStyles = `
  .feature-comparison {
    margin-top: 56px;
    background: #0f0f0f;
    border: 1px solid #1e1e1e;
    padding: 32px 28px;
  }

  .feature-comparison__title {
    font-family: "Playfair Display", Georgia, serif;
    font-size: 22px;
    font-weight: 500;
    color: #ffffff;
    margin: 0 0 28px;
  }

  .feature-comparison__table {
    width: 100%;
    border-collapse: collapse;
  }

  .feature-comparison__table th {
    font-family: "DM Mono", monospace;
    font-size: 9px;
    font-weight: 500;
    letter-spacing: 1.2px;
    text-transform: uppercase;
    color: rgba(255,255,255,0.4);
    text-align: center;
    padding: 0 16px 20px;
  }

  .feature-comparison__table th:first-child {
    text-align: left;
    color: rgba(255,255,255,0.4);
  }

  .feature-comparison__table td {
    font-family: "Inter", sans-serif;
    font-size: 13px;
    color: rgba(255,255,255,0.7);
    padding: 16px;
    border-top: 1px solid #1e1e1e;
    text-align: center;
    vertical-align: middle;
  }

  .feature-comparison__table td:first-child {
    text-align: left;
    color: rgba(255,255,255,0.85);
  }

  .feature-comparison__check {
    color: #d6a35c;
    font-size: 16px;
  }

  .feature-comparison__cross {
    color: rgba(255,255,255,0.2);
    font-size: 16px;
  }

  .feature-comparison__table tr.is-highlighted td {
    background: rgba(214,163,92,0.04);
  }

  @media (max-width: 600px) {
    .feature-comparison {
      padding: 24px 16px;
      overflow-x: auto;
    }

    .feature-comparison__table {
      min-width: 480px;
    }
  }
`;

const renderCell = (val: string | boolean) => {
  if (val === true) return <span className="feature-comparison__check">✓</span>;
  if (val === false) return <span className="feature-comparison__cross">✕</span>;
  return <span>{val}</span>;
};

const FeatureComparison = ({ selectedTier }: { selectedTier: TierId }) => {
  return (
    <div className="feature-comparison">
      <style data-component="feature-comparison">{featureComparisonStyles}</style>

      <h3 className="feature-comparison__title">Feature Comparison</h3>

      <table className="feature-comparison__table">
        <thead>
          <tr>
            <th>Features</th>
            <th>Professional</th>
            <th>Business</th>
            <th>Enterprise</th>
          </tr>
        </thead>
        <tbody>
          {features.map((row) => (
            <tr
              key={row.label}
              className={selectedTier === "business" ? "is-highlighted" : ""}
            >
              <td>{row.label}</td>
              <td>{renderCell(row.professional)}</td>
              <td>{renderCell(row.business)}</td>
              <td>{renderCell(row.enterprise)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FeatureComparison;