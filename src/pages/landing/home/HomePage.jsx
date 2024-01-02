import Hero from "../../../components/landingComponents/homePage/Hero";
import Reveal from "../../../components/animations/Reveal";
import FeaturedIn from "../../../components/landingComponents/homePage/FeaturedIn";
function HomePage() {
  return (
    <main className=" min-h-screen p-4">
      <Hero />
      <FeaturedIn />
    </main>
  );
}

export default HomePage;
