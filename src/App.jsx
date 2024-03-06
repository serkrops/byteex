import Hero from "./components/Hero";
import Benefits from "./components/Benefits";
import Connection from "./components/Connection";

function App() {
  return (
    <div className="flex flex-col items-center w-full">
      {/* Hero section */}
      <Hero />
      {/* Top benefits section */}
      <Benefits />
      {/* Build connection section */}
      <Connection />
      {/* How it works section */}
      <div></div>
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
