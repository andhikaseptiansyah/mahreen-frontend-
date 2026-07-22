import {
  Globe2,
  Lightbulb,
  MessageSquare,
  Paintbrush,
  PlaySquare,
  Share2,
  Shapes,
  Target,
} from "lucide-react";

interface LayananProps {
  value: string[];
  onChange: (services: string[]) => void;
}

const serviceOptions = [
  { label: "Website", icon: Globe2 },
  { label: "Branding", icon: Paintbrush },
  { label: "Social Media", icon: Share2 },
  { label: "Marketing", icon: Target },
  { label: "Content", icon: PlaySquare },
  { label: "Consultation", icon: MessageSquare },
  { label: "Recommendation", icon: Lightbulb, wide: true },
];

const Layanan = ({ value, onChange }: LayananProps) => {
  const toggleService = (service: string) => {
    onChange(
      value.includes(service)
        ? value.filter((item) => item !== service)
        : [...value, service],
    );
  };

  return (
    <section className="consult-card consult-form-reveal" aria-labelledby="layanan-title">
      <h2 className="consult-section-title" id="layanan-title">
        <Shapes aria-hidden="true" />
        <span>2. Jenis Layanan</span>
      </h2>
      <p className="consult-section-description">
        Pilih satu atau beberapa layanan yang Anda butuhkan.
      </p>

      <div className="consult-service-grid">
        {serviceOptions.map(({ label, icon: Icon, wide }) => {
          const selected = value.includes(label);

          return (
            <button
              className={`consult-option-button consult-service-option${
                wide ? " consult-service-option--wide" : ""
              }${selected ? " is-selected" : ""}`}
              type="button"
              key={label}
              aria-pressed={selected}
              onClick={() => toggleService(label)}
            >
              <Icon aria-hidden="true" />
              <span>{label}</span>
            </button>
          );
        })}
      </div>
    </section>
  );
};

export default Layanan;
