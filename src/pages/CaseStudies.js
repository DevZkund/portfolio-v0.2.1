import React from "react";

const CaseStudies = () => {
  const projects = [
    {
      title: "TaxHelpDesk",
      url: "https://taxhelpdesk.in/",
      image: "/images/taxhelpdesks.png",
      tag: "FinTech / Legal",
      status: "Production",
      sector: "Services",
      description:
        "A comprehensive platform for tax and legal assistance, providing expert advice and services to individuals and businesses.",
    },
    {
      title: "Isomeds",
      url: "https://isomeds.in/",
      image: "images/isomeds.png",
      tag: "Healthcare",
      status: "Production",
      sector: "HealthCare",
      description:
        "An innovative healthcare platform designed to streamline medical services and healthcare management.",
    },
    {
      title: "BBNIA Trade",
      url: "https://bbniatrade.com/",
      image: "images/bbnia.png",
      tag: "E-Commerce / Trading",
      status: "Production",
      sector: "Industrial",
      description:
        "A specialized e-commerce and trading platform for industrial goods, connecting suppliers and buyers in a seamless ecosystem.",
    },
    {
      title: "Factroo",
      url: "https://fms.infutrix.com/",
      image: "images/fms.png",
      tag: "Logistics / SaaS",
      status: "Production",
      sector: "Factory Management System",
      description:
        "A comprehensive Factory Management System providing real-time tracking, diagnostics, and logistics optimization for large-scale operations.",
    },
  ];

  return (
    <section className="py-24 bg-[#0B1A45] min-h-screen">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Case Studies
          </h2>
          <p className="mt-2 text-text-muted">
            A deep dive into the projects and solutions I've built.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col overflow-hidden rounded-lg border border-[#395156] bg-surface-dark hover:border-primary/50 transition-all hover:-translate-y-1 duration-300"
            >
              <div className="relative aspect-[16/9] w-full overflow-hidden bg-gray-800">
                <div className="absolute inset-0 bg-gradient-to-t from-surface-dark to-transparent opacity-60"></div>
                <img
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  src={project.image}
                />
              </div>
              <div className="flex flex-1 flex-col p-8">
                <div className="mb-4 flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-primary">
                    {project.tag}
                  </span>
                  <span className="rounded bg-background-dark px-2 py-1 text-xs text-text-muted border border-[#395156]">
                    {project.status}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="mb-6 flex-1 text-text-muted">
                  {project.description}
                </p>
                <div className="grid grid-cols-2 gap-4 border-t border-[#395156] pt-6">
                  <div>
                    <p className="text-xs text-text-muted uppercase">Status</p>
                    <p className="text-xl font-bold text-white">
                      {project.status}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-text-muted uppercase">Sector</p>
                    <p className="text-xl font-bold text-white">
                      {project.sector}
                    </p>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
