interface SteepProgresProps {
  currentStep?: number;
}

const steps = [
  "Isi Form",
  "Review Data",
  "Kirim Permintaan",
  "Hubungi PM",
];

const SteepProgres = ({ currentStep = 1 }: SteepProgresProps) => {
  const safeCurrentStep = Math.min(Math.max(currentStep, 1), steps.length);

  return (
    <nav
      className="consult-stepper consult-form-reveal"
      aria-label="Tahapan konsultasi"
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
        alignItems: "start",
        columnGap: "12px",
        position: "relative",
        width: "100%",
      }}
    >
      <div className="consult-stepper__track" aria-hidden="true">
        <span
          className="consult-stepper__progress"
          style={{
            width: `${
              ((safeCurrentStep - 1) / (steps.length - 1)) * 100
            }%`,
          }}
        />
      </div>

      {steps.map((step, index) => {
        const number = index + 1;
        const isActive = number === safeCurrentStep;
        const isComplete = number < safeCurrentStep;

        return (
          <div
            className={`consult-stepper__item${isActive ? " is-active" : ""}${
              isComplete ? " is-complete" : ""
            }`}
            key={step}
            aria-current={isActive ? "step" : undefined}
            style={{
              minWidth: 0,
              width: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <span className="consult-stepper__number">{number}</span>
            <span className="consult-stepper__label">{step}</span>
          </div>
        );
      })}
    </nav>
  );
};

export default SteepProgres;