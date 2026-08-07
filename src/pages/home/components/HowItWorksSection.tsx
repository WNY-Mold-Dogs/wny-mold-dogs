const steps = [
  {
    number: '01',
    title: 'Call or Submit a Request',
    desc: 'Give us a call or fill out our online request form. We\'ll discuss your concerns, confirm availability, and get you scheduled. No payment upfront.',
    icon: 'ri-calendar-check-line',
  },
  {
    number: '02',
    title: 'Liberty Detects Mold in Your Home',
    desc: 'Our certified K9 team arrives at your property and conducts a thorough walkthrough. Liberty\'s trained nose identifies mold presence and location.',
    icon: 'ri-search-line',
  },
  {
    number: '03',
    title: 'Get Your Results',
    desc: 'After the detection, you\'ll know exactly where mold was detected and what areas to focus on for testing or remediation.',
    icon: 'ri-file-list-3-line',
  },
];

const HowItWorksSection = () => {
  return (
    <section className="bg-white py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
          <p className="text-gray-500 text-base max-w-lg mx-auto leading-relaxed">
            Getting a K9 mold detection is simple. Here&apos;s what to expect from start to finish.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connecting line (desktop only) */}
          <div className="hidden md:block absolute top-10 left-[calc(16.67%+1rem)] right-[calc(16.67%+1rem)] h-px bg-[#d4e8c0] z-0"></div>

          {steps.map((step, idx) => (
            <div key={idx} className="relative z-10 flex flex-col items-center text-center gap-5">
              <div className="w-20 h-20 flex items-center justify-center bg-[#3a6b1a] rounded-full">
                <i className={`${step.icon} text-white text-3xl`}></i>
              </div>
              <div>
                <span className="text-[#7ab648] text-xs font-bold uppercase tracking-widest">Step {step.number}</span>
                <h3 className="text-gray-900 font-bold text-lg mt-1 mb-2">{step.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed max-w-xs mx-auto">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
