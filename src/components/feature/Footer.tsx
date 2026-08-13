import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#1c2e0f] text-white">
      {/* Brand accent bar */}
      <div className="h-1 w-full bg-gradient-to-r from-[#3a6b1a] via-[#7ab648] to-[#3a6b1a]"></div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Brand */}
        <div className="flex flex-col gap-5">
          <div className="flex items-center gap-4">
            <img
              src="/images/babc4672-f2d4-4b81-9773-9d4efd433311_compressed_ChatGPT-Image-Aug-7-2026-11_09_21-AM.webp"
              alt="WNY Mold Dogs Logo"
              className="h-16 w-auto object-contain flex-shrink-0 brightness-0 invert"
            />
            <div className="flex flex-col">
              <span className="text-white font-extrabold text-xl tracking-tight leading-tight">WNY Mold Dogs</span>
              <span className="text-[#7ab648] text-xs font-semibold tracking-[0.18em] uppercase mt-0.5">K9 Mold Detection</span>
            </div>
          </div>
          <p className="text-white/60 text-sm leading-relaxed">
            Protecting Western New York homes with highly trained K9 mold detection. Fast, accurate, and non-invasive detection you can trust.
          </p>
          <div className="flex items-center gap-2 mt-1">
            <div className="h-px flex-1 bg-white/10"></div>
            <span className="text-white/30 text-xs tracking-widest uppercase">Elma, NY</span>
            <div className="h-px flex-1 bg-white/10"></div>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-semibold text-xs uppercase tracking-widest mb-5 flex items-center gap-2">
            <span className="inline-block w-4 h-0.5 bg-[#7ab648]"></span>
            Quick Links
          </h4>
          <ul className="flex flex-col gap-3">
            {[
              { label: 'Home', path: '/' },
              { label: 'About Our Dog', path: '/about' },
              { label: 'Services and Booking', path: '/services' },
              { label: 'FAQ', path: '/faq' },
              { label: 'Book a Detection', path: '/services#booking' },
            ].map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className="text-white/60 text-sm hover:text-[#7ab648] transition-colors cursor-pointer flex items-center gap-2 group"
                >
                  <i className="ri-arrow-right-s-line text-[#3a6b1a] group-hover:text-[#7ab648] transition-colors"></i>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-white font-semibold text-xs uppercase tracking-widest mb-5 flex items-center gap-2">
            <span className="inline-block w-4 h-0.5 bg-[#7ab648]"></span>
            Contact Us
          </h4>
          <ul className="flex flex-col gap-4">
            <li className="flex items-start gap-3">
              <div className="w-8 h-8 flex items-center justify-center bg-[#3a6b1a]/40 rounded-lg flex-shrink-0">
                <i className="ri-phone-line text-[#7ab648] text-sm"></i>
              </div>
              <div>
                <a href="tel:7163277099" className="text-white/80 text-sm hover:text-white transition-colors cursor-pointer font-medium">
                  (716) 327-7099
                </a>
                <p className="text-white/40 text-xs mt-0.5">Call or text anytime</p>
              </div>
            </li>
            <li className="flex items-center gap-3">
              <div className="w-8 h-8 flex items-center justify-center bg-[#3a6b1a]/40 rounded-lg flex-shrink-0">
                <i className="ri-mail-line text-[#7ab648] text-sm"></i>
              </div>
              <a href="mailto:wnymolddogs@gmail.com" className="text-white/80 text-sm hover:text-white transition-colors cursor-pointer">
                wnymolddogs@gmail.com
              </a>
            </li>
            <li className="flex items-center gap-3">
              <div className="w-8 h-8 flex items-center justify-center bg-[#3a6b1a]/40 rounded-lg flex-shrink-0">
                <i className="ri-map-pin-line text-[#7ab648] text-sm"></i>
              </div>
              <span className="text-white/60 text-sm">Elma, NY · Serving All of Western NY</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-white/30 text-xs">&copy; {new Date().getFullYear()} WNY Mold Dogs. All rights reserved.</p>
          <p className="text-white/30 text-xs">Serving Buffalo, Niagara Falls &amp; Western NY</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
