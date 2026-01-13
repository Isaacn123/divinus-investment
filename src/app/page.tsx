import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Challenges } from './components/Challenges';
import { Opportunity } from './components/Opportunity';
import { Features } from './components/Features';
import { Impact } from './components/Impact';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';
import { CompetitiveAdvantage } from './components/CompetitiveAdvantage';
import { MarketSize } from './components/MarketSize';

export default function Home() {
  return (
    <div className="size-full">
      <Navigation />
      <Hero />
      <Challenges />
      <Opportunity />
      <Services />
      <CompetitiveAdvantage/>
      <MarketSize/>
      <Features />
      <Impact />
      <CTA />
      <Footer />
    </div>
  );
}
