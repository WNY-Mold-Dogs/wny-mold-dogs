const areas = [
  'Elma', 'Buffalo', 'Amherst', 'Williamsville', 'Cheektowaga',
  'Lancaster', 'Depew', 'West Seneca', 'Orchard Park', 'Hamburg',
  'East Aurora', 'Tonawanda', 'Kenmore', 'Lackawanna', 'North Tonawanda',
  'Niagara Falls', 'Lockport', 'Lewiston', 'Youngstown', 'Grand Island',
  'Wheatfield', 'Pendleton', 'Medina', 'Batavia', 'Attica',
  'Springville', 'Arcade', 'Fredonia', 'Dunkirk', 'Jamestown',
];

const ServiceAreaSection = () => {
  return (
    <section className="bg-white py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Text */}
          <div>
            <span className="text-[#3a6b1a] text-xs font-bold uppercase tracking-widest">Service Area</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-5">
              Serving Western New York
            </h2>
            <p className="text-gray-600 text-base leading-relaxed mb-6">
              Based in Elma, NY, WNY Mold Dogs serves the entire Western New York region, from Niagara Falls and Lockport in the north, to Jamestown and Olean in the south, and east toward Rochester. Most detections are within a 1–2 hour drive of Elma.
            </p>
            <p className="text-gray-600 text-base leading-relaxed mb-8">
              Located outside our standard service area? We&apos;re happy to travel further. Just contact us directly for a custom quote based on your location and property details. Travel fees may apply for locations beyond 60 miles from Elma.
            </p>

            <div className="flex flex-wrap gap-2 mb-8">
              {areas.map((area) => (
                <span
                  key={area}
                  className="bg-[#f7f9f4] text-gray-700 text-xs font-medium px-3 py-1.5 rounded-full border border-[#d4e8c0]"
                >
                  {area}
                </span>
              ))}
              <span className="bg-[#eef5e6] text-[#3a6b1a] text-xs font-medium px-3 py-1.5 rounded-full border border-[#3a6b1a]/20">
                + More Areas
              </span>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:7163277099"
                className="flex items-center gap-3 bg-[#3a6b1a] hover:bg-[#2d5214] text-white font-semibold px-6 py-3 rounded-full transition-colors whitespace-nowrap cursor-pointer text-sm"
              >
                <div className="w-4 h-4 flex items-center justify-center">
                  <i className="ri-phone-line text-sm"></i>
                </div>
                Call for Custom Quote
              </a>
              <a
                href="mailto:wnymolddogs@gmail.com"
                className="flex items-center gap-3 border border-gray-200 hover:border-[#3a6b1a] text-gray-700 hover:text-[#3a6b1a] font-semibold px-6 py-3 rounded-full transition-colors whitespace-nowrap cursor-pointer text-sm"
              >
                <div className="w-4 h-4 flex items-center justify-center">
                  <i className="ri-mail-line text-sm"></i>
                </div>
                Email Us
              </a>
            </div>
          </div>

          {/* Map */}
          <div className="rounded-2xl overflow-hidden h-80 md:h-96">
            <iframe
              title="WNY Mold Dogs Service Area"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d386000!2d-78.6!3d42.75!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d30e3e3e3e3e3f%3A0x1!2sElma%2C%20NY%2014059!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceAreaSection;
