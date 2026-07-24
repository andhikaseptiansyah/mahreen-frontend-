import React, { useEffect, useState } from "react";
import StudioNavbar from "../../../components/Navbar/StudioNavbar";
import ClosingSection from "../../../components/Cloasing-section/cloasing-section";
import Footer from "../../../components/Footer/Footer";
import { useAuth } from "../../../hooks/useAuth";
import { navigateToHashRoute } from "../../../utils/hashNavigation";
import signatureHoodieImg from "../../../assets/Mahreen-Studio/GambarProduk/Signature-noir-hoodie.png";

type CartItem = {
  productSlug?: string;
  productTitle?: string;
  color?: string;
  size?: string;
  quantity?: number;
  price?: number;
};

const orderSummaryStyles = `
  @import url("https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:ital,wght@0,500;0,600;1,400;1,600&display=swap");

  .order-summary-page {
    background-color: #060606;
    width: 100%;
    min-height: 100vh;
    color: #ffffff;
    font-family: "Inter", sans-serif;
  }

  .order-summary-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 120px 24px 80px 24px;
  }

  /* ===== STEPS INDICATOR ===== */
  .steps {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 16px;
    list-style: none;
    margin: 0 0 48px 0;
    padding: 0;
  }

  .steps__item {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .steps__badge {
    display: grid;
    place-items: center;
    width: 28px;
    height: 28px;
    border-radius: 50%;
    font-size: 12px;
    font-weight: 600;
    line-height: 1;
    transition: all 200ms ease;
  }

  .steps__label {
    font-size: 13px;
    font-weight: 500;
    letter-spacing: 0.5px;
    text-transform: uppercase;
  }

  .steps__item--active .steps__badge {
    background: #e4c47f;
    color: #0a0a0a;
    box-shadow: 0 0 14px rgba(228, 196, 127, 0.4);
  }

  .steps__item--active .steps__label {
    color: #e4c47f;
  }

  .steps__item--inactive .steps__badge {
    background: rgba(255, 255, 255, 0.08);
    color: rgba(255, 255, 255, 0.4);
    border: 1px solid rgba(255, 255, 255, 0.12);
  }

  .steps__item--inactive .steps__label {
    color: rgba(255, 255, 255, 0.4);
  }

  .steps__divider {
    width: 48px;
    height: 1px;
    background: rgba(255, 255, 255, 0.12);
  }

  /* ===== CHECKOUT GRID ===== */
  .checkout-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 40px;
    align-items: start;
  }

  @media (min-width: 992px) {
    .checkout-grid {
      grid-template-columns: 1.3fr 1fr;
      gap: 48px;
    }
  }

  /* ===== FORMS & SECTIONS ===== */
  .checkout-forms {
    display: flex;
    flex-direction: column;
    gap: 36px;
  }

  .form-section__title {
    display: flex;
    align-items: center;
    gap: 10px;
    font-family: "Inter", sans-serif;
    font-size: 16px;
    font-weight: 600;
    letter-spacing: 0.5px;
    color: #ffffff;
    margin-bottom: 16px;
  }

  .form-section__title svg {
    color: #e4c47f;
  }

  .card {
    background: #111111;
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 16px;
    padding: 28px;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .card--summary {
    position: sticky;
    top: 100px;
  }

  .field-row {
    display: grid;
    grid-template-columns: 1fr;
    gap: 20px;
  }

  @media (min-width: 640px) {
    .field-row {
      grid-template-columns: 1fr 1fr;
    }
  }

  .field {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .field label {
    font-size: 12px;
    font-weight: 500;
    color: rgba(255, 255, 255, 0.7);
    letter-spacing: 0.3px;
  }

  .field input,
  .field textarea,
  .select-wrap select {
    width: 100%;
    background: rgba(255, 255, 255, 0.04);
    border: 1px solid rgba(255, 255, 255, 0.12);
    border-radius: 10px;
    padding: 13px 16px;
    color: #ffffff;
    font-family: "Inter", sans-serif;
    font-size: 14px;
    outline: none;
    transition: border-color 200ms ease, background 200ms ease, box-shadow 200ms ease;
  }

  .field input::placeholder,
  .field textarea::placeholder {
    color: rgba(255, 255, 255, 0.25);
  }

  .field input:focus,
  .field textarea:focus,
  .select-wrap select:focus {
    border-color: #e4c47f;
    background: rgba(228, 196, 127, 0.04);
    box-shadow: 0 0 12px rgba(228, 196, 127, 0.15);
  }

  .select-wrap {
    position: relative;
    width: 100%;
  }

  .select-wrap select {
    appearance: none;
    -webkit-appearance: none;
    cursor: pointer;
    padding-right: 44px;
  }

  .select-wrap select option {
    background: #181818;
    color: #ffffff;
  }

  .select-wrap__chevron {
    position: absolute;
    right: 14px;
    top: 50%;
    transform: translateY(-50%);
    width: 18px;
    height: 18px;
    color: rgba(255, 255, 255, 0.4);
    pointer-events: none;
  }

  .form-actions {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
    margin-top: 12px;
  }

  .btn-ghost {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    background: transparent;
    border: 1px solid rgba(255, 255, 255, 0.14);
    border-radius: 12px;
    padding: 14px 22px;
    color: rgba(255, 255, 255, 0.85);
    font-size: 13px;
    font-weight: 500;
    cursor: pointer;
    transition: all 200ms ease;
  }

  .btn-ghost:hover {
    border-color: rgba(255, 255, 255, 0.35);
    color: #ffffff;
    background: rgba(255, 255, 255, 0.05);
  }

  .btn-primary {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background: #e4c47f;
    color: #0a0a0a;
    border: 1px solid #e4c47f;
    border-radius: 12px;
    padding: 14px 28px;
    font-size: 14px;
    font-weight: 600;
    letter-spacing: 0.3px;
    cursor: pointer;
    transition: all 200ms ease;
  }

  .btn-primary:hover {
    background: #eed59b;
    box-shadow: 0 0 20px rgba(228, 196, 127, 0.35);
  }

  /* ===== ORDER SUMMARY SIDEBAR ===== */
  .order-summary__title {
    font-family: "Playfair Display", serif;
    font-size: 20px;
    font-weight: 600;
    margin: 0 0 20px 0;
    color: #ffffff;
    padding-bottom: 16px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  }

  .product-item {
    display: flex;
    gap: 16px;
    align-items: center;
    padding-bottom: 20px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  }

  .product-item__thumb {
    width: 76px;
    height: 90px;
    background: #1a1a1a;
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 10px;
    overflow: hidden;
    flex-shrink: 0;
  }

  .product-item__thumb img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .product-item__info {
    display: flex;
    flex-direction: column;
    gap: 4px;
    flex-grow: 1;
  }

  .product-item__name {
    font-size: 14px;
    font-weight: 600;
    color: #ffffff;
    margin: 0;
  }

  .product-item__variant {
    font-size: 12px;
    color: rgba(255, 255, 255, 0.5);
    margin: 0;
  }

  .product-item__meta {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 6px;
  }

  .product-item__qty {
    font-size: 12px;
    color: rgba(255, 255, 255, 0.5);
  }

  .product-item__price {
    font-size: 14px;
    font-weight: 600;
    color: #e4c47f;
  }

  .summary-lines {
    display: flex;
    flex-direction: column;
    gap: 12px;
    padding: 16px 0;
  }

  .summary-line {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 13px;
    color: rgba(255, 255, 255, 0.7);
  }

  .summary-line__free {
    color: #4ade80;
    font-weight: 600;
  }

  .summary-line__total {
    padding-top: 16px;
    border-top: 1px solid rgba(255, 255, 255, 0.08);
    font-size: 16px;
    font-weight: 700;
    color: #ffffff;
  }

  .summary-line__total span:last-child {
    color: #e4c47f;
  }

  .secure-note {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 14px 16px;
    background: rgba(228, 196, 127, 0.05);
    border: 1px solid rgba(228, 196, 127, 0.18);
    border-radius: 12px;
    margin-top: 8px;
  }

  .secure-note svg {
    color: #e4c47f;
    flex-shrink: 0;
  }

  .secure-note__title {
    font-size: 12px;
    font-weight: 600;
    color: #ffffff;
    margin: 0;
  }

  .secure-note__desc {
    font-size: 11px;
    color: rgba(255, 255, 255, 0.5);
    margin: 2px 0 0 0;
  }

  @media (max-width: 991px) {
    .order-summary-container {
      padding: 100px 20px 60px 20px;
    }

    .checkout-grid {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 28px;
      width: 100%;
    }

    .checkout-forms {
      display: contents;
    }

    .form-section {
      width: min(100%, 680px);
      margin: 0 auto;
    }

    .form-section__title {
      justify-content: center;
      text-align: center;
    }

    .order-summary {
      order: 3;
      width: min(100%, 680px);
      margin: 0 auto;
    }

    .card--summary {
      position: static;
    }

    .form-actions {
      order: 4;
      width: min(100%, 680px);
      margin: 8px auto 0 auto;
    }
  }

  @media (max-width: 640px) {
    .order-summary-container {
      padding: 96px 16px 50px 16px;
    }

    .card {
      padding: 20px;
    }

    .form-actions {
      flex-direction: column-reverse;
      gap: 12px;
    }

    .btn-ghost, .btn-primary {
      width: 100%;
      justify-content: center;
      padding: 16px;
      font-size: 14px;
    }
  }
`;

