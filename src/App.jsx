import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FeaturesSection from "./components/FeaturesSection";
import PricingSection from "./components/PricingSection";
import ServicesSection from "./components/ServicesSection";
import TestimonialsSection from "./components/TestimonialsSection";
import NewsletterSection from "./components/NewsletterSection";
import Footer from "./components/Footer";
import "./index.css";

function App() {
  return (
    <main className="relative min-h-screen overflow-x-hidden almarai-extrabold">
      <div className="absolute -top-28 -left-28 w-[500px] h-[500px] bg-gradient-to-tr from-indigo-500/20 to-pink-500/20 rounded-full blur-[80px] -z-10"></div>
      <div className="overflow-hidden">
        <Navbar />
        <Hero />

        <FeaturesSection />
        <hr className="w-[80%] m-auto text-gray-500 bg-gray-500 opacity-40" />
        <ServicesSection />
        <hr className="w-[80%] m-auto text-gray-500 bg-gray-500 opacity-40" />

        <PricingSection />
        <hr className="w-[80%] m-auto text-gray-500 bg-gray-500 opacity-40" />
        <TestimonialsSection />
        <hr className="w-[80%] m-auto text-gray-500 bg-gray-500 opacity-40" />
        <NewsletterSection />

        <Footer />
      </div>
    </main>
  );
}

export default App;
