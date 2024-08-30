import "./App.css";
import FAQSection from "./Components/FaqSection";
import FeaturesSection from "./Components/FeatureSection";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import HeroAndDashboard from "./Components/HeroSection";
import JoltStudioSection from "./Components/JoltStudioSection";
import MarqueeSection from "./Components/MarqueeSection";

function App() {
  return (
    <div className="App">
      <Header />
      <HeroAndDashboard />
      <FeaturesSection />
      <JoltStudioSection />
      <MarqueeSection />
      <FAQSection />
      <Footer />
    </div>
  );
}

export default App;
