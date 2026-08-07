import { Link } from 'react-router-dom';

const MissionSection = () => {
  return (
    <section className="bg-white py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Mission Statement */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#3a6b1a] text-xs font-bold uppercase tracking-widest">Our Mission</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-5">
            Protecting Western NY Homes, One Detection at a Time
          </h2>
          <p className="text-gray-500 text-base leading-relaxed">
            WNY Mold Dogs was founded with a simple mission: give Western New York homeowners access to the most accurate, non-invasive mold detection available. We believe every family deserves to know what&apos;s in their home, and we&apos;re here to help them find out.
          </p>
        </div>

        {/* Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {[
            {
              icon: 'ri-focus-3-line',
              title: 'Accuracy First',
              desc: 'We don\'t guess. Liberty\'s trained nose provides precise, reliable detection results you can act on with confidence.',
            },
            {
              icon: 'ri-hand-heart-line',
              title: 'Client-Centered',
              desc: 'We take time to explain what we found, what it means, and what your next steps should be. You\'re never left in the dark.',
            },
            {
              icon: 'ri-leaf-line',
              title: 'Non-Invasive',
              desc: 'No drilling, no cutting, no mess. We identify mold without causing any damage to your home in the process.',
            },
          ].map((item) => (
            <div key={item.title} className="bg-[#f7f9f4] rounded-2xl p-7 flex flex-col gap-4">
              <div className="w-12 h-12 flex items-center justify-center bg-[#eef5e6] rounded-xl">
                <i className={`${item.icon} text-[#3a6b1a] text-2xl`}></i>
              </div>
              <h3 className="text-gray-900 font-semibold text-base">{item.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="bg-[#1c2e0f] rounded-3xl p-10 md:p-14 text-center">
          <h3 className="text-white text-2xl md:text-3xl font-bold mb-4">Ready to Book a Detection?</h3>
          <p className="text-white/70 text-base mb-8 max-w-lg mx-auto">
            Liberty is ready to help protect your home. Detections start as low as $299, with pricing based on the size and scope of your property.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/services#booking"
              className="bg-[#7ab648] hover:bg-[#6aa33d] text-white font-semibold px-8 py-3.5 rounded-full transition-colors whitespace-nowrap cursor-pointer"
            >
              Book a Detection
            </Link>
            
              href="tel:7163277099"
              className="border border-white/30 hover:border-white text-white font-semibold px-8 py-3.5 rounded-full transition-colors whitespace-nowrap cursor-pointer"
            >
              Call (716) 327-7099
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
