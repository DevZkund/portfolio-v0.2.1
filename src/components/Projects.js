const Projects = () => {
  return (
    <section className="py-24 bg-[#0B1A45] border-y border-[#1A2F50]" id="work">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Featured Projects
            </h2>
            <p className="mt-2 text-text-muted">
              Proven results in diverse industries.
            </p>
          </div>
          <a
            className="text-primary font-bold hover:text-white transition-colors flex items-center gap-1 group"
            href="#work"
          >
            View All Case Studies{" "}
            <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">
              arrow_forward
            </span>
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Project Card 1 */}
          <a
            href="https://taxhelpdesk.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col overflow-hidden rounded-lg border border-[#395156] bg-surface-dark hover:border-primary/50 transition-all hover:-translate-y-1 duration-300"
          >
            <div className="relative aspect-[16/9] w-full overflow-hidden bg-gray-800">
              <div className="absolute inset-0 bg-gradient-to-t from-surface-dark to-transparent opacity-60"></div>
              <img
                alt="TaxHelpDesk"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                src="/images/taxhelpdesks.png"
              />
            </div>
            <div className="flex flex-1 flex-col p-8">
              <div className="mb-4 flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-primary">
                  FinTech / Legal
                </span>
                <span className="rounded bg-background-dark px-2 py-1 text-xs text-text-muted border border-[#395156]">
                  Live Project
                </span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                TaxHelpDesk
              </h3>
              <p className="mb-6 flex-1 text-text-muted">
                A comprehensive platform for tax and legal assistance, providing
                expert advice and services to individuals and businesses.
              </p>
              <div className="grid grid-cols-2 gap-4 border-t border-[#395156] pt-6">
                <div>
                  <p className="text-xs text-text-muted uppercase">Status</p>
                  <p className="text-xl font-bold text-white">Production</p>
                </div>
                <div>
                  <p className="text-xs text-text-muted uppercase">Sector</p>
                  <p className="text-xl font-bold text-white">Services</p>
                </div>
              </div>
            </div>
          </a>
          {/* Project Card 2 */}
          <a
            href="https://isomeds.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col overflow-hidden rounded-lg border border-[#395156] bg-surface-dark hover:border-primary/50 transition-all hover:-translate-y-1 duration-300"
          >
            <div className="relative aspect-[16/9] w-full overflow-hidden bg-gray-800">
              <div className="absolute inset-0 bg-gradient-to-t from-surface-dark to-transparent opacity-60"></div>
              <img
                alt="Isomeds"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                src="images/isomeds.png"
              />
            </div>
            <div className="flex flex-1 flex-col p-8">
              <div className="mb-4 flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-primary">
                  Healthcare
                </span>
                <span className="rounded bg-background-dark px-2 py-1 text-xs text-text-muted border border-[#395156]">
                  Live Project
                </span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                Isomeds
              </h3>
              <p className="mb-6 flex-1 text-text-muted">
                An innovative healthcare platform designed to streamline medical
                services and healthcare management.
              </p>
              <div className="grid grid-cols-2 gap-4 border-t border-[#395156] pt-6">
                <div>
                  <p className="text-xs text-text-muted uppercase">Status</p>
                  <p className="text-xl font-bold text-white">Production</p>
                </div>
                <div>
                  <p className="text-xs text-text-muted uppercase">Sector</p>
                  <p className="text-xl font-bold text-white">HealthCare</p>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
