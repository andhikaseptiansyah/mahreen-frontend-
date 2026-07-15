import { useState } from "react";

type AddOn = {
  id: string;
  title: string;
  description: string;
  price: string;
};

const addOns: AddOn[] = [
  {
    id: "maintenance",
    title: "Monthly Maintenance",
    description: "Updates, security, and monthly reporting.",
    price: "+Rp250k/mo",
  },
  {
    id: "domain",
    title: "Domain & Hosting (1yr)",
    description: ".com domain and premium server hosting.",
    price: "+Rp500k",
  },
  {
    id: "content",
    title: "Premium Content Writing",
    description: "Sales-driven copywriting for all sections.",
    price: "+Rp750k",
  },
  {
    id: "ecommerce",
    title: "Basic E-commerce Module",
    description: "Setup up to 10 products with checkout.",
    price: "+Rp400k",
  },
];

const layananTambahanStyles = `
  .layanan-tambahan {
    margin-top: 48px;
  }

  .layanan-tambahan__title {
    font-family: "Playfair Display", Georgia, serif;
    font-size: 22px;
    font-weight: 500;
    color: #ffffff;
    margin: 0 0 28px;
  }

  .layanan-tambahan__grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
  }

  .layanan-tambahan__card {
    display: flex;
    align-items: flex-start;
    gap: 14px;
    background: #0f0f0f;
    border: 1px solid #1e1e1e;
    padding: 20px;
    cursor: pointer;
    transition: border-color 0.2s ease;
  }

  .layanan-tambahan__card:hover {
    border-color: rgba(214,163,92,0.3);
  }

  .layanan-tambahan__card.is-checked {
    border-color: #d6a35c;
  }

  .layanan-tambahan__checkbox {
    width: 18px;
    height: 18px;
    border: 1px solid #333333;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 2px;
    transition: border-color 0.2s ease, background 0.2s ease;
  }

  .layanan-tambahan__card.is-checked .layanan-tambahan__checkbox {
    border-color: #d6a35c;
    background: #d6a35c;
    color: #000000;
    font-size: 10px;
  }

  .layanan-tambahan__info {
    flex: 1;
  }

  .layanan-tambahan__name {
    font-family: "Inter", sans-serif;
    font-size: 13px;
    font-weight: 600;
    color: #ffffff;
    margin: 0 0 4px;
  }

  .layanan-tambahan__desc {
    font-family: "Inter", sans-serif;
    font-size: 12px;
    color: rgba(255,255,255,0.5);
    margin: 0 0 8px;
    line-height: 1.5;
  }

  .layanan-tambahan__price {
    font-family: "DM Mono", monospace;
    font-size: 11px;
    color: #d6a35c;
    margin: 0;
  }

  @media (max-width: 600px) {
    .layanan-tambahan__grid {
      grid-template-columns: 1fr;
    }
  }
`;

const LayananTambahan = () => {
  const [checked, setChecked] = useState<string[]>([]);

  const toggle = (id: string) => {
    setChecked((prev) =>
      prev.includes(id) ? prev.filter((c) => c !== id) : [...prev, id]
    );
  };

  return (
    <div className="layanan-tambahan">
      <style data-component="layanan-tambahan">{layananTambahanStyles}</style>

      <h3 className="layanan-tambahan__title">Layanan Tambahan</h3>

      <div className="layanan-tambahan__grid">
        {addOns.map((addon) => (
          <div
            key={addon.id}
            className={`layanan-tambahan__card ${checked.includes(addon.id) ? "is-checked" : ""}`}
            onClick={() => toggle(addon.id)}
          >
            <div className="layanan-tambahan__checkbox">
              {checked.includes(addon.id) && "✓"}
            </div>
            <div className="layanan-tambahan__info">
              <p className="layanan-tambahan__name">{addon.title}</p>
              <p className="layanan-tambahan__desc">{addon.description}</p>
              <p className="layanan-tambahan__price">{addon.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LayananTambahan;