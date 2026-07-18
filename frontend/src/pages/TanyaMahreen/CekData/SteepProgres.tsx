interface SteepProgresProps {
  currentStep?: number;
}

const steps = [
  { number: "01", label: "Data Input" },
  { number: "02", label: "Periksa Kembali" },
  { number: "03", label: "Selesai" },
];

const SteepProgres = ({ currentStep = 2 }: SteepProgresProps) => {
  return (
    <nav className="review-stepper review-reveal" aria-label="Tahapan permintaan konsultasi">
      {steps.map((step, index) => {
        const stepNumber = index + 1;
        const isActive = stepNumber === currentStep;
        const isComplete = stepNumber < currentStep;

        return (
          <div
            className={`review-stepper__item${isActive ? " is-active" : ""}${
              isComplete ? " is-complete" : ""
            }`}
            key={step.number}
            aria-current={isActive ? "step" : undefined}
          >
            <span className="review-stepper__badge">{step.number}</span>
            <span className="review-stepper__label">{step.label}</span>
            {index < steps.length - 1 && (
              <span className="review-stepper__line" aria-hidden="true" />
            )}
          </div>
        );
      })}
    </nav>
  );
};

export default SteepProgres;
