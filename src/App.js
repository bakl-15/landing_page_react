
import './App.css';
import Nav from './components/Nav';
import HeroSection from './components/HeroSection';
import FeatureSection from './components/FeatureSection';
import Workflow from './components/Workflow';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
function App() {
  return (
    <>
      <Nav/>
      <HeroSection />
      <FeatureSection />
      <Workflow />
      <Pricing />
      <Testimonials />
    </>
  );
}

export default App;
