import { Hero, Navbar } from "./components";

function Landing() {
  return (
    <>
      <div className="w-full bg-gray-900 box-border">
        <Navbar />
        <Hero />
      </div>
    </>
  );
}

export default Landing;
