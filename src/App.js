import CustomLine from "./components/general/CustomLine";
import HeroSection from "./components/layout/HeroSection";
import About from "./components/sections/About";
import Artist from "./components/sections/Artist";
import FAQSection from "./components/sections/FAQSection";
import Roadmap from "./components/sections/Roadmap";
import Staking from "./components/sections/Staking";

function App() {
  return (
    <>
      <HeroSection />
      <About />
      <Artist />
      <CustomLine />
      <Staking />
      <Roadmap />
      <FAQSection />
    </>
  );
}

export default App;
