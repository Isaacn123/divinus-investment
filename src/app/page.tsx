import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Features } from './components/Features';
import { Impact } from './components/Impact';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';

export default function Home() {
  return (
    <div className="size-full">
      <Navigation />
      <Hero />
      <Services />
      <Features />
      <Impact />
      <CTA />
      <Footer />
    </div>
  );
}
