export default function AboutUs() {
    return (
      <section className="relative bg-black border-b border-white/10 pb-12 overflow-hidden" id="about">
        <div className="absolute inset-0 pointer-events-none select-none" aria-hidden>
          {/* Subtle neon background glow */}
          <div className="absolute top-1/2 left-[15%] w-[500px] h-[250px] blur-3xl opacity-20 bg-neon/70 rounded-full -translate-y-1/2" />
          <div className="absolute bottom-[16%] right-[10%] w-[350px] h-[150px] blur-2xl opacity-25 bg-neon/40 rounded-full" />
        </div>
        <div className="relative z-10 mx-auto px-6 flex flex-col gap-8">
          {/* Header */}
          <div className="text-center md:text-left mb-3">
            <span className="text-neon text-xs uppercase tracking-[0.3em] block mb-2">About Us</span>
            <h2 className="text-xl md:text-[2.6rem] font-bold uppercase text-white tracking-tight ">
              Our Mission <span className="text-blue-500">Vision</span> & Story
            </h2>
          </div>
          {/* Card layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-stretch">
            {/* Mission Card */}
            <div className="flex flex-col justify-center">
              <div className="group border border-white/10 bg-gradient-to-br from-black via-[#111] to-neutral-900/80 rounded-2xl px-7 py-10 shadow-lg hover:border-neon/50 transition-all duration-500 cursor-default relative text-left">
                <h3 className="text-neon text-lg md:text-xl font-bold uppercase tracking-widest mb-3">
                  Mission
                </h3>
                <p className="text-white/80 text-sm md:text-base leading-relaxed">
                  Empower ambitious businesses with innovative technology solutions designed for scale, impact, and exceptional user experience.<br /><br />
                  We are dedicated to solving real problems with creativity, collaboration, and measurable results.
                </p>
              </div>
                {/* Podium light line below the mission card content */}
                <div
                  className="mt-8 mx-auto w-32 h-[6px] rounded-full bg-gradient-to-r from-transparent via-neon to-transparent opacity-70 blur-[2px]"
                  aria-hidden
                />
              <div className="hidden md:block grow" />
            </div>
            {/* About Card (Center) */}
            <div className="flex flex-col h-full">
              <div className="group border border-white/10 bg-gradient-to-br from-neutral-950/90 via-black/80 to-neutral-800/80 rounded-3xl px-7 py-10 shadow-xl hover:border-neon transition-all duration-500 text-left flex flex-col justify-center h-full">
                <h3 className="text-neon text-lg md:text-xl font-bold uppercase tracking-widest mb-3">
                  Who We Are
                </h3>
                <p className="text-white/80 text-sm md:text-base leading-relaxed">
                  We are a collective of passionate strategists, designers, and engineers.<br /><br />
                  Collaboration, purpose, and trust are at the heart of every project engagement.
                  From entrepreneurial startups to global enterprises, we are shaping the future together.
                </p>
              </div>
            </div>
            {/* Vision Card */}
            <div className="flex flex-col justify-center">
              {/* Highlight neon light line ABOVE vision card */}
              <div
                className="mx-auto mb-7 w-24 h-[5px] rounded-full bg-gradient-to-r from-transparent via-neon to-transparent opacity-90 blur-[2px]"
                aria-hidden
              />
              <div className="group border border-white/10 bg-gradient-to-br from-black via-[#181c24] to-black rounded-2xl px-7 py-10 shadow-lg hover:border-neon/50 transition-all duration-500 cursor-default text-left">
                <h3 className="text-neon text-lg md:text-xl font-bold uppercase tracking-widest mb-3">
                  Vision
                </h3>
                <p className="text-white/80 text-sm md:text-base leading-relaxed">
                  To lead digital transformation for tomorrow’s enterprises using modern technology, design thinking, and relentless innovation.<br /><br />
                  Creating benchmarks for quality, transparency, and genuine impact.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }