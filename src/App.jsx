import Hero from "./components/Hero";
import Benefits from "./components/Benefits";
import Connection from "./components/Connection";
import Describe from "./components/Describe";

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
      {/* Rewiews */}
      <div></div>
      {/* FAQ */}
      <div></div>
      {/* Info banner */}
      <div></div>
      {/* Final CTA */}
    </div>
  );
}

export default App;
