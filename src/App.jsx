import Hero from "./components/Hero";
import Benefits from "./components/Benefits";
import Connection from "./components/Connection";
import Describe from "./components/Describe";
import Reviews from "./components/Reviews";
import Faq from "./components/Faq";
import Banner from "./components/Banner";
import Cta from "./components/Cta";

function App() {
  return (
    <div className="flex flex-col items-center gap-12 w-full">
      <Hero />
      <Benefits />
      <Connection />
      <Describe />
      <Reviews />
      <Faq />
      <Banner />
      <Cta />
    </div>
  );
}

export default App;
