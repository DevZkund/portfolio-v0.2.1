import React from 'react';

const Testimonials = () => {
  return (
    <section className="py-24 bg-surface-dark border-y border-[#395156]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-white mb-12 text-center">Trusted by Technical Leaders</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Testimonial 1 */}
          <div className="flex flex-col gap-6 p-6 rounded-lg bg-background-dark border border-[#395156]">
            <div className="text-primary">
              <span className="material-symbols-outlined text-4xl">format_quote</span>
            </div>
            <blockquote className="text-white text-lg leading-relaxed flex-1">
              "The code quality and architectural decisions were top-notch. Delivered a scalable solution that our internal team could easily maintain."
            </blockquote>
            <div className="flex items-center gap-4 pt-4 border-t border-[#395156]">
              <img alt="James Wilson" className="h-10 w-10 rounded-full object-cover bg-gray-600" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAZZBIqGAY5PppxazPdj9afkT8xCmGX1-ETUhxi3MI52rYwrLkq4x8nGSB0En8eL0Qbmd2evaKwhezEHwwMfatI6oygomQHhyEYwUeZZ2oQAk5X78Vp1SiAa0K--V3qyeSYLJYqSCIeCjr4RrrZ_LgH65k1jQ4aEKnWO2jI1dIATZJMDibkva7DOQKNeRnMmFVqDRDOER_zsju3fEV2MfsAolvdtO7X2uuzK5PzSbl305DQsqSB0bQwPm6qE-w_LYlvjs0hPS3SJYo" />
              <div>
                <div className="font-bold text-white">James Wilson</div>
                <div className="text-xs text-text-muted">CTO, FintechGlobal</div>
              </div>
            </div>
          </div>
          {/* Testimonial 2 */}
          <div className="flex flex-col gap-6 p-6 rounded-lg bg-background-dark border border-[#395156]">
            <div className="text-primary">
              <span className="material-symbols-outlined text-4xl">format_quote</span>
            </div>
            <blockquote className="text-white text-lg leading-relaxed flex-1">
              "Rare to find a developer who understands business goals as clearly as technical constraints. A true partner in our growth."
            </blockquote>
            <div className="flex items-center gap-4 pt-4 border-t border-[#395156]">
              <img alt="Sarah Jenkins" className="h-10 w-10 rounded-full object-cover bg-gray-600" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCgZrYVqIgS1LuPXngo1TR160_nHouSIG_mSd6wfS9zwnv8MWI_YeGZeEcSjTaJV4uPVgB-5yko1ksJ0znJ0DOgzPsKSwzjk65f-dhq3sH8aA9pXTZuBIzQUb8-bS1BUv3j0BhA5eQbjLsUGzP7mCWvq_j1f0HFpsQYpizXiVhU2nhtLyZ3st4mlgdhAfadBY2gcsxW35FrOBc_m1v96FKzL7WGTgbuhXZE070e5yfV7xD8fgmMteJaCuZ6TyFW2TfRmC2BXycwBm4" />
              <div>
                <div className="font-bold text-white">Sarah Jenkins</div>
                <div className="text-xs text-text-muted">Product Director, OmniStream</div>
              </div>
            </div>
          </div>
          {/* Testimonial 3 */}
          <div className="flex flex-col gap-6 p-6 rounded-lg bg-background-dark border border-[#395156]">
            <div className="text-primary">
              <span className="material-symbols-outlined text-4xl">format_quote</span>
            </div>
            <blockquote className="text-white text-lg leading-relaxed flex-1">
              "We brought them in to fix a critical performance bottleneck. The results were immediate and the documentation was excellent."
            </blockquote>
            <div className="flex items-center gap-4 pt-4 border-t border-[#395156]">
              <img alt="Marcus Chen" className="h-10 w-10 rounded-full object-cover bg-gray-600" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA3VFoargfpCxCW-su4s8G6u7l7J47P16HAtVlliBgtSUGDTTzj9lDMjuCchk0ApEsAlvTrw94KEeA4yVM0ppCVc73kjiNgxozbPTUalEb2GCE8V7XiElvLh4Vd1tDPo2TSI3gaYnMOYgxC40G7N9-Jh3ReFHCfUcglOjEuDObPzC5sIqeSaj0wumzD6KW0w--LhqI1rGMIupB5xk_368zSjYpciCz_Qu6k3fBSo08IHpJCdJPq2Thi0GpN1KuE6gBCvz5SQAI2GFg" />
              <div>
                <div className="font-bold text-white">Marcus Chen</div>
                <div className="text-xs text-text-muted">VP Engineering, DataFlow</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
