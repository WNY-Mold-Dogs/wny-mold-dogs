import { Link } from 'react-router-dom';

const FAQCTASection = () => (
  <section className="bg-[#1a2e0d] py-20 px-4 md:px-8">
    <div className="max-w-3xl mx-auto text-center">
      <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#7ab648]/20 mx-auto mb-6">
        <i className="ri-question-answer-line text-[#7ab648] text-xl"></i>
      </div>
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
        Still have questions?
      </h2>
      <p className="text-white/60 text-base md:text-lg leading-relaxed mb-10 max-w-xl mx-auto">
        We're happy to talk through your specific situation before you book. Give us a call or go ahead and schedule your detection. We'll answer everything on-site.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link
          to="/services#booking"
          className="bg-[#3a6b1a] hover:bg-[#2d5214] text-white font-semibold px-8 py-4 rounded-full transition-all duration-200 text-center whitespace-nowrap cursor-pointer text-sm"
        >
          Book a Detection
        </Link>
        <a
          href="tel:+17163277099"
          className="border border-white/30 hover:border-white text-white font-semibold px-8 py-4 rounded-full transition-all duration-200 text-center whitespace-nowrap cursor-pointer text-sm"
        >
          <i className="ri-phone-line mr-2"></i>
          Call Us Directly
        </a>
      </div>
      <p className="text-white/30 text-xs mt-8">
        Serving Buffalo, Niagara Falls, Lockport, Cheektowaga, Amherst, and all of Western New York
      </p>
    </div>
  </section>
);

export default FAQCTASection;
