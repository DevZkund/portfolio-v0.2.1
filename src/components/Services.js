const Services = () => {
  return (
    <>
      {/* Core Expertise Section */}
      <section className="py-24 bg-background-dark" id="services">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Core Expertise</h2>
            <p className="mt-4 text-lg text-text-muted">Technical precision meets business strategy. Delivering robust systems designed for growth.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1 */}
            <div className="group relative rounded-lg border border-[#395156] bg-surface-dark p-6 hover:border-primary transition-colors">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-background-dark text-primary group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-3xl">deployed_code</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Custom Web Apps</h3>
              <p className="text-sm text-text-muted leading-relaxed">Tailored solutions for complex business workflows using modern frameworks.</p>
            </div>
            {/* Card 2 */}
            <div className="group relative rounded-lg border border-[#395156] bg-surface-dark p-6 hover:border-primary transition-colors">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-background-dark text-primary group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-3xl">hub</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">API Integration</h3>
              <p className="text-sm text-text-muted leading-relaxed">Seamlessly connecting your software ecosystem with secure REST & GraphQL endpoints.</p>
            </div>
            {/* Card 3 */}
            <div className="group relative rounded-lg border border-[#395156] bg-surface-dark p-6 hover:border-primary transition-colors">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-background-dark text-primary group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-3xl">dns</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Database Architecture</h3>
              <p className="text-sm text-text-muted leading-relaxed">Designing robust, scalable schemas optimized for high-volume data transactions.</p>
            </div>
            {/* Card 4 */}
            <div className="group relative rounded-lg border border-[#395156] bg-surface-dark p-6 hover:border-primary transition-colors">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-background-dark text-primary group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-3xl">speed</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Performance Opt.</h3>
              <p className="text-sm text-text-muted leading-relaxed">Enhancing load times and responsiveness to improve user retention and SEO.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Engagement Models Section */}
      <section className="py-24 bg-background-dark relative overflow-hidden">
        <div className="absolute right-0 top-0 h-full w-1/3 bg-gradient-to-l from-primary/5 to-transparent pointer-events-none"></div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
          <div className="mx-auto max-w-2xl lg:mx-0 mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Engagement Models</h2>
            <p className="mt-4 text-lg text-text-muted">Flexible partnership options tailored to your project lifecycle.</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Model 1 */}
            <div className="flex flex-col rounded-lg bg-[#0F1C36] p-8 border border-[#1A2F50]">
              <h3 className="text-xl font-bold text-white">Project-Based</h3>
              <p className="mt-4 flex-1 text-sm text-text-muted">End-to-end development for defined scopes. Perfect for MVPs, feature additions, or specific platform builds.</p>
              <ul className="mt-6 space-y-3 text-sm text-white">
                <li className="flex gap-3"><span className="text-primary material-symbols-outlined text-lg">check_circle</span> Fixed Timeline</li>
                <li className="flex gap-3"><span className="text-primary material-symbols-outlined text-lg">check_circle</span> Defined Deliverables</li>
                <li className="flex gap-3"><span className="text-primary material-symbols-outlined text-lg">check_circle</span> Milestone Payments</li>
              </ul>
            </div>
            {/* Model 2 */}
            <div className="flex flex-col rounded-lg bg-surface-dark p-8 border border-primary relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-background-dark text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">Most Popular</div>
              <h3 className="text-xl font-bold text-white">Team Augmentation</h3>
              <p className="mt-4 flex-1 text-sm text-text-muted">Integration into your existing dev team to accelerate velocity and bring senior expertise to critical sprints.</p>
              <ul className="mt-6 space-y-3 text-sm text-white">
                <li className="flex gap-3"><span className="text-primary material-symbols-outlined text-lg">check_circle</span> Daily Standups</li>
                <li className="flex gap-3"><span className="text-primary material-symbols-outlined text-lg">check_circle</span> Code Reviews</li>
                <li className="flex gap-3"><span className="text-primary material-symbols-outlined text-lg">check_circle</span> Knowledge Transfer</li>
              </ul>
            </div>
            {/* Model 3 */}
            <div className="flex flex-col rounded-lg bg-[#0F1C36] p-8 border border-[#1A2F50]">
              <h3 className="text-xl font-bold text-white">Technical Consulting</h3>
              <p className="mt-4 flex-1 text-sm text-text-muted">Strategic guidance on architecture, tech stack selection, and scalability planning for startups and enterprises.</p>
              <ul className="mt-6 space-y-3 text-sm text-white">
                <li className="flex gap-3"><span className="text-primary material-symbols-outlined text-lg">check_circle</span> Architecture Audits</li>
                <li className="flex gap-3"><span className="text-primary material-symbols-outlined text-lg">check_circle</span> Security Assessment</li>
                <li className="flex gap-3"><span className="text-primary material-symbols-outlined text-lg">check_circle</span> Hourly/Retainer</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
