const Portfolio = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 blueprint-grid border-b border-[#1A2F50]" id="home">
      {/* Decorative glowing gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-full bg-primary/5 blur-[120px] rounded-full pointer-events-none"></div>
      
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary mb-6">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          Available for New Projects
        </div>
        
        <h1 className="mx-auto max-w-4xl text-5xl font-bold tracking-tight text-white sm:text-7xl mb-6 leading-[1.1]">
          Building <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-white">Scalable Solutions</span><br /> for Your Business
        </h1>
        
        <p className="mx-auto max-w-2xl text-lg leading-8 text-text-muted mb-10">
          Senior Full-Stack Developer specializing in high-performance SaaS architecture and secure enterprise web applications. I turn complex requirements into reliable code.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a className="w-full sm:w-auto flex items-center justify-center rounded-lg bg-primary px-8 py-3.5 text-base font-bold text-background-dark hover:bg-white transition-all shadow-lg shadow-primary/20" href="#work">
            View My Work
          </a>
          <a className="w-full sm:w-auto flex items-center justify-center rounded-lg border border-[#395156] bg-transparent px-8 py-3.5 text-base font-bold text-white hover:border-primary hover:text-primary transition-all" href="#contact">
            Contact for a Quote
          </a>
        </div>
        
        <div className="mt-16 pt-8 border-t border-[#1A2F50]/50 flex flex-wrap justify-center gap-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
          <span className="text-xl font-bold text-white flex items-center gap-2">
            <span className="material-symbols-outlined">code</span> React
          </span>
          <span className="text-xl font-bold text-white flex items-center gap-2">
            <span className="material-symbols-outlined">database</span> PostgreSQL
          </span>
          <span className="text-xl font-bold text-white flex items-center gap-2">
            <span className="material-symbols-outlined">cloud</span> AWS
          </span>
          <span className="text-xl font-bold text-white flex items-center gap-2">
            <span className="material-symbols-outlined">terminal</span> Node.js
          </span>
          <span className="text-xl font-bold text-white flex items-center gap-2">
            <span className="material-symbols-outlined">api</span> GraphQL
          </span>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
