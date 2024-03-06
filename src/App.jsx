import Hero from "./components/Hero";
import Benefits from "./components/Benefits";
import Connection from "./components/Connection";
import Describe from "./components/Describe";
import Reviews from "./components/Reviews";
import Faq from "./components/Faq";

function App() {
  return (
    <div className="flex flex-col items-center w-full">
      {/* Hero section */}
      <Hero />
      {/* Top benefits section */}
      <Benefits />
      {/* Build connection section */}
      <Connection />
      {/* Describe how product works section */}
      <Describe />
      {/* Reviews */}
      <Reviews />
      {/* FAQ */}
      <Faq />
      {/* Info banner */}
      <div></div>
      {/* Final CTA */}
    </div>
  );
}

export default App;
