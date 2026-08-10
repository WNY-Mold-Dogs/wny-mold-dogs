const highlights = [
  {
    icon: 'ri-shield-check-line',
    title: 'Highly Trained Detection Team',
    desc: 'Liberty is a professionally trained K9 detection partner with real-world detection experience across Western New York.',
  },
  {
    icon: 'ri-search-eye-line',
    title: 'Non-Invasive & Accurate',
    desc: 'No drilling, no guessing. Liberty\'s nose can detect mold behind walls and under floors without any destructive methods.',
  },
  {
    icon: 'ri-time-line',
    title: 'Fast Results',
    desc: 'Most residential detections are completed in a single visit. You\'ll know exactly where to focus remediation efforts.',
  },
  {
    icon: 'ri-home-heart-line',
    title: 'Residential Specialists',
    desc: 'From pre-purchase checks to general mold concerns, we help Western NY homeowners make informed decisions about their property.',
  },
];

const HighlightsSection = () => {
  return (
    <section className="bg-[#f7f9f4] py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Brand strip */}
        <div className="flex items-center justify-center gap-4 mb-14">
          <div className="h-px flex-1 bg-[#d4e8c0]"></div>
          <div className="flex items-center gap-3 px-4">
            <img
              src="/images/7fe2b9714f5b17d13981813ad2ff2fd2.png"
              alt="WNY Mold Dogs"
              className="h-10 w-10 object-contain"
            />
            <span className="text-[#3a6b1a] font-bold text-sm tracking-widest uppercase">WNY Mold Dogs</span>
          </div>
          <div className="h-px flex-1 bg-[#d4e8c0]"></div>
        </div>

        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose K9 Detection?
          </h2>
          <p className="text-gray-500 text-base max-w-xl mx-auto leading-relaxed">
            A trained detection dog can locate mold with remarkable precision, faster and less invasively than traditional visual methods.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item) => (
            <div
              key={item.title}
              className="bg-white rounded-2xl p-7 flex flex-col gap-4 hover:-translate-y-1 transition-transform duration-200"
            >
              <div className="w-12 h-12 flex items-center justify-center bg-[#eef5e6] rounded-xl">
                <i className={`${item.icon} text-[#3a6b1a] text-2xl`}></i>
              </div>
              <h3 className="text-gray-900 font-semibold text-base">{item.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HighlightsSection;
