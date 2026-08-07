const TeamHero = () => {
  return (
    <section className="relative pt-32 pb-20 px-4 md:px-8 overflow-hidden bg-[#1c2e0f]">
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <span className="inline-block bg-[#7ab648]/20 border border-[#7ab648]/40 text-[#a8d96b] text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">
          WNY Mold Dogs K9 Partner
        </span>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-5">Meet Liberty!</h1>
        <p className="text-white/70 text-lg leading-relaxed max-w-2xl mx-auto">
          Liberty is a highly trained German Shepherd and the heart of WNY Mold Dogs. Her extraordinary nose helps Western New York homeowners find hidden mold before it becomes a serious problem.
        </p>
      </div>
    </section>
  );
};

export default TeamHero;