const OrderSummary: React.FC = () => {
  const { user } = useAuth();
  const [formData, setFormData] = useState({
    fullName: "",
    whatsapp: "",
    email: "",
    street: "",
    province: "",
    city: "",
    subdistrict: "",
    postal: "",
  });

  const [cartItem, setCartItem] = useState<CartItem>({
    productSlug: "signature-noir-hoodie",
    productTitle: "Signature Noir Hoodie",
    color: "Charcoal",
    size: "Large",
    quantity: 1,
    price: 2450000,
  });

  useEffect(() => {
    // Populate user details if logged in
    if (user) {
      setFormData((prev) => ({
        ...prev,
        fullName: user.fullName || "",
        email: user.email || "",
        whatsapp: user.whatsapp || "",
      }));
    }

    // Read cart item from local storage if available
    try {
      const stored = window.localStorage.getItem("mahreen-studio-cart");
      if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed) && parsed.length > 0) {
          const last = parsed[parsed.length - 1];
          setCartItem({
            productSlug: last.productSlug || "signature-noir-hoodie",
            productTitle: last.productTitle || "Signature Noir Hoodie",
            color: last.color || "Charcoal",
            size: last.size || "Large",
            quantity: last.quantity || 1,
            price: 2450000,
          });
        }
      }
    } catch {
      // Fallback stays as default
    }
  }, [user]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleNextStep = (e: React.FormEvent) => {
    e.preventDefault();
    // Proceed to next step in checkout flow (e.g. payment confirmation)
    navigateToHashRoute("/mahreen-studio/checkout/payment");
  };

  const unitPrice = cartItem.price ?? 2450000;
  const qty = cartItem.quantity ?? 1;
  const subtotal = unitPrice * qty;
  const tax = Math.round(subtotal * 0.11);
  const total = subtotal + tax;

  const formatRupiah = (val: number) =>
    "Rp " + val.toLocaleString("id-ID");

  return (
    <div className="order-summary-page">
      <style data-component="order-summary">{orderSummaryStyles}</style>

      {/* NAVBAR STUDIOS */}
      <StudioNavbar />

      <main className="order-summary-container">
        {/* ===== STEP INDICATOR ===== */}
        <ol className="steps" aria-label="Tahapan Checkout">
          <li className="steps__item steps__item--active">
            <span className="steps__badge">1</span>
            <span className="steps__label">Details</span>
          </li>
          <li className="steps__divider" aria-hidden="true"></li>
          <li className="steps__item steps__item--inactive">
            <span className="steps__badge">2</span>
            <span className="steps__label">Payment</span>
          </li>
          <li className="steps__divider" aria-hidden="true"></li>
          <li className="steps__item steps__item--inactive">
            <span className="steps__badge">3</span>
            <span className="steps__label">Success</span>
          </li>
        </ol>

        {/* ===== CHECKOUT GRID IN Desktop Left Column In Mobile Center Column ===== */}
        <form onSubmit={handleNextStep} className="checkout-grid">
          {/* LEFT COLUMN: FORMS */}
          <div className="checkout-forms">
            <section className="form-section">
              <h2 className="form-section__title">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path
                    d="M8 8a3 3 0 100-6 3 3 0 000 6zM2.5 14a5.5 5.5 0 0111 0"
                    stroke="currentColor"
                    strokeWidth="1.3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Personal Information
              </h2>

              <div className="card">
                <div className="field-row">
                  <div className="field">
                    <label htmlFor="fullName">Full Name</label>
                    <input
                      type="text"
                      id="fullName"
                      placeholder="Enter your full name"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="field">
                    <label htmlFor="whatsapp">WhatsApp Number</label>
                    <input
                      type="tel"
                      id="whatsapp"
                      placeholder="+62 812 ..."
                      value={formData.whatsapp}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="field">
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    placeholder="name@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
            </section>

            <section className="form-section">
              <h2 className="form-section__title">
                <svg width="22" height="16" viewBox="0 0 22 16" fill="none">
                  <path
                    d="M1 4l10-3 10 3v8l-10 3-10-3V4z"
                    stroke="currentColor"
                    strokeWidth="1.3"
                    strokeLinejoin="round"
                  />
                  <path d="M11 1v14" stroke="currentColor" strokeWidth="1.3" />
                </svg>
                Shipping Destination
              </h2>

              <div className="card">
                <div className="field">
                  <label htmlFor="street">Street Address</label>
                  <textarea
                    id="street"
                    rows={3}
                    placeholder="Apartment, unit, floor, building name, street name"
                    value={formData.street}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>

                <div className="field-row">
                  <div className="field">
                    <label htmlFor="province">Province</label>
                    <div className="select-wrap">
                      <select
                        id="province"
                        value={formData.province}
                        onChange={handleChange}
                        required
                      >
                        <option value="" disabled>
                          Select Province
                        </option>
                        <option value="jabar">Jawa Barat</option>
                        <option value="dki">DKI Jakarta</option>
                        <option value="banten">Banten</option>
                        <option value="jateng">Jawa Tengah</option>
                        <option value="jatim">Jawa Timur</option>
                      </select>
                      <svg
                        className="select-wrap__chevron"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M6 9l6 6 6-6"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="field">
                    <label htmlFor="city">City / District</label>
                    <div className="select-wrap">
                      <select
                        id="city"
                        value={formData.city}
                        onChange={handleChange}
                        required
                      >
                        <option value="" disabled>
                          Select City
                        </option>
                        <option value="bandung">Bandung</option>
                        <option value="subang">Subang</option>
                        <option value="jakarta">Jakarta Selatan</option>
                        <option value="surabaya">Surabaya</option>
                      </select>
                      <svg
                        className="select-wrap__chevron"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M6 9l6 6 6-6"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                <div className="field-row">
                  <div className="field">
                    <label htmlFor="subdistrict">Sub-district</label>
                    <input
                      type="text"
                      id="subdistrict"
                      placeholder="Sub-district name"
                      value={formData.subdistrict}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="field">
                    <label htmlFor="postal">Postal Code</label>
                    <input
                      type="text"
                      id="postal"
                      placeholder="12345"
                      value={formData.postal}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
              </div>
            </section>

            <div className="form-actions">
              <button
                type="button"
                className="btn-ghost"
                onClick={() => navigateToHashRoute("/mahreen-studio")}
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path
                    d="M9.5 3L4 8l5.5 5"
                    stroke="currentColor"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Back to Shop
              </button>
              <button type="submit" className="btn-primary">
                Lanjut ke Pembayaran
              </button>
            </div>
          </div>

          {/* RIGHT COLUMN: ORDER SUMMARY */}
          <aside className="order-summary">
            <div className="card card--summary">
              <h3 className="order-summary__title">Order Summary</h3>

              <div className="product-item">
                <div className="product-item__thumb">
                  <img src={signatureHoodieImg} alt={cartItem.productTitle} />
                </div>
                <div className="product-item__info">
                  <p className="product-item__name">{cartItem.productTitle}</p>
                  <p className="product-item__variant">
                    {cartItem.color} / {cartItem.size}
                  </p>
                  <div className="product-item__meta">
                    <span className="product-item__qty">Qty: {qty}</span>
                    <span className="product-item__price">
                      {formatRupiah(subtotal)}
                    </span>
                  </div>
                </div>
              </div>

              <div className="summary-lines">
                <div className="summary-line">
                  <span>Subtotal</span>
                  <span>{formatRupiah(subtotal)}</span>
                </div>
                <div className="summary-line">
                  <span>Shipping Cost</span>
                  <span className="summary-line__free">Free</span>
                </div>
                <div className="summary-line">
                  <span>Tax (VAT 11%)</span>
                  <span>{formatRupiah(tax)}</span>
                </div>
                <div className="summary-line summary-line__total">
                  <span>Total</span>
                  <span>{formatRupiah(total)}</span>
                </div>
              </div>

              <div className="secure-note">
                <svg width="16" height="20" viewBox="0 0 16 20" fill="none">
                  <path
                    d="M8 1l7 3v5c0 5-3 8.5-7 10-4-1.5-7-5-7-10V4l7-3z"
                    stroke="currentColor"
                    strokeWidth="1.3"
                    strokeLinejoin="round"
                  />
                </svg>
                <div>
                  <p className="secure-note__title">Secure Checkout</p>
                  <p className="secure-note__desc">
                    Encrypted payment &amp; data protection.
                  </p>
                </div>
              </div>
            </div>
          </aside>
        </form>
      </main>

      {/* FOOTER & CLOSING SECTION */}
      <ClosingSection />
      <Footer />
    </div>
  );
};

export default OrderSummary;
