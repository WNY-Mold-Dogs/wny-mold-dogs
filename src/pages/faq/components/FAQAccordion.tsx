import { useState } from 'react';

interface FAQItem {
  q: string;
  a: string;
}

interface FAQCategory {
  category: string;
  icon: string;
  items: FAQItem[];
}

const faqs: FAQCategory[] = [
  {
    category: 'Before Your Appointment',
    icon: 'ri-calendar-check-line',
    items: [
      {
        q: 'How do I prepare for the detection?',
        a: 'Make sure all living spaces and accessible areas of your home are ready for us, including the basement, closets, and any rooms you\'re concerned about. If you have pets, please secure them in one room or outside during the detection so Liberty can work without distraction. You don\'t need to do any cleaning or special prep. Just make sure our team can get in and move around freely.',
      },
      {
        q: 'How long does a detection take?',
        a: 'Most residential detections take between 1 to 2 hours depending on the size and layout of the home. Homes with finished basements or multiple levels may take slightly longer. We\'ll give you an estimate when you book based on your square footage.',
      },
      {
        q: 'Do I need to be home during the detection?',
        a: 'Yes, we require a homeowner or authorized adult (18+) to be present for the entire detection. This lets us walk you through findings in real time, answer questions as they come up, and make sure you understand exactly what was detected and where.',
      },
      {
        q: 'What should I tell you before the appointment?',
        a: 'Let us know if there are any areas of the home that are particularly concerning to you, any history of water damage or leaks, or any areas that are difficult to access. The more context you give us upfront, the more targeted and efficient the detection can be.',
      },
      {
        q: 'Can I schedule a detection for a home I\'m buying?',
        a: 'Absolutely, pre-purchase detections are one of our most popular services. We strongly recommend scheduling a K9 mold check before closing on any property, especially older homes or homes that have had water damage. It\'s a small investment compared to discovering a serious mold problem after you\'ve moved in.',
      },
      {
        q: 'How far in advance do I need to book?',
        a: 'We recommend booking at least a few days in advance to ensure availability, especially during busy seasons. If you have an urgent situation, contact us directly and we\'ll do our best to accommodate you as quickly as possible.',
      },
    ],
  },
  {
    category: 'How K9 Detection Works',
    icon: 'ri-search-eye-line',
    items: [
      {
        q: 'How does Liberty actually detect mold?',
        a: 'Liberty is trained to detect the volatile organic compounds (VOCs) that mold produces as it grows. These compounds have a distinct chemical scent that Liberty can identify even when mold is completely hidden behind drywall, under flooring, inside HVAC systems, or in other areas that are invisible to the human eye. When she detects the scent, she\'s trained to alert in a specific, recognizable way so our handler knows exactly where to focus.',
      },
      {
        q: 'Why use a dog instead of a traditional inspector?',
        a: 'A trained detection dog can cover a home much faster than a human inspector and can find mold in places that visual methods simply cannot reach. Traditional inspectors rely on what they can see. K9 detection is scent-based, meaning Liberty can identify active mold growth behind walls, inside cavities, and under floors without any destructive testing. It\'s faster, more thorough, and non-invasive.',
      },
      {
        q: 'How accurate is K9 mold detection?',
        a: 'Trained mold detection dogs consistently demonstrate high accuracy in controlled and real-world conditions. Liberty has been specifically trained and certified for mold scent detection, and her skills are regularly reinforced and maintained. Like all detection methods, no tool is 100% perfect, but K9 detection is widely regarded as one of the most effective non-invasive methods available.',
      },
      {
        q: 'Can Liberty tell what type of mold it is?',
        a: 'Liberty can detect the presence of mold and pinpoint the general location, but she\'s not able to identify the specific species of mold. If you need to know the exact type, for insurance, remediation planning, or medical reasons, a certified mold testing company can take samples from the identified areas for lab analysis. We\'re happy to point you in the right direction.',
      },
      {
        q: 'Is the detection invasive? Will anything be damaged?',
        a: 'Not at all. That\'s one of the biggest advantages of K9 detection. Liberty does her work entirely through scent, so there\'s no drilling, cutting, pulling back floors, or any other destructive methods involved. Your home stays completely intact throughout the detection.',
      },
      {
        q: 'What happens when Liberty finds something?',
        a: 'When Liberty detects mold, she will alert to the specific location in a trained way that our handler recognizes. We will note the location and discuss the finding with you immediately, and explain what you\'re likely looking at and what the recommended next steps are. You\'ll never be left wondering. We keep you informed the whole way through.',
      },
    ],
  },
  {
    category: 'During the Detection',
    icon: 'ri-home-4-line',
    items: [
      {
        q: 'Will Liberty go into every room?',
        a: 'Yes, Liberty will conduct a full walkthrough of all accessible living areas of the home, including bedrooms, bathrooms, kitchen, accessible basement areas, utility rooms, and any other spaces you want checked. Our detections are limited to living spaces and safely accessible areas. We do not enter attics or crawl spaces, as these environments are not safe for a working K9.',
      },
      {
        q: 'Should I be following the detection?',
        a: 'You\'re welcome to observe from a respectful distance! We do ask that you don\'t crowd Liberty while she\'s working, as it can be distracting for her. Our handler will keep you updated as the detection progresses and will call you over when there\'s something to discuss.',
      },
      {
        q: 'What if Liberty seems to be alerting a lot in one area?',
        a: 'Multiple alerts in one area can indicate a more significant concentration of mold or a larger affected area. Our handler will explain what the alerts mean in context and help you understand the potential scope of what\'s been detected.',
      },
      {
        q: 'Can Liberty detect mold inside walls or under flooring?',
        a: 'Yes, Liberty can detect mold scent that is migrating through building materials. If mold is actively growing behind a wall or under flooring, the VOCs it produces can seep through, and Liberty is trained to follow and identify those scent trails. This is where K9 detection truly outshines visual methods.',
      },
    ],
  },
  {
    category: 'After the Detection',
    icon: 'ri-file-list-3-line',
    items: [
      {
        q: 'What do I do if mold is found?',
        a: 'If Liberty detects mold, the next step is typically to contact a certified mold testing company to confirm the type and extent of the mold through air or surface sampling. Once you have those results, a licensed mold remediation contractor can develop a plan to address it. Don\'t panic. Knowing where the mold is gives you a huge head start on solving the problem.',
      },
      {
        q: 'Do you provide a written report?',
        a: 'We provide a full verbal report of all findings on-site during the detection. If you need formal written documentation, for real estate transactions, insurance claims, or legal purposes, we recommend following up with a certified mold testing company who can provide official lab-backed reports. We\'ll let you know exactly what to ask for.',
      },
      {
        q: 'What if no mold is found?',
        a: 'That\'s the best possible outcome! If Liberty doesn\'t alert to any mold, you can move forward with genuine peace of mind knowing your home has been thoroughly checked by a trained K9 detection team. This is especially valuable for pre-purchase detections or homes where occupants have had unexplained health concerns.',
      },
      {
        q: 'Can you come back after remediation to verify it worked?',
        a: 'Absolutely, post-remediation verification is one of the most valuable uses of K9 detection. After your remediation contractor has completed their work, we can come back in to confirm that Liberty doesn\'t alert in the treated areas. This gives you confidence that the mold has been fully addressed before you close up walls or finalize any renovation work.',
      },
      {
        q: 'How soon after remediation should I book a follow-up?',
        a: 'We recommend waiting at least 24–48 hours after remediation is complete before scheduling a follow-up detection. This allows the area to fully dry and settle. Your remediation contractor can advise on the best timing based on the scope of their work.',
      },
      {
        q: 'What if I still smell something after a clean detection?',
        a: 'There are many causes of musty or unusual odors in a home that are unrelated to mold. Old materials, pet odors, moisture without active mold growth, etc. If you\'re concerned, give us a call and we\'ll help you figure out next steps. A second detection or air quality test may be warranted depending on your situation.',
      },
    ],
  },
  {
    category: 'Pricing & Booking',
    icon: 'ri-price-tag-3-line',
    items: [
      {
        q: 'How much does a detection cost?',
        a: 'Pricing varies based on the size and scope of the detection, so we don\'t quote an exact number upfront. That said, many homes start as low as $299. When you submit a request, we\'ll follow up to learn more about your property and give you an accurate quote before anything is scheduled.',
      },
      {
        q: 'When and how do I pay?',
        a: 'We don\'t charge anything upfront. Payment is collected at the time of your appointment, when WNY Mold Dogs arrives at your property. We currently accept cash or check.',
      },
      {
        q: 'What is your cancellation policy?',
        a: 'We understand that life happens. Please contact us at least 48 hours before your scheduled appointment if you need to cancel or reschedule. We\'ll do our best to work with you and find a new time that fits.',
      },
      {
        q: 'Do you charge extra for travel outside of Buffalo?',
        a: 'We serve all of Western New York including Buffalo, Niagara Falls, Lockport, Cheektowaga, Tonawanda, Amherst, Clarence, Lancaster, and surrounding areas. For properties significantly outside our standard service area, a small travel fee may apply. Contact us for details before booking.',
      },
    ],
  },
];

