import { useState, useCallback } from 'react';

interface Slide {
  image: string;
  alt: string;
  caption: string;
}

const slides: Slide[] = [
  {
    image: 'https://storage.helloreaddy.io/project_files/79114f05-41e3-4c1f-a4b7-132d8791291d/078befe6-1391-4dea-ab23-25d5706ddc58_compressed_PXL_20260424_185236398.webp',
    alt: 'Real mold damage found behind drywall during a WNY Mold Dogs detection. Liberty marked this spot and the homeowners confirmed it upon removal',
    caption: 'Liberty marked this section of drywall during a detection visit. The homeowners later removed the wall themselves and found mold exactly where she indicated — precision you cannot get from an air test.',
  },
  {
    image: 'https://storage.helloreaddy.io/project_files/79114f05-41e3-4c1f-a4b7-132d8791291d/e64403c9-11f3-448a-8a71-937c3be8680f_compressed_Image-from-iOS-28.webp',
    alt: 'Mold growth discovered on wooden subflooring beneath a dishwasher after Liberty the K9 indicated elevated readings in the area',
    caption: 'Liberty alerted on the dishwasher area despite no visible signs of mold. The homeowner pulled the unit and uncovered this growth on the subfloor beneath it. A hidden problem that would have gone completely unnoticed without her scent-based search.',
  },
  {
    image: 'https://storage.helloreaddy.io/project_files/79114f05-41e3-4c1f-a4b7-132d8791291d/f4836cb4-bce9-4f67-8a90-3f6e9edd1421_compressed_Image-from-iOS-26.webp',
    alt: 'Black mold growing on wall insulation between wooden studs, revealed after paneling was removed following a K9 detection alert',
    caption: 'Liberty signaled repeatedly along this wall. When the homeowners removed the paneling, the insulation behind it was covered in black mold — completely invisible from the room, right where she had been indicating the entire time.',
  },
  {
    image: 'https://storage.helloreaddy.io/project_files/79114f05-41e3-4c1f-a4b7-132d8791291d/317da391-d896-42ed-b063-4b73491618dc_compressed_Image-from-iOS-27.webp',
    alt: 'Water damage and mold growth behind exposed plumbing pipes in a wall cavity, discovered after a K9 mold detection visit',
    caption: 'Liberty keyed in on the tub and an access panel behind the bathroom. This was later opened it up and found water damage and mold behind the tub and shower area. Another concealed problem she sniffed out before anyone even suspected it was there.',
  },
];

const CredibilitySection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const goTo = useCallback((index: number) => {
    setActiveIndex(index);
  }, []);

  const goPrev = useCallback(() => {
    setActiveIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  }, []);

  const goNext = useCallback(() => {
    setActiveIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  }, []);

  const currentSlide = slides[activeIndex];

  return (
    <section className="bg-[#f7f9f4] py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div>
            <span className="text-[#3a6b1a] text-xs font-bold uppercase tracking-widest">Real Results</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-5 leading-tight">
              We&apos;ve Already Found Mold<br />in Western NY Homes
            </h2>
            <p className="text-gray-500 text-base leading-relaxed mb-6">
              Liberty has conducted detections across Western New York, identifying hidden mold in homes that appeared perfectly fine to the naked eye. Her work has helped homeowners take action before small problems became major health hazards.
            </p>
            <ul className="flex flex-col gap-3 mb-8">
              {[
                'Mold detected behind finished basement walls',
                'Hidden moisture damage found before a home purchase',
                'Identified mold in HVAC areas invisible to standard methods',
                'Helped families confirm remediation was successful',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <div className="w-5 h-5 flex items-center justify-center mt-0.5">
                    <i className="ri-checkbox-circle-fill text-[#3a6b1a] text-base"></i>
                  </div>
                  <span className="text-gray-600 text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Slideshow */}
          <div className="flex flex-col gap-4">
            <div className="relative rounded-2xl overflow-hidden group">
              <img
                src={currentSlide.image}
                alt={currentSlide.alt}
                className="w-full h-auto object-cover object-top transition-opacity duration-500 ease-in-out"
                key={`slide-img-${activeIndex}`}
              />

              {/* Arrows — only show if more than one slide */}
              {slides.length > 1 && (
                <>
                  <button
                    onClick={goPrev}
                    className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 hover:bg-white flex items-center justify-center cursor-pointer transition-all duration-200 opacity-0 group-hover:opacity-100 shadow-sm"
                    aria-label="Previous slide"
                    type="button"
                  >
                    <i className="ri-arrow-left-s-line text-gray-800 text-lg"></i>
                  </button>
                  <button
                    onClick={goNext}
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 hover:bg-white flex items-center justify-center cursor-pointer transition-all duration-200 opacity-0 group-hover:opacity-100 shadow-sm"
                    aria-label="Next slide"
                    type="button"
                  >
                    <i className="ri-arrow-right-s-line text-gray-800 text-lg"></i>
                  </button>
                </>
              )}
            </div>

            {/* Dot indicators */}
            {slides.length > 1 && (
              <div className="flex items-center justify-center gap-2">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goTo(index)}
                    className={`w-2.5 h-2.5 rounded-full cursor-pointer transition-all duration-300 ${
                      index === activeIndex
                        ? 'bg-[#3a6b1a] w-6'
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                    type="button"
                  />
                ))}
              </div>
            )}

            {/* Caption */}
            <div className="bg-[#1c2e0f] rounded-xl px-5 py-4 transition-all duration-500 ease-in-out">
              <p className="text-[#a8d96b] text-xs font-bold uppercase tracking-wider mb-2">Actual finds from Liberty&apos;s Detections</p>
              <p className="text-white/90 text-sm leading-relaxed">
                {currentSlide.caption}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CredibilitySection;