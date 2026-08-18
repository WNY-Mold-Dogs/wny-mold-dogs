import { useState, FormEvent } from 'react';

const PROMO_CODES: Record<string, { label: string; discount: number; type: 'percent' | 'fixed' }> = {
  HOLISTICWNY: { label: 'Holistic Partner Referral', discount: 10, type: 'percent' },
  MOLDAWARE: { label: 'Mold Awareness Partner', discount: 10, type: 'percent' },
  SPRING2026: { label: 'Spring Seasonal Promo', discount: 50, type: 'fixed' },
  FALL2026: { label: 'Fall Seasonal Promo', discount: 50, type: 'fixed' },
};

const BookingSection = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [charCount, setCharCount] = useState(0);
  const [promoInput, setPromoInput] = useState('');
  const [promoApplied, setPromoApplied] = useState<null | { code: string; label: string; discount: number; type: 'percent' | 'fixed' }>(null);
  const [promoError, setPromoError] = useState('');

  const handleApplyPromo = () => {
    const code = promoInput.trim().toUpperCase();
    if (!code) {
      setPromoError('Please enter a promo code.');
      return;
    }
    const found = PROMO_CODES[code];
    if (!found) {
      setPromoError('That code isn\'t valid. Please check and try again.');
      setPromoApplied(null);
      return;
    }
    setPromoApplied({ code, ...found });
    setPromoError('');
  };

  const handleRemovePromo = () => {
    setPromoApplied(null);
    setPromoInput('');
    setPromoError('');
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const form = e.currentTarget;

    const honeypot = (form.querySelector('[name="website_alt"]') as HTMLInputElement)?.value?.trim();
    if (honeypot) {
      setSubmitted(true);
      setLoading(false);
      return;
    }

    const data = new URLSearchParams();
    const formData = new FormData(form);
    formData.forEach((value, key) => {
      if (key === 'website_alt') return;
      data.append(key, value.toString());
    });
    if (promoApplied) {
      data.append('promo_code', promoApplied.code);
      data.append('promo_label', promoApplied.label);
      data.append(
        'promo_discount',
        promoApplied.type === 'percent'
          ? `${promoApplied.discount}% off`
          : `$${promoApplied.discount} off`
      );
    }
    data.append('form-name', 'booking');
    try {
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: data.toString(),
      });
      setSubmitted(true);
    } catch {
      setSubmitted(false);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="booking" className="bg-[#1c2e0f] py-20 px-4 md:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8">
          <span className="inline-block bg-[#7ab648]/20 border border-[#7ab648]/30 text-[#a8d96b] text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5">
            Get Started
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Submit Detection Request</h2>
          <p className="text-white/60 text-base leading-relaxed">
            Fill out the form below and we&apos;ll reach out to confirm availability and provide a quote. We&apos;ll discuss pricing when we call. No payment is needed upfront.
          </p>
        </div>

        {/* Quote notice banner */}
        <div className="bg-[#7ab648]/10 border border-[#7ab648]/30 rounded-xl px-5 py-4 mb-8 flex gap-3 items-start">
          <div className="w-5 h-5 flex items-center justify-center mt-0.5 shrink-0">
            <i className="ri-phone-line text-[#a8d96b] text-lg"></i>
          </div>
          <div>
            <p className="text-[#a8d96b] text-sm font-semibold mb-0.5">We&apos;ll Call You With a Quote</p>
            <p className="text-white/60 text-xs leading-relaxed">
              This is an <strong className="text-white/80">detection request only</strong> &mdash; your appointment is not booked until we contact you to confirm availability and discuss pricing. We&apos;ll go over everything when we call.
            </p>
          </div>
        </div>

        {submitted ? (
          <div className="bg-[#2d5214] rounded-2xl p-10 text-center">
            <div className="w-16 h-16 flex items-center justify-center bg-[#7ab648]/20 rounded-full mx-auto mb-5">
              <i className="ri-checkbox-circle-fill text-[#7ab648] text-4xl"></i>
            </div>
            <h3 className="text-white text-xl font-bold mb-3">Request Received!</h3>
            <p className="text-white/70 text-base leading-relaxed">
              Thanks for reaching out! We will contact you shortly to confirm your appointment details and discuss pricing. If you need to reach us sooner, call or text{' '}
              <a href="tel:7163277099" className="text-[#7ab648] font-semibold">(716) 327-7099</a>.
            </p>
          </div>
        ) : (
          <form
            name="booking"
            data-netlify="true"
            netlify-honeypot="website_alt"
            onSubmit={handleSubmit}
            className="bg-white rounded-2xl p-8 md:p-10 flex flex-col gap-5"
          >
            <input type="hidden" name="form-name" value="booking" />
            {/* Honeypot */}
            <div className="absolute opacity-0 pointer-events-none" style={{ height: 0, overflow: 'hidden' }} aria-hidden="true">
              <input type="text" name="website_alt" tabIndex={-1} autoComplete="off" readOnly />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="flex flex-col gap-1.5">
                <label className="text-gray-700 text-sm font-medium">First Name *</label>
                <input
                  type="text"
                  name="first_name"
                  required
                  placeholder="Jane"
                  className="border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-800 focus:outline-none focus:border-[#3a6b1a] transition-colors"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-gray-700 text-sm font-medium">Last Name *</label>
                <input
                  type="text"
                  name="last_name"
                  required
                  placeholder="Smith"
                  className="border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-800 focus:outline-none focus:border-[#3a6b1a] transition-colors"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="flex flex-col gap-1.5">
                <label className="text-gray-700 text-sm font-medium">Email *</label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="jane@email.com"
                  className="border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-800 focus:outline-none focus:border-[#3a6b1a] transition-colors"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-gray-700 text-sm font-medium">Phone Number *</label>
                <input
                  type="tel"
                  name="phone"
                  required
                  placeholder="(716) 555-0000"
                  className="border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-800 focus:outline-none focus:border-[#3a6b1a] transition-colors"
                />
              </div>
            </div>

            {/* Address, split into required parts */}
            <div className="flex flex-col gap-1.5">
              <label className="text-gray-700 text-sm font-medium">Street Address *</label>
              <input
                type="text"
                name="street_address"
                required
                placeholder="123 Main St"
                className="border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-800 focus:outline-none focus:border-[#3a6b1a] transition-colors"
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-6 gap-5">
              <div className="sm:col-span-3 flex flex-col gap-1.5">
                <label className="text-gray-700 text-sm font-medium">City *</label>
                <input
                  type="text"
                  name="city"
                  required
                  placeholder="Buffalo"
                  className="border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-800 focus:outline-none focus:border-[#3a6b1a] transition-colors"
                />
              </div>
              <div className="sm:col-span-1 flex flex-col gap-1.5">
                <label className="text-gray-700 text-sm font-medium">State *</label>
                <input
                  type="text"
                  name="state"
                  required
                  maxLength={2}
                  defaultValue="NY"
                  placeholder="NY"
                  className="border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-800 focus:outline-none focus:border-[#3a6b1a] transition-colors uppercase"
                />
              </div>
              <div className="sm:col-span-2 flex flex-col gap-1.5">
                <label className="text-gray-700 text-sm font-medium">Zip Code *</label>
                <input
                  type="text"
                  name="zip"
                  required
                  inputMode="numeric"
                  pattern="[0-9]{5}"
                  maxLength={5}
                  placeholder="14201"
                  className="border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-800 focus:outline-none focus:border-[#3a6b1a] transition-colors"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="flex flex-col gap-1.5">
                <label className="text-gray-700 text-sm font-medium">Service Type *</label>
                <select
                  name="service_type"
                  required
                  onChange={() => {
                    setPromoApplied(null);
                    setPromoInput('');
                    setPromoError('');
                  }}
                  className="border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-800 focus:outline-none focus:border-[#3a6b1a] transition-colors bg-white cursor-pointer"
                >
                  <option value="">Select a service</option>
                  <option value="Residential Mold Detection">Residential Mold Detection</option>
                  <option value="Pre-Purchase / Pre-Listing Check">Pre-Purchase / Pre-Listing Check</option>
                  <option value="Visible Mold Swab Sampling">Visible Mold Swab Sampling</option>
                  <option value="Outside Standard Service Area - Custom Quote">Outside Standard Area, Custom Quote</option>
                </select>
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-gray-700 text-sm font-medium">Approximate Square Footage *</label>
                <select
                  name="square_footage"
                  required
                  className="border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-800 focus:outline-none focus:border-[#3a6b1a] transition-colors bg-white cursor-pointer"
                >
                  <option value="">Select a range</option>
                  <option value="Under 1,499 sq ft">Under 1,499 sq. ft.</option>
                  <option value="1,500 to 1,999 sq ft">1,500 to 1,999 sq. ft.</option>
                  <option value="2,000+ sq ft">2,000+ sq. ft.</option>
                </select>
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-gray-700 text-sm font-medium">Preferred Date</label>
              <input
                type="date"
                name="preferred_date"
                className="border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-800 focus:outline-none focus:border-[#3a6b1a] transition-colors"
              />
            </div>

            {/* Promo Code Field */}
            <div className="flex flex-col gap-1.5">
              <label className="text-gray-700 text-sm font-medium">
                Promo Code
                <span className="text-gray-400 font-normal ml-2">(optional)</span>
              </label>
              {promoApplied ? (
                <div className="flex items-center gap-3 bg-[#eef5e6] border border-[#3a6b1a]/30 rounded-lg px-4 py-3">
                  <div className="w-5 h-5 flex items-center justify-center shrink-0">
                    <i className="ri-coupon-3-line text-[#3a6b1a] text-base"></i>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[#3a6b1a] text-sm font-semibold">{promoApplied.code}</p>
                    <p className="text-gray-500 text-xs">{promoApplied.label}, {promoApplied.type === 'percent' ? `${promoApplied.discount}% off` : `$${promoApplied.discount} off`}</p>
                  </div>
                  <button
                    type="button"
                    onClick={handleRemovePromo}
                    className="text-gray-400 hover:text-red-500 transition-colors cursor-pointer whitespace-nowrap"
                  >
                    <i className="ri-close-line text-lg"></i>
                  </button>
                </div>
              ) : (
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={promoInput}
                    onChange={(e) => { setPromoInput(e.target.value); setPromoError(''); }}
                    placeholder="Enter promo code"
                    className="flex-1 border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-800 focus:outline-none focus:border-[#3a6b1a] transition-colors uppercase"
                  />
                  <button
                    type="button"
                    onClick={handleApplyPromo}
                    className="bg-[#3a6b1a] hover:bg-[#2d5214] text-white text-sm font-semibold px-5 py-3 rounded-lg transition-colors whitespace-nowrap cursor-pointer"
                  >
                    Apply
                  </button>
                </div>
              )}
              {promoError && (
                <p className="text-red-500 text-xs mt-0.5">{promoError}</p>
              )}
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-gray-700 text-sm font-medium">
                Additional Notes
                <span className="text-gray-400 font-normal ml-2">({charCount}/500)</span>
              </label>
              <textarea
                name="notes"
                rows={4}
                maxLength={500}
                placeholder="Tell us about your concerns, specific areas you want us to check, or any other details..."
                onChange={(e) => setCharCount(e.target.value.length)}
                className="border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-800 focus:outline-none focus:border-[#3a6b1a] transition-colors resize-none"
              ></textarea>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-lg px-4 py-3 flex gap-2.5 items-start">
              <div className="w-4 h-4 flex items-center justify-center mt-0.5 shrink-0">
                <i className="ri-information-line text-amber-500 text-base"></i>
              </div>
              <p className="text-amber-700 text-xs leading-relaxed">
                <strong>This is a request, not a confirmed booking.</strong> We will contact you to verify availability and discuss pricing. Your appointment is only confirmed once we&apos;ve spoken and you&apos;ve signed the service agreement via DocuSign. We cannot guarantee your date until then.
              </p>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="bg-[#3a6b1a] hover:bg-[#2d5214] disabled:opacity-60 text-white font-semibold py-4 rounded-full transition-colors whitespace-nowrap cursor-pointer text-base"
            >
              {loading ? 'Sending...' : 'Submit Detection Request'}
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default BookingSection;