const FAQAccordion = () => {
  const [openIndex, setOpenIndex] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const toggle = (key: string) => {
    setOpenIndex(openIndex === key ? null : key);
  };

  const categories = ['All', ...faqs.map((f) => f.category)];
  const filtered = activeCategory === 'All' ? faqs : faqs.filter((f) => f.category === activeCategory);

  return (
    <section className="bg-[#f7f9f4] py-16 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap gap-2 mb-12 justify-center">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => { setActiveCategory(cat); setOpenIndex(null); }}
              className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all duration-200 whitespace-nowrap cursor-pointer border ${
                activeCategory === cat
                  ? 'bg-[#3a6b1a] text-white border-[#3a6b1a]'
                  : 'bg-white text-gray-600 border-gray-200 hover:border-[#3a6b1a] hover:text-[#3a6b1a]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* FAQ Groups */}
        <div className="flex flex-col gap-12">
          {filtered.map((section) => (
            <div key={section.category}>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-8 h-8 flex items-center justify-center rounded-full bg-[#3a6b1a]/10">
                  <i className={`${section.icon} text-[#3a6b1a] text-base`}></i>
                </div>
                <h2 className="text-[#3a6b1a] font-bold text-sm uppercase tracking-widest">{section.category}</h2>
              </div>

              <div className="flex flex-col gap-2">
                {section.items.map((item, idx) => {
                  const key = `${section.category}-${idx}`;
                  const isOpen = openIndex === key;
                  return (
                    <div
                      key={key}
                      className={`bg-white rounded-xl overflow-hidden border transition-all duration-200 ${isOpen ? 'border-[#3a6b1a]/30' : 'border-transparent'}`}
                    >
                      <button
                        className="w-full flex items-center justify-between px-6 py-5 text-left cursor-pointer group"
                        onClick={() => toggle(key)}
                      >
                        <span className={`font-medium text-sm pr-4 transition-colors duration-200 ${isOpen ? 'text-[#3a6b1a]' : 'text-gray-900 group-hover:text-[#3a6b1a]'}`}>
                          {item.q}
                        </span>
                        <div className="w-6 h-6 flex items-center justify-center flex-shrink-0 rounded-full bg-[#f7f9f4]">
                          <i className={`text-[#3a6b1a] text-sm transition-transform duration-200 ${isOpen ? 'ri-subtract-line' : 'ri-add-line'}`}></i>
                        </div>
                      </button>
                      <div
                        className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96' : 'max-h-0'}`}
                      >
                        <div className="px-6 pb-5 pt-0">
                          <div className="w-full h-px bg-[#f0f4ec] mb-4"></div>
                          <p className="text-gray-500 text-sm leading-relaxed">{item.a}</p>
                        </div>
                      </div>
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

export default FAQAccordion;
