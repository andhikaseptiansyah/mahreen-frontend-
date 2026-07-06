import { useEffect, useRef } from "react";

const closingSectionStyles = `
  .closing-section {
    position: relative;
    isolation: isolate;
    width: 100%;
    overflow: hidden;
    background: #000000;
    color: #ffffff;
  }

  .closing-section *,
  .closing-section *::before,
  .closing-section *::after {
    box-sizing: border-box;
  }

  .closing-section__inner {
    width: 100%;
    max-width: 1840px;
    margin: 0 auto;
    padding: 86px 48px 100px;
  }

  .closing-section__content {
    width: 100%;
    max-width: 1560px;
    margin: 0 auto;
    text-align: center;
  }

  .closing-section__title {
    margin: 0;
    color: #ffffff;
    font-family: "Playfair Display", Georgia, serif;
    font-size: clamp(42px, 4.15vw, 78px);
    font-style: italic;
    font-weight: 400;
    line-height: 0.95;
    letter-spacing: -0.035em;
    white-space: nowrap;
  }

  .closing-section__description {
    max-width: 1160px;
    margin: 34px auto 0;
    color: #a1a1aa;
    font-family: "DM Sans", Inter, Arial, sans-serif;
    font-size: clamp(14px, 0.95vw, 16px);
    font-weight: 300;
    line-height: 1.7;
    text-align: center;
  }

  .closing-section__description p {
    margin: 0;
    white-space: nowrap;
  }

  .closing-section__tagline {
    max-width: 840px;
    margin: 64px auto 0;
    color: #c5a880;
    font-family: "DM Sans", Inter, Arial, sans-serif;
    font-size: 12px;
    font-weight: 800;
    line-height: 1.45;
    letter-spacing: 1.4px;
    text-align: center;
    text-transform: uppercase;
  }

  .closing-section [data-scroll-reveal] {
    opacity: 1;
    transform: translateY(0);
    filter: blur(0);
  }

  .closing-section.is-reveal-ready [data-scroll-reveal] {
    transition:
      opacity 0.75s ease,
      transform 0.75s cubic-bezier(0.22, 1, 0.36, 1),
      filter 0.75s ease;
    will-change: opacity, transform, filter;
  }

  .closing-section.is-reveal-ready [data-scroll-reveal]:not(.is-visible) {
    opacity: 0;
    transform: translateY(34px);
    filter: blur(8px);
  }

  .closing-section__title[data-scroll-reveal] {
    transition-delay: 80ms;
  }

  .closing-section__description[data-scroll-reveal] {
    transition-delay: 180ms;
  }

  .closing-section__tagline[data-scroll-reveal] {
    transition-delay: 280ms;
  }

  @media (max-width: 1280px) {
    .closing-section__title {
      font-size: clamp(38px, 4.4vw, 58px);
    }
  }

  @media (max-width: 1024px) {
    .closing-section__inner {
      padding: 72px 32px 84px;
    }

    .closing-section__title {
      white-space: normal;
      text-wrap: balance;
      line-height: 1;
    }

    .closing-section__description {
      max-width: 760px;
      margin-top: 28px;
    }

    .closing-section__description p {
      white-space: normal;
    }

    .closing-section__tagline {
      margin-top: 52px;
    }
  }

  @media (max-width: 640px) {
    .closing-section__inner {
      padding: 56px 24px 64px;
    }

    .closing-section__title {
      font-size: clamp(30px, 10vw, 42px);
      line-height: 1.03;
    }

    .closing-section__description {
      margin-top: 24px;
      font-size: 14px;
      line-height: 1.65;
    }

    .closing-section__tagline {
      margin-top: 44px;
      font-size: 10px;
      letter-spacing: 1.1px;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .closing-section [data-scroll-reveal] {
      opacity: 1;
      transform: none;
      filter: none;
      transition: none;
    }
  }
`;

const ClosingSection = () => {
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const revealElements = section.querySelectorAll<HTMLElement>(
      "[data-scroll-reveal]"
    );

    if (typeof IntersectionObserver === "undefined") {
      revealElements.forEach((element) => element.classList.add("is-visible"));
      return;
    }

    section.classList.add("is-reveal-ready");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      {
        threshold: 0.2,
      }
    );

    revealElements.forEach((element) => observer.observe(element));

    return () => {
      observer.disconnect();
      section.classList.remove("is-reveal-ready");
    };
  }, []);

  return (
    <>
      <style data-component="closing-section">{closingSectionStyles}</style>

      <section
        className="closing-section"
        ref={sectionRef}
        aria-labelledby="closing-section-title"
      >
        <div className="closing-section__inner">
          <div className="closing-section__content">
            <h2
              className="closing-section__title"
              id="closing-section-title"
              data-scroll-reveal
            >
              Let&apos;s Build Something Meaningful Together
            </h2>

            <div className="closing-section__description" data-scroll-reveal>
              <p>
                Bersama Mahreen Indonesia, wujudkan ide, karya, dan bisnis menjadi lebih kreatif, profesional, dan
              </p>
              <p>
                berdampak. Kami siap menjadi partner kolaborasi untuk pengembangan digital, branding, serta kontribusi
              </p>
              <p>sosial di era modern.</p>
            </div>

            <p className="closing-section__tagline" data-scroll-reveal>
              Mari Bertumbuh dan Memberikan Manfaat Bersama Mahreen Indonesia.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default ClosingSection;
