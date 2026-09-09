import { PageShell } from "../../components/PageShell";
import { serviceCards } from "../../data/site";
import "../../journey.css";

export default function MaximoHostingPage() {
  return (
    <>
      <PageShell
        eyebrow="Maximo Hosting / MaaS"
        title="Maximo as a managed service, without losing control."
        intro="Grable hosts and manages Maximo environments across commercial and federal requirements, with infrastructure, patching, backups, DBA coverage, and disaster recovery designed into the service."
        primaryCta="Compare hosting options"
        primaryCtaClass="mj-btn mj-btn--ghost"
        secondaryCta="Calculate hosting TCO"
        secondaryCtaClass="mj-btn mj-btn--ghost"
        backgroundImage="/images/Hostingbackground.jpg"
        processBackgroundImage="/images/BackgroundimageHosting.jpg"
      />

      <div className="relative pb-32">
        <div className="sticky top-0 w-full h-screen overflow-hidden z-0 pointer-events-none">
          <img
            src="/images/Hostingbackground.jpg"
            alt="Hosting Background"
            className="w-full h-full object-cover blur-[8px] opacity-60"
          />
        </div>
        
        {/* Transparent Cards Grid (No Dynamic Scroll) */}
        <div className="relative z-10 -mt-[70vh] px-6 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {serviceCards.map((card, idx) => (
              <div 
                key={card.title} 
                className="p-8 rounded-2xl border border-white/20 bg-black/20 backdrop-blur-lg shadow-xl transition-all duration-300 hover:bg-black/30 hover:border-white/40"
              >
                <p className="text-white/60 text-sm font-mono mb-4 tracking-widest uppercase">
                  STEP {idx + 1} &rarr;
                </p>
                <h3 className="text-[#fdfbf7] text-2xl font-medium mb-4">
                  {card.title}
                </h3>
                <p className="text-white/80 leading-relaxed text-sm md:text-base">
                  {card.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
