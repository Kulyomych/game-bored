import "./App.css";
import { Header } from "./components/header/header";
import { MainBackground } from "./components/main-background/main-background";
import { HeroSection } from "./components/hero-section/hero-section";
import { CardsShowcase } from "./components/cards-showcase/cards-showcase";
import { cardData } from "./mock/data";
import { StepsSection } from "./components/steps-section/steps-section";
import { DeliverySection } from "./components/delivery-section/delivery-section";
import { Footer } from "./components/footer/footer";

function App() {
  return (
    <>
      <Header />
      <main>
        <MainBackground />
        <HeroSection />
        <CardsShowcase data={cardData} />
        <StepsSection />
        <DeliverySection />
      </main>
      <Footer />
    </>
  );
}

export default App;
