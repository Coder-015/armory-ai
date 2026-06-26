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
          <h1 className="font-heading text-5xl md:text-7xl font-extrabold mb-6 text-text-dark animate-enter">Power your future with AI</h1>
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
            <h2 className="font-heading text-4xl font-bold mb-10 text-center animate-enter">Trusted by Pioneers</h2>
            <div className="flex justify-center animate-enter">
              <p>Testimonials go here.</p>
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
