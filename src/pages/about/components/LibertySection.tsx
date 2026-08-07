const LibertySection = () => {
  return (
    <section className="bg-white py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Main Profile */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center mb-20">
          {/* Photo */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative">
              <div className="w-72 h-72 md:w-96 md:h-96 rounded-3xl overflow-hidden">
                <img
                  src="/images/838b3348bc3c025527d8b09334c9e212.png"
                  alt="Liberty, German Shepherd K9 Mold Detection Partner"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-[#3a6b1a] text-white rounded-2xl px-5 py-3">
                <p className="text-xs font-semibold uppercase tracking-wide">K9 Mold Detection</p>
                <p className="text-lg font-bold">Liberty</p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <span className="text-[#3a6b1a] text-xs font-bold uppercase tracking-widest">The Nose That Knows</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-5">Liberty</h2>

            <div className="bg-[#f7f9f4] border-l-4 border-[#3a6b1a] rounded-r-xl px-5 py-4 mb-6">
              <p className="text-gray-700 text-base italic leading-relaxed">
                &ldquo;Liberty doesn&apos;t miss. When she alerts, you know it&apos;s time to take a closer look. She&apos;s the reason we can find mold that other methods completely overlook.&rdquo;
              </p>
            </div>

            <p className="text-gray-600 text-base leading-relaxed mb-4">
              Liberty is a German Shepherd with an extraordinary gift: the ability to detect mold by scent with remarkable precision. She has been specifically trained to identify the volatile organic compounds (VOCs) produced by mold growth, even when it is completely hidden from sight behind drywall, under flooring, or inside HVAC systems.
            </p>
            <p className="text-gray-600 text-base leading-relaxed mb-6">
              Every day, Liberty&apos;s skills are maintained and reinforced through ongoing training exercises. Her work has helped countless Western New York homeowners uncover hidden mold problems before they became serious health hazards or costly repairs. She is the driving force behind every detection WNY Mold Dogs performs.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: 'ri-award-line', label: 'AKC Canine Good Citizen' },
                { icon: 'ri-home-2-line', label: 'Residential Specialist' },
                { icon: 'ri-map-pin-2-line', label: 'Western NY Based' },
                { icon: 'ri-heart-line', label: 'Passionate About Safety' },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-3">
                  <div className="w-8 h-8 flex items-center justify-center bg-[#eef5e6] rounded-lg">
                    <i className={`${item.icon} text-[#3a6b1a] text-base`}></i>
                  </div>
                  <span className="text-gray-700 text-sm font-medium">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Training & Credentials */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center mb-20">
          {/* Content */}
          <div className="order-2 lg:order-1">
            <span className="text-[#3a6b1a] text-xs font-bold uppercase tracking-widest">Training &amp; Certification</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-5">Built for the Work</h2>

            <p className="text-gray-600 text-base leading-relaxed mb-4">
              Liberty&apos;s training goes far beyond basic obedience. She has completed rigorous scent-detection conditioning specifically for mold VOCs, learning to distinguish mold-related odors from the thousands of other scents found in a typical home environment.
            </p>
            <p className="text-gray-600 text-base leading-relaxed mb-6">
              Liberty is also an AKC Canine Good Citizen, demonstrating her well-mannered temperament and reliability in all settings, from busy family homes to quiet residential properties. Her calm, focused demeanor makes her a welcome presence during every detection.
            </p>

            <div className="bg-[#f7f9f4] rounded-2xl p-6">
              <h3 className="text-gray-900 font-semibold text-base mb-4">What Liberty Can Detect</h3>
              <ul className="flex flex-col gap-3">
                {[
                  'Mold behind finished walls and ceilings',
                  'Hidden moisture damage under flooring',
                  'Mold presence in HVAC systems and ductwork',
                  'Active growth in basements and crawl spaces',
                  'Precise location alerts, not just general areas',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <div className="w-5 h-5 flex items-center justify-center mt-0.5">
                      <i className="ri-checkbox-circle-fill text-[#3a6b1a] text-sm"></i>
                    </div>
                    <span className="text-gray-600 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Photo */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-72 h-72 md:w-96 md:h-96 rounded-3xl overflow-hidden">
                <img
                  src="/images/ba18d6e1-f6db-4d6e-82c9-62fbf51fe0e1_compressed_IMG_7379.webp"
                  alt="Liberty with AKC Canine Good Citizen ribbon"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-[#7ab648] text-white rounded-2xl px-5 py-3">
                <p className="text-xs font-semibold uppercase tracking-wide">Certified</p>
                <p className="text-lg font-bold">AKC Good Citizen</p>
              </div>
            </div>
          </div>
        </div>

        {/* Photo Gallery: Honest captions */}
        <div className="text-center mb-10">
          <span className="text-[#3a6b1a] text-xs font-bold uppercase tracking-widest">Meet Liberty</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">Our K9 Partner</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-2xl overflow-hidden">
            <img
              src="/images/4265836d-aaa9-4e8a-a6d7-7a107db3ce81_compressed_Screenshot-2026-08-02-144235.webp"
              alt="Liberty on the job, focused and alert during a mold detection visit"
              className="w-full h-64 object-cover object-center"
            />
            <div className="bg-[#f7f9f4] px-4 py-3">
              <p className="text-gray-600 text-sm">Liberty on the job, locked in and ready to work.</p>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden">
            <img
              src="/images/ba317372-366f-4aeb-9146-ab5f096ca06f_compressed_IMG_6856-1.webp"
              alt="Liberty relaxing outdoors between detections"
              className="w-full h-64 object-cover object-top"
            />
            <div className="bg-[#f7f9f4] px-4 py-3">
              <p className="text-gray-600 text-sm">Liberty enjoying some downtime between detections.</p>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden bg-[#f7f9f4] flex flex-col items-center justify-center p-8">
            <div className="w-16 h-16 flex items-center justify-center bg-[#eef5e6] rounded-2xl mb-5">
              <i className="ri-search-line text-[#3a6b1a] text-3xl"></i>
            </div>
            <h3 className="text-gray-900 font-semibold text-lg mb-3">How She Works</h3>
            <p className="text-gray-500 text-sm text-center leading-relaxed">
              Liberty works methodically through every room, using her trained nose to identify mold that no human eye could find. When you book a detection, you&apos;ll see her in action firsthand.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LibertySection;