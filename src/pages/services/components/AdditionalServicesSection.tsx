const additionalServices = [
  {
    icon: 'ri-building-line',
    title: 'Pre-Purchase / Pre-Listing Mold Check',
    desc: 'Buying or selling a home? Get peace of mind before closing. We\'ll sweep the property so you know exactly what you\'re dealing with before the deal is done.',
  },
  {
    icon: 'ri-microscope-line',
    title: 'Visible Mold Swab Sampling',
    desc: 'WNY Mold Dogs can swab visible mold growth and send the sample to one of the top labs globally for analysis.',
    price: '$49/per swab',
    hasAsterisk: true,
  },
  {
    icon: 'ri-map-pin-line',
    title: 'Travel Outside Service Area',
    desc: 'Located outside our standard 1–2 hour radius? We\'re happy to travel further. Contact us directly for a custom quote based on distance and property details.',
  },
];

const AdditionalServicesSection = () => {
  return (
    <section className="bg-[#f7f9f4] py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block bg-[#3a6b1a]/10 border border-[#3a6b1a]/20 text-[#3a6b1a] text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5">
            More Ways We Can Help
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Additional Services</h2>
          <p className="text-gray-500 text-base max-w-xl mx-auto leading-relaxed">
            Beyond our core K9 mold detection, we offer these supplementary services to give you even more peace of mind.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {additionalServices.map((item) => (
            <div key={item.title} className="bg-white rounded-2xl p-8 flex flex-col gap-4 border border-gray-100">
              <div className="w-11 h-11 flex items-center justify-center bg-[#eef5e6] rounded-xl">
                <i className={`${item.icon} text-[#3a6b1a] text-xl`}></i>
              </div>
              <h3 className="text-gray-900 font-semibold text-base">
                {item.title}
                {item.hasAsterisk && <span className="text-[#3a6b1a] ml-0.5">*</span>}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              {item.price && (
                <span className="text-[#3a6b1a] font-bold text-lg">{item.price}</span>
              )}
            </div>
          ))}
        </div>

        {/* Swab disclaimer */}
        <div className="mt-8 max-w-3xl mx-auto bg-white border border-gray-200 rounded-xl px-5 py-4">
          <p className="text-gray-500 text-xs leading-relaxed">
            <span className="text-[#3a6b1a] font-semibold">*</span>{' '}
            WNY Mold Dogs is simply sending the samples of the visible mold growth into the lab, and is not assessing, inspecting, nor making any determination on the findings. Those results are to be shared by the customer and their licensed mold professional for guidance on next action steps. This service is for informational purposes only. WNY Mold Dogs is not a licensed mold assessor or inspector.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AdditionalServicesSection;
