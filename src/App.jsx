import Header from "./Sections/Header.jsx";
import Hero from "./Sections/Hero.jsx";
import Features from "./Sections/Features.jsx";
import Pricing from "./Sections/Pricing.jsx";
import Faq from "./Sections/Faq.jsx";
import Testimonials from "./Sections/Testimonials.jsx";
import Download from "./Sections/Download.jsx";
import Footer from "./Sections/Footer.jsx";
const App = () => {
  return (
    <main className="overflow-hidden">
      <Header />
      <Hero />
      <Features />
      <Pricing />
      <Faq />
      <Testimonials />
      <Download />
      <Footer />
    </main>
  );
};

export default App;
