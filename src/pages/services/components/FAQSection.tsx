import { useState } from 'react';

const faqs = [
  {
    category: 'Before Your Appointment',
    items: [
      {
        q: 'How do I prepare for the detection?',
        a: 'Make sure all living spaces and accessible areas of your home are accessible, including the basement, closets, and any rooms you\'re concerned about. If you have pets, please secure them during the detection. You don\'t need to do any cleaning or prep work beforehand.',
      },
      {
        q: 'How long does a detection take?',
        a: 'Most residential detections take between 1 to 2 hours depending on the size of the home and the number of areas to be checked. Larger homes or homes with multiple levels may take a bit longer.',
      },
      {
        q: 'Do I need to be home during the detection?',
        a: 'Yes, we ask that a homeowner or authorized adult be present during the detection. This allows us to discuss findings with you in real time and answer any questions you may have.',
      },
    ],
  },
  {
    category: 'During the Detection',
    items: [
      {
        q: 'How does Liberty detect mold?',
        a: 'Liberty is trained to detect the volatile organic compounds (VOCs) that mold produces as it grows. These compounds have a distinct scent that Liberty can identify even when mold is hidden behind walls, under floors, or in areas not visible to the human eye.',
      },
      {
        q: 'Is the detection invasive? Will anything be damaged?',
        a: 'No, that\'s one of the biggest advantages of K9 detection. Liberty can identify mold without any drilling, cutting, or destructive methods. Your home stays intact throughout the entire process.',
      },
      {
        q: 'What happens when Liberty finds mold?',
        a: 'When Liberty detects mold, she will alert to the specific location. We will note the area and discuss the finding with you on the spot. You\'ll know exactly where the issue is located.',
      },
    ],
  },
  {
    category: 'After the Detection',
    items: [
      {
        q: 'What do I do if mold is found?',
        a: 'If Liberty detects mold, we recommend contacting a certified mold testing company to confirm the type and extent of the mold, followed by a licensed mold remediation contractor to address the issue. We can help point you in the right direction.',
      },
      {
        q: 'Do you provide a written report?',
        a: 'We provide a verbal report of findings on-site. If you need a formal written report for real estate or insurance purposes, we recommend following up with a certified mold testing company who can provide official documentation.',
      },
      {
        q: 'What if no mold is found?',
        a: 'Great news! If Liberty doesn\'t alert to any mold, you can have peace of mind knowing your home has been thoroughly checked by a trained K9 detection team. This is especially valuable for pre-purchase detections.',
      },
      {
        q: 'Can you come back after remediation to verify it was successful?',
        a: 'Absolutely. Post-remediation verification is one of the most valuable uses of K9 detection. Liberty can confirm whether the mold has been fully addressed before you close up walls or finalize any work.',
      },
    ],
  },
  {
    category: 'About K9 Detection',
    items: [
      {
        q: 'Why use a dog instead of a traditional inspector?',
        a: 'A trained detection dog can identify mold by scent with remarkable accuracy, often finding mold that traditional visual methods miss entirely. K9 detection is faster, non-invasive, and can cover areas that are difficult or impossible to visually inspect.',
      },
      {
        q: 'How accurate is K9 mold detection?',
        a: 'Trained mold detection dogs have been shown to have very high accuracy rates in identifying mold presence. Liberty has been specifically trained and conditioned to detect mold scent, and her skills are regularly maintained and reinforced.',
      },
    ],
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<string | null>(null);

  const toggle = (key: string) => {
    setOpenIndex(openIndex === key ? null : key);
  };

  return (
    <section className="bg-[#f7f9f4] py-20 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-500 text-base max-w-xl mx-auto leading-relaxed">
            Everything you need to know about K9 mold detection, before, during, and after your detection.
          </p>
        </div>

        <div className="flex flex-col gap-10">
          {faqs.map((section) => (
            <div key={section.category}>
              <h3 className="text-[#3a6b1a] font-bold text-sm uppercase tracking-widest mb-4">{section.category}</h3>
              <div className="flex flex-col gap-3">
                {section.items.map((item, idx) => {
                  const key = `${section.category}-${idx}`;
                  const isOpen = openIndex === key;
                  return (
                    <div
                      key={key}
                      className="bg-white rounded-xl overflow-hidden"
                    >
                      <button
                        className="w-full flex items-center justify-between px-6 py-5 text-left cursor-pointer"
                        onClick={() => toggle(key)}
                      >
                        <span className="text-gray-900 font-medium text-sm pr-4">{item.q}</span>
                        <div className="w-6 h-6 flex items-center justify-center flex-shrink-0">
                          <i className={`text-[#3a6b1a] text-lg transition-transform duration-200 ${isOpen ? 'ri-subtract-line' : 'ri-add-line'}`}></i>
                        </div>
                      </button>
                      {isOpen && (
                        <div className="px-6 pb-5">
                          <p className="text-gray-500 text-sm leading-relaxed">{item.a}</p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
