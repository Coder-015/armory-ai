import { PricingSection } from "@/components/pricing/PricingSection";
import { BentoAccordionWrapper } from "@/components/bento/BentoAccordionWrapper";
import { AnimatedSection } from "@/components/AnimatedSection";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col font-body bg-surface-primary text-text-primary">
      <header className="py-6 px-8 border-b border-surface-secondary">
        <nav className="flex justify-between items-center max-w-7xl mx-auto">
          <div className="font-heading font-bold text-2xl text-text-primary">Armory</div>
          <ul className="flex space-x-6">
            <li><a href="#features" className="hover:text-surface-dark transition-colors duration-[var(--duration-micro)] ease-[var(--ease-micro)]">Features</a></li>
            <li><a href="#pricing" className="hover:text-surface-dark transition-colors duration-[var(--duration-micro)] ease-[var(--ease-micro)]">Pricing</a></li>
          </ul>
        </nav>
      </header>

      <main className="flex-1">
        <AnimatedSection id="hero" immediate={true} className="max-w-7xl mx-auto px-8 py-20 text-center">
          <h1 className="font-heading text-5xl md:text-7xl font-extrabold mb-6 text-text-primary animate-enter">Power your future with AI</h1>
          <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto animate-enter">Deploy custom enterprise agents and automate complex workflows.</p>
          <button className="bg-brand-primary text-text-primary px-8 py-4 rounded font-bold hover:bg-brand-secondary transition-colors duration-[var(--duration-micro)] ease-[var(--ease-micro)] animate-enter">Build A Workflow</button>
        </AnimatedSection>

        <AnimatedSection id="features" className="bg-surface-secondary py-20">
          <div className="max-w-7xl mx-auto px-8">
            <h2 className="font-heading text-4xl font-bold mb-10 text-center animate-enter">Engineered for Autonomy</h2>
            <BentoAccordionWrapper />
          </div>
        </AnimatedSection>

        <PricingSection />

        <AnimatedSection id="social-proof" className="bg-surface-dark text-surface-primary py-20">
          <div className="max-w-7xl mx-auto px-8">
            <h2 className="font-heading text-4xl font-bold mb-14 text-center animate-enter">Trusted by Pioneers</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="animate-enter bg-surface-primary border border-surface-secondary p-8 rounded-xl shadow-lg flex flex-col text-text-primary">
                <blockquote className="flex-1 mb-6">
                  <p className="text-surface-dark italic font-medium leading-relaxed">
                    "Armory fundamentally altered our infrastructure velocity. We abstracted away thousands of lines of brittle orchestration scripts and achieved true autonomous deployment."
                  </p>
                </blockquote>
                <cite className="not-italic flex items-center mt-auto border-t border-surface-secondary pt-6">
                  <div className="w-10 h-10 rounded-full bg-brand-primary flex items-center justify-center text-text-primary font-bold mr-4 font-heading">
                    EK
                  </div>
                  <div>
                    <div className="font-bold text-text-primary">Elena Karras</div>
                    <div className="text-sm text-surface-dark">VP Engineering, Synthetix Data</div>
                  </div>
                </cite>
              </div>

              <div className="animate-enter bg-surface-primary border border-surface-secondary p-8 rounded-xl shadow-lg flex flex-col text-text-primary">
                <blockquote className="flex-1 mb-6">
                  <p className="text-surface-dark italic font-medium leading-relaxed">
                    "The context-locking architecture solved state drift across our distributed microservices. It's the first time we've felt completely in control of agentic scaling."
                  </p>
                </blockquote>
                <cite className="not-italic flex items-center mt-auto border-t border-surface-secondary pt-6">
                  <div className="w-10 h-10 rounded-full bg-brand-secondary flex items-center justify-center text-surface-primary font-bold mr-4 font-heading">
                    MC
                  </div>
                  <div>
                    <div className="font-bold text-text-primary">Marcus Chen</div>
                    <div className="text-sm text-surface-dark">Chief Architect, Nexus Financial</div>
                  </div>
                </cite>
              </div>

              <div className="animate-enter bg-surface-primary border border-surface-secondary p-8 rounded-xl shadow-lg flex flex-col text-text-primary">
                <blockquote className="flex-1 mb-6">
                  <p className="text-surface-dark italic font-medium leading-relaxed">
                    "Deploying custom agents used to require specialized ML ops teams. Armory democratized that capability across our entire product engineering organization."
                  </p>
                </blockquote>
                <cite className="not-italic flex items-center mt-auto border-t border-surface-secondary pt-6">
                  <div className="w-10 h-10 rounded-full bg-surface-dark flex items-center justify-center text-surface-primary font-bold mr-4 font-heading">
                    SW
                  </div>
                  <div>
                    <div className="font-bold text-text-primary">Sarah Washington</div>
                    <div className="text-sm text-surface-dark">CTO, Omnipath Logistics</div>
                  </div>
                </cite>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </main>

      <footer className="bg-text-primary text-surface-secondary py-10 text-center">
        <p>&copy; {new Date().getFullYear()} Armory AI. All rights reserved.</p>
      </footer>
    </div>
  );
}
