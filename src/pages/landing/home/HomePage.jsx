import Hero from "../../../components/landingComponents/homePage/Hero";
import Reveal from "../../../components/animations/Reveal";
import FeaturedIn from "../../../components/landingComponents/homePage/FeaturedIn";
function HomePage() {
  return (
    <main className=" min-h-screen p-4 relative overflow-hidden">
      <img
        src="/hero-blobs/blob1.svg"
        alt=""
        className="blur-[200px] animate-blob-1  w-[1000px] absolute top-0 left-0 -z-10"
      />
      <img
        src="/hero-blobs/blob2.svg"
        alt=""
        className="blur-[200px] animate-blob-2 w-[1000px] absolute bottom-[10%] right-[10%] -z-10"
      />
      <img
        src="/hero-blobs/blob3.svg"
        alt=""
        className="blur-[200px] animate-blob-3  max-w-[1000px] absolute bottom-0 right-0 -z-10"
      />
      <img
        src="/hero-blobs/blob4.svg"
        alt=""
        className="blur-[200px] animate-blob-4  max-w-[1000px] absolute top-[10px] left-[10px] -z-10"
      />

      <Hero />
      <FeaturedIn />
    </main>
  );
}

export default HomePage;
