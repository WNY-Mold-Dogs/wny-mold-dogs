import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="relative flex items-center overflow-hidden bg-[#1c2e0f]">
      <div className="w-full max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="order-2 lg:order-1">
            {/* Brand mark */}
            <div className="flex items-center gap-3 mb-7">
              <img
                src="/images/babc4672-f2d4-4b81-9773-9d4efd433311_compressed_ChatGPT-Image-Aug-7-2026-11_09_21-AM.webp"
                alt="WNY Mold Dogs Logo"
                className="h-10 w-auto object-contain flex-shrink-0 brightness-0 invert opacity-90"
              />
              <span className="text-[#a8d96b] text-xs font-semibold tracking-[0.2em] uppercase">
                Highly Trained K9 Mold Detection in Western New York
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Find Mold Before<br />
              <span className="text-[#7ab648]">It Finds You.</span>
            </h1>

            <p className="text-white/80 text-lg md:text-xl leading-relaxed mb-10 max-w-lg">
              WNY Mold Dogs uses a trained K9 detection team to locate mold quickly, accurately, and without tearing apart your home. Serving Buffalo, Niagara Falls, and all of Western NY.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/services#booking"
                className="bg-[#3a6b1a] hover:bg-[#2d5214] text-white font-semibold px-8 py-4 rounded-full transition-all duration-200 text-center whitespace-nowrap cursor-pointer text-base"
              >
                Book a Detection
              </Link>
              <Link
                to="/services"
                className="border border-white/50 hover:border-white text-white font-semibold px-8 py-4 rounded-full transition-all duration-200 text-center whitespace-nowrap cursor-pointer text-base backdrop-blur-sm"
              >
                View Services
              </Link>
            </div>
          </div>

          {/* Liberty Photo: Full body, no cropping */}
          <div className="order-1 lg:order-2 flex items-center justify-center lg:justify-end">
            <div className="relative w-full max-w-sm lg:max-w-md">
              <img
                src="/images/1593af0a-5e93-4bdf-ae69-fe3096a19e43_compressed_IMG_1231.webp"
                alt="Liberty the German Shepherd with WNY Mold Dogs branded gear, highly trained K9 mold detection partner"
                className="w-full h-auto rounded-3xl"
              />
              {/* Subtle badge overlay */}
              <div className="absolute -bottom-3 -left-3 bg-[#3a6b1a] text-white rounded-2xl px-5 py-3">
                <p className="text-xs font-semibold uppercase tracking-wide">K9 Mold Detection</p>
                <p className="text-lg font-bold">Liberty</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce hidden md:flex">
        <div className="w-5 h-5 flex items-center justify-center">
          <i className="ri-arrow-down-line text-white/60 text-lg"></i>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
