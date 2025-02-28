import Header from "./Sections/Header.jsx";
import Hero from "./Sections/Hero.jsx";
import Features from "./Sections/Features.jsx";
import Pricing from "./Sections/Pricing.jsx";
import Faq from "./Sections/Faq.jsx";
import Testimonials from "./Sections/Testimonials.jsx";
const App = () => {
  return (
    <main className="overflow-hidden">
      <Header />
      <Hero />
      <Features />
      <Pricing />
      <Faq />
      <Testimonials />
    </main>
  );
};

export default App;
