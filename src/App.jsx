import Hero from './components/Hero.jsx';
import TrustStrip from './components/TrustStrip.jsx';
import Register from './components/Register.jsx';
import Platform from './components/Platform.jsx';
import Features from './components/Features.jsx';
import Stats from './components/Stats.jsx';
import HowItWorks from './components/HowItWorks.jsx';
import DashboardPreview from './components/DashboardPreview.jsx';
import Benefits from './components/Benefits.jsx';
import FAQ from './components/FAQ.jsx';
import FinalCTA from './components/FinalCTA.jsx';

/**
 * Homepage content. Header, Footer, the skip link and the <main> wrapper live
 * in app/layout.jsx so every route shares exactly the same chrome.
 */
export default function App() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <Register />
      <Platform />
      <Features />
      <Stats />
      <HowItWorks />
      <DashboardPreview />
      <Benefits />
      <FAQ />
      <FinalCTA />
    </>
  );
}
