import { Link } from 'react-router-dom';

const BookingCTASection = () => {
  return (
    <section className="relative py-24 px-4 md:px-8 overflow-hidden bg-[#1c2e0f]">
      <div className="relative z-10 max-w-3xl mx-auto text-center">
        {/* Brand mark */}
        <div className="flex items-center justify-center mb-8">
          <img src="/images/babc4672-f2d4-4b81-9773-9d4efd433311_compressed_ChatGPT-Image-Aug-7-2026-11_09_21-AM.webp" alt="WNY Mold Dogs" className="h-24 md:h-28 w-auto object-contain brightness-0 invert" />
        </div>

        <span className="inline-block bg-[#7ab648]/20 border border-[#7ab648]/30 text-[#a8d96b] text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">
          Serving Buffalo, Niagara Falls &amp; All of Western NY
        </span>
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
          Ready to Protect Your Home?
        </h2>
        <p className="text-white/70 text-base md:text-lg leading-relaxed mb-10">
          Don&apos;t wait until mold becomes a serious problem. Book a K9 detection today and get the peace of mind you deserve. Pricing is based on the size and scope of your property. Contact us for a personalized quote.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
          <Link to="/services#booking" className="bg-[#7ab648] hover:bg-[#6aa33d] text-white font-semibold px-10 py-4 rounded-full transition-all duration-200 whitespace-nowrap cursor-pointer text-base">
            Book a Detection
          </Link>
          <a href="tel:7163277099" className="border border-white/40 hover:border-white text-white font-semibold px-10 py-4 rounded-full transition-all duration-200 whitespace-nowrap cursor-pointer text-base">
            Call (716) 327-7099
          </a>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-white/60 text-sm">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 flex items-center justify-center">
              <i className="ri-map-pin-line text-[#7ab648]"></i>
            </div>
            <span>Western New York</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 flex items-center justify-center">
              <i className="ri-phone-line text-[#7ab648]"></i>
            </div>
            <span>(716) 327-7099</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 flex items-center justify-center">
              <i className="ri-mail-line text-[#7ab648]"></i>
            </div>
            <span>wnymolddogs@gmail.com</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingCTASection;
